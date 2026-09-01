import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { SmoothScroll } from "@/components/shared/SmoothScroll";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const SITE_URL = "https://dishasawantt.github.io/patriot-sailing";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Patriot Sailing — Private Sailing & Lessons on Lake Erie, Buffalo NY",
    template: "%s · Patriot Sailing",
  },
  description:
    "Private sunset sails and hands-on sailing lessons on Lake Erie in Buffalo, NY. One USCG-licensed captain, one Colgate 26, the whole harbor to yourselves.",
  keywords: [
    "sailing lessons Buffalo",
    "private sailing cruise Buffalo",
    "Lake Erie sailing",
    "learn to sail Buffalo NY",
    "sunset sail Buffalo",
  ],
  openGraph: {
    type: "website",
    siteName: "Patriot Sailing",
    title: "Find your wind — private sailing & lessons on Lake Erie",
    description: "Private sunset sails and hands-on sailing instruction out of Buffalo, NY.",
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/images/hero-poster.jpg`, width: 1280, height: 570, alt: "The Patriot Sailing boat on Lake Erie at sunset" }],
  },
  alternates: { canonical: "/" },
};

const themeInit = `(function(){try{var s=localStorage.getItem('ps-theme');var t=s||((window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${hanken.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <SmoothScroll />
        <div className="grain-layer" aria-hidden />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
