"use client"

import { useState } from "react"
import { MessageSquare, Bell, Clock, CheckCircle2, Send, Zap, Settings2 } from "lucide-react"

export default function AutomationDashboard() {
  const [automations, setAutomations] = useState([
    { id: 1, title: "תזכורת משלוח בבוקר", trigger: "בוקר יום המשלוח", enabled: true, icon: <Clock size={20} /> },
    { id: 2, title: "הודעת 'המוביל בדרך'", trigger: "שינוי סטטוס ל'בדרך'", enabled: true, icon: <Send size={20} /> },
    { id: 3, title: "מדריך הרכבה אוטומטי", trigger: "לאחר מסירת המוצר", enabled: false, icon: <Zap size={20} /> },
    { id: 4, title: "בקשת משוב (Feedback)", trigger: "24 שעות לאחר מסירה", enabled: true, icon: <MessageSquare size={20} /> },
  ])

  const toggleAutomation = (id: number) => {
    setAutomations(automations.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a))
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
            <Bell className="text-blue-600" />
            אוטומציות ותזכורות וואטסאפ
          </h2>
          <p className="text-sm text-slate-500 font-medium">נהל את התקשורת האוטומטית מול הלקוחות שלך בזמן אמת.</p>
        </div>
      </div>

      {/* Automation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {automations.map((auto) => (
          <div key={auto.id} className={`bg-white p-6 rounded-3xl border transition-all ${auto.enabled ? 'border-blue-200 shadow-lg shadow-blue-50' : 'border-slate-100 opacity-70'}`}>
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl ${auto.enabled ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {auto.icon}
              </div>
              <button 
                onClick={() => toggleAutomation(auto.id)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${auto.enabled ? 'bg-blue-600' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${auto.enabled ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-1">{auto.title}</h3>
            <p className="text-xs text-slate-500 font-medium mb-4">טריגר: {auto.trigger}</p>
            
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-4">
               <div className="text-[10px] text-slate-400 font-black uppercase mb-2 tracking-widest">תצוגה מקדימה של ההודעה</div>
               <p className="text-sm text-slate-700 leading-relaxed italic">
                 "היי [שם הלקוח]! 👋 תזכורת מהחנות: המשלוח שלך מתוזמן להיום בין השעות [זמן]. המוביל שלנו כבר בדרך..."
               </p>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-tighter cursor-pointer hover:underline">
               <Settings2 size={12} /> ערוך תוכן ותנאי שליחה
            </div>
          </div>
        ))}
      </div>

      {/* Global Status Card */}
      <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-600/20 to-transparent" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-xl font-black mb-2">המערכת פועלת באופן אוטונומי</h3>
            <p className="text-slate-400 text-sm max-w-md">ה-AI שלנו מזהה שינויי סטטוס ושולח הודעות ללקוחות באופן אוטומטי. חסכת לעצמך כ-12 שעות עבודה שבועיות בתיאומים.</p>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
               <div className="text-2xl font-black">156</div>
               <div className="text-[10px] text-slate-500 uppercase font-black">הודעות נשלחו היום</div>
            </div>
            <div className="w-px h-10 bg-slate-700 mx-2" />
            <div className="text-center">
               <div className="text-2xl font-black text-green-400">99.2%</div>
               <div className="text-[10px] text-slate-500 uppercase font-black">אחוז מסירה</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
