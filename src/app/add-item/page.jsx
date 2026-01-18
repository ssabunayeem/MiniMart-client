"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddItemPage() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      router.push("/items");
      router.refresh();
    } catch (err) {
      alert("❌ Failed to add item");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen py-20 px-4 sm:px-6 overflow-x-hidden">
      {/* Background Glow - constrained to not cause overflow */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/20 blur-3xl rounded-full -z-10 opacity-50" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 blur-3xl rounded-full -z-10 opacity-50" />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-heading">
          Add New Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-10 space-y-6"
        >
          {/* ITEM NAME */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Wireless Headphones"
              className="input-glass"
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              name="price"
              required
              value={formData.price}
              onChange={handleChange}
              placeholder="299.00"
              className="input-glass"
            />
          </div>

          {/* IMAGE */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Image Path/URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://gagadget.com/media/post_big/Tecno-Camon-40-Pro-Image.jpg"
              className="input-glass"
            />

            {/* IMAGE PREVIEW */}
            {formData.image && (
              <div className="mt-4 rounded-xl overflow-hidden border border-white/20 bg-black/30">
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-full h-48 object-cover"
                />
              </div>
            )}
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Premium quality gadget with modern design..."
              className="input-glass resize-none"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
            }`}
          >
            {loading ? "Adding Item..." : "Add Item"}
          </button>
        </form>
      </div>
    </div>
  );
}
