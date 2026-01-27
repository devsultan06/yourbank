"use client";

import {
  Users,
  DollarSign,
  AlertCircle,
  TrendingUp,
  Activity,
} from "lucide-react";

export default function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Users */}
      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Users size={24} />
            </div>
            <span className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
              <TrendingUp size={12} /> +12%
            </span>
          </div>
          <p className="text-[#B3B3B3] text-sm mb-1">Total Users</p>
          <h3 className="text-3xl font-bold text-white">24,592</h3>
        </div>
      </div>

      {/* Revenue */}
      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <DollarSign size={24} />
            </div>
            <span className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
              <TrendingUp size={12} /> +8.4%
            </span>
          </div>
          <p className="text-[#B3B3B3] text-sm mb-1">Total Revenue</p>
          <h3 className="text-3xl font-bold text-white">$1.2M</h3>
        </div>
      </div>

      {/* Active Disputes */}
      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/20 transition-colors"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
              <AlertCircle size={24} />
            </div>
            <span className="bg-red-500/10 text-red-500 text-xs font-bold px-2 py-1 rounded-lg">
              Action Req.
            </span>
          </div>
          <p className="text-[#B3B3B3] text-sm mb-1">Active Disputes</p>
          <h3 className="text-3xl font-bold text-white">23</h3>
        </div>
      </div>

      {/* System Health */}
      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-colors"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Activity size={24} />
            </div>
            <span className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded-lg">
              Healthy
            </span>
          </div>
          <p className="text-[#B3B3B3] text-sm mb-1">Server Uptime</p>
          <h3 className="text-3xl font-bold text-white">99.99%</h3>
        </div>
      </div>
    </div>
  );
}
