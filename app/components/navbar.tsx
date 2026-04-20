"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
  isCta?: boolean;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/convert", label: "Convert now", isCta: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <Link
          href="/"
          className="brand-link"
          aria-label="Cawnverter home"
          onClick={() => setIsOpen(false)}
        >
          Cawnverter
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${isOpen ? "is-open" : ""}`}
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/convert" ? pathname.startsWith("/convert") : pathname === "/";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${item.isCta ? "nav-cta" : ""} ${isActive ? "is-active" : ""}`.trim()}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
