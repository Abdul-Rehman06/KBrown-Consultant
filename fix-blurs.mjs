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

  // Replace bg-gold or bg-[#D4AF37] with blur with radial gradients
  content = content.replace(/bg-gold\/(\d+)\s+rounded(?:-full|\[100\%\])\s+blur-\[(\d+)px\]/g, (match, opacity) => {
    return `bg-[radial-gradient(circle,rgba(212,175,55,0.${opacity.padStart(2, '0')})_0%,transparent_70%)] rounded-full`;
  });

  content = content.replace(/bg-\[#D4AF37\]\/(\d+)\s+rounded(?:-full|\[100\%\])\s+blur-\[(\d+)px\]/g, (match, opacity) => {
    return `bg-[radial-gradient(circle,rgba(212,175,55,0.${opacity.padStart(2, '0')})_0%,transparent_70%)] rounded-full`;
  });

  // Handle other colors like bg-dark-300/50 or bg-white/20
  content = content.replace(/bg-white\/(\d+)\s+rounded(?:-full|\[100\%\])\s+blur-\[(\d+)px\]/g, (match, opacity) => {
    return `bg-[radial-gradient(circle,rgba(255,255,255,0.${opacity.padStart(2, '0')})_0%,transparent_70%)] rounded-full`;
  });

  content = content.replace(/bg-dark\/(\d+)\s+rounded(?:-full|\[100\%\])\s+blur-\[(\d+)px\]/g, (match, opacity) => {
    return `bg-[radial-gradient(circle,rgba(11,21,35,0.${opacity.padStart(2, '0')})_0%,transparent_70%)] rounded-full`;
  });

  content = content.replace(/bg-\[#13243D\]\/(\d+)\s+rounded(?:-full|\[100\%\])\s+blur-\[(\d+)px\]/g, (match, opacity) => {
    return `bg-[radial-gradient(circle,rgba(19,36,61,0.${opacity.padStart(2, '0')})_0%,transparent_70%)] rounded-full`;
  });
  
  if (original !== content) {
    fs.writeFileSync(filePath, content);
    totalReplaced++;
  }
});

console.log(`Replaced heavy blurs in ${totalReplaced} files.`);
