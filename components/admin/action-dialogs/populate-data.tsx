import { runUserScript } from "@/actions/users-panel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useTransition, useState } from "react";
import { toast } from "sonner";

enum AccountType {
  CHECKING = "CHECKING",
  SAVINGS = "SAVINGS",
  COMPANY = "COMPANY",
}

export function PopulateDataDialog({
  userId,
  open,
  onOpenChange,
}: {
  userId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [isPending, startTransition] = useTransition();
  const [selectedAccountTypes, setSelectedAccountTypes] = useState<
    AccountType[]
  >([AccountType.CHECKING, AccountType.SAVINGS]);

  const handleAccountTypeChange = (
    accountType: AccountType,
    checked: boolean
  ) => {
    if (checked) {
      setSelectedAccountTypes((prev) => [...prev, accountType]);
    } else {
      setSelectedAccountTypes((prev) =>
        prev.filter((type) => type !== accountType)
      );
    }
  };

  const handleConfirm = () => {
    if (selectedAccountTypes.length < 2) {
      toast.error("Please select at least 2 account types");
      return;
    }

    startTransition(() => {
      runUserScript(userId, "populateData", {
        accountTypes: selectedAccountTypes,
      }).then((data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success("User data populated successfully");
          onOpenChange(false);
        }
      });
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Populate User Data</DialogTitle>
          <DialogDescription>
            Select at least 2 account types to generate sample data for the
            user.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-3">
            <Label className="text-base font-medium">Account Types</Label>
            <div className="space-y-3">
              {Object.values(AccountType).map((accountType) => (
                <div key={accountType} className="flex items-center space-x-2">
                  <Checkbox
                    id={accountType}
                    checked={selectedAccountTypes.includes(accountType)}
                    onCheckedChange={(checked) =>
                      handleAccountTypeChange(accountType, checked as boolean)
                    }
                  />
                  <Label
                    htmlFor={accountType}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {accountType.charAt(0).toUpperCase() +
                      accountType.slice(1).toLowerCase()}
                  </Label>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Selected: {selectedAccountTypes.length} account type(s)
              {selectedAccountTypes.length < 2 && " (minimum 2 required)"}
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={isPending || selectedAccountTypes.length < 2}
          >
            {isPending ? (
              <div className="flex items-center space-x-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Populating...</span>
              </div>
            ) : (
              "Populate Data"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
