"use client";

import { FileText, Download, Plus } from "lucide-react";

export default function InvoicesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Invoices</h1>
          <p className="text-[#B3B3B3]">Manage and pay your bills.</p>
        </div>
        <button className="bg-primary text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2">
          <Plus size={18} /> Create Invoice
        </button>
      </div>

      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-[#262626] rounded-full flex items-center justify-center text-[#59595A] mb-4">
          <FileText size={32} />
        </div>
        <h3 className="text-white font-bold text-xl mb-2">No Open Invoices</h3>
        <p className="text-[#B3B3B3] max-w-sm mb-6">
          You don't have any pending invoices to pay or send. Create one to get
          started.
        </p>
        <button className="text-primary hover:underline">
          View Past Invoices
        </button>
      </div>
    </div>
  );
}
