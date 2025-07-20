import bcrypt from "bcryptjs";

// Hash Password
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

// Compare Password
export async function verifyPassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}

// Generate passkey
export function generatePassKey(): string {
  let key = "";
  for (let i = 0; i < 6; i++) {
    key += Math.floor(Math.random() * 10).toString();
  }
  return key;
}
