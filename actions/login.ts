"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { verifyPassword } from "@/lib/password";
import { prisma } from "@/lib/db";
import { UserRoleEnum } from "@prisma/client";
import { createUserSession } from "@/lib/session";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { error: "Email does not exist!" };
    }

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return { error: "Incorrect password!" };
    }

    if (!user.isActive) {
      return { error: "Your account is not active. Please contact support!" };
    }

    await createUserSession({ userId: user.id, role: user.role });

    let redirectPath: string;
    switch (user.role) {
      case UserRoleEnum.ADMIN:
        redirectPath = "/admin-panel";
        break;
      case UserRoleEnum.CUSTOMER:
      default:
        redirectPath = "/dashboard";
        break;
    }

    return { success: true, redirect: redirectPath };
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Something went wrong!" };
  }
};
