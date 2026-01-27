"use client";

import {
  Home,
  Briefcase,
  GraduationCap,
  Car,
  ArrowRight,
  Percent,
} from "lucide-react";

export default function LoansPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Loans & Credit</h1>
          <p className="text-[#B3B3B3]">
            Flexible financing solutions for your life goals.
          </p>
        </div>
        <button className="bg-primary text-black px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
          + Apply for New Loan
        </button>
      </div>

      {/* Active Loans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] pointer-events-none"></div>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#141414] rounded-full border border-[#333] flex items-center justify-center text-white">
                <Home size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold">Mortgage</h3>
                <p className="text-[#59595A] text-xs">ending in 2045</p>
              </div>
            </div>
            <span className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded-lg">
              Active
            </span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[#B3B3B3] text-xs mb-1">Remaining Balance</p>
              <p className="text-white text-2xl font-bold">$342,500.00</p>
            </div>
            <div className="w-full h-2 bg-[#141414] rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[35%] rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs text-[#59595A]">
              <span>Paid: $125k</span>
              <span>35%</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 flex flex-col items-center justify-center text-center space-y-4 min-h-[250px] border-dashed">
          <div className="w-16 h-16 bg-[#141414] rounded-full flex items-center justify-center text-[#59595A]">
            <Percent size={24} />
          </div>
          <h3 className="text-white font-bold">Check Your Rate</h3>
          <p className="text-[#B3B3B3] text-sm max-w-[250px]">
            See what you qualify for without impacting your credit score.
          </p>
          <button className="text-primary font-bold text-sm hover:underline">
            Get Pre-Qualified
          </button>
        </div>
      </div>

      {/* Loan Products (From Use Cases) */}
      <h2 className="text-xl font-bold text-white mt-8 mb-4">
        Available Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Business */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 hover:border-primary/50 transition-colors cursor-pointer group">
          <Briefcase
            className="text-white mb-4 group-hover:text-primary transition-colors"
            size={32}
          />
          <h3 className="text-lg font-bold text-white mb-2">
            Business Expansion
          </h3>
          <p className="text-[#B3B3B3] text-sm mb-4">
            Capital to grow your startup or enterprise. Rates as low as 4.5%
            APR.
          </p>
          <div className="flex items-center text-primary text-sm font-bold gap-2">
            Learn More <ArrowRight size={16} />
          </div>
        </div>

        {/* Education */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 hover:border-blue-500/50 transition-colors cursor-pointer group">
          <GraduationCap
            className="text-white mb-4 group-hover:text-blue-500 transition-colors"
            size={32}
          />
          <h3 className="text-lg font-bold text-white mb-2">
            Education Funding
          </h3>
          <p className="text-[#B3B3B3] text-sm mb-4">
            Invest in your future with flexible student interest repayment
            plans.
          </p>
          <div className="flex items-center text-blue-500 text-sm font-bold gap-2">
            Learn More <ArrowRight size={16} />
          </div>
        </div>

        {/* Auto/Personal */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 hover:border-purple-500/50 transition-colors cursor-pointer group">
          <Car
            className="text-white mb-4 group-hover:text-purple-500 transition-colors"
            size={32}
          />
          <h3 className="text-lg font-bold text-white mb-2">Auto & Personal</h3>
          <p className="text-[#B3B3B3] text-sm mb-4">
            Buy your dream car or consolidate debt with a simple personal loan.
          </p>
          <div className="flex items-center text-purple-500 text-sm font-bold gap-2">
            Learn More <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
