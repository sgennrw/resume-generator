const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Live Server URL
  await page.goto("http://127.0.0.1:8080/index.html", {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "resume-generated-example.pdf",
    format: "A4",
    margin: {
      top: "10mm",
      bottom: "10mm",
      left: "10mm",
      right: "10mm",
    },
  });

  await browser.close();
  console.log("PDF generated!");
})();
