import Link from "next/link";
import { 
  ShoppingBasket, 
  Sprout, 
  Wheat, 
  Droplets, 
  Truck, 
  Users, 
  MapPin, 
  Star, 
  ChevronRight, 
  ArrowRight 
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">

      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
            Freshness <span className="text-emerald-600">Delivered</span> <br /> To Your Door.
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Premium Miniket Rice, Organic Vegetables, and Pure Oils sourced directly from local farmers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/items" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-200 hover:bg-slate-900 transition-all hover:-translate-y-1 flex items-center gap-3">
              Start Shopping Today <ShoppingBasket className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>


      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200 border border-white flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Sprout className="text-emerald-600 w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">Fresh Vegetables</h3>
                <p className="text-slate-500 font-medium">Farm fresh greens harvested every dawn and delivered by noon.</p>
              </div>
              <div className="mt-10 h-40 bg-emerald-50 rounded-2xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            
            <div className="bg-emerald-600 p-10 rounded-[3rem] text-white flex flex-col justify-between group cursor-pointer shadow-xl shadow-emerald-100">
               <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                  <Wheat className="text-white w-8 h-8" />
               </div>
               <h3 className="text-3xl font-black mb-2">Premium Grains</h3>
               <p className="text-emerald-100 font-medium">Best quality Miniket & Basmati rice aged to perfection.</p>
               <div className="mt-8 bg-white/20 h-32 rounded-2xl backdrop-blur-md border border-white/20 overflow-hidden">
                <img src="https://www.premiumgrains.co/images/slider/image3.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 h-[500px] bg-slate-200 rounded-[4rem] overflow-hidden shadow-2xl relative group">
            <img src="https://www.azolifesciences.com/images/Article_Images/ImageForArticle_713_16449327827222045.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-6 py-4 rounded-3xl shadow-xl">
               <Droplets className="text-emerald-600 w-8 h-8 mb-2" />
               <p className="font-black text-slate-800 text-sm italic">Pure & Cold Pressed</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-4 block">Essentials</span>
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">Pure Oils & <br />High-Protein Pulses</h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">
              Our soybean and mustard oils are triple-refined for heart health, paired perfectly with our organic red lentils.
            </p>
            <Link href="/items" className="text-emerald-600 font-black text-lg flex items-center gap-2 group">
              Explore Essentials <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>


      <section className="py-24 bg-slate-900 rounded-[4rem] mx-6 my-12 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full"></div>
         <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
            {[
              { label: "Happy Customers", val: "10k+", icon: Users },
              { label: "Local Farmers", val: "150+", icon: Sprout },
              { label: "Organic Items", val: "500+", icon: ShoppingBasket },
              { label: "City Delivery", val: "24h", icon: Truck }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <stat.icon className="w-8 h-8 text-emerald-400/50 mb-4" />
                <div className="text-5xl font-black text-emerald-400 mb-2">{stat.val}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
         </div>
      </section>


      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-emerald-50 p-16 rounded-[4rem] border border-emerald-100 group">
          <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-8 group-hover:-translate-y-2 transition-transform">
             <Truck className="text-emerald-600 w-10 h-10" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Express Delivery in 24 Hours</h2>
          <p className="text-slate-600 font-medium mb-10 max-w-md mx-auto">We understand the value of freshness. That's why we guarantee delivery within a day of harvest.</p>
          <div className="flex justify-center gap-6 text-emerald-600 font-black italic">
            <span className="flex items-center gap-1"><ChevronRight className="w-4 h-4" /> Fast.</span>
            <span className="flex items-center gap-1"><ChevronRight className="w-4 h-4" /> Reliable.</span>
            <span className="flex items-center gap-1"><ChevronRight className="w-4 h-4" /> Fresh.</span>
          </div>
        </div>
      </section>


      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tight">Loved by Thousands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((t) => (
              <div key={t} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 text-left hover:shadow-2xl hover:shadow-slate-200 transition-all">
                <div className="flex text-amber-400 mb-4 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"The best quality Miniket rice I've found in years. The delivery was incredibly fast!"</p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      C{t}
                   </div>
                   <span className="font-bold text-slate-900 text-sm">Verified Customer {t}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-emerald-600 to-emerald-900 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-emerald-200">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">Start Your Organic <br />Journey Today.</h2>
            <Link href="/items" className="inline-flex items-center gap-3 bg-white text-emerald-900 px-12 py-6 rounded-2xl font-black text-xl hover:bg-emerald-50 transition-all hover:scale-105 active:scale-95">
              Explore Full Collection <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}