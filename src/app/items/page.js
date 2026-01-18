import ItemCard from "../../components/ItemCard";

async function getItems() {
  
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
  ? `https://fresh-mart-rezzza07.vercel.app` 
  : "http://127.0.0.1:5000";

  try {
    const res = await fetch(`${baseUrl}/api/items`, { 
      cache: "no-store" 
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status);
      return [];
    }
    
    return await res.json();
  } catch (error) {
    console.error("Connection Error:", error);
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="min-h-screen bg-slate-50/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            
            <h1 className="text-5xl font-black text-slate-900 tracking-tight">
              Available <span className="text-emerald-600">Groceries</span>
            </h1>
            <p className="text-slate-500 font-medium text-lg max-w-xl">
              Freshly sourced essentials from local farms, delivered straight to your home pantry.
            </p>
          </div>

          <div className="bg-white px-8 py-4 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
            <span className="text-4xl font-black text-emerald-600">{items.length}</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">
              Items<br />In Stock
            </span>
          </div>
        </header>

      
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-40 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
            <span className="text-6xl mb-4 block">🛒</span>
            <h3 className="text-xl font-bold text-slate-800">Your shelves are empty!</h3>
            <p className="text-slate-500">Start by adding some fresh items to the inventory.</p>
          </div>
        )}

      </div>
    </div>
  );
}