import path from "path";
import fs from "fs";
import sharp from "sharp";

const imagesDir = path.resolve(__dirname, "../public/images");
const outputDir = path.resolve(__dirname, "../public/images");

const targets = [
  { width: 480, suffix: "-480" },
  { width: 768, suffix: "-768" },
  { width: 1280, suffix: "-1280" },
];

async function ensureDir(dir: string): Promise<void> {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function processImage(filePath: string): Promise<void> {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;

  const fileName = path.basename(filePath, ext);

  const input = sharp(filePath).rotate();
  const metadata = await input.metadata();

  for (const { width, suffix } of targets) {
    const targetWidth = Math.min(width, metadata.width || width);

    const jpegOut = path.join(outputDir, `${fileName}${suffix}.jpg`);
    const webpOut = path.join(outputDir, `${fileName}${suffix}.webp`);

    await input
      .resize({ width: targetWidth, withoutEnlargement: true })
      .jpeg({ quality: 72, mozjpeg: true })
      .toFile(jpegOut);

    await input
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(webpOut);
  }
}

async function run(): Promise<void> {
  await ensureDir(outputDir);
  const files = await fs.promises.readdir(imagesDir);
  const jobs: Promise<void>[] = [];
  for (const file of files) {
    const full = path.join(imagesDir, file);
    const stat = await fs.promises.stat(full);
    if (stat.isFile()) {
      jobs.push(processImage(full));
    }
  }
  await Promise.all(jobs);
  // eslint-disable-next-line no-console
  console.log("Imagem otimizada com sucesso.");
}

run().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
