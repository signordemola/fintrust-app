"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BasicUserData } from "@/types/users";
import { MoreVertical } from "lucide-react";
import { useState } from "react";
import {
  PopulateDataDialog,
  ResetDataDialog,
  SubscriptionToggleDialog,
  UserDetailDialog,
} from "./user-action-dialogs";

export function UserActions({ user }: { user: BasicUserData }) {
  const [populateDialogOpen, setPopulateDialogOpen] = useState(false);
  const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [resetDialogOpen, setResetDialogOpen] = useState(false);

  return (
    <div className="flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setSubscriptionDialogOpen(true)}>
            {user.isSubscribed ? "Deactivate" : "Activate"} Subscription
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPopulateDialogOpen(true)}>
            Populate Data
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setResetDialogOpen(true)}>
            Reset Data
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDetailDialogOpen(true)}>
            View User Details
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <SubscriptionToggleDialog
        userId={user.id}
        currentStatus={user.isSubscribed}
        open={subscriptionDialogOpen}
        onOpenChange={setSubscriptionDialogOpen}
      />
      <PopulateDataDialog
        userId={user.id}
        open={populateDialogOpen}
        onOpenChange={setPopulateDialogOpen}
      />
      <UserDetailDialog
        user={user}
        open={detailDialogOpen}
        onOpenChange={setDetailDialogOpen}
      />
      <ResetDataDialog
        userId={user.id}
        open={resetDialogOpen}
        onOpenChange={setResetDialogOpen}
      />
    </div>
  );
}
