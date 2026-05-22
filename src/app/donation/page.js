"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";
import { Heart, Landmark, CheckCircle, AlertTriangle, ShieldCheck, CreditCard, Receipt, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function DonationFormContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  
  // States
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [campaign, setCampaign] = useState("general");
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
  });
  
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success' | 'failure' | null
  const [transactionId, setTransactionId] = useState("");

  // Hook up query parameter from Home page campaign card
  useEffect(() => {
    const campaignParam = searchParams.get("campaign");
    if (campaignParam) {
      setCampaign(campaignParam);
    }
  }, [searchParams]);

  const presetAmounts = [500, 1000, 2500, 5000];

  const handlePresetSelect = (amt) => {
    setSelectedAmount(amt);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // Clear validation error when typing
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

    if (!form.phone.trim()) {
      tempErrors.phone = t.locale === "en" ? "Mobile is required" : "मोबाइल अनिवार्य है";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/[\s-+]/g, ""))) {
      tempErrors.phone = t.locale === "en" ? "Invalid 10-digit number" : "अमान्य 10-अंकीय संख्या";
    }

    const currentAmt = selectedAmount || parseFloat(customAmount);
    if (!currentAmt || isNaN(currentAmt) || currentAmt <= 0) {
      tempErrors.amount = t.locale === "en" ? "Select or enter a valid amount" : "मान्य राशि चुनें या दर्ज करें";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);
    // Simulate contact to gateway API
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentGateway(true);
    }, 1200);
  };

  const handleSimulatePayment = (success) => {
    setShowPaymentGateway(false);
    
    if (success) {
      // Create a mock transaction ID
      const txId = "TXN_" + Math.random().toString(36).substr(2, 9).toUpperCase() + "_LS";
      setTransactionId(txId);
      setPaymentStatus("success");
    } else {
      setPaymentStatus("failure");
    }
  };

  const resetWidget = () => {
    setPaymentStatus(null);
    setForm({ name: "", email: "", phone: "", pan: "" });
    setSelectedAmount(1000);
    setCustomAmount("");
    setTransactionId("");
  };

  const currentDonationAmount = selectedAmount || parseFloat(customAmount) || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      
      {/* Visual Success Receipt State */}
      <AnimatePresence>
        {paymentStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100 shadow-premium-xl text-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={36} className="stroke-[2.5]" />
            </div>

            <h2 className="text-2xl font-black text-gray-900 mb-2 font-display">
              {t.donationPage.receipt.successTitle}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed px-4 mb-8">
              {t.donationPage.receipt.successMsg}
            </p>

            {/* Receipt details */}
            <div className="bg-slate-50 border border-gray-100 rounded-2xl p-6 text-left flex flex-col gap-4 text-xs sm:text-sm mb-8 font-sans">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200/50">
                <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">{t.donationPage.receipt.transId}</span>
                <span className="font-mono font-black text-[#0F6B5B]">{transactionId}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200/50">
                <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">{t.donationPage.receipt.donorName}</span>
                <span className="font-extrabold text-gray-800">{form.name}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200/50">
                <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">{t.donationPage.fields.campaign}</span>
                <span className="font-bold text-gray-700 uppercase text-xs">
                  {campaign === "general" ? (t.locale === "en" ? "General Trust" : "सामान्य ट्रस्ट") : campaign}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">{t.donationPage.receipt.amount}</span>
                <span className="font-black text-lg text-emerald-600">₹{currentDonationAmount.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={resetWidget}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0F6B5B] hover:bg-[#0A1F1C] text-white font-extrabold py-3.5 rounded-xl transition-all shadow"
            >
              <Receipt size={16} />
              <span>{t.donationPage.receipt.close}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Failure State */}
      <AnimatePresence>
        {paymentStatus === "failure" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-red-100 shadow-premium-xl text-center"
          >
            <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={36} className="stroke-[2.5]" />
            </div>

            <h2 className="text-2xl font-black text-gray-900 mb-2 font-display">
              {t.donationPage.receipt.failTitle}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed px-4 mb-8">
              {t.donationPage.receipt.failMsg}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setPaymentStatus(null)}
                className="flex-1 bg-[#F4B400] hover:bg-[#e0a400] text-gray-900 font-extrabold py-3.5 rounded-xl transition-all"
              >
                {t.locale === "en" ? "Try Again" : "पुनः प्रयास करें"}
              </button>
              <button
                onClick={resetWidget}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-extrabold py-3.5 rounded-xl transition-all"
              >
                {t.locale === "en" ? "Cancel" : "रद्द करें"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Donation Widget Form */}
      {paymentStatus === null && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Security and trust points */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-premium">
              <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2 font-display">
                <Landmark size={20} className="text-[#0F6B5B] stroke-[2.5]" />
                Tax Benefits
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
                {t.locale === "en"
                  ? "All donations made to Lok Swaraj Mission Trust are eligible for tax deductions under section 80G of the Income Tax Act."
                  : "लोक स्वराज मिशन ट्रस्ट को दिया गया सभी दान आयकर अधिनियम की धारा 80जी के तहत कर कटौती के लिए पात्र है।"}
              </p>
              <div className="w-fit bg-[#0F6B5B]/10 text-[#0F6B5B] font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-[#0F6B5B]/20">
                80G Exemption Certified
              </div>
            </div>

            <div className="bg-[#0A1F1C] rounded-3xl p-8 text-white relative overflow-hidden shadow-premium">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 blur-lg pointer-events-none -mr-8 -mt-8" />
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#F4B400] mb-5">
                <ShieldCheck size={20} className="stroke-[2.5]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">100% Encrypted Transactions</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                We employ standard 256-bit encryption pipelines to secure donor cards, Netbanking details, and digital wallets. Your payment details are strictly processed by PCI-DSS certified gateway scripts.
              </p>
            </div>
          </div>

          {/* Right Column: Donation Form Card */}
          <div className="lg:col-span-8 bg-white border border-gray-100 rounded-3xl shadow-premium-lg p-6 sm:p-10 relative">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 font-display flex items-center gap-2">
              <Heart size={22} fill="currentColor" className="text-[#0F6B5B]" />
              {t.locale === "en" ? "Support Lok Swaraj Mission Trust" : "लोक स्वराज मिशन ट्रस्ट का समर्थन करें"}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Step 1: Select Amount */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                  {t.donationPage.step1}
                </label>
                
                {/* Preset Amount Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handlePresetSelect(amt)}
                      className={`py-3 px-4 rounded-xl border text-sm font-black transition-all ${
                        selectedAmount === amt
                          ? "bg-[#0F6B5B] text-white border-[#0F6B5B] shadow-md scale-[1.02]"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      ₹{amt.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div className="relative mt-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-extrabold text-sm">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomChange}
                    placeholder={t.donationPage.custom}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6B5B] focus:border-transparent transition-all"
                  />
                </div>
                {errors.amount && <span className="text-red-500 text-xs font-semibold">{errors.amount}</span>}
              </div>

              <div className="h-px bg-gray-100 my-2" />

              {/* Step 2: Personal Details */}
              <div className="flex flex-col gap-4">
                <label className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                  {t.donationPage.step2}
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-gray-600">{t.donationPage.fields.name} *</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6B5B] focus:border-transparent transition-all"
                    />
                    {errors.name && <span className="text-red-500 text-xs font-semibold">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-gray-600">{t.donationPage.fields.email} *</span>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone field */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-gray-600">{t.donationPage.fields.phone} *</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className="bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6B5B] focus:border-transparent transition-all"
                    />
                    {errors.phone && <span className="text-red-500 text-xs font-semibold">{errors.phone}</span>}
                  </div>

                  {/* PAN Card field */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-gray-600">{t.donationPage.fields.pan}</span>
                    <input
                      type="text"
                      name="pan"
                      value={form.pan}
                      onChange={handleInputChange}
                      placeholder="e.g. ABCDE1234F"
                      className="bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6B5B] focus:border-transparent transition-all uppercase"
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-100 my-2" />

              {/* Step 3: Select Campaign */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                  {t.donationPage.step3}
                </label>
                
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-gray-600">{t.donationPage.fields.campaign} *</span>
                  <select
                    name="campaign"
                    value={campaign}
                    onChange={(e) => setCampaign(e.target.value)}
                    className="bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6B5B] focus:border-transparent transition-all text-gray-700 font-bold"
                  >
                    <option value="general">{t.locale === "en" ? "General Trust (Bihar Upliftment)" : "सामान्य ट्रस्ट (बिहार उत्थान)"}</option>
                    <option value="medical">निःशुल्क चिकित्सा (Free Medical Support)</option>
                    <option value="business">लघु उद्योग सहायता (Small Business Support)</option>
                    <option value="education">शिक्षा व्यवस्था (Education Support)</option>
                    <option value="girl-child">कन्या दान (Girl Child Support)</option>
                    <option value="sports">खेल-कूद (Sports Development)</option>
                  </select>
                </div>
              </div>

              {/* Submit Checkout Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 bg-[#F4B400] hover:bg-[#e0a400] text-gray-900 font-extrabold py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 disabled:opacity-50 mt-4 text-base"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="animate-spin text-gray-900" size={18} />
                    <span>{t.donationPage.fields.processing}</span>
                  </>
                ) : (
                  <>
                    <CreditCard size={18} />
                    <span>{t.donationPage.fields.submit}</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      )}

      {/* Elegant Simulated Payment Gateway Modal */}
      <AnimatePresence>
        {showPaymentGateway && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-[#0F6B5B]/10"
            >
              {/* Modal Header */}
              <div className="bg-[#0F6B5B] text-white p-6 flex flex-col gap-1 items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#F4B400] mb-2">
                  <ShieldCheck size={26} className="stroke-[2.5]" />
                </div>
                <h3 className="text-lg font-black tracking-wide leading-none">{t.donationPage.paymentModal.title}</h3>
                <span className="text-[9px] tracking-widest text-[#F4B400] font-black uppercase mt-1">
                  {t.donationPage.paymentModal.simulated}
                </span>
              </div>

              {/* Modal Body */}
              <div className="p-6 flex flex-col gap-6">
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed text-center">
                  {t.donationPage.paymentModal.desc}
                </p>

                <div className="bg-slate-50 border border-gray-100 p-4 rounded-xl text-xs flex flex-col gap-2 font-sans font-bold">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Merchant</span>
                    <span className="text-gray-800">LOK SWARAJ MISSION TRUST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Payable</span>
                    <span className="text-[#0F6B5B] text-sm">₹{currentDonationAmount.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleSimulatePayment(true)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 rounded-xl shadow transition-all active:scale-[0.98]"
                  >
                    {t.donationPage.paymentModal.confirmBtn}
                  </button>
                  <button
                    onClick={() => handleSimulatePayment(false)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3 rounded-xl shadow transition-all active:scale-[0.98]"
                  >
                    {t.donationPage.paymentModal.failBtn}
                  </button>
                  <button
                    onClick={() => setShowPaymentGateway(false)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-extrabold py-3 rounded-xl transition-all"
                  >
                    {t.donationPage.paymentModal.cancel}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function Donation() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full relative bg-[#F8F9FA] pb-24">
      {/* 1. Header Banner */}
      <section className="relative py-20 bg-[#0A1F1C] text-white overflow-hidden text-center mb-16">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#0F6B5B]/20 blur-3xl pointer-events-none -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#0F6B5B]/20 blur-3xl pointer-events-none -ml-16 -mb-16" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="text-xs font-black tracking-widest text-[#F4B400] uppercase bg-[#F4B400]/10 px-3.5 py-1.5 rounded-full border border-[#F4B400]/20 inline-block mb-3.5">
            SUPPORT BIHAR
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight font-display text-white">
            {t.donationPage.title}
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-3.5 max-w-xl mx-auto font-light">
            {t.donationPage.subtitle}
          </p>
        </div>
      </section>

      {/* Wrap client interactive query param reader in a Suspense component for Next.js build completeness */}
      <Suspense fallback={
        <div className="max-w-md mx-auto py-20 text-center flex flex-col items-center justify-center text-gray-500">
          <Loader2 className="animate-spin text-[#0F6B5B] mb-2" size={32} />
          <span>Loading Donation Form...</span>
        </div>
      }>
        <DonationFormContent />
      </Suspense>
    </div>
  );
}
