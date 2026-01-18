import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

import AnimationWrapper from "../components/AnimationWrapper";

export const metadata = {
  title: "MiniMart",
  description: "A simple Next.js shopping application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} font-sans antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 -z-10 bg-[#0f172a] overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-2000"></div>
        </div>
        <Navbar />
        <main className="min-h-screen pt-18 pb-12 relative z-0 flex flex-col">
          <AnimationWrapper>{children}</AnimationWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
