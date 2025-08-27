import { toggleSubscription } from "@/actions/users-panel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTransition } from "react";
import { toast } from "sonner";

export function SubscriptionToggleDialog({
  userId,
  currentStatus,
  open,
  onOpenChange,
}: {
  userId: string;
  currentStatus: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [isPending, startTransition] = useTransition();

  const handleConfirm = () => {
    startTransition(() => {
      toggleSubscription(userId).then((data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          onOpenChange(false);
        }
      });
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {currentStatus ? "Deactivate" : "Activate"} Subscription
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to {currentStatus ? "deactivate" : "activate"}{" "}
            this {"user's"} subscription? This will also{" "}
            {currentStatus ? "disable" : "enable"} their account access.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button onClick={handleConfirm} disabled={isPending}>
            {isPending ? (
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
            ) : currentStatus ? (
              "Deactivate"
            ) : (
              "Activate"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}