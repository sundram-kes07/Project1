"use client";
import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Custom Brand SVGs to bypass Lucide version changes
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/donation", label: t.nav.donation },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
    { href: "/about#timeline", label: t.footer.terms },
    { href: "/contact#form", label: t.footer.support }
  ];

  const galleryThumbs = [
    "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=150&auto=format&fit=crop"
  ];

  return (
    <footer className="bg-[#0A1F1C] text-white pt-16 pb-8 relative border-t-4 border-[#F4B400] overflow-hidden">
      {/* Decorative light green background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0F6B5B]/10 blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#0F6B5B]/10 blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About NGO */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#0F6B5B] flex items-center justify-center text-[#F4B400] font-black border border-[#F4B400]/30 shadow-md">
                LS
              </div>
              <div>
                <span className="text-xl font-black tracking-wider text-white block leading-none">
                  LOK SWARAJ
                </span>
                <span className="text-[10px] tracking-widest text-[#F4B400] font-bold block uppercase mt-0.5">
                  Mission Trust
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F4B400] hover:text-gray-900 transition-all flex items-center justify-center border border-white/10"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F4B400] hover:text-gray-900 transition-all flex items-center justify-center border border-white/10"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F4B400] hover:text-gray-900 transition-all flex items-center justify-center border border-white/10"
                aria-label="Youtube"
              >
                <YoutubeIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F4B400] hover:text-gray-900 transition-all flex items-center justify-center border border-white/10"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Office Contacts */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white relative pb-2 border-b border-white/10 w-fit pr-6">
              {t.footer.officeTitle}
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#F4B400]" />
            </h3>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#F4B400] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {t.header.address}
                </span>
              </div>
              <a
                href={`tel:${t.header.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-gray-400 hover:text-[#F4B400] transition-colors text-sm"
              >
                <Phone size={18} className="text-[#F4B400] shrink-0" />
                <span>{t.header.phone}</span>
              </a>
              <a
                href={`mailto:${t.header.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-[#F4B400] transition-colors text-sm"
              >
                <Mail size={18} className="text-[#F4B400] shrink-0" />
                <span>{t.header.email}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white relative pb-2 border-b border-white/10 w-fit pr-6">
              {t.footer.linksTitle}
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#F4B400]" />
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 mt-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-gray-400 hover:text-[#F4B400] transition-all text-sm group"
                  >
                    <ChevronRight size={14} className="text-[#F4B400] transition-transform group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Gallery Thumbnails */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white relative pb-2 border-b border-white/10 w-fit pr-6">
              {t.footer.galleryTitle}
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#F4B400]" />
            </h3>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {galleryThumbs.map((url, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded overflow-hidden border border-white/10 hover:border-[#F4B400] transition-colors cursor-pointer group"
                >
                  <img
                    src={url}
                    alt={`Gallery Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10 w-full my-8" />

        {/* Copyright info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400 text-center">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.designedBy}</p>
        </div>
      </div>
    </footer>
  );
}
