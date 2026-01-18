import Link from 'next/link';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  Star, 
  BadgeCheck, 
  Tag, 
  Search,
  Package
} from 'lucide-react';

async function getItem(id) {
  try {

    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
      ? `https://fresh-mart-rezzza07.vercel.app` 
      : "http://127.0.0.1:5000";

    const res = await fetch(`${baseUrl}/api/items/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Error ${res.status}: Failed to fetch item ${id}`);
      return null;
    }
    
    return await res.json();
  } catch (error) {
    console.error("Deployment Fetch error:", error);
    return null;
  }
}

export default async function ItemDetails({ params }) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-10 text-center">
        <div className="bg-red-50 w-24 h-24 flex items-center justify-center rounded-full mb-6">
          <Search className="text-red-500 w-10 h-10" />
        </div>
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">Product Not Found</h1>
        <p className="text-slate-500 mt-2">The item you are looking for might have been moved or is out of stock.</p>
        <Link href="/items" className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-all">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        

        <nav className="mb-10 flex items-center justify-between">
          <Link href="/items" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" /> Back to Shop
          </Link>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <span>Catalog</span>
            <span className="text-slate-200">/</span>
            <span className="text-emerald-600">{item.category}</span>
          </div>
        </nav>

        <div className="bg-white rounded-[4rem] shadow-2xl shadow-slate-200/60 border border-white overflow-hidden flex flex-col lg:flex-row">

          <div className="lg:w-1/2 bg-slate-100 relative group overflow-hidden">
            <img 
              src={item.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800"} 
              alt={item.name} 
              className="h-[500px] lg:h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-8 left-8 bg-emerald-600/90 backdrop-blur-md text-white px-5 py-2 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-xl">
              <BadgeCheck className="w-4 h-4" /> 100% Organic
            </div>
          </div>


          <div className="lg:w-1/2 p-10 md:p-20 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 w-fit">
              <Tag className="w-3 h-3" /> {item.category || "Premium Grocery"}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              {item.name}
            </h1>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-slate-400 text-sm font-bold">4.8 Rating</span>
            </div>

            <p className="text-slate-500 mt-10 text-xl leading-relaxed font-medium italic border-l-4 border-emerald-100 pl-6">
              "{item.description}"
            </p>

  
            <div className="mt-12 pt-12 border-t border-slate-100">
              <div className="flex items-center justify-between gap-8">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Current Price</span>
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-black text-slate-900 tracking-tighter">৳{item.price}</span>
                    <span className="text-xl text-slate-300 font-bold line-through">৳{Math.round(item.price * 1.2)}</span>
                  </div>
                </div>
                
                <div className="bg-emerald-50 px-6 py-4 rounded-3xl border border-emerald-100 text-right">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-1">Status</span>
                  <div className="flex items-center gap-2 text-emerald-600 font-black">
                    <Package className="w-4 h-4" />
                    {item.stock || "Available"}
                  </div>
                </div>
              </div>
            </div>
            

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-[2rem] flex items-center gap-4 border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-emerald-600">
                  <Truck className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Delivery</span>
                  <span className="text-sm font-bold text-slate-800">Fast 24h Shipping</span>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-[2rem] flex items-center gap-4 border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-emerald-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Quality</span>
                  <span className="text-sm font-bold text-slate-800">FSSAI Certified</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}