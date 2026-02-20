import ProductDashboard from "@/components/dashboard/ProductDashboard";
import LogisticsDashboard from "@/components/dashboard/LogisticsDashboard";
import CustomerServiceDashboard from "@/components/dashboard/CustomerServiceDashboard";
import InventoryDashboard from "@/components/dashboard/InventoryDashboard";
import PaymentSettings from "@/components/dashboard/PaymentSettings";
import AutomationDashboard from "@/components/dashboard/AutomationDashboard";
import AnalyticsDashboard from "@/components/dashboard/AnalyticsDashboard";
import AdvancedFeaturesDashboard from "@/components/dashboard/AdvancedFeaturesDashboard";
import TelephonyDashboard from "@/components/dashboard/TelephonyDashboard";
import { useState } from "react";

export default function TenantPage({ params }: { params: { slug: string } }) {
  // Simple tab management for the prototype
  const [activeTab, setActiveTab] = useState<'products' | 'logistics' | 'support' | 'inventory' | 'payments' | 'automations' | 'analytics' | 'advanced' | 'telephony'>('telephony');

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <header className="mb-8 text-right flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">ניהול חנות: {params.slug}</h1>
          <p className="text-slate-500 mt-1">ברוך הבא למערכת הניהול שלך. הכל תחת שליטה.</p>
        </div>
        
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 overflow-x-auto max-w-full">
          <button 
            onClick={() => setActiveTab('telephony')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'telephony' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            טלפוניה חכמה 📞
          </button>
          <button 
            onClick={() => setActiveTab('advanced')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'advanced' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            פיצ'רים מתקדמים
          </button>
          <button 
            onClick={() => setActiveTab('automations')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'automations' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            אוטומציות
          </button>
          <button 
            onClick={() => setActiveTab('payments')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'payments' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            תשלומים
          </button>
          <button 
            onClick={() => setActiveTab('support')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'support' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            שירות לקוחות
          </button>
          <button 
            onClick={() => setActiveTab('logistics')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'logistics' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            לוגיסטיקה
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'products' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            קטלוג מוצרים
          </button>
          <a 
            href={`/tenant/${params.slug}/driver`}
            className="px-6 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-700 transition-all"
          >
            ממשק מוביל (ניסיון)
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === 'products' ? <ProductDashboard /> : 
         activeTab === 'logistics' ? <LogisticsDashboard /> : 
         activeTab === 'support' ? <CustomerServiceDashboard /> : 
         activeTab === 'inventory' ? <InventoryDashboard /> :
         activeTab === 'payments' ? <PaymentSettings /> :
         activeTab === 'automations' ? <AutomationDashboard /> :
         activeTab === 'analytics' ? <AnalyticsDashboard /> :
         activeTab === 'advanced' ? <AdvancedFeaturesDashboard /> :
         <TelephonyDashboard />}
      </div>
    </div>
  )
}
