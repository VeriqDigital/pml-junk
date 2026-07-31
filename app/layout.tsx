import type { Metadata } from "next";
import { Barlow, Roboto_Condensed } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { siteConfig } from "@/config/site";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "PML Junk Removal Website Concept | Veriq",
    template: `%s | PML Website Concept by Veriq`,
  },
  description: siteConfig.description,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "PML Junk Removal Website Concept | Veriq",
    description: siteConfig.description,
    siteName: "Veriq Website Concept",
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${robotoCondensed.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
