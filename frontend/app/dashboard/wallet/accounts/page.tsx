"use client";

import { CreditCard, Plus, Landmark } from "lucide-react";

export default function BankAccountsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white mb-2">
          Connected Accounts
        </h1>
        <button className="bg-primary text-black px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
          <Plus size={18} /> Link Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chase */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 flex flex-col justify-between h-[180px]">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                C
              </div>
              <div>
                <h3 className="text-white font-bold">Chase Checking</h3>
                <p className="text-[#59595A] text-sm md:text-xs">**** 8829</p>
              </div>
            </div>
            <div className="bg-green-500/10 text-green-500 text-xs px-2 py-1 rounded">
              Verified
            </div>
          </div>
          <div>
            <p className="text-[#B3B3B3] text-sm">Balance</p>
            <p className="text-white text-2xl font-bold">$2,450.00</p>
          </div>
        </div>

        {/* Add New Placeholder */}
        <div className="border border-dashed border-[#333] rounded-[24px] flex flex-col items-center justify-center h-[180px] text-center hover:bg-[#141414] cursor-pointer transition-colors">
          <div className="w-12 h-12 bg-[#262626] rounded-full flex items-center justify-center text-[#59595A] mb-3">
            <Landmark size={24} />
          </div>
          <p className="text-white font-bold">Link External Bank</p>
          <p className="text-[#59595A] text-sm">Plaid / Stripe</p>
        </div>
      </div>
    </div>
  );
}
