import { Manrope, Hind_Siliguri, Anek_Bangla } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const hind = Hind_Siliguri({
  variable: "--font-hind",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

const anek = Anek_Bangla({
  variable: "--font-anek",
  subsets: ["bengali"],
});

export const metadata = {
  metadataBase: new URL("https://scriptvillage.com"),
  title: "ScriptVillage — Beautiful websites for your business",
  description:
    "ScriptVillage designs and builds fast, modern landing pages, portfolios and business websites in Bangladesh. Fixed prices, fast delivery, you own everything.",
  openGraph: {
    title: "ScriptVillage — Beautiful websites for your business",
    description: "Landing pages, portfolios and business websites — delivered in days.",
    url: "https://scriptvillage.com",
    siteName: "ScriptVillage",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${hind.variable} ${anek.variable}`}>
      <body className="min-h-screen">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
