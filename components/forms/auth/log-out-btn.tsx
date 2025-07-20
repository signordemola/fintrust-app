"use client";
import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  return (
    <form action={logout}>
      <Button variant="destructive" type="submit">
        Logout
      </Button>
    </form>
  );
}
