const puppeteer = require('puppeteer');
const path = require('path');

const sites = [
  { url: 'https://indianadecor.com/', out: 'src/assets/indianadecor.jpg' },
  { url: 'https://www.librairiescobetanger.com/', out: 'src/assets/librairiescobe.jpg' },
  { url: 'https://www.locationabderahmanecar.com/', out: 'src/assets/locationcar.jpg' },
  { url: 'https://tashil-one.vercel.app/', out: 'src/assets/tashilmaroc.jpg' },
  { url: 'https://www.baalumtanger.com/', out: 'src/assets/baalum.jpg' },
  { url: 'https://www.thecodetrend.com/', out: 'src/assets/codetrend.jpg' },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  for (const site of sites) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    console.log(`Capturing: ${site.url}`);
    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Extra wait to let animations settle
      await new Promise(r => setTimeout(r, 2000));
      const outPath = path.resolve(site.out);
      await page.screenshot({ path: outPath, type: 'jpeg', quality: 90 });
      console.log(`  ✓ Saved: ${outPath}`);
    } catch (e) {
      console.log(`  ✗ Failed: ${e.message}`);
    }
    await page.close();
  }

  await browser.close();
  console.log('All done.');
})();
