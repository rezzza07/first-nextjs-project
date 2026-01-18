import Link from 'next/link';

export default function ItemCard({ item }) {
  return (
    <div className="group bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-100 hover:-translate-y-2">
      {/* Image Section with Category Badge */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400"} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {/* Modern Glassmorphism Badge */}
        <div className="absolute top-5 left-5 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
          <span className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.15em]">
            {item.category || "Grocery"}
          </span>
        </div>
        
        {/* Stock Status Badge */}
        <div className="absolute bottom-5 right-5 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-lg">
          <span className="text-[10px] font-bold text-white uppercase tracking-tighter">
            Stock: {item.stock || "In Stock"}
          </span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-8">
        <div className="min-h-[100px]">
          <h2 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
            {item.name}
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>
        
        {/* Price and Action */}
        <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Price</span>
            <span className="text-3xl font-black text-slate-900 tracking-tight">
              ৳ {item.price}
            </span>
          </div>
          
          <Link 
            href={`/items/${item.id}`} 
            className="bg-emerald-600 text-white p-4 rounded-2xl shadow-lg shadow-emerald-100 hover:bg-slate-900 transition-all active:scale-95 group-hover:px-6"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={3} 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}