"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { 
  Leaf, 
  ShoppingBag, 
  PlusCircle, 
  LogIn, 
  LogOut, 
  User, 
  Home
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = Cookies.get("auth");
    setIsLoggedIn(auth === "true");
  }, [pathname]);

  const handleSignOut = () => {
    Cookies.remove("auth");
    setIsLoggedIn(false);
    toast.success("Signed out successfully", {
      icon: '🚀',
      style: { borderRadius: '15px', background: '#333', color: '#fff' }
    });
    router.push("/");
    router.refresh();
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
      
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:rotate-12 transition-all duration-300">
            <Leaf className="text-white w-6 h-6" strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-800">
            Fresh<span className="text-emerald-600">Mart</span>
          </span>
        </Link>

    
        <div className="hidden md:flex items-center gap-8 font-bold text-slate-600">
          {[
            { name: "Home", path: "/" ,icon: Home},
            { name: "Shop", path: "/items", icon: ShoppingBag },
            ...(isLoggedIn ? [{ name: "Add Item", path: "/add-item", icon: PlusCircle }] : []),
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm tracking-wide transition-all hover:text-emerald-600 flex items-center gap-2 relative py-1 ${
                isActive(link.path) 
                ? "text-emerald-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600" 
                : "text-slate-500"
              }`}
            >
              {link.icon && <link.icon className="w-4 h-4" />}
              {link.name}
            </Link>
          ))}
          
          <div className="h-6 w-[1px] bg-slate-200 ml-4"></div>

   
          {isLoggedIn ? (
            <button
              onClick={handleSignOut}
              className="group flex items-center gap-2 bg-red-50 text-red-600 border border-red-100 px-6 py-2.5 rounded-full text-sm font-black hover:bg-red-600 hover:text-white transition-all active:scale-95"
            >
              <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Sign Out
            </button>
          ) : (
            <Link
              href="/login"
              className="group flex items-center gap-2 bg-slate-900 text-white px-7 py-2.5 rounded-full text-sm font-black hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-100 transition-all active:scale-95"
            >
              <LogIn className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Login
            </Link>
          )}
        </div>

    
        <div className="md:hidden flex items-center bg-slate-50 border border-slate-100 p-2 rounded-xl">
           <User className="w-4 h-4 text-slate-400 mr-2" />
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
             {isLoggedIn ? "Admin" : "Guest"}
           </span>
        </div>
      </div>
    </nav>
  );
}