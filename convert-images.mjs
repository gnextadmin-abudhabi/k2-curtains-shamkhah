import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, basename, extname } from 'path';

const inputDir = '/Users/apple/Library/Mobile Documents/com~apple~CloudDocs/Work/Projects/K2 Curtains/Branch -1 - Shamkhah/Website/Images';
const outputDir = 'public/images';

const images = await readdir(inputDir);
const jpegImages = images.filter(f => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg'));

for (const img of jpegImages) {
  const inputPath = join(inputDir, img);
  const name = basename(img, extname(img));
  const outputPath = join(outputDir, `${name}.webp`);
  
  await sharp(inputPath)
    .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 85, effort: 6 })
    .toFile(outputPath);
  
  const stats = await sharp(outputPath).metadata();
  console.log(`Converted: ${img} -> ${name}.webp (${stats.width}x${stats.height})`);
}

console.log('All images converted to WebP');
