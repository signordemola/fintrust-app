import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicUserData } from "@/types/users";
import { DetailItem } from "../detail-item";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function UserDetailDialog({
  user,
  open,
  onOpenChange,
}: {
  user: BasicUserData;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid gap-4 py-4 grid-cols-2">
              <DetailItem
                label="Full Name"
                value={`${user.firstName} ${user.lastName}`}
              />
              <DetailItem label="Email" value={user.email} />
              <DetailItem label="Phone" value={"N/A"} />
              <DetailItem label="Address" value={"N/A"} />
              <DetailItem
                label="Account Status"
                value={
                  <Badge variant={user.isActive ? "default" : "destructive"}>
                    {user.isActive ? "Active" : "Inactive"}
                  </Badge>
                }
              />
              <DetailItem
                label="Subscription"
                value={
                  <Badge variant={user.isSubscribed ? "default" : "outline"}>
                    {user.isSubscribed ? "Active" : "Expired"}
                  </Badge>
                }
              />
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <Card className="p-4">
              <div className="space-y-4">
                {/* Placeholder for activity items - replace with real data */}
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5" />
                    <div className="h-full w-px bg-border" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Failed Logins</p>
                    <p className="text-xs text-muted-foreground">N/A</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5" />
                    <div className="h-full w-px bg-border" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Successful login</p>
                    <p className="text-xs text-muted-foreground">N/A</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5" />
                    <div className="h-full w-px bg-border" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Last Login</p>
                    <p className="text-xs text-muted-foreground">N/A</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
