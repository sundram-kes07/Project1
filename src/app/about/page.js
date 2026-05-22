"use client";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Landmark, Shield, Target, Compass, Award, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useLanguage();

  const iconMap = {
    "Our Mission": Target,
    "Our Vision": Compass,
    "हमारा मिशन": Target,
    "हमारा दृष्टिकोण": Compass,
  };

  return (
    <div className="flex flex-col w-full relative bg-[#F8F9FA] pb-20">
      
      {/* 1. Header Banner */}
      <section className="relative py-20 bg-[#0A1F1C] text-white overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#0F6B5B]/20 blur-3xl pointer-events-none -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#0F6B5B]/20 blur-3xl pointer-events-none -ml-16 -mb-16" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="text-xs font-black tracking-widest text-[#F4B400] uppercase bg-[#F4B400]/10 px-3.5 py-1.5 rounded-full border border-[#F4B400]/20 inline-block mb-3.5">
            LOK SWARAJ TRUST
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight font-display text-white">
            {t.nav.about}
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-3.5 max-w-xl mx-auto font-light">
            {t.locale === "en" 
              ? "Dedicated to uplifting rural communities in Bihar through education, healthcare, and self-reliance since 2018."
              : "2018 से शिक्षा, स्वास्थ्य और आत्मनिर्भरता के माध्यम से बिहार में ग्रामीण समुदायों के उत्थान के लिए समर्पित।"}
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F8F9FA] border border-gray-100 p-8 sm:p-10 rounded-3xl shadow-premium relative overflow-hidden group hover:border-[#0F6B5B]/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0F6B5B]/10 flex items-center justify-center text-[#0F6B5B] mb-6 group-hover:scale-105 transition-transform">
                <Target size={28} className="stroke-[2]" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 font-display">
                {t.about.missionTitle}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {t.about.missionText}
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F8F9FA] border border-gray-100 p-8 sm:p-10 rounded-3xl shadow-premium relative overflow-hidden group hover:border-[#0F6B5B]/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F4B400]/10 flex items-center justify-center text-[#e0a400] mb-6 group-hover:scale-105 transition-transform">
                <Compass size={28} className="stroke-[2]" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 font-display">
                {t.about.visionTitle}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {t.about.visionText}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Founder Message */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-premium-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Founder Image */}
              <div className="lg:col-span-4 aspect-square lg:aspect-auto w-full relative min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop"
                  alt="Founder Sri Raj Kumar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white block lg:hidden">
                  <h4 className="text-lg font-bold">{t.about.founderName}</h4>
                  <p className="text-xs text-[#F4B400] font-semibold">{t.about.founderTitle}</p>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-8 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <span className="text-xs font-black tracking-widest text-[#0F6B5B] uppercase bg-[#0F6B5B]/10 px-3.5 py-1.5 rounded-full inline-block mb-4 w-fit">
                  {t.about.founderTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                  {t.locale === "en" ? "Empowering Lives from the Grassroots" : "जमीनी स्तर से जिंदगियों को सशक्त बनाना"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 italic">
                  "{t.about.founderMsg}"
                </p>
                
                {/* Signature info */}
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 rounded-full bg-[#0F6B5B]/10 flex items-center justify-center text-[#0F6B5B] font-extrabold text-lg">
                    RK
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 leading-none">{t.about.founderName}</h4>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1 block">
                      {t.about.founderTitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timeline Milestones */}
      <section id="timeline" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-black tracking-widest text-[#0F6B5B] uppercase bg-[#0F6B5B]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {t.about.timelineTitle}
            </h2>
          </div>

          {/* Timeline Structure (Fixed spacing, no overlapping) */}
          <div className="relative max-w-4xl mx-auto pl-8 sm:pl-0">
            {/* Center Line for desktop */}
            <div className="absolute top-0 bottom-0 left-8 sm:left-1/2 w-0.5 bg-gray-200 -translate-x-1/2" />

            <div className="flex flex-col gap-12 relative">
              {t.about.timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`flex flex-col sm:flex-row items-start sm:items-center relative w-full ${
                      isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Circle Node indicator */}
                    <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-[3px] border-[#0F6B5B] flex items-center justify-center z-10 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F4B400]" />
                    </div>

                    {/* Timeline Box */}
                    <div className="w-full sm:w-1/2 pl-6 sm:pl-0 sm:px-10">
                      <div className="bg-[#F8F9FA] border border-gray-100 p-6 rounded-2xl shadow-premium hover:shadow-premium-lg hover:border-[#0F6B5B]/10 transition-all duration-300 group">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[#F4B400] font-black text-lg tracking-wider font-display bg-[#F4B400]/10 px-2.5 py-0.5 rounded-full">
                            {item.year}
                          </span>
                          <h3 className="font-extrabold text-gray-900 group-hover:text-[#0F6B5B] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for desktop alignment */}
                    <div className="hidden sm:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-[#0F6B5B] uppercase bg-[#0F6B5B]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {t.about.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-gray-100 p-8 rounded-2xl text-center shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F6B5B]/10 text-[#0F6B5B] flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Award size={22} className="stroke-[2.5]" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2 font-display">
                  {val.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {val.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Team Members */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-[#0F6B5B] uppercase bg-[#0F6B5B]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              LEADERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {t.about.teamTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.about.team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col bg-[#F8F9FA] rounded-3xl overflow-hidden border border-gray-100 shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Member Photo */}
                <div className="aspect-[4/3] w-full overflow-hidden relative shrink-0">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#0F6B5B] transition-colors font-display">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-[#F4B400] uppercase tracking-widest block mb-4">
                    {member.role}
                  </span>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
