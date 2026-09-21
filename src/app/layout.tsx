import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: {
    default: "Lotis",
    template: "%s · Lotis",
  },
  description:
    "Lotis is a software development company. Flagship project: real-world asset tokenization for property, gold, and silver.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/lotis-favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrument.variable} dark min-h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#07080A] font-sans text-zinc-100">
        <div className="grain pointer-events-none fixed inset-0 z-0" />
        <div className="relative z-[1] flex min-h-full flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
