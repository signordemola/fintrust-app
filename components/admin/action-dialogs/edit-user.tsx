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

export function EditUserDialog({
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
              <p>Edit User Dialog</p>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
