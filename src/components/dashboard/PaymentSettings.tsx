"use client"

import { useState } from "react"
import { CreditCard, ShieldCheck, Key, FileText, CheckCircle2 } from "lucide-react"

export default function PaymentSettings() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
            <CreditCard size={24} />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-800">הגדרות סליקה וחשבוניות (PayPlus)</h3>
            <p className="text-sm text-slate-500 font-medium">חבר את חשבון ה-PayPlus שלך כדי להתחיל לקבל תשלומים ולהפיק חשבוניות אוטומטיות.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">מפתח API (API Key)</label>
            <div className="relative">
              <Key className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input type="password" placeholder="הזן את המפתח שקיבלת מ-PayPlus" className="w-full pr-10 pl-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">מזהה מסוף (Terminal ID)</label>
            <input type="text" placeholder="למשל: 12345" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          </div>
        </div>

        <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
             <ShieldCheck className="text-green-500" size={18} />
             הגדרות חשבוניות אוטומטיות
          </div>
          <div className="flex items-center gap-3">
             <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" defaultChecked />
             <span className="text-sm text-slate-600">הפק חשבונית מס/קבלה באופן אוטומטי לאחר כל תשלום מוצלח.</span>
          </div>
          <div className="flex items-center gap-3">
             <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" defaultChecked />
             <span className="text-sm text-slate-600">שלח את החשבונית אוטומטית למייל של הלקוח.</span>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
           <button 
             onClick={() => {
                setIsSaved(true);
                setTimeout(() => setIsSaved(false), 3000);
             }}
             className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
           >
              {isSaved ? <CheckCircle2 size={20} /> : <FileText size={20} />}
              {isSaved ? 'ההגדרות נשמרו!' : 'שמור הגדרות תשלום'}
           </button>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex items-start gap-4">
         <div className="text-blue-500 mt-1">
            <CheckCircle2 size={24} />
         </div>
         <div>
            <h4 className="font-bold text-blue-800 text-sm">למה כדאי לחבר את PayPlus?</h4>
            <ul className="mt-2 text-sm text-blue-600 space-y-1 list-disc list-inside">
               <li>סליקה של bit, Apple Pay ו-Google Pay באופן מובנה.</li>
               <li>עמידה בתקני האבטחה המחמירים ביותר (PCI-DSS).</li>
               <li>חיסכון בזמן על הפקה ידנית של חשבוניות.</li>
            </ul>
         </div>
      </div>
    </div>
  )
}
