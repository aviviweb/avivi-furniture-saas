"use client"

import { useState } from "react"
import { MessageSquare, User, Bot, Send, Search, CheckCircle2, AlertCircle } from "lucide-react"

export default function CustomerServiceDashboard() {
  const [chats, setChats] = useState([
    { id: 1, customer: "ישראל ישראלי", lastMsg: "איפה הספה שלי?", time: "10:30", status: 'ai_handled', unread: false },
    { id: 2, customer: "שרה לוי", lastMsg: "צריכה עזרה עם ההרכבה", time: "11:15", status: 'needs_human', unread: true },
    { id: 3, customer: "משה אברהם", lastMsg: "תודה על השירות!", time: "09:45", status: 'ai_handled', unread: false },
  ])

  return (
    <div className="flex flex-col md:flex-row h-[600px] bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Sidebar - Chat List */}
      <div className="w-full md:w-80 border-l border-slate-200 flex flex-col bg-slate-50">
        <div className="p-4 border-b border-slate-200 bg-white">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="חפש לקוח..." 
              className="w-full pr-10 pl-4 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
          {chats.map((chat) => (
            <div key={chat.id} className={`p-4 hover:bg-white transition-colors cursor-pointer relative ${chat.unread ? 'bg-blue-50/30' : ''}`}>
              {chat.unread && <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500" />}
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-slate-900 text-sm">{chat.customer}</span>
                <span className="text-[10px] text-slate-400">{chat.time}</span>
              </div>
              <div className="text-xs text-slate-500 truncate">{chat.lastMsg}</div>
              <div className="mt-2 flex items-center gap-1.5">
                {chat.status === 'ai_handled' ? (
                  <span className="flex items-center gap-1 text-[9px] font-black text-green-600 bg-green-50 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    <Bot size={10} />
                    טופל ע"י AI
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[9px] font-black text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    <AlertCircle size={10} />
                    ממתין לנציג
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              שי
            </div>
            <div>
              <div className="font-bold text-slate-900">ישראל ישראלי</div>
              <div className="text-xs text-green-500 font-bold">מחובר כעת</div>
            </div>
          </div>
          <button className="text-xs font-bold text-blue-600 hover:underline">צפה בפרטי הזמנה</button>
        </div>

        {/* Messages Placeholder */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/50">
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm border border-slate-100 max-w-[80%] text-sm text-slate-800">
              היי, איפה הספה שלי? היא הייתה אמורה להגיע היום בבוקר.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tl-none shadow-md max-w-[80%] text-sm relative">
              <div className="absolute -top-6 right-0 text-[10px] text-slate-400 font-black uppercase flex items-center gap-1">
                <Bot size={12} /> מענה אוטונומי (AI)
              </div>
              היי ישראל! בדקתי במערכת, וההזמנה שלך (ספת עור 3 מושבים) נמצאת כרגע בדרכה אליך עם המוביל אבי. זמן הגעה משוער: עוד כ-20 דקות. תרצה שאשלח לך קישור למעקב חי?
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-200">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="כתוב הודעה ללקוח..." 
              className="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors">
              <Send size={20} />
            </button>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 text-center">ה-AI ימשיך לענות אוטומטית אלא אם תתערב בשיחה.</p>
        </div>
      </div>
    </div>
  )
}
