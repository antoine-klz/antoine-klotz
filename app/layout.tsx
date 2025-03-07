import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshiBold = localFont({
  src: "../public/fonts/Satoshi-Black.otf",
  variable: "--font-satoshibold",
  weight: "100 900",
});

const satoshiRegular = localFont({
  src: "../public/fonts/Satoshi-Medium.otf",
  variable: "--font-satoshi",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Robin Wood - Ihr Experte für nachhaltige Baumpflege in Hamburg",
  description: "Robin Wood - Ihr Experte für nachhaltige Baumpflege in Hamburg",
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
      <body className={`${satoshiRegular.variable} ${satoshiBold.variable} antialiased`}>
        <div className="min-h-[calc(100vh-80px)]">{children}</div>
      </body>
    </html>
  );
}
