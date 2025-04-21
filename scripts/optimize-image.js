import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { renameSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, '../public/images/profilbild.png');
const outputPath = join(__dirname, '../public/images/profilbild.png');

sharp(inputPath)
  .resize(300, 300, {
    fit: 'inside',
    withoutEnlargement: true
  })
  .jpeg({
    quality: 75,
    progressive: true
  })
  .toFile(outputPath + '.temp')
  .then(info => {
    renameSync(outputPath + '.temp', outputPath);
    console.log('Bild wurde optimiert:', info);
  })
  .catch(err => console.error('Fehler bei der Bildoptimierung:', err)); 