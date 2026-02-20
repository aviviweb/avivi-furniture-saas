"use client"

import { useState, useEffect } from "react"
import { Truck, MapPin, User, Clock, CheckCircle2, ChevronRight, Filter, Sparkles, Loader2, BrainCircuit, Plus, MoreVertical } from "lucide-react"
import { AIService } from "@/lib/ai"
import { WhatsAppService } from "@/lib/whatsapp-notifications"

type DeliveryStatus = 'pending' | 'scheduled' | 'in_transit' | 'delivered';

interface Delivery {
  id: string;
  customer_name: string;
  customer_address: string;
  customer_phone?: string;
  status: DeliveryStatus;
  driver_name?: string;
  scheduled_at?: string;
  ai_priority_score: number;
}

export default function LogisticsDashboard() {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [deliveries, setDeliveries] = useState<Delivery[]>([
    { 
      id: "1", 
      customer_name: "ישראל ישראלי", 
      customer_address: "הרצל 12, תל אביב", 
      customer_phone: "0501234567",
      status: 'in_transit', 
      driver_name: "אבי כהן",
      scheduled_at: "2026-02-20T14:30:00Z",
      ai_priority_score: 80
    },
    { 
      id: "2", 
      customer_name: "שרה לוי", 
      customer_address: "ויצמן 45, כפר סבא", 
      customer_phone: "0527654321",
      status: 'scheduled', 
      driver_name: "יוסי לוי",
      scheduled_at: "2026-02-20T16:00:00Z",
      ai_priority_score: 45
    },
    { 
      id: "3", 
      customer_name: "משה אברהם", 
      customer_address: "ההגנה 7, חיפה", 
      customer_phone: "0541112223",
      status: 'pending', 
      ai_priority_score: 95
    }
  ])

  useEffect(() => {
    // In a real app, we would fetch from Supabase here
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const handleAIOptimize = async () => {
    setIsOptimizing(true);
    // Transform data for AI
    const dataForAI = deliveries.map(d => ({
      id: d.id,
      ai_priority_score: d.ai_priority_score
    }));
    
    await AIService.optimizeRoute(dataForAI);
    
    // Simulating re-ordering
    const optimized = [...deliveries].sort((a, b) => b.ai_priority_score - a.ai_priority_score);
    setDeliveries(optimized);
    setIsOptimizing(false);
  };

  const handleStatusChange = async (id: string, newStatus: DeliveryStatus) => {
    const delivery = deliveries.find(d => d.id === id);
    if (!delivery) return;

    // Update local state
    setDeliveries(deliveries.map(d => 
      d.id === id ? { ...d, status: newStatus } : d
    ));

    // Send WhatsApp notification
    if (delivery.customer_phone) {
      await WhatsAppService.sendDeliveryUpdate(delivery.customer_name, delivery.customer_phone, newStatus);
    }
  };

  const getStatusColor = (status: DeliveryStatus) => {
    switch (status) {
      case 'in_transit': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'delivered': return 'bg-green-100 text-green-700 border-green-200';
      case 'scheduled': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  }

  const getStatusText = (status: DeliveryStatus) => {
    switch (status) {
      case 'in_transit': return 'בדרך ללקוח';
      case 'delivered': return 'נמסר';
      case 'scheduled': return 'תוזמן';
      default: return 'ממתין לשיבוץ';
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Truck className="text-blue-600" />
          ניהול לוגיסטיקה ומשלוחים
        </h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all font-bold text-sm">
            <Plus size={18} />
            משלוח חדש
          </button>
          <button 
            disabled={isOptimizing}
            onClick={handleAIOptimize}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl hover:opacity-90 transition-all shadow-md shadow-blue-100 text-sm font-bold disabled:opacity-50"
          >
            {isOptimizing ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Sparkles size={18} className="text-blue-200" />
            )}
            {isOptimizing ? 'ה-AI מחשב מסלול...' : 'תעדוף מסלול חכם (AI)'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 bg-blue-50 text-blue-500 rounded-bl-2xl">
            <BrainCircuit size={20} />
          </div>
          <div className="text-slate-500 text-xs font-black uppercase tracking-widest">ציון יעילות AI</div>
          <div className="text-3xl font-black text-slate-900 mt-2">94%</div>
          <div className="text-[10px] text-green-500 font-bold mt-1">שיפור של 12% מהמסלול המקורי</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-slate-500 text-xs font-black uppercase tracking-widest">זמן אספקה ממוצע</div>
          <div className="text-3xl font-black text-blue-600 mt-2">42 דק'</div>
          <div className="text-[10px] text-slate-400 font-bold mt-1">ליעד בודד כולל הרכבה</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-slate-500 text-xs font-black uppercase tracking-widest">שביעות רצון (AI Score)</div>
          <div className="text-3xl font-black text-indigo-600 mt-2">4.9/5</div>
          <div className="text-[10px] text-indigo-400 font-bold mt-1">מבוסס על משוב לקוחות אוטומטי</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <div className="font-black text-slate-700 text-sm uppercase tracking-wider">רשימת משלוחים לפי סדר אופטימלי</div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded">
              <Sparkles size={12} />
              מעודכן לפי AI
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <Filter size={18} />
            </button>
          </div>
        </div>
        
        <div className="divide-y divide-slate-100">
          {isLoading ? (
            <div className="p-20 flex flex-col items-center justify-center text-slate-400 gap-4">
              <Loader2 className="animate-spin" size={40} />
              <div className="font-bold">טוען נתוני לוגיסטיקה...</div>
            </div>
          ) : (
            deliveries.map((delivery, index) => (
              <div key={delivery.id} className="p-5 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 relative group">
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center font-black text-slate-400 text-xs">
                      {index + 1}
                    </div>
                    {index < deliveries.length - 1 && <div className="w-0.5 h-full bg-slate-100 my-1" />}
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-lg">{delivery.customer_name}</div>
                    <div className="flex items-center gap-1 text-sm text-slate-400 font-medium mt-0.5">
                      <MapPin size={14} className="text-blue-400" />
                      {delivery.customer_address}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-4 py-1.5 rounded-xl border border-slate-100 font-bold text-xs">
                    <User size={14} className="text-blue-500" />
                    {delivery.driver_name || "לא שובץ נהג"}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 font-bold text-xs bg-slate-50 px-3 py-1.5 rounded-xl">
                    <Clock size={14} className="text-indigo-400" />
                    {delivery.scheduled_at ? new Date(delivery.scheduled_at).toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' }) : "מחר"}
                  </div>
                  <div 
                    onClick={() => {
                      const nextStatus: Record<DeliveryStatus, DeliveryStatus> = {
                        'pending': 'scheduled',
                        'scheduled': 'in_transit',
                        'in_transit': 'delivered',
                        'delivered': 'pending'
                      };
                      handleStatusChange(delivery.id, nextStatus[delivery.status]);
                    }}
                    className={`px-4 py-1.5 rounded-xl border text-[10px] font-black uppercase tracking-tighter cursor-pointer hover:brightness-95 transition-all ${getStatusColor(delivery.status)}`}
                  >
                    {getStatusText(delivery.status)}
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-[10px] text-slate-400 font-black uppercase mb-0.5">ציון דחיפות</div>
                    <div className={`text-sm font-black ${delivery.ai_priority_score > 80 ? 'text-orange-500' : 'text-blue-500'}`}>
                      {delivery.ai_priority_score}%
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button className="bg-slate-100 p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                      <ChevronRight size={20} />
                    </button>
                    <button className="bg-slate-100 p-2 rounded-xl text-slate-400 hover:text-slate-600 transition-all md:hidden group-hover:block">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
