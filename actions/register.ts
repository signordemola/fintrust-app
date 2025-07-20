"use server";

import { prisma } from "@/lib/db";
import { sendPasskeyEmail } from "@/lib/mail";
import { generatePassKey, hashPassword } from "@/lib/password";
import { RegisterSchema } from "@/schemas";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  console.log(validatedFields);

  if (!validatedFields.success) {
    return {
      error: "Validation failed!",
      issues: validatedFields.error.issues,
    };
  }

  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      dob,
      address,
      cityState,
      zipCode,
      country,
    } = validatedFields.data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: `User with email ${email} already exists!` };
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        phoneNumber,
        dateOfBirth: new Date(dob),
        address,
        cityState,
        zipCode,
        country,
      },
    });

    const passkey = generatePassKey();

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passkey: passkey,
      },
    });

    console.log(passkey);

    await sendPasskeyEmail(user.email, passkey);

    return {
      success: true,
      redirect: `/verify-passkey?email=${encodeURIComponent(user.email)}`,
    };
  } catch (error) {
    console.error("Registration error:", error);

    // Handle Prisma errors
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return { error: "A user with this email already exists." };
      }
    }

    // Handle other errors
    if (error instanceof Error) {
      console.log(error);
      return { error: "An unexpected error occurred. Please try again later!" };
    }

    return { error: "An unexpected error occurred. Please try again later!" };
  }
};
