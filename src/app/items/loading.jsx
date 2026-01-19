"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [showDelayedMessage, setShowDelayedMessage] = useState(false);

  useEffect(() => {
    // Timer to show message if loading takes longer than 3 seconds
    const timer = setTimeout(() => {
      setShowDelayedMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-6 my-10">
      {/* Header Skeleton */}
      <div className="flex justify-center mb-12">
        <div className="h-10 w-64 bg-white/10 rounded-lg animate-pulse" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col shadow-lg animate-pulse"
          >
            {/* Image Placeholder */}
            <div className="h-64 bg-slate-800/50 rounded-xl mb-6 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-slate-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* Title Placeholder */}
            <div className="h-8 bg-white/10 rounded w-3/4 mb-4" />

            {/* Description Placeholder */}
            <div className="space-y-2 mb-6 grow">
              <div className="h-4 bg-white/10 rounded w-full" />
              <div className="h-4 bg-white/10 rounded w-2/3" />
            </div>

            {/* Price/Button Area Placeholder */}
            <div className="flex justify-between items-center mt-auto border-t border-white/10 pt-4">
              <div className="h-8 bg-white/10 rounded w-24" />
              <div className="h-10 bg-white/10 rounded-full w-32" />
            </div>
          </div>
        ))}
      </div>

      {/* Delayed Message - Shows after 3 seconds */}
      {showDelayedMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900/90 text-cyan-400 px-6 py-3 rounded-full shadow-2xl border border-cyan-500/30 backdrop-blur-md animate-bounce z-50">
          <p className="text-sm font-medium whitespace-nowrap">
            Waking up server... please wait 🙂
          </p>
        </div>
      )}
    </div>
  );
}
