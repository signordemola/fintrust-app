import { Prisma } from "@prisma/client";
import pino from "pino";

export const logger = pino({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
});

export async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delayMs: number = 1000
): Promise<T> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        (error.code === "P1001" ||
          error.message.includes("Transaction not found")) &&
        i < maxRetries - 1
      ) {
        logger.warn(`Retrying after error: ${error.message}`);
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries reached");
}

export const handlePrismaError = (error: unknown): Error => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P1001") {
      logger.error(`Database connection error: ${error.message}`, {
        stack: error.stack,
      });
      return new Error("Server is currently down. Please try again later.");
    }
    if (error.message.includes("invalid input value for enum")) {
      logger.error(`Invalid enum value: ${error.message}`, {
        stack: error.stack,
      });
      return new Error("Invalid data provided for account creation.");
    }
    if (error.message.includes("Transaction not found")) {
      logger.error(`Transaction error: ${error.message}`, {
        stack: error.stack,
      });
      return new Error("Database transaction failed. Please try again.");
    }
    logger.error(`Prisma error ${error.code}: ${error.message}`, {
      stack: error.stack,
    });
    return new Error("An error occurred while accessing the database.");
  } else if (error instanceof Error) {
    logger.error(`Unexpected error: ${error.message}`, { stack: error.stack });
    return error;
  } else {
    logger.error("Unknown error occurred", { error });
    return new Error("An unexpected error occurred.");
  }
};

export function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
