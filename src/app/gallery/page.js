"use client";
import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null); // Index of active image in filtered list

  const filterCategories = [
    { id: "all", label: t.gallery.all },
    { id: "healthcare", label: t.gallery.categories.healthcare },
    { id: "education", label: t.gallery.categories.education },
    { id: "community", label: t.gallery.categories.community },
    { id: "sports", label: t.gallery.categories.sports },
    { id: "women", label: t.gallery.categories.women }
  ];

  // Get active images based on selected category
  const filteredPhotos = activeCategory === "all"
    ? t.gallery.photos
    : t.gallery.photos.filter(p => p.category === activeCategory);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <div className="flex flex-col w-full relative bg-[#F8F9FA] pb-24">
      {/* 1. Header Banner */}
      <section className="relative py-20 bg-[#0A1F1C] text-white overflow-hidden text-center mb-16">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#0F6B5B]/20 blur-3xl pointer-events-none -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#0F6B5B]/20 blur-3xl pointer-events-none -ml-16 -mb-16" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="text-xs font-black tracking-widest text-[#F4B400] uppercase bg-[#F4B400]/10 px-3.5 py-1.5 rounded-full border border-[#F4B400]/20 inline-block mb-3.5">
            GALLERY
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight font-display text-white">
            {t.gallery.title}
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-3.5 max-w-xl mx-auto font-light">
            {t.gallery.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Category Filters */}
      <div className="max-w-7xl mx-auto px-4 w-full mb-12">
        <div className="flex flex-wrap justify-center items-center gap-3">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`py-2.5 px-5 rounded-full text-xs sm:text-sm font-extrabold transition-all border cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#0F6B5B] text-white border-[#0F6B5B] shadow-md scale-[1.02]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Masonry/Grid Photos */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20 text-gray-400 bg-white border border-gray-100 rounded-3xl p-10 flex flex-col items-center justify-center gap-3 shadow-premium">
            <ImageIcon size={40} className="text-gray-300 stroke-[1.5]" />
            <span className="font-bold text-sm">No photos available in this category yet.</span>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={photo.id}
                  onClick={() => openLightbox(index)}
                  className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-premium cursor-pointer relative group bg-white"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0A1F1C]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[10px] font-black text-[#F4B400] uppercase tracking-widest block mb-1">
                      {photo.category}
                    </span>
                    <h3 className="text-white text-sm font-bold leading-tight font-display mb-2">
                      {photo.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs hover:bg-white/20 transition-colors">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* 4. Premium Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all z-[10000]"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Lightbox Main Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full h-[70vh] flex flex-col justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={filteredPhotos[lightboxIndex].image}
                  alt={filteredPhotos[lightboxIndex].title}
                  className="max-w-full max-h-full object-contain rounded shadow-2xl select-none"
                />

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-16 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hover:scale-105"
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-16 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hover:scale-105"
                  aria-label="Next Image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Photo description footer */}
              <div className="text-center mt-6 text-white max-w-md px-4">
                <span className="text-[10px] font-black text-[#F4B400] uppercase tracking-widest block mb-1">
                  {filteredPhotos[lightboxIndex].category}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display">
                  {filteredPhotos[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
