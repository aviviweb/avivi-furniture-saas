"use client"

import { useState } from "react"
import { 
  Users, 
  Settings, 
  CreditCard, 
  Power, 
  PowerOff, 
  Mail, 
  Globe, 
  FileText, 
  AlertCircle,
  TrendingUp,
  Search,
  Plus,
  Bell,
  MessageSquare,
  Activity
} from "lucide-react"

export default function SuperAdminDashboard() {
  const [tenants, setTenants] = useState([
    { 
      id: "1", 
      name: "רהיטי אביבי", 
      email: "info@avivi.com", 
      status: 'active', 
      subscription: 'Pro', 
      nextBilling: '2026-03-01',
      revenue: 45000,
      deliveries: 124
    },
    { 
      id: "2", 
      name: "גלריית הרהיט", 
      email: "contact@furniture-gal.co.il", 
      status: 'inactive', 
      subscription: 'Basic', 
      nextBilling: '2026-02-15',
      revenue: 12000,
      deliveries: 32
    }
  ])

  const toggleStatus = (id: string) => {
    setTenants(tenants.map(t => 
      t.id === id ? { ...t, status: t.status === 'active' ? 'inactive' : 'active' } : t
    ))
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-10 px-6 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900">לוח בקרה סופר אדמין</h1>
          <p className="text-slate-500 font-medium">ניהול גלובלי של כל עסקי ה-Furniture SaaS</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 p-2.5 rounded-xl text-slate-500 hover:bg-slate-50 relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">
            <Plus size={20} />
            הוסף עסק חדש
          </button>
        </div>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">סה"כ עסקים</div>
          <div className="text-3xl font-black text-slate-900">{tenants.length}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1 text-green-600">הכנסה חודשית (MRR)</div>
          <div className="text-3xl font-black text-slate-900">₪5,400</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1 text-blue-600">סה"כ משלוחים במערכת</div>
          <div className="text-3xl font-black text-slate-900">156</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1 text-orange-600">חשבוניות ממתינות</div>
          <div className="text-3xl font-black text-slate-900">2</div>
        </div>
      </div>

      {/* Tenants Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white/50 backdrop-blur-sm">
          <div className="relative w-80">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="חיפוש עסק, אימייל או מזהה..." className="w-full pr-12 pl-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-600">ייצוא נתונים</button>
          </div>
        </div>

        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="text-[11px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50">
              <th className="px-8 py-5 border-b border-slate-100">שם העסק ופרטים</th>
              <th className="px-8 py-5 border-b border-slate-100">סטטוס מנוי</th>
              <th className="px-8 py-5 border-b border-slate-100">פעילות (30 יום)</th>
              <th className="px-8 py-5 border-b border-slate-100">תשלום הבא</th>
              <th className="px-8 py-5 border-b border-slate-100 text-left">פעולות ניהול</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {tenants.map((tenant) => (
              <tr key={tenant.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all">
                      <Settings size={24} />
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-lg">{tenant.name}</div>
                      <div className="flex items-center gap-1.5 text-sm text-slate-400 font-medium">
                        <Mail size={14} />
                        {tenant.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex flex-col gap-1.5">
                    <span className={`w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      tenant.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {tenant.status === 'active' ? 'פעיל ומחובר' : 'מנותק / מושהה'}
                    </span>
                    <span className="text-xs text-slate-500 font-bold">חבילת {tenant.subscription}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4 text-sm font-bold text-slate-700">
                    <div className="flex items-center gap-1">
                      <TrendingUp size={14} className="text-green-500" />
                      ₪{tenant.revenue.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1 text-slate-400">
                      <Activity size={14} />
                      {tenant.deliveries}
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 font-black text-slate-700">
                  {tenant.nextBilling}
                  {new Date(tenant.nextBilling) < new Date() && (
                    <div className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle size={10} /> תשלום באיחור!
                    </div>
                  )}
                </td>
                <td className="px-8 py-6 text-left">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all" title="הגדרות ואיפיון">
                      <Settings size={20} />
                    </button>
                    <button className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all" title="חשבוניות ותשלומים">
                      <CreditCard size={20} />
                    </button>
                    <button 
                      onClick={() => toggleStatus(tenant.id)}
                      className={`p-2.5 rounded-xl transition-all ${
                        tenant.status === 'active' ? 'text-red-400 hover:text-red-600 hover:bg-red-50' : 'text-green-400 hover:text-green-600 hover:bg-green-50'
                      }`} 
                      title={tenant.status === 'active' ? 'נתק גישה' : 'חבר גישה'}
                    >
                      {tenant.status === 'active' ? <PowerOff size={20} /> : <Power size={20} />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* System Health & Logs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-black mb-6 flex items-center gap-2">
            <Activity className="text-blue-500" />
            לוג פעילות מערכת
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex gap-4 items-start pb-4 border-b border-slate-50 last:border-0">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-800">עדכון הגדרות בחנות "רהיטי אביבי"</p>
                  <p className="text-xs text-slate-400 mt-1">לפני 15 דקות · בוצע ע"י Super Admin</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl text-white shadow-xl">
          <h3 className="text-lg font-black mb-6 flex items-center gap-2">
            <MessageSquare className="text-blue-400" />
            מרכז תמיכה ופתרון תקלות
          </h3>
          <div className="space-y-4">
             <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <div className="text-xs font-black text-blue-400 uppercase tracking-widest mb-1">פנייה פתוחה</div>
                <div className="text-sm font-medium">בעיה בסנכרון ה-AI בחנות "גלריית הרהיט"</div>
                <button className="mt-3 text-xs font-bold bg-white text-slate-900 px-3 py-1.5 rounded-lg">טפל עכשיו</button>
             </div>
             <p className="text-xs text-slate-500 leading-relaxed italic">
               טיפ: השתמש בכלי ה-Troubleshooting האוטומטי כדי לסרוק את הגדרות ה-Supabase של הלקוח במידה ויש בעיית גישה.
             </p>
          </div>
        </div>
      </div>
    </div>
  )
}
