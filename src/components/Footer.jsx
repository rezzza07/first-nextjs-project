import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & About */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">🥬</span>
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Green<span className="text-emerald-500">Mart</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Sourcing the finest organic produce directly from local farmers to your kitchen since 2026.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/items" className="hover:text-emerald-400 transition-colors">Browse Stock</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Admin Section */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Management</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/login" className="hover:text-emerald-400 transition-colors">Admin Login</Link></li>
              <li><Link href="/add-item" className="hover:text-emerald-400 transition-colors">Inventory Control</Link></li>
              <li><Link href="/support" className="hover:text-emerald-400 transition-colors">Staff Support</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Stay Updated</h4>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none text-white"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm transition-all btn-transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
          <p>© 2026 GreenMart Grocery. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}