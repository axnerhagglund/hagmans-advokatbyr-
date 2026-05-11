import type { Metadata } from "next";
import { DM_Serif_Display, Fira_Sans } from "next/font/google";
import "@/styles/globals.css";
import { client } from "@/config/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const firaSans = Fira_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: client.seo.title,
  description: client.seo.description,
  keywords: [...client.seo.keywords],
  icons: {
    icon: client.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`h-full ${dmSerifDisplay.variable} ${firaSans.variable}`}
    >
      <body className={`min-h-full flex flex-col bg-white text-[#0a0a0a] ${firaSans.className}`}>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
