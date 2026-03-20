import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tricatha Sempiternal Asia | One Stop Strategic Solution",
  description:
    "Bridging Technology, Advocacy, and Creative Excellence. TSA is a trusted partner for government, institutional, and corporate clients across Indonesia and ASEAN.",
  keywords: [
    "TSA",
    "Tricatha Sempiternal Asia",
    "Digital Technology Indonesia",
    "Government Advocacy",
    "Event Management Jakarta",
    "Production House",
    "GWI Collective",
    "DNA Podcast Studio",
  ],
  openGraph: {
    title: "Tricatha Sempiternal Asia | One Stop Strategic Solution",
    description:
      "Bridging Technology, Advocacy, and Creative Excellence since 2012.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased text-[#00174c] bg-[#f1f1f1] selection:bg-[#e50113] selection:text-white flex flex-col min-h-screen`}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
