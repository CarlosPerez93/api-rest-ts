import "dotenv/config";
import express from "express";
import cors = require("cors");

import { router } from "./routes";
import db from "./config/mongo";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.use((req, res, next) => {
  res.status(404).json({ message: "ENDPOINT_NOT_FOUND" });
});

db().then(() => console.log("connection ready"));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
