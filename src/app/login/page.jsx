"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Mock Authentication Logic
    // In a real app, this would be a POST request to your backend.
    if (email === "user@example.com" && password === "password") {
      // Set cookie (valid for 1 day)
      document.cookie = "auth_token=true; path=/; max-age=86400";
      router.push("/add-item");
      router.refresh(); // Refresh to update Navbar state if we had one that checked cookies
    } else {
      setError("Invalid email or password. Try user@example.com / password");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 border border-white/10 rounded-2xl shadow-2xl bg-white/5 backdrop-blur-md">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Welcome Back
      </h1>

      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-3 rounded mb-6 backdrop-blur-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder="user@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder="password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02] transition-all duration-300"
        >
          Sign In
        </button>
      </form>
      <div className="mt-8 text-center text-sm text-gray-400">
        Demo Credentials:{" "}
        <span className="text-cyan-400">user@example.com</span> /{" "}
        <span className="text-cyan-400">password</span>
      </div>
    </div>
  );
}
