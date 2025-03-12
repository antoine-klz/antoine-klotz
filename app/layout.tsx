import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from "@/components/TopNav";
import HomeNavigation from "@/components/HomeNavigation";
import Footer from "@/components/ideas/Footer";
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
  title: "Robin Wood - Ihr Experte für nachhaltige Baumpflege in Hamburg",
  description: "Robin Wood - Ihr Experte für nachhaltige Baumpflege in Hamburg",
  icons: {
    icon: "/assets/logo-white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${satoshiBold.variable} antialiased bg-[#0E5640]`}>
        <TopNav />
        {children}
        <Footer />
        <HomeNavigation />
      </body>
    </html>
  );
}
