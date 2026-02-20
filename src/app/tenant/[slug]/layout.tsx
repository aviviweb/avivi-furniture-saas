export default function TenantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl text-blue-600">Furniture OS</div>
          <nav>
            <ul className="flex gap-4">
              <li><a href="#" className="hover:underline">דף הבית</a></li>
              <li><a href="#" className="hover:underline">הזמנות</a></li>
              <li><a href="#" className="hover:underline">לוגיסטיקה</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="p-6">
        {children}
      </main>
    </div>
  )
}
