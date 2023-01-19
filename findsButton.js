const puppeteer = require("puppeteer");
const assert = require("assert");

(async () => {
  // Launch a headless version of Chromium
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Navigate to the desired webpage
  await page.goto("https://finance.yahoo.com/quote/TLRY/financials?p=TLRY");

  // Select the button element
  const button = await page.$(
    `button[class="P(0px) M(0px) C(${"$"}linkColor) Bd(0px) O(n)"]`
  );

  // Get the text content of the button element
  const buttonTextBefore = await page.evaluate(
    (button) => button.textContent,
    button
  );

  console.log(buttonTextBefore)

  // Click the button
  await button.click();
  console.log(buttonTextBefore)
  // Wait for the page to fully load
  await page.waitForFunction(() => new Promise(resolve => setTimeout(resolve, 10000)));

  // Get the text content of the button element again
  const buttonTextAfter = await page.evaluate(
    (button) => button.textContent,
    button
  );

  console.log(buttonTextAfter)

  // Assert that the text content of the button changed after it was clicked
  assert.notEqual(buttonTextBefore, buttonTextAfter);

  // Close the browser
  await browser.close();
})();