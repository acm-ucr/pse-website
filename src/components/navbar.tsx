"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import pseLogo from "@/public/PSE-Gradient-Logo-3.webp";
import { tags } from "@/components/data/navBar";

const Navbar = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-pse-purple-500 top-0 right-0 left-0 z-50 border-b shadow-md backdrop-blur-md">
      <div className="font-pse-crimson-text mx-auto flex items-center justify-between px-8 py-3">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src={pseLogo}
              alt="Pi Sigma Epsilon Logo"
              width={55}
              height={55}
              className="rounded-md transition-transform hover:scale-105"
            />
          </Link>
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold tracking-wide text-white">
              ΠΣΕ
            </span>
            <span className="text-base text-white">Pi Sigma Epsilon</span>
          </div>
        </div>

        <div className="relative flex items-center space-x-4 font-medium font-pse-maitree text-white">
          {tags.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="group relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="hover:text-pse-purple-200">
                  {item.name.toUpperCase()}
                </button>

                <div
                  className={`bg-pse-purple-300 absolute top-full left-1/2 mt-1 flex -translate-x-1/2 flex-col overflow-hidden rounded-md text-center text-white shadow-lg transition-all duration-200 ${
                    openDropdown === item.name
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  } group-hover:visible group-hover:opacity-100`}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.link}
                      className={`hover:bg-pse-purple-200 px-4 py-2 ${
                        pathname === subItem.link ? "" : ""
                      }`}
                    >
                      {subItem.name.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.link}
                className={`hover:text-pse-purple-200 ${
                  pathname === item.link ? "" : ""
                }`}
              >
                {item.name.toUpperCase()}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
