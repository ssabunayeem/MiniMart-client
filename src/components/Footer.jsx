import Image from "next/image";
import { FadeInUp } from "./AnimationWrapper";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-[#0f172a] text-white overflow-hidden backdrop-blur-sm bg-white/5 border-t border-white/10">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-900/40 to-transparent"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-violet-600/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-cyan-600/30 rounded-full blur-[100px]"></div>
      </div>

      <FadeInUp>
        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  MiniMart
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Experience the future of electronics. Premium gadgets,
                cutting-edge technology, and unparalleled support.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Shop</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="/items"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Deals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Warranty
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Stay in the Loop
              </h3>
              <p className="text-gray-400 mb-4">
                Subscribe for the latest tech news and exclusive offers.
              </p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© 2026 MiniMart. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </FadeInUp>
    </footer>
  );
}
