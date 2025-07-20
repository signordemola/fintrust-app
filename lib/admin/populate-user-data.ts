import { faker } from "@faker-js/faker";
import {
  PrismaClient,
  Prisma,
  TransactionStatus,
  AccountType,
} from "@prisma/client";
import { addDays, addMonths, subYears } from "date-fns";
import { logger, withRetry } from "@/utils/admin-utils";

interface PopulationConfig {
  numAccountsPerUser: number;
  numTransactionsPerAccount: number;
  numCardsPerAccount: number;
  numBillPaymentsPerUser: number;
  numNotificationsPerUser: number;
}

const config: PopulationConfig = {
  numAccountsPerUser: 2,
  numTransactionsPerAccount: 25,
  numCardsPerAccount: 1,
  numBillPaymentsPerUser: 5,
  numNotificationsPerUser: 10,
};

const getRandomDate = (): Date => {
  return faker.date.between({
    from: subYears(new Date("2025-07-20"), 1),
    to: new Date("2025-07-20"),
  });
};

const getRandomAmount = (min: number, max: number): number => {
  return faker.number.int({ min, max });
};

const validateAccountNumber = (accountNumber: string): string => {
  if (!/^\d{10}$/.test(accountNumber)) {
    return faker.finance.accountNumber(10);
  }
  return accountNumber;
};

const validateCardNumber = (cardNumber: string): string => {
  const cardTypes = [
    { type: "visa", pattern: /^\d{16}$/ },
    { type: "mastercard", pattern: /^\d{16}$/ },
    { type: "amex", pattern: /^\d{15}$/ },
  ];
  const selectedType = faker.helpers.arrayElement(cardTypes);
  if (!selectedType.pattern.test(cardNumber)) {
    return faker.finance.creditCardNumber(selectedType.type);
  }
  return cardNumber;
};

const specificTransactions = [
  {
    type: "TRANSFER_EXTERNAL",
    description:
      "Transfer to Bank of America (Nuskip designs inc.): Deposit for Design",
    amount: 120000,
  },
  {
    type: "TRANSFER_EXTERNAL",
    description:
      "Transfer to Bank of America (Knitted Brittany Co.): Deposit for design",
    amount: 120000,
  },
  {
    type: "WITHDRAWAL",
    description: "Gas at Chevron",
    amount: 45,
  },
  {
    type: "WITHDRAWAL",
    description: "Groceries at Walmart",
    amount: 274,
  },
  {
    type: "WITHDRAWAL",
    description: "Electric bill via Florida Power & Light (FPL)",
    amount: 130,
  },
  {
    type: "WITHDRAWAL",
    description: "Pharmacy purchase at CVS",
    amount: 75,
  },
  {
    type: "WITHDRAWAL",
    description: "Electronics at Best Buy",
    amount: 250,
  },
  {
    type: "WITHDRAWAL",
    description: "Hotel reservations at Agora Life Hotel",
    amount: 5694,
  },
  {
    type: "WITHDRAWAL",
    description: "Gym membership at Planet Fitness",
    amount: 80,
  },
  {
    type: "WITHDRAWAL",
    description: "Return ticket Yakima to Istanbul",
    amount: 3648,
  },
  {
    type: "DEPOSIT",
    description: "Daveo deposit contract payment",
    amount: 555000,
  },
];

