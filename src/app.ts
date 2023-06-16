import "dotenv/config";
import express from "express";
import cors = require("cors");

import { router } from "./routes";
import db from "./config/mongo";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log("conection ready"));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
