"use client"

import { 
  CheckCircle2, 
  Truck, 
  Warehouse, 
  Bot, 
  Layers, 
  ArrowRight, 
  LayoutDashboard,
  Smartphone,
  ShieldCheck,
  Zap
} from "lucide-react"

export default function MarketingLandingPage() {
  const features = [
    {
      title: "לוגיסטיקה חכמה מבוססת AI",
      description: "מנוע תעדוף וניווט אוטומטי למובילים ומרכיבים. חסכון של עד 25% בזמן ובדלק.",
      icon: <Truck className="text-blue-500" size={24} />
    },
    {
      title: "ניהול מלאי מתקדם",
      description: "תחזיות ביקוש, המלצות רכש אוטומטיות וניהול רב-מחסני בזמן אמת.",
      icon: <Warehouse className="text-blue-500" size={24} />
    },
    {
      title: "שירות לקוחות אוטונומי",
      description: "AI שצ'אט עם הלקוחות שלכם 24/7, עונה על סטטוס הזמנה ושולח מדריכי הרכבה.",
      icon: <Bot className="text-blue-500" size={24} />
    },
    {
      title: "White Label & Multi-tenancy",
      description: "כל לקוח מקבל סביבה אוטונומית לגמרי עם המיתוג והדומיין שלו.",
      icon: <Layers className="text-blue-500" size={24} />
    }
  ]

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-8 animate-fade-in">
            <Zap size={14} className="text-blue-600 fill-blue-600" />
            <span className="text-xs font-black text-blue-700 uppercase tracking-widest">הדור הבא של ניהול הרהיטים</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
            בנה את אימפריית הרהיטים שלך עם <span className="text-blue-600">בינה מלאכותית</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            הפלטפורמה המקיפה ביותר לניהול חנויות, מלאי ולוגיסטיקה. 
            אנחנו הופכים את התפעול המורכב שלכם לאפליקציה פשוטה, חכמה ורווחית.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200">
              התחל תקופת ניסיון חינם
              <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              ראה דמו חי
            </button>
          </div>
          
          {/* Dashboard Preview Placeholder */}
          <div className="mt-20 relative max-w-5xl mx-auto">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-400/10 blur-3xl rounded-full" />
            <div className="bg-slate-900 rounded-3xl p-4 shadow-2xl shadow-blue-200/50 border border-slate-800 overflow-hidden aspect-video">
               <div className="w-full h-full bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500 font-black text-2xl uppercase tracking-widest border border-slate-700/50">
                  Dashboard Preview
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">כל מה שאתה צריך במקום אחד</h2>
            <p className="text-slate-500 text-lg">טכנולוגיה מתקדמת שעובדת בשבילך, לא נגדך.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-black text-blue-600 tracking-tighter">98%</div>
              <div className="font-bold text-slate-800">דיוק במשלוחים</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-black">מבוסס על AI Routing</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-blue-600 tracking-tighter">30%</div>
              <div className="font-bold text-slate-800">חיסכון בעלויות תפעול</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-black">אוטומציה מלאה של שירות לקוחות</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-blue-600 tracking-tighter">&lt; 10 דק'</div>
              <div className="font-bold text-slate-800">זמן הקמת חנות</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-black">מערכת Multi-tenant מהירה</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-slate-900 rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -z-0" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">מוכן להזניק את העסק שלך?</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              הצטרף למאות בעלי חנויות רהיטים שכבר עברו לעבוד חכם. 
              ה-SaaS שלך מתחיל כאן.
            </p>
            <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all">
              התחל עכשיו בחינם
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 container mx-auto px-6 text-center text-slate-400 text-sm">
        <p>© 2026 Avivi Systems. כל הזכויות שמורות.</p>
      </footer>
    </div>
  )
}
