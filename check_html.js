const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://mumenmahbuobeh.github.io/teacher-smart-hub-dashboard/', { waitUntil: 'networkidle2', timeout: 15000 });
  
  await page.screenshot({ path: 'screenshot_live.png' });
  await browser.close();
  console.log('Live Screenshot saved');
})();
