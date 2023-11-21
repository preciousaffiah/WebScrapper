"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapperController = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
class ScrapperController {
    static getLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = yield puppeteer_1.default.launch({ headless: false });
            const page = yield browser.newPage();
            const host = "https://www.linkedin.com/jobs/search?keywords=Backend%20Developer&location=Nigeria&geoId=&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0";
            // Navigate to the provided URL
            yield page.goto(host);
            // Extract Links
            const links = yield page.evaluate(() => {
                const anchorElements = document.querySelectorAll(".base-card__full-link");
                const linkList = [];
                for (let i = 0; i < anchorElements.length; i++) {
                    const links = anchorElements[i].getAttribute("href");
                    linkList.push({ links });
                }
                return linkList;
            });
            // Print the Links
            console.log('Scraped Links:', links);
            // Close the browser
            yield browser.close();
        });
    }
}
exports.ScrapperController = ScrapperController;
//# sourceMappingURL=scrapper.js.map