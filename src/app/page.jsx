"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/assets/images/hero1.jpg",
    title: "Neo-Tech: Tomorrow's Gadgets, Today.",
    description: "Experience the next generation of seamless connectivity.",
  },
  {
    image: "/assets/images/hero2.jpg",
    title: "Command Your Workspace",
    description:
      "Ultimate setups for coding, gaming, and unparalleled productivity.",
  },
  {
    image: "/assets/images/hero3.jpg",
    title: "Immersive Audio Experience",
    description: "Dive deep into the soundscape with our premium audio gear.",
  },
];

import {
  FadeInUp,
  StaggerContainer,
  FadeInItem,
} from "../components/AnimationWrapper";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
              <FadeInUp key={index}>
                <div className="max-w-2xl space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg leading-tight font-heading">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-200 drop-shadow-md">
                    {slide.description}
                  </p>
                  <div className="flex space-x-4">
                    <Link
                      href="/items"
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300"
                    >
                      Shop Now
                    </Link>
                    <button className="px-8 py-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-md text-cyan-300 font-bold text-lg hover:bg-cyan-400/20 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        ))}
        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-cyan-400 w-8" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-6">
        <FadeInUp>
          <h2 className="text-3xl font-bold mb-12 text-center text-white font-heading">
            Featured Categories
          </h2>
        </FadeInUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Audio",
              icon: "🎧",
              desc: "Clear sound",
              color: "from-violet-500 to-purple-500",
            },
            {
              title: "Gaming",
              icon: "🎮",
              desc: "Next-gen gear",
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: "Accessories",
              icon: "⌨️",
              desc: "Productivity tools",
              color: "from-teal-500 to-emerald-500",
            },
          ].map((cat, idx) => (
            <FadeInItem key={idx} className="h-full">
              <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer h-full">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                  {cat.title}
                </h3>
                <p className="text-gray-400">{cat.desc}</p>
              </div>
            </FadeInItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Promo Section */}
      <section className="container mx-auto px-6">
        <FadeInUp>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 border border-white/10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between">
            <div className="absolute inset-0 bg-grid-white/[0.05] mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mb-6 font-heading">
                Upgrade Your Setup
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Get 20% off all peripherals this week only. Don&apos;t miss out
                on the ultimate tech refresh.
              </p>
              <Link
                href="/items"
                className="inline-block px-8 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-colors"
              >
                View Deals
              </Link>
            </div>
            <div className="relative z-10 mt-10 md:mt-0 w-full md:w-1/3">
              <div className="relative w-full h-80 rounded-3xl bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden group hover:border-cyan-400/30 transition-all duration-500 shadow-2xl">
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-2 px-4 rounded-full shadow-[0_4px_20px_rgba(244,63,94,0.4)] transform rotate-12 group-hover:rotate-6 transition-transform duration-300 z-20 border border-white/20">
                  35% OFF
                </div>

                {/* Background Decorative Icon */}
                <div className="absolute -bottom-8 -right-8 text-[12rem] text-cyan-500/5 transform rotate-[-15deg] group-hover:rotate-[-5deg] group-hover:scale-110 transition-all duration-700 ease-out z-0 select-none">
                  ⚡
                </div>

                {/* Content Top */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    🎁
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 tracking-tight font-heading">
                    Flash Sale
                  </h3>
                  <p className="text-cyan-200 font-medium text-lg">
                    Premium Peripherals Bundle
                  </p>
                </div>

                {/* Content Bottom */}
                <div className="relative z-10 bg-white/5 rounded-2xl p-4 border border-white/5 backdrop-blur-sm">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-4xl font-bold text-white tracking-tight">
                      $199
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      $305
                    </span>
                  </div>
                  <div className="mt-3 flex items-center space-x-2 text-sm text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span>Ends in 12h 45m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6">
        <FadeInUp>
          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-12 rounded-3xl border border-white/10 text-center backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4 text-white font-heading">
              Subscribe to our Newsletter
            </h2>
            <p className="mb-8 text-gray-300">
              Get the latest updates and exclusive offers straight to your
              inbox.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 rounded-xl text-white font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 max-w-3xl">
        <FadeInUp>
          <h2 className="text-3xl font-bold text-center mb-10 text-white font-heading">
            Frequently Asked Questions
          </h2>
        </FadeInUp>
        <StaggerContainer>
          <div className="space-y-4">
            {[
              {
                q: "Is shipping really free?",
                a: "Yes, for all orders over $50.",
              },
              {
                q: "How do I return an item?",
                a: "Contact our support team within 30 days.",
              },
              {
                q: "Do you accept crypto?",
                a: "We accept Bitcoin, Ethereum, and major stablecoins.",
              },
            ].map((item, i) => (
              <FadeInItem key={i}>
                <details className="group bg-white/5 p-6 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                  <summary className="font-bold text-white list-none flex justify-between items-center">
                    {item.q}
                    <span className="text-cyan-400 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-400">{item.a}</p>
                </details>
              </FadeInItem>
            ))}
          </div>
        </StaggerContainer>
      </section>
    </div>
  );
}
