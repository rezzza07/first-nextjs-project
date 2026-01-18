"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Simple auth logic
    if (email === "admin@grocery.com" && password === "123456") {
      Cookies.set("auth", "true", { expires: 7 }); // Set for 7 days
      toast.success("Welcome back to FreshMart!", {
        style: { borderRadius: '15px', background: '#10b981', color: '#fff' }
      });
      router.push("/items");
      router.refresh();
    } else {
      toast.error("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-white p-10 md:p-12">
        
        {/* Brand Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-100">
            <span className="text-3xl">🥬</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 mt-2 font-medium">Log in to manage your groceries</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
            <input 
              required
              name="email" 
              type="email"
              placeholder="name@example.com" 
              className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium text-slate-800"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Password</label>
            <input 
              required
              name="password" 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium text-slate-800"
            />
          </div>

          {/* Action Button */}
          <button 
            type="submit"
            className="w-full bg-emerald-600 text-white p-4 mt-4 rounded-2xl font-black text-lg shadow-xl shadow-emerald-100 hover:bg-slate-900 hover:shadow-slate-200 transition-all active:scale-95"
          >
            Sign In
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400 font-medium">
            Don't have an account? <Link href="/signup" className="text-emerald-600 font-bold hover:underline">Request Access</Link>
          </p>
        </div>
      </div>
    </div>
  );
}