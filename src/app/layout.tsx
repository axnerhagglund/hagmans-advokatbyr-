import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    <html lang="sv" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-[#0a0a0a]">
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
