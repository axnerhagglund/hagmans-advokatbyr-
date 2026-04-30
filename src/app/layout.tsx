import type { Metadata } from "next";
import { DM_Serif_Display, Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  title: "Hagmans Familjerättsbyrå",
  description:
    "Familjerätt utan krångel. Vi är advokaterna du faktiskt vågar ringa – proffsiga, raka och mänskliga.",
  keywords: [
    "familjerätt",
    "advokat",
    "skilsmässa",
    "vårdnad",
    "bodelning",
    "testamente",
    "stockholm",
  ],
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
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
