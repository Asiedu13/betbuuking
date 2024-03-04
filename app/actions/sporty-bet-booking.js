"use server";

import puppeteer from "puppeteer";

export async function SportyBetBooking() {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto( "https://www.sportybet.com/gh/m/",
    {
    waitUntil: "networkidle0",
    timeout: 120000,
    }
  );
  await page.waitForNavigation(
    {
    waitUntil: "networkidle0",
    timeout: 120000,
    }
  );

  // Wait for click on specific bet slips
  await page.waitForFunction(
    () =>
    document.querySelector( ".betslip-float-wrapper" ),
    { timeout: 3000 }
  );
  await page.waitForRequest((request) => request.url().includes("betslip"));

  await page.waitForSelector(".m-book-btn");

  const bookingCode = await page.evaluate(() => {
    const codeElem = document
      .querySelector(".booking-code-share-code")
      .getAttributeNames();

    const code = codeElem[0].substring(7);
    const shareLink = `https://www.sportybet.com/?shareCode=${code}&c=gh`;
    return { code, shareLink };
  });
  await browser.close();
  return bookingCode;
}

