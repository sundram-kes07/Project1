"use client";
import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Phone, Mail, MapPin, Send, MessageCircle, AlertCircle, CheckCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const { t } = useLanguage();
  
  // States
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Simple spam protection
  });
  
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = t.locale === "en" ? "Name is required" : "नाम अनिवार्य है";
    
    if (!form.email.trim()) {
      tempErrors.email = t.locale === "en" ? "Email is required" : "ईमेल अनिवार्य है";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = t.locale === "en" ? "Invalid email address" : "अमान्य ईमेल पता";
    }

    if (!form.subject.trim()) tempErrors.subject = t.locale === "en" ? "Subject is required" : "विषय अनिवार्य है";
    if (!form.message.trim()) tempErrors.message = t.locale === "en" ? "Message is required" : "संदेश अनिवार्य है";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Honeypot spam protection trigger (if filled, silent fail/ignore)
    if (form.honeypot) {
      setIsSending(true);
      setTimeout(() => {
        setIsSending(false);
        setSubmitStatus("success");
      }, 1000);
      return;
    }

    setIsSending(true);
    setSubmitStatus(null);

    // Simulate sending contact email
    setTimeout(() => {
      setIsSending(false);
      setSubmitStatus("success");
      // Reset form
      setForm({ name: "", email: "", subject: "", message: "", honeypot: "" });
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full relative bg-[#F8F9FA] pb-24">
      {/* 1. Header Banner */}
      <section className="relative py-20 bg-[#0A1F1C] text-white overflow-hidden text-center mb-16">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#0F6B5B]/20 blur-3xl pointer-events-none -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#0F6B5B]/20 blur-3xl pointer-events-none -ml-16 -mb-16" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="text-xs font-black tracking-widest text-[#F4B400] uppercase bg-[#F4B400]/10 px-3.5 py-1.5 rounded-full border border-[#F4B400]/20 inline-block mb-3.5">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight font-display text-white">
            {t.nav.contact}
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-3.5 max-w-xl mx-auto font-light">
            {t.contactPage.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Contacts Card */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-premium flex flex-col gap-6">
              
              {/* Address card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F6B5B]/10 text-[#0F6B5B] flex items-center justify-center shrink-0">
                  <MapPin size={22} className="stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-sm sm:text-base uppercase tracking-wider mb-1 font-display">
                    {t.contactPage.addressTitle}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {t.header.address}
                  </p>
                </div>
              </div>

              {/* Phones card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F4B400]/10 text-[#e0a400] flex items-center justify-center shrink-0">
                  <Phone size={22} className="stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-sm sm:text-base uppercase tracking-wider mb-1 font-display">
                    {t.contactPage.phoneTitle}
                  </h3>
                  <a
                    href={`tel:${t.header.phone.replace(/\s+/g, "")}`}
                    className="text-gray-500 text-xs sm:text-sm hover:text-[#0F6B5B] transition-colors"
                  >
                    {t.header.phone}
                  </a>
                </div>
              </div>

              {/* Email card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F6B5B]/10 text-[#0F6B5B] flex items-center justify-center shrink-0">
                  <Mail size={22} className="stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-sm sm:text-base uppercase tracking-wider mb-1 font-display">
                    {t.contactPage.emailTitle}
                  </h3>
                  <a
                    href={`mailto:${t.header.email}`}
                    className="text-gray-500 text-xs sm:text-sm hover:text-[#0F6B5B] transition-colors break-all"
                  >
                    {t.header.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Premium WhatsApp floating/action button */}
            <a
              href="https://wa.me/919102631880"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold py-4 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle size={20} fill="currentColor" />
              <span>{t.contactPage.whatsappBtn}</span>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div id="form" className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl shadow-premium-lg p-6 sm:p-10 w-full">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 font-display">
              {t.contactPage.formTitle}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Spam Honeypot Field (Hidden from standard users) */}
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleInputChange}
                className="hidden"
                autoComplete="off"
                tabIndex="-1"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-gray-600">{t.contactPage.formFields.name} *</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    className="bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6B5B] focus:border-transparent transition-all"
                  />
                  {errors.name && <span className="text-red-500 text-xs font-semibold">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-gray-600">{t.contactPage.formFields.email} *</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    className="bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6B5B] focus:border-transparent transition-all"
                  />
                  {errors.email && <span className="text-red-500 text-xs font-semibold">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-gray-600">{t.contactPage.formFields.subject} *</span>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  className="bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6B5B] focus:border-transparent transition-all"
                />
                {errors.subject && <span className="text-red-500 text-xs font-semibold">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-gray-600">{t.contactPage.formFields.message} *</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6B5B] focus:border-transparent transition-all resize-none"
                />
                {errors.message && <span className="text-red-500 text-xs font-semibold">{errors.message}</span>}
              </div>

              {/* Success / Error notification */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl p-4 text-xs sm:text-sm font-bold flex items-start gap-2.5"
                  >
                    <CheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{t.contactPage.formFields.success}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Message Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 bg-[#0F6B5B] hover:bg-[#0A1F1C] text-white font-extrabold py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 disabled:opacity-50 text-sm sm:text-base cursor-pointer"
              >
                {isSending ? (
                  <span>{t.contactPage.formFields.sending}</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>{t.contactPage.formFields.submit}</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

        {/* 3. Google Maps Embed Iframe Section */}
        <div className="w-full mt-16 rounded-3xl overflow-hidden border border-gray-100 shadow-premium aspect-[21/9] min-h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.4526685803273!2d85.1054366!3d25.623188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a24c53c07ad1%3A0x673d3ea7dfbc6e4d!2sKurji%20Patna!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map embed location"
          />
        </div>
      </div>
    </div>
  );
}
