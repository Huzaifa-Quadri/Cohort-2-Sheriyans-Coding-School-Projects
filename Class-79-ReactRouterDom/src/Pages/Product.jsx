import React from "react";

const Product = () => {
  return (
    <div className="min-h-screen w-full bg-[#09090b] text-white pt-24 px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Product Image Side */}
        <div className="relative group">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          <div className="relative h-[500px] w-full bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <span className="text-8xl">📦</span>
              <p className="mt-4 text-zinc-500 font-mono text-sm">
                PRO PACKAGE
              </p>
            </div>
          </div>
        </div>

        {/* Product Details Side */}
        <div className="space-y-8">
          <div>
            <span className="text-blue-400 font-semibold tracking-wider text-sm">
              LIMITED EDITION
            </span>
            <h1 className="text-5xl font-bold mt-2 leading-tight">
              Full Stack Developer <br /> Super Bundle
            </h1>
            <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
              Get lifetime access to all our current and future courses.
              Includes exclusive mentorship sessions, private community access,
              and certified portfolio reviews.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div>
              <span className="text-3xl font-bold text-white">$299</span>
              <span className="text-zinc-500 line-through ml-3 text-lg">
                $999
              </span>
            </div>
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30">
              SAVE 70%
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Add to Cart
            </button>
            <button className="flex-1 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-bold backdrop-blur-sm flex items-center justify-center gap-2">
              <span>❤️</span> Add to Wishlist
            </button>
          </div>

          <div className="pt-8 border-t border-white/5 flex gap-8 text-zinc-500 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Instant Access
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Money-Back Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
