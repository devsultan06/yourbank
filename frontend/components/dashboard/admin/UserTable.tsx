"use client";

import { MoreHorizontal, Shield, UserX, CheckCircle } from "lucide-react";

const USERS = [
  {
    id: 1,
    name: "Sultan Abaniks",
    email: "sultan@example.com",
    status: "Verified",
    joined: "Jan 12, 2026",
    balance: "$42,500.00",
    kyc: true,
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    status: "Pending",
    joined: "Jan 24, 2026",
    balance: "$1,200.00",
    kyc: false,
  },
  {
    id: 3,
    name: "Alice Smith",
    email: "alice@example.com",
    status: "Verified",
    joined: "Jan 20, 2026",
    balance: "$15,340.00",
    kyc: true,
  },
  {
    id: 4,
    name: "Bob Wilson",
    email: "bob@example.com",
    status: "Flagged",
    joined: "Jan 15, 2026",
    balance: "$500.00",
    kyc: true,
  },
  {
    id: 5,
    name: "Emma Davis",
    email: "emma@example.com",
    status: "Verified",
    joined: "Jan 22, 2026",
    balance: "$8,900.00",
    kyc: true,
  },
];

export default function UserTable() {
  return (
    <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-[#262626] flex justify-between items-center">
        <h3 className="text-white font-bold text-lg">Platform Users</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search users..."
            className="bg-[#141414] border border-[#333] rounded-xl px-4 py-2 text-sm text-white focus:outline-none"
          />
          <button className="bg-primary text-black px-4 py-2 rounded-xl text-sm font-bold">
            Export CSV
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#141414]/50 text-[#B3B3B3] text-xs uppercase tracking-wider font-semibold border-b border-[#262626]">
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">KYC</th>
              <th className="px-6 py-4">Joined</th>
              <th className="px-6 py-4 text-right">Balance</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#262626]">
            {USERS.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-[#262626]/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                      {user.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm">
                        {user.name}
                      </p>
                      <p className="text-xs text-[#59595A]">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
                      user.status === "Verified"
                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                        : user.status === "Pending"
                          ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                          : "bg-red-500/10 text-red-500 border-red-500/20"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {user.kyc ? (
                    <div className="flex items-center gap-1 text-green-500 text-xs font-medium">
                      <CheckCircle size={14} /> Passed
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-yellow-500 text-xs font-medium">
                      <Shield size={14} /> Incomplete
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-[#B3B3B3]">
                  {user.joined}
                </td>
                <td className="px-6 py-4 text-right font-mono text-white text-sm">
                  {user.balance}
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
    </div>
  );
}
