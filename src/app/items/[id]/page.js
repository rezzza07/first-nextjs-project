import Link from 'next/link';

async function getItem(id) {
  try {
    const res = await fetch(`http://127.0.0.1:5000/items/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function ItemDetails({ params }) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-10 text-center">
        <div className="bg-red-50 p-6 rounded-[2rem] mb-6">
          <span className="text-6xl">🔍</span>
        </div>
        <h1 className="text-3xl font-black text-slate-800">Item Not Found</h1>
        <Link href="/items" className="mt-8 btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
       
        <nav className="mb-8 flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
          <Link href="/items" className="hover:text-emerald-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-slate-800">{item.category}</span>
        </nav>

        <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-slate-200/60 border border-white overflow-hidden flex flex-col lg:flex-row">
          
        
          <div className="lg:w-1/2 bg-slate-100 relative group">
            <img 
              src={item.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800"} 
              alt={item.name} 
              className="h-[400px] lg:h-full w-full object-cover"
            />
            
            <div className="absolute top-8 left-8 bg-emerald-600 text-white px-5 py-2 rounded-full font-black text-xs uppercase tracking-tighter shadow-lg">
              100% Organic
            </div>
          </div>

         
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              {item.category || "Grocery Staple"}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              {item.name}
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex text-amber-400">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <span className="text-slate-400 text-sm font-bold">(4.8 / 5.0 Customer Rating)</span>
            </div>

            <p className="text-slate-500 mt-8 text-lg leading-relaxed font-medium">
              {item.description}
            </p>

            <div className="mt-10 pt-10 border-t border-slate-100">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Market Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-slate-900">৳{item.price}</span>
                    <span className="text-slate-400 font-bold line-through">৳{Math.round(item.price * 1.2)}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Availability</span>
                  <span className="text-emerald-600 font-black">{item.stock || "In Stock"}</span>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all active:scale-95 shadow-xl shadow-slate-200">
                  Add to Cart
                </button>
                <button className="bg-white border-2 border-slate-100 text-slate-800 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all active:scale-95">
                  Save to Wishlist
                </button>
              </div>
            </div>
            
            {/* Delivery Info Mini-Bento */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-3">
                <span className="text-2xl">🚚</span>
                <span className="text-[10px] font-bold text-slate-500 leading-tight uppercase">Free Delivery<br/><span className="text-slate-900">Over ৳500</span></span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span className="text-[10px] font-bold text-slate-500 leading-tight uppercase">Quality Assurance<br/><span className="text-slate-900">100% Fresh</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}