"use client"

import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Truck, 
  DollarSign, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  PieChart as PieChartIcon
} from "lucide-react"

export default function AnalyticsDashboard() {
  const stats = [
    { label: "הכנסות החודש", value: "₪128,400", change: "+12.5%", trendingUp: true, icon: <DollarSign size={20} /> },
    { label: "משלוחים שהושלמו", value: "342", change: "+5.2%", trendingUp: true, icon: <Truck size={20} /> },
    { label: "זמן אספקה ממוצע", value: "2.4 ימים", change: "-10%", trendingUp: true, icon: <Calendar size={20} /> },
    { label: "דירוג שביעות רצון", value: "4.9/5", change: "+0.2", trendingUp: true, icon: <Users size={20} /> },
  ]

  const topProducts = [
    { name: "ספת עור יוקרתית", sales: 45, revenue: "₪202,500" },
    { name: "שולחן אוכל מעץ אלון", sales: 32, revenue: "₪89,600" },
    { name: "שידת לילה וינטג'", sales: 28, revenue: "₪14,000" },
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
            <BarChart3 className="text-blue-600" />
            דוחות ואנליטיקה
          </h2>
          <p className="text-sm text-slate-500 font-medium">סקירה כוללת של ביצועי העסק והמכירות שלך.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                {stat.icon}
              </div>
              <div className={`flex items-center gap-1 text-xs font-black ${stat.trendingUp ? 'text-green-500' : 'text-red-500'}`}>
                {stat.trendingUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
            <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</div>
            <div className="text-2xl font-black text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Chart Placeholder */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-[400px]">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <TrendingUp size={20} className="text-blue-500" />
            מגמת מכירות חודשית
          </h3>
          <div className="flex-1 bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-sm italic">
            [גרף מכירות אינטראקטיבי יופיע כאן]
          </div>
        </div>

        {/* Top Products Table */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <PieChartIcon size={20} className="text-blue-500" />
            המוצרים הכי נמכרים
          </h3>
          <div className="space-y-6">
            {topProducts.map((product, idx) => (
              <div key={idx} className="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-xs font-black text-slate-500">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{product.name}</div>
                    <div className="text-xs text-slate-400 font-medium">{product.sales} מכירות</div>
                  </div>
                </div>
                <div className="text-sm font-black text-slate-700">{product.revenue}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-sm font-black text-blue-600 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all uppercase tracking-tighter">
            צפה בדו"ח מלאי ומכירות מלא
          </button>
        </div>
      </div>
    </div>
  )
}
