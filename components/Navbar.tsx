"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#f5f1eb]/70 border-b border-[#e5ded6]">
      <div className="max-w-7xl mx-auto px-12 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-wide">
          Sehaj Kaur
        </h1>

        <div className="flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`transition-all duration-300 hover:text-[#8b6f5c] ${
                pathname === link.path
                  ? "text-[#8b6f5c]"
                  : "text-[#4a3f35]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}