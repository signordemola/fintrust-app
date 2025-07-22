import AccountOverview from "@/components/account-overview";
import Header from "@/components/header";
import MonthlySummary from "@/components/monthly-summary";
import NavBar from "@/components/navbar";
import QuickActions from "@/components/quick-actions";
import RecentTransactions from "@/components/recent-transactions";
import TransferSection from "@/components/transfer-section";
import {
  getAllAccountDetails,
  getAllAccounts,
  getMonthlySummary,
  getNotifications,
  getRecentTransactions,
  getUserBeneficiaries,
  getUserProfile,
} from "@/lib/customer/dal";
import { getUserSession } from "@/lib/session";

const DashboardPage = async () => {
  const session = await getUserSession();
  if (!session) return null;

  const [
    profile,
    recentTransactions,
    allAccountDetails,
    allAccounts,
    notifications,
    beneficiariesResult,
    monthlySummary,
  ] = await Promise.all([
    getUserProfile(),
    getRecentTransactions(),
    getAllAccountDetails(),
    getAllAccounts(),
    getNotifications(),
    getUserBeneficiaries(),
    getMonthlySummary(),
  ]);

  if (!profile) return null;

  const hasPin = !!profile.transactionPin;

  const beneficiaries = beneficiariesResult?.beneficiaries || [];

  const checkingAccount = allAccountDetails?.find(
    (account) => account.type === "Personal Checking"
  );
  const checkingBalance = checkingAccount ? checkingAccount.balance : 0;

  return (
    <section>
      <NavBar
        profile={profile}
        initialNotifications={notifications}
        userBeneficiaries={beneficiaries}
        hasPin={hasPin}
      />
      <Header firstName={profile?.firstName} balance={checkingBalance} />
      <AccountOverview allAccountDetails={allAccountDetails} />
      <MonthlySummary
        income={monthlySummary.income}
        incomeCount={monthlySummary.incomeCount}
        outgoing={monthlySummary.outgoing}
        outgoingCount={monthlySummary.outgoingCount}
      />
      <TransferSection allAccounts={allAccounts} />
      <QuickActions />
      <RecentTransactions recentTransactions={recentTransactions} />
    </section>
  );
};

export default DashboardPage;
