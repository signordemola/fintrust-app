"use server";

import { cache } from "react";
import { getUserSession } from "../session";
import { prisma } from "../db";

export const getUserProfile = cache(async () => {
  const session = await getUserSession();
  if (!session) return null;

  const userId = session?.userId;

  try {
    const profile = await prisma.user.findUnique({
      where: { id: userId, isActive: true },
      select: {
        email: true,
        firstName: true,
        username: true,
      },
    });
    return profile;
  } catch (error) {
    console.log(error);
    return null;
  }
});

export const getRecentTransactions = cache(async () => {
  const session = await getUserSession();
  if (!session) return null;

  const userId = session.userId;

  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId },
      select: {
        id: true,
        amount: true,
        type: true,
        description: true,
        date: true,
      },
      orderBy: { date: "desc" },
      take: 10,
    });

    return transactions.map((txn) => ({
      id: txn.id,
      description: txn.description,
      date: txn.date.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      amount:
        (txn.type === "DEPOSIT" ? "+" : "-") +
        `$${txn.amount.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`,
      icon:
        txn.type === "DEPOSIT"
          ? "📱"
          : txn.type === "TRANSFER_EXTERNAL"
          ? "↔️"
          : "💳",
    }));
  } catch (error) {
    console.log(error);
    return null;
  }
});

export const getAllAccounts = cache(async () => {
  const session = await getUserSession();
  if (!session) return null;

  const userId = session.userId;

  try {
    const accounts = await prisma.account.findMany({
      where: { userId, status: "ACTIVE" },
      select: {
        balance: true,
        accountNumber: true,
        routingNumber: true,
        type: true,
        status: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      take: 2,
    });

    return accounts.map((account) => ({
      balance: account.balance,
      accountNumber: account.accountNumber,
      routingNumber: account.routingNumber,
      holder: `${account.user.firstName} ${account.user.lastName}`,
      type:
        account.type === "CHECKING" ? "Personal Checking" : "Personal Savings",
      status: account.status,
    }));
  } catch (error) {
    console.log(error);
    return null;
  }
});

export const getNotifications = cache(async () => {
  const session = await getUserSession();
  if (!session) return [];

  const userId = session.userId;

  try {
    const notifications = await prisma.notification.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
      select: {
        id: true,
        type: true,
        message: true,
        read: true,
        createdAt: true,
        priority: true,
      },
    });

    return notifications;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return [];
  }
});

export const getUserBeneficiaries = cache(async () => {
  const session = await getUserSession();
  if (!session) return null;

  const userId = session?.userId;

  try {
    const beneficiaries = await prisma.user.findUnique({
      where: { id: userId, isActive: true },
      select: {
        beneficiaries: {
          select: {
            id: true,
            name: true,
            type: true,
            accountNumber: true,
            utilityId: true,
          },
        },
      },
    });
    return beneficiaries;
  } catch (error) {
    console.log(error);
    return null;
  }
});
