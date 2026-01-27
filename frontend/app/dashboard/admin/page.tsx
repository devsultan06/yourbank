"use client";

import AdminStats from "@/components/dashboard/admin/AdminStats";
import UserTable from "@/components/dashboard/admin/UserTable";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Admin Command Center
        </h1>
        <p className="text-[#B3B3B3]">
          Overview of platform performance and recent alerts.
        </p>
      </div>

      <AdminStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-4">
            Priority User Alerts
          </h2>
          <UserTable />
          {/* Note: In a real app we might pass a filter prop to show only 'flagged' users here */}
        </div>

        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 h-fit">
          <h2 className="text-xl font-bold text-white mb-4">System Health</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-[#141414] rounded-xl border border-[#333]">
              <span className="text-[#B3B3B3]">API Latency</span>
              <span className="text-green-500 font-bold">45ms</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#141414] rounded-xl border border-[#333]">
              <span className="text-[#B3B3B3]">Database CPU</span>
              <span className="text-white font-bold">12%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#141414] rounded-xl border border-[#333]">
              <span className="text-[#B3B3B3]">Active Sessions</span>
              <span className="text-white font-bold">1,240</span>
            </div>
            <div className="mt-4 pt-4 border-t border-[#333]">
              <button className="w-full bg-primary text-black font-bold py-2 rounded-lg hover:opacity-90">
                Run Diagnostics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
