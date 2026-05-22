"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the window to load completely + small artificial delay for luxury feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#0A1F1C] flex flex-col items-center justify-center"
        >
          <div className="text-center flex flex-col items-center gap-6 px-4">
            {/* Animated Logo Shield */}
            <motion.div
              initial={{ scale: 0.5, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                duration: 1,
              }}
              className="w-24 h-24 rounded-full bg-[#0F6B5B] flex items-center justify-center text-[#F4B400] font-black text-4xl shadow-2xl border-2 border-[#F4B400]/30"
            >
              LS
            </motion.div>

            {/* NGO Name */}
            <div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-white text-3xl font-black tracking-widest leading-none"
              >
                LOK SWARAJ
              </motion.h1>
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-[#F4B400] font-bold text-xs tracking-widest uppercase mt-2"
              >
                Mission Trust
              </motion.p>
            </div>

            {/* Modern visual loader bar */}
            <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden mt-4 relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#0F6B5B] to-[#F4B400] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
