"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scrapper_1 = require("../controller/scrapper");
const express_1 = require("express");
const scrapperRoutes = (0, express_1.Router)();
scrapperRoutes.get("/links", scrapper_1.ScrapperController.getLinks);
exports.default = scrapperRoutes;
//# sourceMappingURL=scrapper.js.map