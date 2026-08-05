import "dotenv/config";
import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export async function testDatabaseConnection() {
  const result = await pool.query("SELECT NOW()");

  console.log("Database connected:", result.rows[0].now);
}

console.log({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  passwordType: typeof process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
