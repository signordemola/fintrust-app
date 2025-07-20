import z from "zod";
import { cookies } from "next/headers";
import { decodeToken, generateToken } from "./auth";
import { sessionSchema } from "@/schemas";
import { UserRoleEnum } from "@prisma/client";

const SESSION_EXPIRATION_SECONDS = 60 * 60 * 24 * 1;

export async function createUserSession(
  user: z.infer<typeof sessionSchema>
): Promise<string> {
  const validated = sessionSchema.safeParse(user);

  if (!validated.success) {
    console.error(
      "createUserSession: Invalid session payload",
      validated.error.format()
    );
    throw new Error("Invalid session payload.");
  }

  const { userId, role } = validated.data;

  const token = await generateToken(userId, role);
  const expiresAt = new Date(Date.now() + SESSION_EXPIRATION_SECONDS * 1000);

  (await cookies()).set("session-id", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
    sameSite: "lax",
  });

  return token;
}

export async function getUserSession(): Promise<{
  userId: string;
  role: UserRoleEnum;
} | null> {
  const token = (await cookies()).get("session-id")?.value;
  if (!token) return null;

  const { success, payload } = await decodeToken(token);
  return success ? payload : null;
}
