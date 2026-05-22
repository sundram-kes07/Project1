"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Heart, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Calendar, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ImpactCounters from "@/components/ImpactCounters";

export default function Home() {
  const { t, locale } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto play hero slider
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % t.hero.slides.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [t.hero.slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % t.hero.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + t.hero.slides.length) % t.hero.slides.length);
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* 1. HERO SLIDER SECTION */}
      <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden bg-black text-white z-10">
        <AnimatePresence mode="wait">
          {t.hero.slides.map((slide, index) => {
            if (index !== currentSlide) return null;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                {/* Visual Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F1C]/90 via-[#0A1F1C]/65 to-transparent" />

                {/* Hero Content */}
                <div className="absolute inset-0 max-w-7xl mx-auto px-4 flex flex-col justify-center items-start z-20">
                  <div className="max-w-2xl">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <span className="text-xs font-black tracking-widest text-[#F4B400] uppercase bg-[#F4B400]/10 px-3 py-1 rounded-full border border-[#F4B400]/20 inline-block mb-4">
                        LOK SWARAJ MISSION TRUST
                      </span>
                    </motion.div>
                    <motion.h1
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6 font-display"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="text-gray-200 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed font-light"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="flex flex-wrap items-center gap-4"
                    >
                      <Link
                        href="/donation"
                        className="bg-[#F4B400] hover:bg-[#e0a400] text-gray-900 font-extrabold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center gap-2 text-sm sm:text-base"
                      >
                        <Heart size={18} fill="currentColor" />
                        <span>{t.hero.donateBtn}</span>
                      </Link>
                      <Link
                        href="/contact"
                        className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-extrabold px-7 py-3.5 rounded-full transition-all transform active:scale-95 flex items-center gap-2 text-sm sm:text-base"
                      >
                        <span>{t.hero.volunteerBtn}</span>
                        <ArrowRight size={18} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Carousel Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
          {t.hero.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide ? "bg-[#F4B400] w-6" : "bg-white/40"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Left/Right controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/35 hover:bg-black/60 text-white transition-all backdrop-blur-sm hidden sm:block"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/35 hover:bg-black/60 text-white transition-all backdrop-blur-sm hidden sm:block"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} />
        </button>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 bg-[#F8F9FA] relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: NGO Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-premium-xl border border-white/20 group">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                  alt="NGO collage group"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F1C]/40 to-transparent" />
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-2xl shadow-premium border border-gray-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0F6B5B]/10 flex items-center justify-center text-[#0F6B5B]">
                  <CheckCircle2 size={24} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-xl font-black text-gray-900 leading-none">100%</span>
                  <span className="block text-[11px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Transparent Funding</span>
                </div>
              </div>
            </div>

            {/* Right Column: Text & CTA Card */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs font-black tracking-widest text-[#0F6B5B] uppercase bg-[#0F6B5B]/10 px-3.5 py-1.5 rounded-full inline-block mb-3.5">
                  {t.about.tag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  {t.about.title}
                </h2>
              </div>

              <div className="text-gray-600 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
                <p>{t.about.description1}</p>
                <p className="border-l-4 border-[#0F6B5B] pl-4 text-gray-700 font-medium italic">
                  {locale === "en" ? "“Giving is not just about making a donation. It is about making a difference.”" : "“दान देना केवल दान करने के बारे में नहीं है। यह बदलाव लाने के बारे में है।”"}
                </p>
                <p>{t.about.description2}</p>
              </div>

              {/* Mission Bullet Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-2">
                {t.about.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F6B5B] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <CheckCircle2 size={12} className="stroke-[3]" />
                    </div>
                    <span className="text-sm font-bold text-gray-800">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Donation CTA card */}
              <div className="bg-gradient-to-br from-[#F4B400] to-[#e0a400] p-6 sm:p-8 rounded-2xl shadow-premium border border-[#F4B400]/20 text-gray-900 relative overflow-hidden mt-4 group">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none -mr-10 -mt-10" />
                
                <h3 className="text-lg sm:text-xl font-black mb-2 flex items-center gap-2 font-display">
                  <Landmark size={20} className="stroke-[2.5]" />
                  {t.about.ctaTitle}
                </h3>
                <p className="text-sm leading-relaxed mb-6 font-semibold opacity-90 text-gray-800">
                  {t.about.ctaText}
                </p>
                <Link
                  href="/donation"
                  className="inline-flex items-center gap-1.5 bg-[#0F6B5B] hover:bg-[#0A1F1C] text-white font-extrabold px-6 py-3 rounded-full text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 group-hover:scale-[1.02]"
                >
                  <Heart size={16} fill="currentColor" />
                  <span>{t.about.ctaBtn}</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CAMPAIGNS SECTION */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-[#0F6B5B] uppercase bg-[#0F6B5B]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              {t.campaigns.tag} CAMPAIGNS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {t.campaigns.title}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-3">
              {t.campaigns.subtitle}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.campaigns.list.map((campaign, idx) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col bg-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-100 shadow-premium hover:shadow-premium-lg transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Card Image */}
                <div className="aspect-[4/3] w-full overflow-hidden relative shrink-0">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-[#0F6B5B] text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                    ACTIVE
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-[#0F6B5B] transition-colors mb-2 font-display">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
                      {campaign.desc}
                    </p>
                  </div>

                  {/* Fundraise Details */}
                  <div className="mt-auto">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden relative mb-4">
                      <div
                        className="absolute top-0 bottom-0 left-0 bg-[#0F6B5B] rounded-full"
                        style={{ width: `${campaign.percent}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center text-xs font-bold text-gray-600 mb-6">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-gray-400 font-semibold uppercase tracking-wider text-[9px]">{t.campaigns.raised}</span>
                        <span className="text-[#0F6B5B] text-sm">{campaign.raised}</span>
                      </div>
                      <div className="text-right flex flex-col gap-0.5">
                        <span className="text-gray-400 font-semibold uppercase tracking-wider text-[9px]">{t.campaigns.goal}</span>
                        <span className="text-gray-900 text-sm">{campaign.goal}</span>
                      </div>
                    </div>

                    <Link
                      href={`/donation?campaign=${campaign.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#F4B400] hover:bg-[#e0a400] text-gray-900 font-extrabold py-3.5 rounded-xl shadow-sm hover:shadow transition-all text-sm active:scale-[0.98]"
                    >
                      <Heart size={16} fill="currentColor" />
                      <span>{t.campaigns.donateNow}</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. IMPACT COUNTERS */}
      <ImpactCounters />
      
    </div>
  );
}
