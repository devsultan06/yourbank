import TransactionTable from "@/components/dashboard/transactions/TransactionTable";

export default function TransactionsPage() {
  return (
    <div className="space-y-6 h-[calc(100vh-140px)] flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Transactions
          </h1>
          <p className="text-[#B3B3B3]">
            View and manage all your incoming and outgoing payments.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#262626] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#333] transition-colors border border-transparent hover:border-[#404040]">
            Download CSV
          </button>
          <button className="bg-primary text-black px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-opacity-90 transition-colors">
            New Transfer
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 min-h-0">
        <TransactionTable />
      </div>
    </div>
  );
}
