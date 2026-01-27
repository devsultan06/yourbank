"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  Download,
  MoreHorizontal,
} from "lucide-react";

// Mock Data for the table
const MOCK_TRANSACTIONS = Array.from({ length: 15 }).map((_, i) => ({
  id: `tx-${i + 1}`,
  merchant: [
    "Apple Store",
    "Uber Rides",
    "Spotify Premium",
    "Amazon AWS",
    "Starbucks",
    "Salary Deposit",
  ][i % 6],
  date: new Date(Date.now() - i * 86400000).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }),
  amount: i % 6 === 5 ? 4500.0 : -(Math.random() * 500).toFixed(2),
  status: ["Completed", "Pending", "Failed"][i % 3],
  type: i % 6 === 5 ? "Credit" : "Debit",
  category: ["Tech", "Transport", "Subscription", "Services", "Food", "Income"][
    i % 6
  ],
  card: i % 6 === 5 ? "**99" : "**** 4288",
}));

export default function TransactionTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] overflow-hidden flex flex-col h-full">
      {/* Table Header / Toolbar */}
      <div className="p-6 border-b border-[#262626] flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search */}
        <div className="relative w-full md:w-96 group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#59595A] group-focus-within:text-primary transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by merchant, amount or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#141414] border border-[#262626] rounded-xl pl-12 pr-4 py-2.5 text-white placeholder:text-[#59595A] focus:outline-none focus:border-primary transition-all"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#141414] border border-[#262626] text-white px-4 py-2.5 rounded-xl hover:bg-[#262626] transition-colors text-sm font-medium">
            <Filter size={16} />
            <span>Filter</span>
            <ChevronDown size={14} className="text-[#59595A]" />
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#141414] border border-[#262626] text-white px-4 py-2.5 rounded-xl hover:bg-[#262626] transition-colors text-sm font-medium">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#141414]/50 text-[#B3B3B3] text-xs uppercase tracking-wider font-semibold border-b border-[#262626]">
              <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors">
                <div className="flex items-center gap-2">
                  Transaction <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors">
                <div className="flex items-center gap-2">
                  Category <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors">
                <div className="flex items-center gap-2">
                  Date <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors">
                <div className="flex items-center gap-2">
                  Card <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors">
                <div className="flex items-center gap-2">
                  Status <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="px-6 py-4 text-right cursor-pointer hover:text-white transition-colors">
                <div className="flex items-center justify-end gap-2">
                  Amount <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#262626]">
            {MOCK_TRANSACTIONS.map((tx) => (
              <tr
                key={tx.id}
                className="hover:bg-[#262626]/30 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center font-bold text-white/50 text-xs">
                      {tx.merchant.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm">
                        {tx.merchant}
                      </p>
                      <p className="text-xs text-[#59595A]">{tx.type}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#262626] text-[#B3B3B3] border border-[#333]">
                    {tx.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-[#B3B3B3]">{tx.date}</td>
                <td className="px-6 py-4 text-sm text-[#B3B3B3]">{tx.card}</td>
                <td className="px-6 py-4">
                  <div
                    className={`
                    inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border
                    ${
                      tx.status === "Completed"
                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                        : tx.status === "Pending"
                          ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                          : "bg-red-500/10 text-red-500 border-red-500/20"
                    }
                  `}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        tx.status === "Completed"
                          ? "bg-green-500"
                          : tx.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    ></span>
                    {tx.status}
                  </div>
                </td>
                <td
                  className={`px-6 py-4 text-right font-bold text-sm ${String(tx.amount).includes("-") ? "text-white" : "text-primary"}`}
                >
                  {Number(tx.amount) > 0 ? "+" : ""}
                  {Number(tx.amount).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[#59595A] hover:text-white transition-colors p-1">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-[#262626] flex justify-between items-center bg-[#141414]/30">
        <span className="text-xs text-[#59595A]">
          Showing 1-10 of 128 transactions
        </span>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((c) => Math.max(1, c - 1))}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#262626] text-white hover:bg-[#262626] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-black font-bold text-xs">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#262626] text-[#B3B3B3] hover:bg-[#262626] hover:text-white transition-colors text-xs">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#262626] text-[#B3B3B3] hover:bg-[#262626] hover:text-white transition-colors text-xs">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#262626] text-[#B3B3B3] hover:bg-[#262626] hover:text-white transition-colors text-xs">
            ...
          </button>
          <button
            onClick={() => setCurrentPage((c) => c + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#262626] text-white hover:bg-[#262626] transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
