"use server";

import { z } from "zod";
import { PasskeySchema } from "@/schemas";
import { prisma } from "@/lib/db";

export const verifyPasskey = async (values: z.infer<typeof PasskeySchema>) => {
  const validated = PasskeySchema.safeParse(values);

  if (!validated.success) {
    return { error: "Invalid passkey format." };
  }

  try {
    const { email, passkey } = validated.data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.passkey !== passkey) {
      return { error: "Incorrect passkey." };
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: true,
      },
    });

    return { success: true, redirect: "sign-in" };
  } catch (error) {
    console.error("Passkey error:", error);
    return { error: "Something went wrong!" };
  }
};
