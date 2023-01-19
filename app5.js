const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  const x = 1666; // X coordinate of button
  const y = 456; // Y coordinate of button
  
  // move the mouse to the button coordinates
  await page.mouse.move(x, y);
  // click the button
  await page.mouse.down();
  await page.mouse.up();

  await browser.close();
})();


// const crawlThis = "https://finance.yahoo.com/quote/TLRY/cash-flow?p=TLRY";
// const crawlThis = "https://finance.yahoo.com/quote/TLRY/balance-sheet?p=TLRY";