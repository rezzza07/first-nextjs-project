"use client";
import Link from "next/link";
import { 
  Leaf, 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          

          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Leaf className="text-white w-6 h-6" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Fresh<span className="text-emerald-500">Mart</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Sourcing the finest organic produce directly from local farmers in Sylhet to your kitchen since 2026.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>


          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest border-l-2 border-emerald-500 pl-3">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/items" className="hover:text-emerald-400 transition-colors">Marketplace</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">Farmer's Story</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>


          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest border-l-2 border-emerald-500 pl-3">Get in Touch</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-slate-400">Zindabazar, Sylhet,<br />Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-slate-400">+880 1712 345678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-slate-400">hello@freshmart.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest border-l-2 border-emerald-500 pl-3">Weekly Freshness</h4>
            <p className="text-xs text-slate-500 mb-4 font-bold">JOIN OUR NEWSLETTER</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-emerald-500 outline-none text-white transition-all"
              />
              <button className="absolute right-2 top-2 bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-xl transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-slate-600 mt-4 leading-relaxed">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>


        <div className="mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
          <p>© 2026 FRESHMART GROCERY. BUILT FOR SYLHET.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}