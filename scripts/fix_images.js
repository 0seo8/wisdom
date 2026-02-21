const fs = require('fs');
const path = require('path');
const BUCKET = 'https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public';

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('/images/')) {
    const updated = content.replace(/'\/images\//g, `'${BUCKET}/images/`).replace(/"\/images\//g, `"${BUCKET}/images/`);
    if (content !== updated) {
      fs.writeFileSync(filePath, updated);
      console.log('Fixed:', filePath);
    }
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

traverse('src');
console.log('Done!');
