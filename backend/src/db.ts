import { Pool } from "pg";
import dotenv from "dotenv";
import logger from "./utils/logger.js";

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test database connection
export const testConnection = async () => {
  try {
    const client = await pool.connect();
    logger.info("✅ Database connected successfully");
    client.release();
  } catch (err) {
    logger.error({ err }, "❌ Database connection failed");
  }
};
