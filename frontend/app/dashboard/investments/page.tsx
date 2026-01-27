"use client";

import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Bitcoin,
  DollarSign,
} from "lucide-react";

// Mock Market Data
const MARKETS = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$42,592.00",
    change: "+5.2%",
    isUp: true,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$2,240.50",
    change: "+2.1%",
    isUp: true,
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc",
    price: "$192.40",
    change: "-1.4%",
    isUp: false,
  },
  {
    symbol: "AAPL",
    name: "Apple Inc",
    price: "$182.50",
    change: "+0.8%",
    isUp: true,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$98.20",
    change: "+12.4%",
    isUp: true,
  },
];

export default function InvestmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Investments</h1>
          <p className="text-[#B3B3B3]">
            Track your assets, stocks, and crypto portfolio.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#262626] border border-[#333] text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-[#333]">
            Portfolio Report
          </button>
          <button className="bg-primary text-black px-5 py-2 rounded-xl text-sm font-bold hover:opacity-90">
            + Buy Asset
          </button>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Portfolio Card */}
        <div className="lg:col-span-2 bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            <p className="text-[#B3B3B3] mb-1">Total Portfolio Value</p>
            <div className="flex items-baseline gap-4 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                $84,239.42
              </h2>
              <span className="text-green-500 bg-green-500/10 px-2 py-1 rounded-lg text-sm font-bold flex items-center gap-1">
                <TrendingUp size={16} /> +8.4%
              </span>
            </div>

            {/* Mock Chart Area */}
            <div className="h-64 flex items-end justify-between gap-1 items-end pl-2 border-b border-[#333] border-l border-[#333] pb-2 relative">
              {/* Just a visual CSS bar chart representation for now */}
              {[40, 65, 50, 80, 70, 90, 85, 100, 95, 120, 110, 140].map(
                (h, i) => (
                  <div
                    key={i}
                    className="flex-1 mx-1 bg-gradient-to-t from-blue-500/20 to-blue-500 hover:opacity-80 transition-opacity rounded-t-sm relative group"
                    style={{ height: `${h / 1.5}%` }}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#333] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Val: {h * 100}
                    </div>
                  </div>
                ),
              )}
            </div>
            <div className="flex justify-between text-[#59595A] text-xs mt-2">
              <span>Jan</span>
              <span>Dec</span>
            </div>
          </div>
        </div>

        {/* Allocation */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6">
          <h3 className="text-white font-bold mb-6">Allocation</h3>

          <div className="flex justify-center mb-8 relative">
            {/* Visual Doughnut */}
            <div className="w-48 h-48 rounded-full border-[16px] border-[#262626] relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[16px] border-primary border-t-transparent border-r-transparent rotate-45"></div>
              <div className="absolute inset-0 rounded-full border-[16px] border-blue-500 border-b-transparent border-l-transparent border-t-transparent rotate-[180deg]"></div>

              <div className="text-center">
                <p className="text-white font-bold text-xl">12</p>
                <p className="text-[#59595A] text-xs">Assets</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2 text-[#B3B3B3]">
                <span className="w-3 h-3 rounded-full bg-primary"></span> Crypto
              </span>
              <span className="text-white font-medium">45%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2 text-[#B3B3B3]">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>{" "}
                Stocks
              </span>
              <span className="text-white font-medium">35%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="flex items-center gap-2 text-[#B3B3B3]">
                <span className="w-3 h-3 rounded-full bg-[#333]"></span> Cash
              </span>
              <span className="text-white font-medium">20%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Market Ticker List */}
      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6">
        <h3 className="text-white font-bold mb-6">Market Watch</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[#59595A] text-xs uppercase border-b border-[#262626]">
                <th className="py-3 px-4 font-medium">Asset</th>
                <th className="py-3 px-4 font-medium text-right">Price</th>
                <th className="py-3 px-4 font-medium text-right">24h Change</th>
                <th className="py-3 px-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {MARKETS.map((asset, i) => (
                <tr
                  key={i}
                  className="hover:bg-[#262626]/50 transition-colors border-b border-[#262626]/50 last:border-0"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] ${asset.symbol === "BTC" ? "bg-orange-500/20 text-orange-500" : asset.symbol === "ETH" ? "bg-indigo-500/20 text-indigo-500" : "bg-white/10 text-white"}`}
                      >
                        {asset.symbol[0]}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">
                          {asset.name}
                        </p>
                        <p className="text-[#59595A] text-xs">{asset.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right text-white font-mono">
                    {asset.price}
                  </td>
                  <td
                    className={`py-4 px-4 text-right font-medium ${asset.isUp ? "text-green-500" : "text-red-500"}`}
                  >
                    {asset.change}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-primary hover:text-white transition-colors text-sm font-medium">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
