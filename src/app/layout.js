import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Lok Swaraj Mission Trust - Social Welfare NGO, Bihar",
  description: "Official portal of Lok Swaraj Mission Trust. We support education, free healthcare campaigns, small business support, girl child wedding assistance, and sports development in rural Bihar.",
  keywords: "NGO Bihar, Lok Swaraj, donation, social welfare Patna, free medical clinic Bihar, small business support NGO, women empowerment trust Patna",
  openGraph: {
    title: "Lok Swaraj Mission Trust",
    description: "Holistic social welfare trust working for education, health, and small industries in rural Bihar.",
    url: "https://lokswaraj.co.in",
    siteName: "Lok Swaraj Mission Trust",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F8F9FA] text-gray-800 antialiased overflow-x-hidden">
        <LanguageProvider>
          <LoadingScreen />
          <Header />
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
