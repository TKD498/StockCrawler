const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

// const crawlThis = "https://finance.yahoo.com/quote/TLRY/cash-flow?p=TLRY";
// const crawlThis = "https://finance.yahoo.com/quote/TLRY/balance-sheet?p=TLRY";
const crawlThis = "https://finance.yahoo.com/quote/TLRY/financials?p=TLRY";

function crawlPage(url) {
  // Send HTTP request to the URL
  request(url, function(error, response, html) {
    // Check for errors
    if (error) {
      console.log(error);
      return;
    }

    // Load the HTML content into cheerio
    const $ = cheerio.load(html);

    // Find the first div element with the class "Whs(n)"
    const element = $('div.Whs\\(n\\)').eq(1);

    // Extract the text from the element
    const text = element.text();

    console.log(text); // Output: The text inside the first div element with the class "Whs(n)"
  });
}

crawlPage(crawlThis);