import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
// Load environment variables
dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing Supabase credentials in .env.local (need SUPABASE_SERVICE_ROLE_KEY)');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const BUCKET_NAME = 'images'; // Using a simple name

async function ensureBucketExists() {
  const { data: buckets, error } = await supabase.storage.listBuckets();
  if (error) {
    console.error("Error listing buckets:", error);
    process.exit(1);
  }

  const bucketExists = buckets.some((b) => b.name === BUCKET_NAME);
  
  if (!bucketExists) {
    console.log(`Bucket '${BUCKET_NAME}' does not exist. Creating...`);
    const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true, // IMPORTANT: Images need to be public
    });
    
    if (createError) {
       console.error(`Failed to create bucket '${BUCKET_NAME}':`, createError);
       process.exit(1);
    }
    console.log(`Bucket '${BUCKET_NAME}' created successfully.`);
  } else {
    console.log(`Bucket '${BUCKET_NAME}' already exists.`);
  }
}

async function uploadDirectory(localDir: string, uploadPrefix: string = '') {
  const entries = fs.readdirSync(localDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(localDir, entry.name);
    // Determine the storage path relative to public/images
    const relativePath = path.relative(path.join(process.cwd(), 'public', 'images'), fullPath);
    // Replace backslashes with forward slashes for URL paths, encode spaces
    const storagePath = relativePath.replace(/\\/g, '/');
    

    if (entry.isDirectory()) {
      await uploadDirectory(fullPath);
    } else {
      // Ignore hidden files or non-image files if necessary
      if(entry.name.startsWith('.')) continue;

      try {
        const fileContent = fs.readFileSync(fullPath);
        // Basic mime type detection based on extension
        let contentType = 'application/octet-stream';
        const ext = path.extname(fullPath).toLowerCase();
        if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
        else if (ext === '.png') contentType = 'image/png';
        else if (ext === '.webp') contentType = 'image/webp';
        else if (ext === '.svg') contentType = 'image/svg+xml';
        else if (ext === '.gif') contentType = 'image/gif';

        console.log(`Uploading: ${storagePath} (${contentType})`);
        
        const { data, error } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(storagePath, fileContent, {
            contentType: contentType,
            upsert: true, // Overwrite if it already exists
          });

        if (error) {
           console.error(`Failed to upload ${storagePath}:`, error.message);
        } else {
           console.log(`SUCCESS -> ${storagePath}`);
        }
      } catch (err) {
        console.error(`Error processing file ${fullPath}:`, err);
      }
    }
  }
}

async function run() {
  console.log("Starting image upload process...");
  await ensureBucketExists();
  
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
      console.error(`Directory not found: ${imagesDir}`);
      process.exit(1);
  }

  await uploadDirectory(imagesDir);
  console.log("Upload process completed.");
}

run();
