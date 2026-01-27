"use client";

import FinancialChart from "@/components/dashboard/widgets/FinancialChart";
import {
  TrendingUp,
  PieChart,
  ShoppingBag,
  Coffee,
  Car,
  Home,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Analytics & Budgets</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] pointer-events-none"></div>
          <p className="text-[#B3B3B3] mb-2 font-medium">Net Worth</p>
          <h2 className="text-4xl font-bold text-white mb-2">$142,500.20</h2>
          <span className="text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <TrendingUp size={14} /> +12.4% vs last month
          </span>
        </div>
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[40px] pointer-events-none"></div>
          <p className="text-[#B3B3B3] mb-2 font-medium">Monthly Spending</p>
          <h2 className="text-4xl font-bold text-white mb-2">$4,230.50</h2>
          <span className="text-red-500 bg-red-500/10 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <TrendingUp size={14} /> +2.1% vs average
          </span>
        </div>
      </div>

      {/* Main Chart */}
      <div className="h-[400px]">
        <FinancialChart />
      </div>

      {/* Buying Categories / Budget */}
      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-white">Budget & Categories</h3>
          <button className="text-sm font-bold text-primary hover:underline">
            Edit Budgets
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Category Breakdown */}
          <div className="space-y-6">
            {[
              {
                name: "Shopping",
                icon: ShoppingBag,
                color: "text-purple-500",
                bg: "bg-purple-500",
                spent: 1250,
                limit: 1500,
              },
              {
                name: "Food & Dining",
                icon: Coffee,
                color: "text-orange-500",
                bg: "bg-orange-500",
                spent: 850,
                limit: 1000,
              },
              {
                name: "Transport",
                icon: Car,
                color: "text-blue-500",
                bg: "bg-blue-500",
                spent: 320,
                limit: 400,
              },
              {
                name: "Housing",
                icon: Home,
                color: "text-green-500",
                bg: "bg-green-500",
                spent: 1800,
                limit: 1800,
              },
            ].map((cat, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full ${cat.bg}/10 flex items-center justify-center ${cat.color}`}
                    >
                      <cat.icon size={16} />
                    </div>
                    <span className="text-white font-medium">{cat.name}</span>
                  </div>
                  <span className="text-[#B3B3B3] text-sm">
                    ${cat.spent} / ${cat.limit}
                  </span>
                </div>
                <div className="w-full h-2 bg-[#141414] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${cat.bg} opacity-80`}
                    style={{ width: `${(cat.spent / cat.limit) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Insights */}
          <div className="bg-[#141414] rounded-2xl p-6 border border-[#333]">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <PieChart size={18} className="text-primary" /> AI Insights
            </h4>
            <p className="text-[#B3B3B3] text-sm leading-relaxed mb-4">
              You've spent{" "}
              <span className="text-white font-bold">15% less</span> on Dining
              Out compared to last month. Great job! However, your{" "}
              <span className="text-white font-bold">Shopping</span> expenses
              are nearing the limit.
            </p>
            <p className="text-[#B3B3B3] text-sm leading-relaxed">
              Projected savings for this month:{" "}
              <span className="text-green-500 font-bold">$450.00</span>.
            </p>
            <button className="w-full mt-6 bg-[#262626] text-white py-3 rounded-xl font-bold hover:bg-[#333] transition-colors">
              View Detailed Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
