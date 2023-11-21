import { ScrapperController } from "controller/scrapper";
import { Router } from "express";

const scrapperRoutes = Router();

scrapperRoutes.get("/links", ScrapperController.getLinks);

export default scrapperRoutes;