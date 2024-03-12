import express from "express";
import cors from "cors";
import router from "./Routes/route.js";
import bodyParser from "body-parser";
import connectToDb from "./db/index.js";

const PORT = 8000;
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

Promise.all([connectToDb()])
  .then(app.listen(PORT, () => console.log("server is live")))
  .catch((error) => {
    console.error(`MongoDb Atlas Error : ${error}`);
    process.exit();
  });
