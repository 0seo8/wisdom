import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadFiles() {
  const dir = 'public/기업의 예술';
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    if (!fs.statSync(filePath).isFile()) continue;

    const fileExt = path.extname(file).toLowerCase();
    const mimeType = fileExt === '.png' ? 'image/png' : 'image/jpeg';
    
    // We upload them directly into the "business" folder
    const destPath = `business/${file}`;
    
    console.log(`Uploading ${file} to ${destPath}...`);
    const fileContent = fs.readFileSync(filePath);

    const { data, error } = await supabase.storage
      .from('images')
      .upload(destPath, fileContent, {
        contentType: mimeType,
        upsert: true
      });

    if (error) {
      console.error(`Error uploading ${file}:`, error);
    } else {
      console.log(`Success: ${file}`);
    }
  }
}

uploadFiles().then(() => console.log('Done uploading missing business images.'));