export async function populateUserData(
  identifier: string
): Promise<{ message: string; userId?: string }> {
  const prisma = new PrismaClient({
    log: ["query", "info", "warn"],
    transactionOptions: { timeout: 30000 },
  });

  try {
    logger.info(`Starting data population for user: ${identifier}`);

    const user = await withRetry(() =>
      prisma.user.findFirst({
        where: {
          OR: [{ id: identifier }, { email: identifier.toLowerCase() }],
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          createdAt: true,
        },
      })
    );

    if (!user) {
      throw new Error(`User with ID or email '${identifier}' not found.`);
    }

    logger.info(`Found user: ${user.email} (ID: ${user.id})`);

    // Create Checking and Savings Accounts
    const userAccounts = [];
    const accountTypes = [AccountType.CHECKING, AccountType.SAVINGS];
    for (const accType of accountTypes) {
      const initialBalance =
        accType === AccountType.SAVINGS
          ? getRandomAmount(500000, 1000000)
          : getRandomAmount(1000000, 1500000);
      const account = await withRetry(() =>
        prisma.account.create({
          data: {
            userId: user.id,
            type: accType,
            accountNumber: validateAccountNumber(
              faker.finance.accountNumber(10)
            ),
            routingNumber: faker.finance.routingNumber(),
            balance: initialBalance,
            status: "ACTIVE",
            interestRate:
              accType === AccountType.SAVINGS
                ? faker.number.float({
                    min: 0.01,
                    max: 0.05,
                    fractionDigits: 3,
                  })
                : null,
            openedAt: getRandomDate(),
            createdAt: getRandomDate(),
            updatedAt: getRandomDate(),
          },
        })
      );
      userAccounts.push(account);
      logger.debug(
        `Created ${account.type} account: ${
          account.accountNumber
        } with balance ${account.balance.toFixed(0)}`
      );
    }

    // Create Transactions
    const billIds: string[] = [];
    for (const account of userAccounts) {
      let currentBalance = account.balance;
      const transactions: Prisma.TransactionCreateManyInput[] = [];

      // Use specific transactions and fill remaining with random ones
      for (let i = 0; i < config.numTransactionsPerAccount; i++) {
        const isSpecific = i < specificTransactions.length;
        const txn = isSpecific
          ? specificTransactions[i]
          : {
              type: faker.helpers.arrayElement([
                "DEPOSIT",
                "WITHDRAWAL",
                "TRANSFER_EXTERNAL",
              ]),
              description: faker.finance.transactionDescription(),
              amount: getRandomAmount(50, 5000),
            };
        const isDeposit = txn.type === "DEPOSIT";
        const status = faker.helpers.arrayElement([
          TransactionStatus.COMPLETED,
          TransactionStatus.PENDING,
          TransactionStatus.FAILED,
        ]);
        const amount =
          isDeposit && isSpecific
            ? getRandomAmount(txn.amount * 0.8, txn.amount * 1.2)
            : txn.amount;

        if (!isDeposit && currentBalance - amount < 0) {
          continue;
        }

        currentBalance = isDeposit
          ? currentBalance + amount
          : currentBalance - amount;

        transactions.push({
          userId: user.id,
          accountId: account.id,
          amount,
          type: txn.type,
          description: txn.description,
          reference: faker.string.uuid(),
          status,
          date: getRandomDate(),
          recipientAccount:
            txn.type === "TRANSFER_EXTERNAL"
              ? validateAccountNumber(faker.finance.accountNumber(10))
              : null,
          recipientBank:
            txn.type === "TRANSFER_EXTERNAL" ? "Bank of America" : null,
          swiftCode:
            txn.type === "TRANSFER_EXTERNAL" ? faker.finance.iban() : null,
          pinVerified: faker.datatype.boolean(),
          category: txn.description.includes("bill")
            ? "Utilities"
            : faker.finance.transactionType(),
          isFraudSuspected: faker.datatype.boolean(0.1),
          createdAt: getRandomDate(),
          updatedAt: getRandomDate(),
          billId: txn.description.includes("bill") ? billIds[0] : null,
        });
      }

      // Adjust balance to ~$1,000,000
      if (Math.abs(currentBalance - 1000000) > 10000) {
        const adjustment = 1000000 - currentBalance;
        transactions.push({
          userId: user.id,
          accountId: account.id,
          type: adjustment > 0 ? "DEPOSIT" : "WITHDRAWAL",
          status: TransactionStatus.COMPLETED,
          amount: Math.abs(adjustment),
          description:
            adjustment > 0
              ? "Balance Adjustment Deposit"
              : "Balance Adjustment Withdrawal",
          reference: faker.string.uuid(),
          date: getRandomDate(),
          pinVerified: true,
          category: "Adjustment",
          isFraudSuspected: false,
          createdAt: getRandomDate(),
          updatedAt: getRandomDate(),
        });
        currentBalance = 1000000;
      }

      await withRetry(() =>
        prisma.transaction.createMany({ data: transactions })
      );
      logger.debug(
        `Created ${transactions.length} transactions for account ${account.accountNumber}`
      );

      await withRetry(() =>
        prisma.account.update({
          where: { id: account.id },
          data: { balance: currentBalance, updatedAt: getRandomDate() },
        })
      );
    }

    // Create Cards (One per account: Debit for Checking, Credit for Savings)
    const cards = [
      {
        userId: user.id,
        accountId: userAccounts.find((a) => a.type === AccountType.CHECKING)!
          .id,
        cardNumber: validateCardNumber(faker.finance.creditCardNumber()),
        type: "DEBIT",
        expiryDate: new Date("2027-12-31"),
        cvv: faker.finance.creditCardCVV(),
        status: "ACTIVE",
        pinHash: faker.string.alphanumeric(64),
        dailyLimit: getRandomAmount(1000, 5000),
        token: faker.string.uuid(),
        merchantCategoryLimits: {},
        createdAt: getRandomDate(),
        updatedAt: getRandomDate(),
      },
      {
        userId: user.id,
        accountId: userAccounts.find((a) => a.type === AccountType.SAVINGS)!.id,
        cardNumber: validateCardNumber(faker.finance.creditCardNumber()),
        type: "CREDIT",
        expiryDate: new Date("2028-03-31"),
        cvv: faker.finance.creditCardCVV(),
        status: "ACTIVE",
        creditLimit: 5000,
        availableCredit: 3500,
        rewardsPoints: getRandomAmount(100, 1000),
        pinHash: faker.string.alphanumeric(64),
        dailyLimit: getRandomAmount(1000, 5000),
        token: faker.string.uuid(),
        merchantCategoryLimits: { retail: 2000, travel: 3000 },
        createdAt: getRandomDate(),
        updatedAt: getRandomDate(),
      },
    ];

    await withRetry(() => prisma.card.createMany({ data: cards }));
    logger.debug(`Created ${cards.length} cards for user`);

    // Create Bill Payments (High-end for a rich, high-working-class woman)
    const checkingAccount = userAccounts.find(
      (a) => a.type === AccountType.CHECKING
    );
    if (checkingAccount) {
      const billPayments = [
        {
          accountId: checkingAccount.id,
          userId: user.id,
          provider: "Florida Power & Light (FPL)",
          accountNumber: validateAccountNumber(faker.finance.accountNumber(8)),
          amount: getRandomAmount(100, 300),
          dueDate: addDays(getRandomDate(), 5),
          status: "PAID",
          paymentDate: getRandomDate(),
          confirmationNo: faker.string.uuid(),
          isRecurring: true,
          recurringFreq: "MONTHLY",
          recurringEndDate: addMonths(getRandomDate(), 12),
          createdAt: getRandomDate(),
          updatedAt: getRandomDate(),
        },
        {
          accountId: checkingAccount.id,
          userId: user.id,
          provider: "T-Mobile Wireless",
          accountNumber: validateAccountNumber(faker.finance.accountNumber(8)),
          amount: getRandomAmount(50, 200),
          dueDate: addDays(getRandomDate(), 5),
          status: "PAID",
          paymentDate: getRandomDate(),
          confirmationNo: faker.string.uuid(),
          isRecurring: true,
          recurringFreq: "MONTHLY",
          recurringEndDate: addMonths(getRandomDate(), 12),
          createdAt: getRandomDate(),
          updatedAt: getRandomDate(),
        },
        {
          accountId: checkingAccount.id,
          userId: user.id,
          provider: "Comcast Xfinity",
          accountNumber: validateAccountNumber(faker.finance.accountNumber(8)),
          amount: getRandomAmount(80, 150),
          dueDate: addDays(getRandomDate(), 5),
          status: "PAID",
          paymentDate: getRandomDate(),
          confirmationNo: faker.string.uuid(),
          isRecurring: true,
          recurringFreq: "MONTHLY",
          recurringEndDate: addMonths(getRandomDate(), 12),
          createdAt: getRandomDate(),
          updatedAt: getRandomDate(),
        },
        {
          accountId: checkingAccount.id,
          userId: user.id,
          provider: "Saks Fifth Avenue",
          accountNumber: validateAccountNumber(faker.finance.accountNumber(8)),
          amount: getRandomAmount(1000, 5000),
          dueDate: addDays(getRandomDate(), 5),
          status: "PAID",
          paymentDate: getRandomDate(),
          confirmationNo: faker.string.uuid(),
          isRecurring: false,
          createdAt: getRandomDate(),
          updatedAt: getRandomDate(),
        },
        {
          accountId: checkingAccount.id,
          userId: user.id,
          provider: "NetJets Private Aviation",
          accountNumber: validateAccountNumber(faker.finance.accountNumber(8)),
          amount: getRandomAmount(10000, 50000),
          dueDate: addDays(getRandomDate(), 5),
          status: "PAID",
          paymentDate: getRandomDate(),
          confirmationNo: faker.string.uuid(),
          isRecurring: false,
          createdAt: getRandomDate(),
          updatedAt: getRandomDate(),
        },
      ];

      const createdBills = await withRetry(() =>
        prisma.bill.createMany({ data: billPayments, skipDuplicates: true })
      );
      billIds.push(
        ...(
          await prisma.bill.findMany({
            where: { userId: user.id },
            select: { id: true },
          })
        ).map((b) => b.id)
      );
      logger.debug(`Created ${createdBills.count} bill payments`);
    }

    // Create Notifications
    const notificationTypes = [
      "Security Alert",
      "Account Activity",
      "Payment Reminder",
      "New Feature",
      "Promotional Offer",
      "High Balance Alert",
      "Fraud Detection Notice",
      "Bill Payment Confirmation",
      "Card Transaction Alert",
      "Account Statement Available",
    ];
    const notifications = Array.from(
      { length: config.numNotificationsPerUser },
      () => ({
        userId: user.id,
        type: faker.helpers.arrayElement(notificationTypes),
        message: faker.lorem.sentence({ min: 5, max: 15 }),
        read: faker.datatype.boolean(),
        priority: faker.helpers.arrayElement(["LOW", "MEDIUM", "HIGH"]),
        createdAt: getRandomDate(),
      })
    );

    await withRetry(() =>
      prisma.notification.createMany({ data: notifications })
    );
    logger.debug(`Created ${notifications.length} notifications`);

    logger.info(
      `Data population completed for user ${user.email} (ID: ${user.id})`
    );
    return {
      message: `User ${user.id} data populated successfully`,
      userId: user.id,
    };
  } catch (error: unknown) {
    throw new Error(`Data population failed: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}
