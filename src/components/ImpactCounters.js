"use client";
import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Users, Shield, Calendar, Map } from "lucide-react";
import { motion, useInView } from "framer-motion";

function SingleCounter({ target, suffix, speed = 30 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    // Adjust increment speed based on the scale of the target number
    const increment = Math.ceil(end / 40);
    const duration = 1200; // total animation time in ms
    const stepTime = Math.abs(Math.floor(duration / (end / increment)));

    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime || 20);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display font-black text-4xl sm:text-5xl text-[#F4B400] tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactCounters() {
  const { t } = useLanguage();

  const iconMap = {
    "Lives Helped": Users,
    "Volunteers": Shield,
    "Campaigns Completed": Calendar,
    "Villages Reached": Map,
    "मदद की गई जिंदगियां": Users,
    "सक्रिय स्वयंसेवक": Shield,
    "पूर्ण किए गए अभियान": Calendar,
    "गाँवों तक पहुँच": Map
  };

  const colors = [
    "from-[#0F6B5B]/10 to-[#0F6B5B]/5 border-[#0F6B5B]/20 text-[#0F6B5B]",
    "from-[#F4B400]/10 to-[#F4B400]/5 border-[#F4B400]/20 text-[#e0a400]",
    "from-[#0F6B5B]/10 to-[#0F6B5B]/5 border-[#0F6B5B]/20 text-[#0F6B5B]",
    "from-[#F4B400]/10 to-[#F4B400]/5 border-[#F4B400]/20 text-[#e0a400]"
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F8F9FA] blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-black tracking-widest text-[#0F6B5B] uppercase bg-[#0F6B5B]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {t.nav.donation} IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t.impact.title}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3">
            {t.impact.subtitle}
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.impact.items.map((item, idx) => {
            const IconComponent = iconMap[item.label] || Users;
            const themeColor = colors[idx % colors.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`bg-gradient-to-br ${themeColor} border p-8 rounded-2xl flex flex-col items-center text-center shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform text-inherit">
                  <IconComponent size={26} className="stroke-[2]" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <SingleCounter target={item.count} suffix={item.suffix} />
                  <span className="text-sm font-bold text-gray-700 tracking-wide uppercase mt-1">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
