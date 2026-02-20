"use client"

import { useState } from "react"
import { Trophy, TrendingUp, Users, Target, Award, Star, ArrowUpRight } from "lucide-react"

export default function SalesAgentDashboard() {
  const [agents] = useState([
    { id: 1, name: "דני כהן", sales: 124000, commission: 6200, points: 1450, rank: 1, trend: 'up' },
    { id: 2, name: "מיכל לוי", sales: 98000, commission: 4900, points: 1200, rank: 2, trend: 'up' },
    { id: 3, name: "איתי אברהם", sales: 85000, commission: 4250, points: 1100, rank: 3, trend: 'down' },
    { id: 4, name: "נועה זיו", sales: 72000, commission: 3600, points: 950, rank: 4, trend: 'up' },
  ])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Trophy className="text-yellow-500" />
          ביצועי סוכנים וגיימיפיקציה
        </h2>
        <div className="flex gap-2 bg-white p-1 rounded-xl border border-slate-100">
           <button className="px-4 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold shadow-sm">החודש</button>
           <button className="px-4 py-1.5 text-slate-500 rounded-lg text-xs font-bold hover:bg-slate-50">היום</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-6 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <Award className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10" />
            <div className="text-xs font-black uppercase tracking-widest opacity-80">מלך המכירות</div>
            <div className="text-2xl font-black mt-2">דני כהן</div>
            <div className="text-sm font-bold opacity-90 mt-1">₪124,000 מכירות חודשיות</div>
            <div className="mt-4 inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md">
               <Star size={12} fill="currentColor" />
               1,450 נקודות בונוס
            </div>
         </div>
         
         <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
               <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">יעד צוות חודשי</div>
               <div className="text-3xl font-black text-slate-900 mt-1">₪379,000</div>
            </div>
            <div className="mt-4">
               <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-500">התקדמות</span>
                  <span className="text-blue-600">76%</span>
               </div>
               <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '76%' }} />
               </div>
            </div>
         </div>

         <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">עמלות לתשלום (החודש)</div>
            <div className="text-4xl font-black text-green-600">₪18,950</div>
            <div className="text-[10px] text-slate-400 font-bold mt-2">ממוצע של ₪4,737 לסוכן</div>
         </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
           <h3 className="font-black text-slate-900">לוח תוצאות (Leaderboard)</h3>
        </div>
        <div className="divide-y divide-slate-50">
           {agents.map((agent) => (
             <div key={agent.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-5">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ${
                     agent.rank === 1 ? 'bg-yellow-100 text-yellow-600' : 
                     agent.rank === 2 ? 'bg-slate-100 text-slate-600' : 
                     agent.rank === 3 ? 'bg-orange-100 text-orange-600' : 'text-slate-300'
                   }`}>
                      {agent.rank}
                   </div>
                   <div>
                      <div className="font-black text-slate-900">{agent.name}</div>
                      <div className="text-xs text-slate-400 font-bold">{agent.points} נקודות</div>
                   </div>
                </div>

                <div className="flex items-center gap-12">
                   <div className="text-right">
                      <div className="text-[10px] text-slate-400 font-black uppercase">מכירות</div>
                      <div className="font-black text-slate-800">₪{agent.sales.toLocaleString()}</div>
                   </div>
                   <div className="text-right">
                      <div className="text-[10px] text-slate-400 font-black uppercase">עמלה</div>
                      <div className="font-black text-green-600">₪{agent.commission.toLocaleString()}</div>
                   </div>
                   <div className={`flex items-center gap-1 font-bold text-sm ${agent.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {agent.trend === 'up' ? <ArrowUpRight size={20} /> : <TrendingUp size={20} className="rotate-180" />}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  )
}
