import puppeteer from "puppeteer";

export class ScrapperController {
  static async getLinks() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const host = "https://www.linkedin.com/jobs/search?keywords=Backend%20Developer&location=Nigeria&geoId=&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0"

    // Navigate to the provided URL
    await page.goto(host);
  
    // Extract Links
    const links = await page.evaluate(() => {
    
      const anchorElements = document.querySelectorAll(".base-card__full-link");
      const linkList = [];
      
      for (let i = 0; i < anchorElements.length; i++) {
        const links = anchorElements[i].getAttribute("href")
        linkList.push({links});
      }

      return linkList;
    });
  
    // Print the Links
    console.log('Scraped Links:', links);
  
    // Close the browser
    await browser.close();
  }
}
