"use client";
import React from "react";
import { Phone, Mail } from "lucide-react";
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

export default function Header() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#0F6B5B] text-white text-xs sm:text-sm py-2 px-4 border-b border-[#0A1F1C]/20 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Contact info bar */}
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
          <a
            href={`tel:${t.header.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 hover:text-[#F4B400] transition-colors"
          >
            <Phone size={14} className="text-[#F4B400]" />
            <span className="font-medium text-gray-200">{t.header.callUs}:</span>
            <span>{t.header.phone}</span>
          </a>
          <a
            href={`mailto:${t.header.email}`}
            className="flex items-center gap-1.5 hover:text-[#F4B400] transition-colors"
          >
            <Mail size={14} className="text-[#F4B400]" />
            <span className="font-medium text-gray-200">{t.header.mailUs}:</span>
            <span>{t.header.email}</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4B400] transition-colors p-1"
            aria-label="Twitter link"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4B400] transition-colors p-1"
            aria-label="Facebook link"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4B400] transition-colors p-1"
            aria-label="YouTube link"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
