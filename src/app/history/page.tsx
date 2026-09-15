import { Search, ArrowUpRight, ArrowDownRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function HistoryPage() {
  const transactions = [
    { id: 1, type: 'out', amount: '₦500', desc: 'Transport', time: 'Today, 4:30 PM', account: 'Business' },
    { id: 2, type: 'in', amount: '₦3,000', desc: 'Sales profit', time: 'Today, 2:15 PM', account: 'Business' },
    { id: 3, type: 'out', amount: '₦1,000', desc: 'Airtime', time: 'Yesterday', account: 'Personal' },
    { id: 4, type: 'out', amount: '₦2,500', desc: 'Lunch', time: 'Yesterday', account: 'Personal' },
    { id: 5, type: 'in', amount: '₦15,000', desc: 'Client payment', time: 'Mon, 10:00 AM', account: 'Business' },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Header */}
      <div className="px-5 pt-8 pb-4 bg-white shadow-sm z-10 sticky top-0">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 -ml-2 text-slate-400 hover:text-slate-800 transition-colors rounded-full hover:bg-slate-100">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold text-slate-800">History</h1>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search 'malt', 'fuel'..." 
            className="w-full bg-slate-100 text-slate-800 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Transaction List */}
      <div className="flex-1 overflow-y-auto px-5 py-4 pb-12">
        <h2 className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-4 mt-2 pl-1">Recent Transactions</h2>
        <div className="flex flex-col gap-3">
          {transactions.map(tx => (
            <div key={tx.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between active:scale-[0.98] transition-transform cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
                  tx.type === 'in' ? 'bg-emerald-50' : 'bg-orange-50'
                }`}>
                  {tx.type === 'in' ? (
                    <ArrowDownRight className={`w-5 h-5 ${tx.account === 'Business' ? 'text-emerald-500' : 'text-orange-500'}`} />
                  ) : (
                    <ArrowUpRight className={`w-5 h-5 ${tx.account === 'Business' ? 'text-emerald-500' : 'text-orange-500'}`} />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 leading-tight">{tx.desc}</p>
                  <p className="text-[13px] text-slate-400 mt-1 font-medium">{tx.time} &middot; <span className={tx.account === 'Business' ? 'text-emerald-600/70' : 'text-orange-500/70'}>{tx.account}</span></p>
                </div>
              </div>
              <div className={`font-bold text-lg tracking-tight ${tx.type === 'in' ? 'text-emerald-600' : 'text-slate-800'}`}>
                {tx.type === 'in' ? '+' : '-'}{tx.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
