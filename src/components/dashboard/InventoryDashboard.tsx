"use client"

import { useState, useEffect } from "react"
import { Package, AlertTriangle, TrendingUp, ChevronDown, Filter, Search, Loader2 } from "lucide-react"
import { AIService } from "@/lib/ai"

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  stock: number;
  min_stock: number;
  predicted_demand?: number;
  confidence?: number;
}

export default function InventoryDashboard() {
  const [items, setItems] = useState<InventoryItem[]>([
    { id: "1", name: "ספת עור 3 מושבים", sku: "SOFA-L3-BR", stock: 12, min_stock: 5 },
    { id: "2", name: "שולחן סלון אלון", sku: "TBL-OAK-01", stock: 3, min_stock: 10 },
    { id: "3", name: "ארון 4 דלתות לבן", sku: "WARD-W4-WH", stock: 25, min_stock: 8 },
    { id: "4", name: "כיסא פינת אוכל", sku: "CHR-DIN-GR", stock: 45, min_stock: 20 }
  ]);
  const [isPredicting, setIsPredicting] = useState(false);

  const handlePredictDemand = async () => {
    setIsPredicting(true);
    const results = await AIService.predictDemand(items);
    setItems(results.map((r: any) => ({
      ...r,
      confidence: r.confidence_score,
      predicted_demand: r.predicted_demand
    })));
    setIsPredicting(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Package className="text-blue-600" />
          ניהול מלאי ומחסן
        </h2>
        <button 
          onClick={handlePredictDemand}
          disabled={isPredicting}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-all font-bold text-sm shadow-lg shadow-indigo-100 disabled:opacity-50"
        >
          {isPredicting ? <Loader2 size={18} className="animate-spin" /> : <TrendingUp size={18} />}
          {isPredicting ? 'מנתח ביקושים...' : 'חיזוי ביקושים AI'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">סה"כ פריטים במלאי</div>
          <div className="text-2xl font-black text-slate-800">85</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-red-100 bg-red-50/30">
          <div className="text-red-400 text-xs font-bold uppercase tracking-wider">מתחת למלאי מינימום</div>
          <div className="text-2xl font-black text-red-600">1</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">שווי מלאי מוערך</div>
          <div className="text-2xl font-black text-slate-800">₪142,500</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-blue-100 bg-blue-50/30">
          <div className="text-blue-400 text-xs font-bold uppercase tracking-wider">הזמנות רכש בטיפול</div>
          <div className="text-2xl font-black text-blue-600">3</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute right-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="חיפוש לפי שם או מק״ט..." 
              className="w-full bg-slate-50 border-none rounded-lg py-2 pr-10 pl-4 text-sm focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <button className="text-slate-500 hover:text-slate-800 flex items-center gap-1 text-sm font-bold">
            <Filter size={16} />
            סינון
          </button>
        </div>

        <table className="w-full text-right">
          <thead className="bg-slate-50 text-slate-500 text-xs font-black uppercase tracking-widest border-b border-slate-100">
            <tr>
              <th className="px-6 py-4">מוצר</th>
              <th className="px-6 py-4">מק"ט</th>
              <th className="px-6 py-4">מלאי נוכחי</th>
              <th className="px-6 py-4">מינימום</th>
              <th className="px-6 py-4">סטטוס</th>
              <th className="px-6 py-4 text-indigo-600 bg-indigo-50/50">ביקוש חזוי (30 יום)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-sm">
            {items.map(item => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-900">{item.name}</td>
                <td className="px-6 py-4 font-mono text-xs text-slate-500">{item.sku}</td>
                <td className="px-6 py-4 font-black">{item.stock}</td>
                <td className="px-6 py-4 text-slate-400">{item.min_stock}</td>
                <td className="px-6 py-4">
                  {item.stock <= item.min_stock ? (
                    <span className="flex items-center gap-1 text-red-500 font-bold text-xs">
                      <AlertTriangle size={14} />
                      מלאי נמוך
                    </span>
                  ) : (
                    <span className="text-green-500 font-bold text-xs">תקין</span>
                  )}
                </td>
                <td className="px-6 py-4 bg-indigo-50/20 font-black text-indigo-600">
                  {item.predicted_demand ? (
                    <div className="flex flex-col">
                      <span>{item.predicted_demand} יחידות</span>
                      <span className="text-[10px] text-indigo-400 font-medium">ביטחון {item.confidence}%</span>
                    </div>
                  ) : (
                    <span className="text-slate-300 font-normal italic">טרם בוצע חיזוי</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
