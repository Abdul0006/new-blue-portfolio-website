
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Wahab - AI Engineer, Developer & Marketer",
  description: "Personal portfolio of Abdul Wahab, showcasing expertise in AI engineering, development, and strategic marketing solutions.",
  keywords: "AI Engineer, Developer, Marketer, Portfolio, Abdul Wahab, NextJS, TypeScript",
  authors: [{ name: "Abdul Wahab" }],
  openGraph: {
    title: "Abdul Wahab - AI Engineer & Developer",
    description: "Personal portfolio showcasing expertise in AI engineering, development, and marketing.",
    type: "website",
    url: "https://yourdomain.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Wahab - AI Engineer & Developer",
    description: "Personal portfolio showcasing expertise in AI engineering and development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased bg-white transion-colors dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>
        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer/>

        
        </ThemeProvider>
      
        
      </body>
    </html>
  );
}
