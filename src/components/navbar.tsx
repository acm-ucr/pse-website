"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import pseLogo from "@/../public/PSE-Gradient-Logo-3.webp";
import { tags } from "@/components/data/navBar";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null,
  );

  const isActive = (link: string) =>
    pathname === link || pathname.startsWith(link + "/");

  return (
    <nav className="bg-pse-purple-500 z-50 border-b shadow-md backdrop-blur-md">
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
            <span className="text-2xl font-light tracking-wide text-white">
              ΠΣΕ
            </span>
            <span className="text-base text-white">Pi Sigma Epsilon</span>
          </div>
        </div>

        <div className="font-pse-maitree relative hidden items-center space-x-4 font-medium md:flex">
          {tags.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="group relative">
                <button
                  className={`flex items-center justify-center gap-1 px-2 text-white hover:text-yellow-400 ${
                    item.dropdown.some((sub) => isActive(sub.link))
                      ? "text-yellow-400"
                      : ""
                  }`}
                >
                  <span>{item.name.toUpperCase()}</span>
                  <span className="text-sm">▼</span>
                </button>

                <div className="bg-pse-purple-400 invisible absolute top-full left-1/2 mt-1 flex -translate-x-1/2 flex-col overflow-hidden rounded-md text-center text-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.link}
                      className={`hover:bg-pse-purple-500 block px-4 py-2 text-white ${
                        isActive(sub.link)
                          ? "text-pse-purple-500 bg-yellow-400 font-semibold"
                          : ""
                      }`}
                    >
                      {sub.name.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.link}
                className={`text-center text-white hover:text-yellow-400 ${
                  isActive(item.link) ? "font-semibold text-yellow-400" : ""
                }`}
              >
                {item.name.toUpperCase()}
              </Link>
            ),
          )}
        </div>

        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="bg-pse-purple-400 font-pse-maitree space-y-3 px-6 py-4 text-white md:hidden">
          {tags.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  className={`flex w-full items-center justify-center gap-2 py-4 font-semibold text-white ${
                    item.dropdown.some((sub) => isActive(sub.link))
                      ? "text-yellow-400"
                      : ""
                  }`}
                  onClick={() =>
                    setMobileDropdownOpen(
                      mobileDropdownOpen === item.name ? null : item.name,
                    )
                  }
                >
                  <span>{item.name.toUpperCase()}</span>
                  <span>{mobileDropdownOpen === item.name ? "▲" : "▼"}</span>
                </button>

                {mobileDropdownOpen === item.name && (
                  <div className="flex flex-col space-y-2 pt-1 pl-4 text-center">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.link}
                        className={`block text-sm text-white hover:text-yellow-400 ${
                          isActive(sub.link) ? "font-bold text-yellow-400" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.link}
                className={`block py-2 text-center font-semibold text-white hover:text-yellow-400 ${
                  isActive(item.link) ? "font-semibold text-yellow-400" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name.toUpperCase()}
              </Link>
            ),
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
