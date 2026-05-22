"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { locale, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/donation", label: t.nav.donation },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-white/95 backdrop-blur-sm shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* NGO Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-[#0F6B5B] flex items-center justify-center text-[#F4B400] font-black shadow-md transform group-hover:scale-105 transition-all">
            LS
          </div>
          <div>
            <span className="text-xl font-black tracking-wider text-[#0F6B5B] block leading-none">
              LOK SWARAJ
            </span>
            <span className="text-[10px] tracking-widest text-[#F4B400] font-bold block uppercase mt-0.5">
              Mission Trust
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 font-semibold text-sm transition-colors ${
                  isActive ? "text-[#0F6B5B]" : "text-gray-600 hover:text-[#0F6B5B]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F4B400]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Header Right Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Multilingual Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#0F6B5B] bg-[#0F6B5B]/10 hover:bg-[#0F6B5B]/20 transition-all border border-[#0F6B5B]/20"
            title="Switch Language / भाषा बदलें"
          >
            <Globe size={14} className="text-[#0F6B5B]" />
            <span>{locale === "en" ? "हिन्दी" : "English"}</span>
          </button>

          {/* Quick Donate CTA */}
          <Link
            href="/donation"
            className="flex items-center gap-1.5 bg-[#F4B400] hover:bg-[#e0a400] text-gray-900 font-bold px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <Heart size={16} fill="currentColor" className="text-gray-900" />
            <span>{t.hero.donateBtn}</span>
          </Link>
        </div>

        {/* Mobile Toggle & Locale Controls */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Multilingual Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[#0F6B5B]"
            aria-label="Toggle language"
          >
            <Globe size={18} />
          </button>

          {/* Mobile Hamburger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-100 text-gray-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-inner"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-bold px-2 py-1.5 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#0F6B5B]/10 text-[#0F6B5B]"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="h-px bg-gray-100 my-2" />

              <Link
                href="/donation"
                className="w-full text-center flex items-center justify-center gap-2 bg-[#F4B400] text-gray-900 font-extrabold py-3 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <Heart size={18} fill="currentColor" />
                <span>{t.hero.donateBtn}</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
