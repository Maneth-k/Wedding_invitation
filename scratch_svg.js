const fs = require('fs');

const text = fs.readFileSync('public/frame.svg', 'utf8');
const match = text.match(/href="data:image\/png;base64,([^"]+)"/);
if (match) {
  const buf = Buffer.from(match[1], 'base64');
  fs.writeFileSync('public/scratch_embedded.png', buf);
  const w = buf.readUInt32BE(16);
  const h = buf.readUInt32BE(20);
  console.log('Embedded image size:', w, h);
} else {
  console.log('No match found');
}
