import "dotenv/config";
import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
