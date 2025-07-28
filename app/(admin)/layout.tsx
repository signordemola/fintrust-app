import AdminNavbar from "@/components/admin/admin-navbar";
import { getUserProfile } from "@/lib/customer/dal";
import { getUserSession } from "@/lib/session";
import { UserRoleEnum } from "@prisma/client";
import { redirect } from "next/navigation";

export default async function ControlPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getUserSession();

  if (!session) return null;

  if (session.role !== UserRoleEnum.ADMIN) {
    redirect("/unauthorized");
  }

  const profile = await getUserProfile();
  if (!profile) return null;
  return (
    <main className="min-h-screen bg-[#f5f7fa] pt-24 md:pt-28">
      <AdminNavbar profile={profile} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {children}
      </div>
    </main>
  );
}
