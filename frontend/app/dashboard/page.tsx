import TotalBalanceCard from "@/components/dashboard/widgets/TotalBalanceCard";
import CreditCardCarousel from "@/components/dashboard/widgets/CreditCardCarousel";
import FinancialChart from "@/components/dashboard/widgets/FinancialChart";
import QuickTransfer from "@/components/dashboard/widgets/QuickTransfer";
import CurrencyExchangeWidget from "@/components/dashboard/widgets/CurrencyExchangeWidget";
import RecentTransactions from "@/components/dashboard/widgets/RecentTransactions";
import ATMLocator from "@/components/dashboard/widgets/ATMLocator";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Overview
          </h1>
          <p className="text-[#B3B3B3]">
            Welcome back, Sultan. Here's what's happening smoothly.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#262626] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#333] transition-colors">
            Download Report
          </button>
          <button className="bg-primary text-black px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-opacity-90 transition-colors">
            Add Account
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Row 1 */}
        <div className="md:col-span-2">
          <TotalBalanceCard />
        </div>
        <div className="md:col-span-2 xl:col-span-2">
          <CreditCardCarousel />
        </div>

        {/* Row 2 */}
        <div className="md:col-span-2 xl:col-span-2 min-h-[350px]">
          <FinancialChart />
        </div>
        <div className="md:col-span-1 xl:col-span-1">
          <QuickTransfer />
        </div>
        <div className="md:col-span-1 xl:col-span-1">
          <CurrencyExchangeWidget />
        </div>

        {/* Row 3 */}
        <div className="md:col-span-1 xl:col-span-2 min-h-[400px]">
          <RecentTransactions />
        </div>
        <div className="md:col-span-1 xl:col-span-2 min-h-[400px]">
          <ATMLocator />
        </div>
      </div>
    </div>
  );
}
