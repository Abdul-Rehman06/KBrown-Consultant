import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let totalReplaced = 0;

walkDir('src', function(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  // Remove mix-blend-overlay and mix-blend-screen
  content = content.replace(/\s*mix-blend-overlay/g, '');
  content = content.replace(/\s*mix-blend-screen/g, '');
  
  // Decrease opacity for noise if mix-blend is removed
  content = content.replace(/opacity-\[0\.03\]/g, 'opacity-[0.015]');

  if (original !== content) {
    fs.writeFileSync(filePath, content);
    totalReplaced++;
  }
});

console.log(`Removed heavy mix-blend modes in ${totalReplaced} files.`);