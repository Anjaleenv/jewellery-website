import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import JewelryCursor from "@/components/JewelryCursor";
import GoldRateTicker from "@/components/GoldRateTicker";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const cormorant = Cormorant_Garamond({ 
  weight: ["300", "400", "500", "600", "700"], 
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "Navaratna Jewellers | Quiet Luxury",
  description: "Experience the epitome of fine jewellery. Heritage, Craftsmanship, and BIS Hallmarking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} font-body bg-ivory text-deepblack antialiased min-h-screen flex flex-col`}>
        <SmoothScroll>
          <JewelryCursor />
          <GoldRateTicker />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
