import AccountOverview from "@/components/account-overview";
import Header from "@/components/header";
import MonthlySummary from "@/components/monthly-summary";
import NavBar from "@/components/navbar";
import QuickActions from "@/components/quick-actions";
import RecentTransactions from "@/components/recent-transactions";
import TransferSection from "@/components/transfer-section";
import {
  getAllAccounts,
  getNotifications,
  getRecentTransactions,
  getUserBeneficiaries,
  getUserProfile,
} from "@/lib/customer/dal";
import { getUserSession } from "@/lib/session";

const DashboardPage = async () => {
  const session = await getUserSession();
  if (!session) return null;

  const profile = await getUserProfile();
  if (!profile) return null;

  const [recentTransactions, allAccounts, notifications, beneficiariesResult] =
    await Promise.all([
      getRecentTransactions(),
      getAllAccounts(),
      getNotifications(),
      getUserBeneficiaries(),
    ]);

  const beneficiaries = beneficiariesResult?.beneficiaries || [];

  const checkingAccount = allAccounts?.find(
    (account) => account.type === "Personal Checking"
  );
  const checkingBalance = checkingAccount ? checkingAccount.balance : 0;

  return (
    <section>
      <NavBar
        profile={profile}
        initialNotifications={notifications}
        userBeneficiaries={beneficiaries}
      />
      <Header firstName={profile?.firstName} balance={checkingBalance} />
      <AccountOverview allAccounts={allAccounts} />
      <MonthlySummary />
      <TransferSection />
      <QuickActions />
      <RecentTransactions recentTransactions={recentTransactions} />
    </section>
  );
};

export default DashboardPage;
