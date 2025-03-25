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
  title: "Website Title",
  description: "Website Description",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${satoshiBold.variable} antialiased bg-white`}>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
