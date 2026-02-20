"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone, Package, CheckCircle, Navigation, Clock, ChevronLeft, Loader2, PenTool, Camera, X } from "lucide-react"
import { WhatsAppService } from "@/lib/whatsapp-notifications"

interface Stop {
  id: string;
  customer_name: string;
  customer_address: string;
  customer_phone: string;
  items: string[];
  task_type: string;
  status: 'pending' | 'in_progress' | 'completed';
  time_window: string;
}

export default function DriverDashboard() {
  const [activeStopIdx, setActiveStopIdx] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [showSignature, setShowSignature] = useState(false)
  const [showFaultReport, setShowFaultReport] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [stops, setStops] = useState<Stop[]>([
    {
      id: "S1",
      customer_name: "ישראל ישראלי",
      customer_address: "הרצל 12, תל אביב",
      customer_phone: "0501234567",
      items: ["ספת עור 3 מושבים", "שולחן סלון"],
      task_type: "הובלה והרכבה",
      status: "in_progress",
      time_window: "14:00 - 16:00"
    },
    {
      id: "S2",
      customer_name: "שרה לוי",
      customer_address: "ויצמן 45, כפר סבא",
      customer_phone: "0527654321",
      items: ["ארון בגדים 4 דלתות"],
      task_type: "הרכבה בלבד",
      status: "pending",
      time_window: "16:30 - 18:30"
    }
  ])

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1200);
  }, []);

  const handleStartDrive = async (idx: number) => {
    const updatedStops = [...stops];
    updatedStops[idx].status = 'in_progress';
    setStops(updatedStops);
    await WhatsAppService.sendDeliveryUpdate(updatedStops[idx].customer_name, updatedStops[idx].customer_phone, 'in_transit');
  };

  const handleCompleteTask = async () => {
    setIsProcessing(true);
    const updatedStops = [...stops];
    updatedStops[activeStopIdx].status = 'completed';
    setStops(updatedStops);
    
    // Simulate PDF generation and WhatsApp send
    await WhatsAppService.sendSignatureConfirmation(
      currentStop.customer_name, 
      currentStop.customer_phone, 
      "https://storage.avivi.co.il/receipts/r_8892.pdf"
    );

    // Schedule rating request (mock)
    setTimeout(() => {
      WhatsAppService.sendRatingRequest(currentStop.customer_name, currentStop.customer_phone);
    }, 2000);

    setIsProcessing(false);
    setShowSignature(false);
    
    if (activeStopIdx < stops.length - 1) {
      setActiveStopIdx(activeStopIdx + 1);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 gap-4">
        <Loader2 className="animate-spin text-blue-600" size={48} />
        <div className="font-black text-slate-400 uppercase tracking-tighter">טוען מסלול נסיעה...</div>
      </div>
    );
  }

  const currentStop = stops[activeStopIdx]

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">המשלוחים שלי</h2>
          <div className="bg-blue-500 px-3 py-1 rounded-full text-xs font-bold">היום, 20 בפברואר</div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {stops.map((stop, idx) => (
            <div 
              key={stop.id}
              onClick={() => setActiveStopIdx(idx)}
              className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all cursor-pointer ${activeStopIdx === idx ? 'bg-white text-blue-600 border-white scale-110' : stop.status === 'completed' ? 'bg-green-500 text-white border-green-400' : 'bg-blue-500 text-blue-100 border-blue-400'}`}
            >
              {stop.status === 'completed' ? <CheckCircle size={20} /> : idx + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Current Stop Card */}
      <div className="px-4 -mt-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded">עצירה {activeStopIdx + 1}</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">{currentStop.customer_name}</h3>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-bold ${currentStop.status === 'in_progress' ? 'bg-blue-100 text-blue-600' : currentStop.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
              {currentStop.status === 'in_progress' ? 'בטיפול' : currentStop.status === 'completed' ? 'הושלם' : 'ממתין'}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-blue-600">
                <MapPin size={18} />
              </div>
              <div className="flex-1 text-right">
                <div className="text-xs text-slate-400 font-medium">כתובת</div>
                <div className="font-bold text-sm leading-tight">{currentStop.customer_address}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-blue-600">
                <Phone size={18} />
              </div>
              <div className="flex-1 text-right">
                <div className="text-xs text-slate-400 font-medium">טלפון</div>
                <div className="font-bold text-sm">{currentStop.customer_phone}</div>
              </div>
              <a href={`tel:${currentStop.customer_phone}`} className="bg-green-50 p-2 rounded-lg text-green-600">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-50">
             <button 
               onClick={() => setShowFaultReport(true)}
               className="flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl text-sm font-bold border border-red-100"
             >
               <Camera size={18} />
               דווח על פגם
             </button>
             <button className="flex items-center justify-center gap-2 bg-slate-50 text-slate-600 py-3 rounded-xl text-sm font-bold border border-slate-100">
               <Navigation size={18} />
               ניווט ליעד
             </button>
          </div>
        </div>
      </div>

      {/* Items Section */}
      <div className="px-4 mt-6">
        <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3 px-2 text-right">פריטים להפצה</h4>
        <div className="space-y-2">
          {currentStop.items.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-slate-400">
                <Package size={20} />
              </div>
              <div className="font-bold text-slate-800 text-sm flex-1 text-right">{item}</div>
              <div className="mr-auto">
                <div className={`w-6 h-6 rounded-full border-2 transition-colors ${currentStop.status === 'completed' ? 'bg-green-500 border-green-500' : 'border-slate-200'}`}>
                  <CheckCircle size={16} className={currentStop.status === 'completed' ? 'text-white' : 'text-slate-100'} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      {currentStop.status !== 'completed' && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-100 z-10">
          <button 
            onClick={() => currentStop.status === 'in_progress' ? setShowSignature(true) : handleStartDrive(activeStopIdx)}
            className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-200 flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            {currentStop.status === 'in_progress' ? (
              <>
                <PenTool size={24} />
                סיום וחתימת לקוח
              </>
            ) : (
              <>
                <Navigation size={24} />
                התחל נסיעה ליעד
              </>
            )}
          </button>
        </div>
      )}

      {/* Digital Signature Modal */}
      {showSignature && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-3xl overflow-hidden animate-in slide-in-from-bottom duration-300">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-black text-lg">חתימה דיגיטלית</h3>
              <button onClick={() => setShowSignature(false)}><X size={24} className="text-slate-400" /></button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-sm text-slate-500 text-right">אני מאשר כי קיבלתי את כל המוצרים לשביעות רצוני המלאה.</p>
              <div className="w-full h-48 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-300">
                <PenTool size={32} className="mb-2" />
                <span className="text-xs font-bold uppercase tracking-widest">חתום כאן</span>
              </div>
              <button 
                disabled={isProcessing}
                onClick={handleCompleteTask}
                className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2"
              >
                {isProcessing ? <Loader2 className="animate-spin" /> : <CheckCircle size={20} />}
                אשר ושלח אישור ללקוח
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fault Report Modal (AI Mock) */}
      {showFaultReport && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-3xl overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-black text-lg">דיווח על פגם (AI)</h3>
              <button onClick={() => setShowFaultReport(false)}><X size={24} className="text-slate-400" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="aspect-square bg-slate-100 rounded-2xl flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200">
                <Camera size={40} className="mb-2" />
                <span className="font-bold text-sm">צלם את הפגם</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <p className="text-xs text-blue-700 font-bold leading-relaxed text-right">
                  ה-AI שלנו ינתח את הצילום, יזהה את החלק הפגום ויפתח אוטומטית קריאת שירות למחסן.
                </p>
              </div>
              <button 
                onClick={() => setShowFaultReport(false)}
                className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl"
              >
                סרוק ודווח
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
