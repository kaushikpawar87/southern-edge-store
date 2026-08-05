import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DG_HOST,
  database: process.env.DG_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});
