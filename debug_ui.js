const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
    await page.goto('http://127.0.0.1:8081/index.html');
    await page.waitForTimeout(2000);
    
    // Check if #studentsTableBody has any rows
    const studentRows = await page.evaluate(() => {
        const body = document.getElementById('studentsTableBody');
        return body ? body.innerHTML : 'NOT FOUND';
    });
    console.log("Students rows:", studentRows.slice(0, 100));

    await browser.close();
})();
