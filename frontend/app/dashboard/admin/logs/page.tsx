"use client";

import { Terminal, Clock, Server, AlertCircle } from "lucide-react";

export default function AdminLogsPage() {
  const logs = [
    {
      id: 1,
      type: "INFO",
      message: "User login successful: alice@example.com",
      time: "10:23:45 AM",
      source: "AuthService",
    },
    {
      id: 2,
      type: "WARN",
      message: "High latency detected on API Gateway",
      time: "10:22:15 AM",
      source: "Infrastructure",
    },
    {
      id: 3,
      type: "ERROR",
      message: "Payment Gateway Timeout (Transaction #9821)",
      time: "10:20:00 AM",
      source: "PaymentService",
    },
    {
      id: 4,
      type: "INFO",
      message: "New user registration: diana@example.com",
      time: "10:15:30 AM",
      source: "AuthService",
    },
    {
      id: 5,
      type: "INFO",
      message: "Scheduled maintenance completed",
      time: "09:00:00 AM",
      source: "System",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-2">Platform Logs</h1>

      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 lg:p-8 font-mono text-sm">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#333]">
          <Terminal className="text-primary" size={20} />
          <span className="text-white font-bold">System Console Stream</span>
          <span className="ml-auto flex items-center gap-2 text-green-500 text-xs">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Live
          </span>
        </div>

        <div className="space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar">
          {logs.map((log) => (
            <div
              key={log.id}
              className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 hover:bg-[#222] p-2 rounded transition-colors"
            >
              <span className="text-[#59595A] w-24 flex-shrink-0">
                {log.time}
              </span>
              <span
                className={`w-16 flex-shrink-0 font-bold ${
                  log.type === "INFO"
                    ? "text-blue-500"
                    : log.type === "WARN"
                      ? "text-yellow-500"
                      : "text-red-500"
                }`}
              >
                [{log.type}]
              </span>
              <span className="text-white flex-1">{log.message}</span>
              <span className="text-[#B3B3B3] text-xs bg-[#141414] px-2 py-1 rounded border border-[#333]">
                {log.source}
              </span>
            </div>
          ))}
          <div className="pt-4 text-[#59595A] text-xs animate-pulse">
            Waiting for new logs...
          </div>
        </div>
      </div>
    </div>
  );
}
