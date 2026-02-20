"use client"

import { useState } from "react"
import { Plus, Package, Edit, Trash2, Image as ImageIcon } from "lucide-react"

export default function ProductDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "ספת עור יוקרתית", price: 4500, sku: "SOFA-001", stock: 5 },
    { id: 2, name: "שולחן אוכל מעץ אלון", price: 2800, sku: "TABLE-042", stock: 12 },
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">ניהול קטלוג מוצרים</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          הוסף מוצר חדש
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 font-semibold text-slate-700">מוצר</th>
              <th className="px-6 py-4 font-semibold text-slate-700">SKU</th>
              <th className="px-6 py-4 font-semibold text-slate-700">מחיר</th>
              <th className="px-6 py-4 font-semibold text-slate-700">מלאי</th>
              <th className="px-6 py-4 font-semibold text-slate-700 text-left">פעולות</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-slate-400">
                      <ImageIcon size={20} />
                    </div>
                    <span className="font-medium text-slate-900">{product.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600">{product.sku}</td>
                <td className="px-6 py-4 text-slate-900 font-semibold">₪{product.price}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-sm font-medium">
                    {product.stock} ביחידות
                  </span>
                </td>
                <td className="px-6 py-4 text-left">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                      <Edit size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-600 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
