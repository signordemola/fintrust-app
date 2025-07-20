import { handlePrismaError, logger, withRetry } from "@/utils/admin-utils";
import { PrismaClient } from "@prisma/client";

export async function resetUserData(
  identifier: string
): Promise<{ message: string; userId?: string }> {
  const prisma = new PrismaClient({
    log: ["query", "info", "warn"],
    transactionOptions: { timeout: 30000 },
  });

  try {
    logger.info(`Starting data reset for user: ${identifier}`);

    const user = await withRetry(() =>
      prisma.user.findFirst({
        where: {
          OR: [{ id: identifier }, { email: identifier.toLowerCase() }],
        },
        select: { id: true, email: true },
      })
    );

    if (!user) {
      throw new Error(`User with ID or email '${identifier}' not found.`);
    }

    logger.info(`Found user: ${user.email} (ID: ${user.id})`);

    // Remove dependent models in correct order due to FK constraints
    await withRetry(() =>
      prisma.transaction.deleteMany({ where: { userId: user.id } })
    );
    await withRetry(() =>
      prisma.card.deleteMany({ where: { userId: user.id } })
    );
    await withRetry(() =>
      prisma.mobileDeposit.deleteMany({ where: { userId: user.id } })
    );
    await withRetry(() =>
      prisma.notification.deleteMany({ where: { userId: user.id } })
    );
    await withRetry(() =>
      prisma.session.deleteMany({ where: { userId: user.id } })
    );
    await withRetry(() =>
      prisma.bill.deleteMany({ where: { userId: user.id } })
    );
    await withRetry(() =>
      prisma.statement.deleteMany({ where: { userId: user.id } })
    );
    await withRetry(() =>
      prisma.account.deleteMany({ where: { userId: user.id } })
    );
    await withRetry(() =>
      prisma.auditLog.deleteMany({ where: { userId: user.id } })
    );

    logger.info(`Data reset complete for user: ${user.email} (ID: ${user.id})`);
    return {
      message: `User ${user.id} data cleared successfully.`,
      userId: user.id,
    };
  } catch (error) {
    throw handlePrismaError(error);
  } finally {
    await prisma.$disconnect();
  }
}
