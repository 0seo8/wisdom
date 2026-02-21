import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const compDir = path.join(process.cwd(), 'src/components/business');

function replaceInComponents(originalFilename: string, newUrl: string) {
  const files = fs.readdirSync(compDir);
  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;
    const fullPath = path.join(compDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace "/images/business/KoreanName.jpg"
    const regex1 = new RegExp(`"/images/business/${originalFilename}"`, 'g');
    // Replace {"/images/business/KoreanName.jpg"}
    const regex2 = new RegExp(`{"/images/business/${originalFilename}"}`, 'g');
    // Replace '/images/business/KoreanName.jpg'
    const regex3 = new RegExp(`'/images/business/${originalFilename}'`, 'g');
    
    // Also user had some like "/기업의 예술/..."
    const regex4 = new RegExp(`"/기업의 예술/${originalFilename}"`, 'g');

    content = content.replace(regex1, `"${newUrl}"`)
                     .replace(regex2, `{"${newUrl}"}`)
                     .replace(regex3, `'${newUrl}'`)
                     .replace(regex4, `"${newUrl}"`);

    fs.writeFileSync(fullPath, content, 'utf8');
  }
}

async function uploadFiles() {
  const dir = path.join(process.cwd(), 'public/기업의 예술');
  const files = fs.readdirSync(dir);

  let index = 1;
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (!fs.statSync(filePath).isFile()) continue;

    const fileExt = path.extname(file).toLowerCase();
    const mimeType = fileExt === '.png' ? 'image/png' : 'image/jpeg';
    
    // Avoid Korean characters in Supabase storage keys
    const safeName = `legacy_business_${index}${fileExt}`;
    const destPath = `business/${safeName}`;
    const newUrl = `${supabaseUrl}/storage/v1/object/public/images/${destPath}`;
    
    console.log(`Uploading ${file} as ${safeName}...`);
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
      console.log(`Success: ${file} => ${newUrl}`);
      replaceInComponents(file, newUrl);
    }
    index++;
  }
}

uploadFiles().then(() => console.log('Done organizing and re-linking legacy images.'));
