"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const HomeNavigation = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Get the current path to highlight the active button
    setCurrentPath(window.location.pathname);
  }, []);

  const homeRoutes = [
    { number: 1, path: "/" },
    { number: 2, path: "/home2" },
    { number: 3, path: "/home3" },
  ];

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
      {homeRoutes.map((route) => (
        <button
          key={route.number}
          onClick={() => navigateTo(route.path)}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-opacity
            ${currentPath === route.path ? "bg-gray-100/10" : "bg-gray-100/10"}`}
          aria-label={`Navigate to home version ${route.number}`}
        >
          {route.number}
        </button>
      ))}
    </div>
  );
};

export default HomeNavigation;
