import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import scrapperRoutes from "routes/scrapper";

const app = express();

app.use(cors());
app.use(bodyParser.json({}));
app.use("/api/scrape", scrapperRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});