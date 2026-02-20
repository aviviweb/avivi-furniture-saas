"use client"

import { useState } from "react"
import { LayoutGrid, Users, Settings, Package, Truck, MessageSquare, PieChart, ShieldCheck, CreditCard, Sparkles, Trophy } from "lucide-react"
import LogisticsDashboard from "./LogisticsDashboard"
import InventoryDashboard from "./InventoryDashboard"
import SalesAgentDashboard from "./SalesAgentDashboard"

export default function AdvancedFeaturesDashboard() {
  const [activeTab, setActiveTab] = useState("logistics")

  const tabs = [
    { id: "logistics", name: "לוגיסטיקה ו-AI", icon: Truck },
    { id: "inventory", name: "ניהול מלאי", icon: Package },
    { id: "sales", name: "סוכנים ועמלות", icon: Trophy },
    { id: "customers", name: "שירות לקוחות", icon: MessageSquare },
    { id: "analytics", name: "אנליטיקה", icon: PieChart },
    { id: "payments", name: "תשלומים", icon: CreditCard },
  ]

  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-white border-l border-slate-200 p-6 space-y-2 overflow-y-auto">
        <div className="pb-6 mb-6 border-b border-slate-100">
           <div className="flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-tighter">
              <Sparkles size={16} />
              תכונות מתקדמות
           </div>
        </div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
              activeTab === tab.id 
                ? "bg-slate-900 text-white shadow-lg shadow-slate-200 scale-[1.02]" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <tab.icon size={20} />
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
        <div className="max-w-6xl mx-auto">
          {activeTab === "logistics" && <LogisticsDashboard />}
          {activeTab === "inventory" && <InventoryDashboard />}
          {activeTab === "sales" && <SalesAgentDashboard />}
          {activeTab === "customers" && (
            <div className="bg-white p-20 rounded-3xl border border-slate-200 text-center">
              <MessageSquare className="mx-auto text-slate-200 mb-4" size={64} />
              <h3 className="text-xl font-black text-slate-800">מערכת שירות לקוחות AI</h3>
              <p className="text-slate-400 mt-2">כאן ינוהלו כל פניות השירות והצ'אטבוט האוטומטי.</p>
            </div>
          )}
          {/* Add other tabs as needed */}
        </div>
      </div>
    </div>
  )
}
