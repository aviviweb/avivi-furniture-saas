"use client"

import { useState } from "react"
import { Phone, Music, Send, MessageSquare, Play, Pause, Smartphone, Headphones, Zap } from "lucide-react"

export default function TelephonyDashboard() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
            <Phone className="text-indigo-600" />
            מרכזיה טלפונית חכמה (Smart IVR)
          </h2>
          <p className="text-sm text-slate-500 font-medium">הפוך כל שיחת טלפון להזדמנות מכירה דיגיטלית.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Jingle & Audio Settings */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
          <h3 className="text-xl font-black mb-6 flex items-center gap-2">
            <Music className="text-indigo-500" />
            ג'ינגל עסקי ופתיח קולי
          </h3>
          
          <div className="bg-slate-900 rounded-2xl p-6 text-white mb-6">
            <div className="flex items-center justify-between mb-4">
               <div className="text-xs font-black text-slate-400 uppercase tracking-widest">קובץ פעיל: Avivi_Jingle_v2.mp3</div>
               <span className="text-[10px] bg-blue-500 px-2 py-0.5 rounded font-bold">LIVE</span>
            </div>
            <div className="flex items-center gap-4">
               <button 
                 onClick={() => setIsPlaying(!isPlaying)}
                 className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-slate-100 transition-all"
               >
                 {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
               </button>
               <div className="flex-1 space-y-2">
                  <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-1/3" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500">
                     <span>0:12</span>
                     <span>0:34</span>
                  </div>
               </div>
            </div>
          </div>

          <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-sm hover:border-indigo-400 hover:text-indigo-500 transition-all">
             העלה ג'ינגל חדש
          </button>
        </div>

        {/* Call-to-Action Settings */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
          <h3 className="text-xl font-black mb-6 flex items-center gap-2">
            <Send className="text-indigo-500" />
            ניתוב אוטומטי להודעה (Call-to-Action)
          </h3>
          
          <div className="space-y-6">
             <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">הודעת וואטסאפ שתשלח למתקשר</label>
                <textarea 
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                  placeholder="כתוב כאן את ההודעה שהלקוח יקבל כשהוא מחייג לעסק..."
                  defaultValue="תודה שהתקשרת לאביבי רהיטים! 👋 לצפייה בקטלוג המלא שלנו, מעקב אחר הזמנה או שירות לקוחות מהיר בוואטסאפ, לחץ כאן: [LINK]"
                />
             </div>

             <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                <div className="flex items-center gap-3 text-indigo-700">
                   <Zap size={20} />
                   <span className="text-sm font-bold">זיהוי מספרים ניידים בלבד</span>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600 cursor-pointer">
                   <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-1">
               <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">שיחות שהתקבלו היום</div>
               <div className="text-3xl font-black text-slate-900">42</div>
            </div>
            <div className="space-y-1">
               <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">הודעות שנשלחו אוטומטית</div>
               <div className="text-3xl font-black text-indigo-600">38</div>
            </div>
            <div className="space-y-1">
               <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">יחס המרה (Call to Web)</div>
               <div className="text-3xl font-black text-green-600">90%</div>
            </div>
         </div>
      </div>
    </div>
  )
}
