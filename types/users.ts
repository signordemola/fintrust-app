import { UserRoleEnum } from "@prisma/client";

export type BasicUserData = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  isSubscribed: boolean;
  isAdmin: boolean;
  role: UserRoleEnum;
  createdAt: Date;
};
