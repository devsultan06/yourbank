import { PrismaClient } from "@prisma/client";
import logger from "./utils/logger.js";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const testConnection = async () => {
  try {
    await prisma.$connect();
    logger.info("✅ Database connected successfully with Prisma");
  } catch (err) {
    logger.error({ err }, "❌ Database connection failed");
    process.exit(1);
  }
};
