"use client"

import { useState } from "react"
import { Save, X, Plus, Trash2 } from "lucide-react"

export default function ProductForm({ onClose }: { onClose?: () => void }) {
  const [options, setOptions] = useState([{ id: 1, name: "תוספת הרכבה", price: 150 }])

  const addOption = () => {
    setOptions([...options, { id: Date.now(), name: "", price: 0 }])
  }

  const removeOption = (id: number) => {
    setOptions(options.filter(o => o.id !== id))
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-2xl overflow-hidden">
      <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <h3 className="text-xl font-bold text-slate-800">הוספת מוצר חדש</h3>
        {onClose && (
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={24} />
          </button>
        )}
      </div>

      <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">שם המוצר</label>
            <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="למשל: ספת קטיפה" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">מחיר בסיס (₪)</label>
            <input type="number" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="0.00" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700">תיאור המוצר</label>
          <textarea className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none h-24" placeholder="תאר את הרהיט..." />
        </div>

        {/* Dynamic Options */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-semibold text-slate-700">תוספות ושדרוגים (אופציונלי)</label>
            <button onClick={addOption} className="text-sm text-blue-600 flex items-center gap-1 hover:underline">
              <Plus size={16} /> הוסף תוספת
            </button>
          </div>
          
          <div className="space-y-3">
            {options.map((option) => (
              <div key={option.id} className="flex gap-3 items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                <input type="text" className="flex-1 bg-white px-3 py-1.5 rounded border border-slate-200 text-sm" placeholder="שם התוספת (למשל: הרכבה)" defaultValue={option.name} />
                <input type="number" className="w-24 bg-white px-3 py-1.5 rounded border border-slate-200 text-sm" placeholder="מחיר" defaultValue={option.price} />
                <button onClick={() => removeOption(option.id)} className="text-red-400 hover:text-red-600 p-1">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Image Upload Placeholder */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700">תמונת מוצר</label>
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-slate-400 hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer">
            <Plus size={32} />
            <span className="text-sm mt-2">לחץ להעלאת תמונה או גרור לכאן</span>
          </div>
        </div>
      </div>

      <div className="px-8 py-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
        <button className="px-6 py-2 rounded-lg text-slate-600 font-medium hover:bg-slate-200 transition-colors">ביטול</button>
        <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Save size={20} /> שמור מוצר
        </button>
      </div>
    </div>
  )
}
