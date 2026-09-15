const fs = require('fs');
const s = fs.readFileSync('public/frame.svg', 'utf8');
const idx = s.indexOf('href="data:image');
const endIdx = s.indexOf('"', idx + 10);
console.log('Prefix:', s.substring(0, Math.min(200, idx)));
console.log('Suffix:', s.substring(endIdx, endIdx + 500));
