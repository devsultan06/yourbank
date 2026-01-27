"use client";

import {
  Search,
  Download,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";

export default function AdminTransactionsPage() {
  const transactions = [
    {
      id: "TX-9821",
      user: "Alice Freeman",
      type: "Wire Transfer",
      amount: "-$12,000.00",
      date: "Today, 10:23 AM",
      status: "Flagged",
    },
    {
      id: "TX-9822",
      user: "Bob Smith",
      type: "Deposit",
      amount: "+$450.00",
      date: "Today, 09:15 AM",
      status: "Completed",
    },
    {
      id: "TX-9823",
      user: "Eve Polastri",
      type: "Card Payment",
      amount: "-$120.50",
      date: "Yesterday",
      status: "Completed",
    },
    {
      id: "TX-9824",
      user: "Charlie Day",
      type: "Crypto Buy",
      amount: "-$5,000.00",
      date: "Yesterday",
      status: "Processing",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">System Ledger</h1>
          <p className="text-[#B3B3B3]">
            Global transaction history and flagging.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#1C1C1C] text-white border border-[#333] px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#222]">
          <Download size={16} /> Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          {/* Search */}
          <div className="bg-[#1C1C1C] p-4 rounded-xl border border-[#262626]">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#59595A]"
                size={18}
              />
              <input
                type="text"
                placeholder="Search by Transaction ID or Username..."
                className="w-full bg-[#141414] border border-[#333] rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Ledger Table */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-[#141414] text-[#B3B3B3] text-sm font-medium">
                <tr>
                  <th className="p-6">ID</th>
                  <th className="p-6">User</th>
                  <th className="p-6">Type</th>
                  <th className="p-6">Amount</th>
                  <th className="p-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262626]">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-[#222] transition-colors">
                    <td className="p-6 text-[#59595A] font-mono text-sm">
                      {tx.id}
                    </td>
                    <td className="p-6 text-white font-medium">{tx.user}</td>
                    <td className="p-6 text-[#B3B3B3] text-sm">{tx.type}</td>
                    <td
                      className={`p-6 font-bold ${tx.amount.startsWith("+") ? "text-green-500" : "text-white"}`}
                    >
                      {tx.amount}
                    </td>
                    <td className="p-6">
                      <span
                        className={`flex items-center gap-1 font-bold text-xs ${
                          tx.status === "Flagged"
                            ? "text-red-500"
                            : tx.status === "Processing"
                              ? "text-yellow-500"
                              : "text-green-500"
                        }`}
                      >
                        {tx.status === "Flagged" && <AlertTriangle size={12} />}
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Widgets */}
        <div className="space-y-6">
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6">
            <h3 className="text-white font-bold mb-4">Volume (24h)</h3>
            <div className="text-3xl font-bold text-white mb-1">$2.4M</div>
            <p className="text-green-500 text-sm flex items-center gap-1">
              <ArrowUpRight size={14} /> +15%
            </p>
          </div>
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6">
            <h3 className="text-white font-bold mb-4">Flagged</h3>
            <div className="text-3xl font-bold text-red-500 mb-1">3</div>
            <p className="text-[#B3B3B3] text-sm">Requires attention</p>
            <button className="w-full mt-4 bg-red-500/10 text-red-500 py-2 rounded-lg text-sm font-bold hover:bg-red-500/20">
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
