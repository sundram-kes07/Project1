"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      donation: "Donate",
      gallery: "Gallery",
      contact: "Contact",
      volunteer: "Join Volunteer"
    },
    header: {
      callUs: "Call Us",
      mailUs: "Mail Us",
      phone: "+91 91026 31880",
      email: "info@lokswaraj.co.in",
      address: "Late Ram Lakhan Bhavan, Opp. Jai Villa App, Nalanda Nagar, Industrial Road, Kurji, Patna-800010"
    },
    hero: {
      slides: [
        {
          title: "Together We Can Change Lives",
          subtitle: "Supporting education, healthcare, women empowerment, rural development, and social welfare.",
          image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Empowering Rural Communities",
          subtitle: "Creating sustainable livelihood opportunities and supporting local small-scale industries.",
          image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "Nurturing Every Child's Future",
          subtitle: "Providing high-quality free education, educational kits, and sports facilities for overall growth.",
          image: "https://images.unsplash.com/photo-1489641499538-be3a25 bc99b5?q=80&w=1200&auto=format&fit=crop"
        }
      ],
      donateBtn: "Donate Now",
      volunteerBtn: "Join Volunteer"
    },
    about: {
      tag: "ABOUT US",
      title: "Join Hands, Change the World",
      description1: "Lok Swaraj Mission Trust is a dedicated non-profit organization established in Bihar, working selflessly towards rural development, healthcare support, women empowerment, education assistance, and overall social welfare. We aim to uplift marginalized sections and bridge the societal gaps.",
      description2: "We believe in sustainable community growth and collective action. By providing resources and emotional storytelling frameworks, we connect compassionate donors with individuals who are in dire need of social and economic upliftment.",
      missionTitle: "Our Mission",
      missionText: "To create a society free from hunger, poverty, and illiteracy, where every citizen has access to healthcare, clean living, equal opportunities, and dignity of life.",
      visionTitle: "Our Vision",
      visionText: "A progressive, self-reliant nation powered by empowered rural families, healthy citizens, bright and educated kids, and strong communities operating with swaraj (self-governance).",
      bullets: [
        "No one should go to bed hungry",
        "We spread kindness and support",
        "We can change someone's life"
      ],
      ctaTitle: "Want to make a direct impact?",
      ctaText: "Your small monthly support can secure medical services, meals, and education for a whole family in Bihar.",
      ctaBtn: "Donate Today",
      founderTitle: "Founder's Message",
      founderName: "Sri Raj Kumar",
      founderMsg: "Welcome to Lok Swaraj Mission Trust. Our trust was born out of a simple realization: change begins when we decide to take responsibility. In Bihar's rural communities, millions still struggle for basic necessities. By focusing on healthcare, education, and micro-entrepreneurship, we are not just giving aid; we are establishing self-reliance. I invite you to join us on this beautiful journey of collective upliftment.",
      timelineTitle: "Our History & Timeline",
      timeline: [
        { year: "2018", title: "The Beginning", text: "Started with informal weekend medical camps and distribution of educational kits in 5 villages near Patna." },
        { year: "2020", title: "Trust Registration", text: "Officially registered as Lok Swaraj Mission Trust. Escalated food distribution and medical relief during crisis times." },
        { year: "2022", title: "Empowerment Programs", text: "Launched small-business kits (Sewing machines, tools) for women and low-income families, enabling self-employment." },
        { year: "2024", title: "Integrated Sports & Labs", text: "Established rural sports club kits and community education centers with digital labs for children." },
        { year: "2026", title: "Expanding the Horizon", text: "Aiming to support 50+ villages, scaling solar micro-grids, and digital literacy initiatives." }
      ],
      valuesTitle: "Our Core Values",
      values: [
        { name: "Transparency", text: "100% accountability of donor funds with verifiable financial transparency." },
        { name: "Self-Reliance", text: "Empowering individuals to earn their own livelihood rather than fostering dependency." },
        { name: "Empathy", text: "Treating every beneficiary with absolute dignity, respect, and deep human compassion." }
      ],
      teamTitle: "Our Leadership & Team",
      team: [
        { name: "Sri Raj Kumar", role: "Founder & Chief Trustee", bio: "Social entrepreneur with over 15 years of grassroots experience in community organizing.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
        { name: "Smt. Shanti Devi", role: "Director of Women Empowerment", bio: "Leading our sewing workshops, self-help groups, and vocational training initiatives.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
        { name: "Dr. Alok Prasad", role: "Medical Coordinator", bio: "Retired physician dedicated to managing our free medical diagnostic and distribution camps.", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop" }
      ]
    },
    campaigns: {
      tag: "DONATION",
      title: "Our Active Welfare & Support Campaigns",
      subtitle: "Join hands to empower Bihar through these direct impact programs.",
      donateNow: "Donate Now",
      raised: "Raised",
      goal: "Goal",
      list: [
        {
          id: "medical",
          title: "निःशुल्क चिकित्सा (Free Medical Support)",
          desc: "Providing free health screening checkups, vital medicines, surgical assistance, and ambulance facilities to marginalized rural families suffering from severe chronic illnesses.",
          image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop",
          raised: "₹3,45,000",
          goal: "₹5,00,000",
          percent: 69
        },
        {
          id: "business",
          title: "लघु उद्योग सहायता (Small Business Support)",
          desc: "Helping micro-entrepreneurs and distressed women start sewing centers, groceries, or handicrafts by providing tools, micro-grants, and business training to enable self-reliance.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
          raised: "₹2,10,000",
          goal: "₹3,50,000",
          percent: 60
        },
        {
          id: "education",
          title: "शिक्षा व्यवस्था (Education Support)",
          desc: "Ensuring poor rural children get access to quality schools, digital learning devices, books, school bags, and specialized coaching centers to lift them out of cycles of poverty.",
          image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
          raised: "₹4,12,000",
          goal: "₹6,00,000",
          percent: 68
        },
        {
          id: "girl-child",
          title: "कन्या दान (Girl Child Support)",
          desc: "Supporting the wedding expenses, higher education funds, vocational safety training, and personal hygiene resources for girls coming from economically weaker families.",
          image: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=600&auto=format&fit=crop",
          raised: "₹1,80,000",
          goal: "₹3,00,000",
          percent: 60
        },
        {
          id: "sports",
          title: "खेल-कूद (Sports Development)",
          desc: "Promoting physical fitness, purchasing sports kits (volleyball, football, cricket), and building rural playgrounds to engage youth and guide their energy positively.",
          image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
          raised: "₹1,15,000",
          goal: "₹2,00,000",
          percent: 57
        }
      ]
    },
    impact: {
      title: "Our Visual Direct Impact",
      subtitle: "Numbers that represent actual changed lives on the ground in Bihar.",
      items: [
        { count: 10000, label: "Lives Helped", suffix: "+" },
        { count: 500, label: "Volunteers", suffix: "+" },
        { count: 100, label: "Campaigns Completed", suffix: "+" },
        { count: 50, label: "Villages Reached", suffix: "+" }
      ]
    },
    gallery: {
      title: "Our Photo Gallery",
      subtitle: "Visual glimpses of our works, events, and ground action.",
      all: "All Photos",
      categories: {
        healthcare: "Healthcare",
        education: "Education",
        community: "Community & Business",
        sports: "Sports Support",
        women: "Women Support"
      },
      photos: [
        { id: 1, category: "healthcare", title: "Medical Camp 2025", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop" },
        { id: 2, category: "education", title: "Digital Class Setup", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop" },
        { id: 3, category: "community", title: "Small Shop Setup", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop" },
        { id: 4, category: "women", title: "Sewing Kit Distribution", image: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=600&auto=format&fit=crop" },
        { id: 5, category: "sports", title: "Volleyball Tournament", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop" },
        { id: 6, category: "education", title: "Book Distribution Camp", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop" },
        { id: 7, category: "healthcare", title: "Free Health Checkup", image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=600&auto=format&fit=crop" },
        { id: 8, category: "community", title: "Rural Solar Light Kit", image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop" }
      ]
    },
    donationPage: {
      title: "Secure Donation Center",
      subtitle: "Make a change. Your transaction is encrypted and completely secure.",
      step1: "1. Select Donation Amount",
      step2: "2. Personal Details",
      step3: "3. Choose Campaign & Verify",
      preset: "Preset Amount",
      custom: "Custom Amount (INR)",
      fields: {
        name: "Full Name",
        email: "Email Address",
        phone: "Mobile Number",
        pan: "PAN Card Number (For Tax Benefit - Optional)",
        campaign: "Select Campaign",
        submit: "Proceed to Secure Payment",
        processing: "Contacting Payment Gateway..."
      },
      paymentModal: {
        title: "Secure Payment Portal",
        simulated: "SIMULATED SECURE TRANSACTIONS",
        desc: "You are making a simulated donation to Lok Swaraj Mission Trust. This utilizes standard test scripts to verify the checkout UI flow.",
        confirmBtn: "Simulate Success Payment",
        failBtn: "Simulate Failure Payment",
        cancel: "Cancel Payment"
      },
      receipt: {
        successTitle: "Donation Successful!",
        successMsg: "Thank you! We have received your valuable support. A tax-exemption receipt is sent to your email address.",
        failTitle: "Payment Failed",
        failMsg: "Your transaction was cancelled or declined by your bank. Please try again.",
        transId: "Transaction ID",
        donorName: "Donor Name",
        amount: "Donated Amount",
        close: "Close Receipt"
      }
    },
    contactPage: {
      title: "Contact Our Office",
      subtitle: "Get in touch for volunteering, feedback, or custom support contributions.",
      addressTitle: "Our Central Office",
      phoneTitle: "Phone Contacts",
      emailTitle: "Official Emails",
      socialTitle: "Follow Us",
      whatsappBtn: "Chat on WhatsApp",
      formTitle: "Send Us a Message",
      formFields: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
        sending: "Sending Message...",
        success: "Thank you! Your message was sent successfully. We will get back to you shortly.",
        error: "Oops! Something went wrong. Please try again later."
      }
    },
    footer: {
      title: "LOK SWARAJ",
      desc: "Bihar's leading social welfare trust working for education, health, self-employment, and holistic village swaraj. Empowering people directly.",
      officeTitle: "Our Office",
      linksTitle: "Quick Links",
      galleryTitle: "Gallery Highlights",
      copyright: "© 2026 Lok Swaraj Mission Trust. All Rights Reserved.",
      designedBy: "Designed by Antigravity premium system.",
      terms: "Terms & Conditions",
      support: "Support Helpdesk"
    }
  },
  hi: {
    nav: {
      home: "मुख्य पृष्ठ",
      about: "हमारे बारे में",
      donation: "दान करें",
      gallery: "गैलरी",
      contact: "संपर्क",
      volunteer: "स्वयंसेवक बनें"
    },
    header: {
      callUs: "कॉल करें",
      mailUs: "मेल करें",
      phone: "+91 91026 31880",
      email: "info@lokswaraj.co.in",
      address: "स्व. राम लखन भवन, जय विला एपार्टमेंट के सामने, नालंदा नगर, इंडस्ट्रियल रोड, कुर्जी, पटना - 800010"
    },
    hero: {
      slides: [
        {
          title: "एक साथ मिलकर हम जीवन बदल सकते हैं",
          subtitle: "शिक्षा, स्वास्थ्य सेवा, महिला सशक्तिकरण, ग्रामीण विकास और सामाजिक कल्याण का समर्थन।",
          image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "ग्रामीण समुदायों का सशक्तिकरण",
          subtitle: "सतत आजीविका के अवसरों का निर्माण और स्थानीय लघु उद्योगों का समर्थन करना।",
          image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop"
        },
        {
          title: "हर बच्चे के भविष्य का पोषण",
          subtitle: "समग्र विकास के लिए उच्च गुणवत्ता वाली मुफ्त शिक्षा, शैक्षिक किट और खेल सुविधाएं प्रदान करना।",
          image: "https://images.unsplash.com/photo-1489641499538-be3a25bc99b5?q=80&w=1200&auto=format&fit=crop"
        }
      ],
      donateBtn: "अभी दान करें",
      volunteerBtn: "स्वयंसेवक बनें"
    },
    about: {
      tag: "हमारे बारे में",
      title: "हाथ मिलाएं, दुनिया बदलें",
      description1: "लोक स्वराज मिशन ट्रस्ट बिहार में स्थापित एक समर्पित गैर-लाभकारी संगठन है, जो ग्रामीण विकास, स्वास्थ्य सहायता, महिला सशक्तिकरण, शिक्षा सहायता और समग्र सामाजिक कल्याण की दिशा में निःस्वार्थ रूप से काम कर रहा है। हमारा उद्देश्य वंचित वर्गों का उत्थान करना और सामाजिक दूरियों को पाटना है।",
      description2: "हम सतत सामुदायिक विकास और सामूहिक भागीदारी में विश्वास करते हैं। उचित संसाधनों और भावनात्मक कहानी-कथन ढांचे के माध्यम से, हम दयालु दानदाताओं को उन लोगों से जोड़ते हैं जिन्हें सामाजिक और आर्थिक उत्थान की तत्काल आवश्यकता है।",
      missionTitle: "हमारा मिशन",
      missionText: "भूख, गरीबी और निरक्षरता से मुक्त समाज का निर्माण करना, जहाँ हर नागरिक को स्वास्थ्य सेवा, स्वच्छ जीवन, समान अवसर और सम्मानजनक जीवन प्राप्त हो।",
      visionTitle: "हमारा दृष्टिकोण",
      visionText: "सशक्त ग्रामीण परिवारों, स्वस्थ नागरिकों, शिक्षित बच्चों और स्वशासन (स्वराज) के साथ संचालित मजबूत समुदायों द्वारा संचालित एक प्रगतिशील, आत्मनिर्भर राष्ट्र बनाना।",
      bullets: [
        "कोई भी भूखा नहीं सोना चाहिए",
        "हम दयालुता और समर्थन फैलाते हैं",
        "हम किसी का जीवन बदल सकते हैं"
      ],
      ctaTitle: "सीधा प्रभाव डालना चाहते हैं?",
      ctaText: "आपका छोटा सा मासिक सहयोग बिहार के एक पूरे परिवार के लिए चिकित्सा सेवाएं, भोजन और शिक्षा सुरक्षित कर सकता है।",
      ctaBtn: "आज ही दान करें",
      founderTitle: "संस्थापक का संदेश",
      founderName: "श्री राज कुमार",
      founderMsg: "लोक स्वराज मिशन ट्रस्ट में आपका स्वागत है। हमारे ट्रस्ट का जन्म एक साधारण अहसास से हुआ था: बदलाव तब शुरू होता है जब हम जिम्मेदारी लेने का फैसला करते हैं। बिहार के ग्रामीण समुदायों में, लाखों लोग अभी भी बुनियादी आवश्यकताओं के लिए संघर्ष कर रहे हैं। स्वास्थ्य सेवा, शिक्षा और सूक्ष्म-उद्यमों पर ध्यान केंद्रित करके, हम केवल सहायता नहीं दे रहे हैं; हम आत्मनिर्भरता स्थापित कर रहे हैं। मैं आपको सामूहिक उत्थान की इस खूबसूरत यात्रा में शामिल होने के लिए आमंत्रित करता हूँ।",
      timelineTitle: "हमारा इतिहास और समयरेखा",
      timeline: [
        { year: "2018", title: "शुरुआत", text: "पटना के पास 5 गाँवों में अनौपचारिक सप्ताहांत चिकित्सा शिविरों और शैक्षिक किटों के वितरण के साथ शुरुआत की।" },
        { year: "2020", title: "ट्रस्ट पंजीकरण", text: "आधिकारिक रूप से लोक स्वराज मिशन ट्रस्ट के रूप में पंजीकृत। संकट के समय में खाद्य वितरण और चिकित्सा राहत को बढ़ाया।" },
        { year: "2022", title: "सशक्तिकरण कार्यक्रम", text: "महिलाओं और कम आय वाले परिवारों के लिए लघु-व्यवसाय किट (सिलाई मशीनें, उपकरण) लॉन्च किए, जिससे स्व-रोजगार सक्षम हुआ।" },
        { year: "2024", title: "एकीकृत खेल और लैब", text: "बच्चों के लिए डिजिटल लैब के साथ ग्रामीण खेल क्लब किट और सामुदायिक शिक्षा केंद्रों की स्थापना की।" },
        { year: "2026", title: "क्षितिज का विस्तार", text: "50+ गाँवों का समर्थन करने, सौर माइक्रो-ग्रिड और डिजिटल साक्षरता पहलों को बढ़ाने का लक्ष्य।" }
      ],
      valuesTitle: "हमारे मूल मूल्य",
      values: [
        { name: "पारदर्शिता", text: "सत्यापन योग्य वित्तीय पारदर्शिता के साथ दाता निधियों की 100% जवाबदेही।" },
        { name: "आत्मनिर्भरता", text: "निर्भरता को बढ़ावा देने के बजाय व्यक्तियों को अपनी आजीविका कमाने के लिए सशक्त बनाना।" },
        { name: "सहानुभूति", text: "प्रत्येक लाभार्थी के साथ पूर्ण सम्मान, आदर और गहरी मानवीय करुणा के साथ व्यवहार करना।" }
      ],
      teamTitle: "हमारा नेतृत्व और टीम",
      team: [
        { name: "श्री राज कुमार", role: "संस्थापक और मुख्य न्यासी", bio: "सामुदायिक आयोजन में 15 से अधिक वर्षों के जमीनी अनुभव वाले सामाजिक उद्यमी।", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
        { name: "श्रीमती शांति देवी", role: "महिला सशक्तिकरण निदेशक", bio: "हमारी सिलाई कार्यशालाओं, स्वयं सहायता समूहों और व्यावसायिक प्रशिक्षण पहलों का नेतृत्व कर रही हैं।", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
        { name: "डॉ. आलोक प्रसाद", role: "चिकित्सा समन्वयक", bio: "सेवानिवृत्त चिकित्सक जो हमारे मुफ्त चिकित्सा शिविरों और दवा वितरण का प्रबंधन करने के लिए समर्पित हैं।", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop" }
      ]
    },
    campaigns: {
      tag: "दान अभियान",
      title: "हमारे सक्रिय कल्याण और सहायता अभियान",
      subtitle: "इन प्रत्यक्ष प्रभाव कार्यक्रमों के माध्यम से बिहार को सशक्त बनाने के लिए हाथ मिलाएँ।",
      donateNow: "अभी दान करें",
      raised: "एकत्रित",
      goal: "लक्ष्य",
      list: [
        {
          id: "medical",
          title: "निःशुल्क चिकित्सा (Free Medical Support)",
          desc: "गंभीर पुरानी बीमारियों से पीड़ित वंचित ग्रामीण परिवारों को मुफ्त स्वास्थ्य जांच शिविर, महत्वपूर्ण दवाएं, शल्य चिकित्सा सहायता और एम्बुलेंस सुविधाएं प्रदान करना।",
          image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop",
          raised: "₹3,45,000",
          goal: "₹5,00,000",
          percent: 69
        },
        {
          id: "business",
          title: "लघु उद्योग सहायता (Small Business Support)",
          desc: "आत्मनिर्भरता सक्षम करने के लिए उपकरण, सूक्ष्म-अनुदान और व्यावसायिक प्रशिक्षण प्रदान करके सूक्ष्म-उद्यमियों और संकटग्रस्त महिलाओं को सिलाई केंद्र, किराना दुकान या हस्तशिल्प शुरू करने में मदद करना।",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
          raised: "₹2,10,000",
          goal: "₹3,50,000",
          percent: 60
        },
        {
          id: "education",
          title: "शिक्षा व्यवस्था (Education Support)",
          desc: "गरीब ग्रामीण बच्चों को गुणवत्तापूर्ण स्कूलों, डिजिटल शिक्षण उपकरणों, किताबों, स्कूल बैग और विशेष कोचिंग केंद्रों तक पहुँच सुनिश्चित करना ताकि उन्हें गरीबी के चक्र से बाहर निकाला जा सके।",
          image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
          raised: "₹4,12,000",
          goal: "₹6,00,000",
          percent: 68
        },
        {
          id: "girl-child",
          title: "कन्या दान (Girl Child Support)",
          desc: "आर्थिक रूप से कमजोर परिवारों से आने वाली लड़कियों की शादी के खर्च, उच्च शिक्षा कोष, व्यावसायिक सुरक्षा प्रशिक्षण और व्यक्तिगत स्वच्छता संसाधनों का समर्थन करना।",
          image: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=600&auto=format&fit=crop",
          raised: "₹1,80,000",
          goal: "₹3,00,000",
          percent: 60
        },
        {
          id: "sports",
          title: "खेल-कूद (Sports Development)",
          desc: "शारीरिक फिटनेस को बढ़ावा देना, खेल किट (वॉलीबॉल, फुटबॉल, क्रिकेट) खरीदना और युवाओं को सकारात्मक रूप से व्यस्त रखने के लिए ग्रामीण खेल के मैदानों का निर्माण करना।",
          image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
          raised: "₹1,15,000",
          goal: "₹2,00,000",
          percent: 57
        }
      ]
    },
    impact: {
      title: "हमारा प्रत्यक्ष प्रभाव",
      subtitle: "ये आँकड़े बिहार में जमीनी स्तर पर वास्तव में बदले हुए जीवनों को दर्शाते हैं।",
      items: [
        { count: 10000, label: "मदद की गई जिंदगियां", suffix: "+" },
        { count: 500, label: "सक्रिय स्वयंसेवक", suffix: "+" },
        { count: 100, label: "पूर्ण किए गए अभियान", suffix: "+" },
        { count: 50, label: "गाँवों तक पहुँच", suffix: "+" }
      ]
    },
    gallery: {
      title: "हमारी फोटो गैलरी",
      subtitle: "हमारे कार्यों, कार्यक्रमों और जमीनी कार्रवाई की दृश्य झलकियाँ।",
      all: "सभी तस्वीरें",
      categories: {
        healthcare: "स्वास्थ्य सेवा",
        education: "शिक्षा सहायता",
        community: "समुदाय और व्यवसाय",
        sports: "खेलकूद सहायता",
        women: "महिला सशक्तिकरण"
      },
      photos: [
        { id: 1, category: "healthcare", title: "चिकित्सा शिविर 2025", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop" },
        { id: 2, category: "education", title: "डिजिटल क्लास सेटअप", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop" },
        { id: 3, category: "community", title: "लघु दुकान स्थापना", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop" },
        { id: 4, category: "women", title: "सिलाई किट वितरण", image: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=600&auto=format&fit=crop" },
        { id: 5, category: "sports", title: "वॉलीबॉल टूर्नामेंट", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop" },
        { id: 6, category: "education", title: "किताब वितरण शिविर", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop" },
        { id: 7, category: "healthcare", title: "मुफ्त स्वास्थ्य जांच शिविर", image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=600&auto=format&fit=crop" },
        { id: 8, category: "community", title: "ग्रामीण सौर लाइट किट", image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop" }
      ]
    },
    donationPage: {
      title: "सुरक्षित दान केंद्र",
      subtitle: "एक बदलाव लाएं। आपका लेनदेन एन्क्रिप्टेड और पूरी तरह से सुरक्षित है।",
      step1: "1. दान राशि चुनें",
      step2: "2. व्यक्तिगत विवरण",
      step3: "3. अभियान चुनें और पुष्टि करें",
      preset: "निर्धारित राशि",
      custom: "कस्टम राशि (INR)",
      fields: {
        name: "पूरा नाम",
        email: "ईमेल पता",
        phone: "मोबाइल नंबर",
        pan: "पैन कार्ड नंबर (कर लाभ के लिए - वैकल्पिक)",
        campaign: "अभियान का चयन करें",
        submit: "सुरक्षित भुगतान के लिए आगे बढ़ें",
        processing: "भुगतान गेटवे से जुड़ रहा है..."
      },
      paymentModal: {
        title: "सुरक्षित भुगतान पोर्टल",
        simulated: "सिम्युलेटेड सुरक्षित लेनदेन",
        desc: "आप लोक स्वराज मिशन ट्रस्ट को एक सिम्युलेटेड दान कर रहे हैं। यह चेकआउट यूआई प्रवाह को सत्यापित करने के लिए मानक परीक्षण स्क्रिप्ट का उपयोग करता है।",
        confirmBtn: "भुगतान सफल अनुकरण करें",
        failBtn: "भुगतान विफल अनुकरण करें",
        cancel: "भुगतान रद्द करें"
      },
      receipt: {
        successTitle: "दान सफल रहा!",
        successMsg: "धन्यवाद! हमें आपका बहुमूल्य सहयोग प्राप्त हो गया है। एक कर-छूट रसीद आपके ईमेल पते पर भेजी गई है।",
        failTitle: "भुगतान विफल",
        failMsg: "आपका लेनदेन आपके बैंक द्वारा रद्द या अस्वीकार कर दिया गया था। कृपया पुन: प्रयास करें।",
        transId: "लेनदेन आईडी",
        donorName: "दाता का नाम",
        amount: "दान की गई राशि",
        close: "रसीद बंद करें"
      }
    },
    contactPage: {
      title: "हमारे कार्यालय से संपर्क करें",
      subtitle: "स्वयंसेवा, प्रतिक्रिया या अनुकूलित समर्थन योगदान के लिए संपर्क करें।",
      addressTitle: "हमारा मुख्य कार्यालय",
      phoneTitle: "फ़ोन नंबर",
      emailTitle: "आधिकारिक ईमेल",
      socialTitle: "हमें फॉलो करें",
      whatsappBtn: "व्हाट्सएप पर चैट करें",
      formTitle: "हमें संदेश भेजें",
      formFields: {
        name: "आपका नाम",
        email: "आपका ईमेल",
        subject: "विषय",
        message: "संदेश",
        submit: "संदेश भेजें",
        sending: "संदेश भेजा जा रहा है...",
        success: "धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।",
        error: "ओह! कुछ गलत हो गया। कृपया बाद में पुनः प्रयास करें।"
      }
    },
    footer: {
      title: "लोक स्वराज",
      desc: "शिक्षा, स्वास्थ्य, स्व-रोजगार और समग्र ग्राम स्वराज के लिए काम करने वाला बिहार का प्रमुख सामाजिक कल्याण ट्रस्ट। लोगों को सीधे सशक्त बनाना।",
      officeTitle: "हमारा कार्यालय",
      linksTitle: "त्वरित लिंक्स",
      galleryTitle: "गैलरी हाइलाइट्स",
      copyright: "© 2026 लोक स्वराज मिशन ट्रस्ट। सर्वाधिकार सुरक्षित।",
      designedBy: "एंटीग्रेविटी प्रीमियम सिस्टम द्वारा डिज़ाइन किया गया।",
      terms: "नियम एवं शर्तें",
      support: "सहायता डेस्क"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState("hi"); // Default to Hindi as brand has a lot of Hindi content, but toggleable easily.

  useEffect(() => {
    // Sync language selection from local storage if available
    const savedLocale = localStorage.getItem("lok_swaraj_locale");
    if (savedLocale === "en" || savedLocale === "hi") {
      setLocale(savedLocale);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "hi" : "en";
    setLocale(nextLocale);
    localStorage.setItem("lok_swaraj_locale", nextLocale);
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
