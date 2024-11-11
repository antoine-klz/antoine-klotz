import { Rainbow } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden">
      <header className="px-6 lg:px-6 h-20 flex items-center justify-center bg-[#144723] opacity-90 w-full">
        <div className="w-full max-w-5xl flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Rainbow size={40} color="#8AEA7C" />
            <span className="text-2xl font-bold text-white">Robin Wood</span>
          </Link>
          <nav className="gap-4 items-center hidden lg:flex">
            {["About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                className="text-sm font-medium text-[#DCFCD7] transition-colors hover:text-[#fdff45]"
                href="#"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
