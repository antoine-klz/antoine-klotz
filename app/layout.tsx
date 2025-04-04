import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from "@/components/sections/01_TopNav";
import Footer from "@/components/sections/Footer";

const satoshiBold = localFont({
  src: "../public/fonts/Satoshi-Black.otf",
  variable: "--font-satoshibold",
  weight: "100 900",
});

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Medium.otf",
  variable: "--font-satoshi",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Antoine Klotz - Web Entwickler",
  description: "Web Entwickler für digitale Lösungen",
  icons: {
    icon: "/assets/ak-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${satoshiBold.variable} antialiased bg-gradient-to-b from-[#0a1832] via-[#172d52] to-[#0a1832]`}>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
