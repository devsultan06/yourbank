"use client";

import {
  Search,
  Filter,
  MoreHorizontal,
  Shield,
  UserX,
  CheckCircle,
} from "lucide-react";

export default function UserManagementPage() {
  const users = [
    {
      id: 1,
      name: "Alice Freeman",
      email: "alice@example.com",
      status: "Active",
      joined: "Oct 24, 2025",
      balance: "$12,450.00",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      status: "Suspended",
      joined: "Nov 12, 2025",
      balance: "$450.00",
    },
    {
      id: 3,
      name: "Charlie Day",
      email: "charlie@example.com",
      status: "Active",
      joined: "Dec 01, 2025",
      balance: "$34,120.50",
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "diana@example.com",
      status: "Pending KYC",
      joined: "Jan 15, 2026",
      balance: "$0.00",
    },
    {
      id: 5,
      name: "Eve Polastri",
      email: "eve@example.com",
      status: "Active",
      joined: "Jan 20, 2026",
      balance: "$8,900.00",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            User Management
          </h1>
          <p className="text-[#B3B3B3]">
            Monitor and manage customer accounts.
          </p>
        </div>
        <button className="bg-primary text-black px-4 py-2 rounded-lg font-bold text-sm">
          + Add User
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 bg-[#1C1C1C] p-4 rounded-xl border border-[#262626]">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#59595A]"
            size={18}
          />
          <input
            type="text"
            placeholder="Search users by name, email, ID..."
            className="w-full bg-[#141414] border border-[#333] rounded-lg py-2 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#333] rounded-lg text-white text-sm hover:bg-[#222]">
          <Filter size={16} /> Filters
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#141414] text-[#B3B3B3] text-sm font-medium">
            <tr>
              <th className="p-6">User</th>
              <th className="p-6">Status</th>
              <th className="p-6">Joined</th>
              <th className="p-6">Balance</th>
              <th className="p-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#262626]">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-[#222] transition-colors group"
              >
                <td className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-medium">{user.name}</p>
                      <p className="text-[#59595A] text-xs">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      user.status === "Active"
                        ? "bg-green-500/10 text-green-500"
                        : user.status === "Suspended"
                          ? "bg-red-500/10 text-red-500"
                          : "bg-yellow-500/10 text-yellow-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-6 text-[#B3B3B3] text-sm">{user.joined}</td>
                <td className="p-6 text-white font-medium">{user.balance}</td>
                <td className="p-6 text-right">
                  <button className="text-[#59595A] hover:text-white p-2">
                    <MoreHorizontal size={20} />
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
