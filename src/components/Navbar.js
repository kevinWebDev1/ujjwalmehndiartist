"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About me", id: "/#about" },
    { name: "Gallery", id: "/#gallery" },
    { name: "Services", id: "/#services" },
    { name: "Reviews", id: "/#reviews" },
    { name: "Contact", id: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Hamburger — visible on mobile & tablet, hidden on lg+ */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 -ml-2 text-primary hover:bg-primary/5 rounded-full transition-colors lg:hidden"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <Link href="/" className="text-xl lg:text-2xl font-body italic text-primary tracking-wide">
              Ujjwal Mehndi
            </Link>
          </div>

          {/* Desktop inline nav — hidden below lg */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.id}
                className="text-xs font-body font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a 
            href="/#contact"
            className="bg-primary text-white px-5 py-2 md:px-7 md:py-2.5 rounded-lg font-body font-medium text-sm tracking-wide hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* Mobile / Tablet Menu Drawer — only opens below lg */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 lg:hidden ${
          menuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Drawer */}
        <nav
          className={`absolute top-0 left-0 bottom-0 w-[300px] md:w-[360px] bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col p-8 md:p-10 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-16">
            <Link href="/" className="text-xl font-body italic text-primary">
              Ujjwal Mehndi
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.id}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-body font-medium text-primary hover:translate-x-2 transition-transform duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-10 border-t border-outline-variant/30">
            <p className="text-xs font-body uppercase tracking-widest text-on-surface-variant mb-4">
              Follow My Work
            </p>
            <div className="flex gap-6 items-center">
              <a
                href="https://wa.me/917390928796"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 relative hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <Image
                  src="/images/socials/WhatsApp.png"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </a>
              <a
                href="https://www.instagram.com/ujjwalmehendiart0909?igsh=c2ljcnU0b2ZjaDls"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 relative hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Image
                  src="/images/socials/instagram.png"
                  alt="Instagram"
                  fill
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
