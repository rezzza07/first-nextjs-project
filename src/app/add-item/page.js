"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddItem() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const itemData = {
      name: formData.get("name"),
      price: formData.get("price"),
      image: formData.get("image"),
      description: formData.get("description"),
      category: formData.get("category"),
      stock: formData.get("stock") || "In Stock",
    };

    try {
      // Determine if we are on Vercel or Localhost
      const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://fresh-mart-rezzza07.vercel.app`
        : "http://localhost:5000";

      const res = await fetch(`${baseUrl}/api/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      });

      if (res.ok) {
        toast.success(`${itemData.name} added to inventory!`, {
          icon: '✅',
          style: { borderRadius: '15px', background: '#333', color: '#fff' }
        });
        e.target.reset();
        router.push("/items");
        router.refresh();
      } else {
        throw new Error("Failed to add");
      }
    } catch (err) {
      toast.error("Could not reach the server.");
      console.error("Submit Error:", err);
    } finally {
      setLoading(false);
    }
  } // <--- The missing brace is now here!

  return (
    <section className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-white p-10 md:p-16 relative overflow-hidden">
          
          {/* Accent Decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

          <header className="mb-10 text-center">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">New Inventory</h2>
            <p className="text-slate-500 mt-2 font-medium">Add fresh stock to the GreenMart shelves.</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Product Name</label>
                <input required name="name" placeholder="e.g. Nazirshail Rice" 
                  className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium" />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Category</label>
                <select name="category" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium appearance-none">
                  <option value="Grains">Grains</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Oil">Oil</option>
                  <option value="Pulses">Pulses</option>
                  <option value="Essentials">Essentials</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Price */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Price (৳)</label>
                <input required name="price" type="number" placeholder="0.00" 
                  className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium" />
              </div>

              {/* Stock */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Initial Stock</label>
                <input name="stock" placeholder="e.g. 50kg" 
                  className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium" />
              </div>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Image Link (Unsplash)</label>
              <input name="image" placeholder="https://images.unsplash.com/..." 
                className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium" />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Description</label>
              <textarea required name="description" placeholder="Describe the quality and origin..." 
                className="w-full bg-slate-50 border-none rounded-2xl p-4 h-32 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium resize-none" />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-emerald-600 text-white p-5 rounded-2xl font-black text-lg shadow-xl shadow-emerald-100 hover:bg-slate-900 hover:shadow-slate-200 transition-all btn-transition flex justify-center items-center"
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Save to Inventory"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}