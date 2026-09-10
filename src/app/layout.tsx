import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lotis",
    template: "%s · Lotis",
  },
  description:
    "Lotis is a software development company. Flagship project: real-world asset tokenization for property, gold, and silver.",
  icons: {
    icon: "/lotis-logo.png",
    apple: "/lotis-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} dark h-full antialiased`}>
      <body className="min-h-full bg-[#07080A] font-sans text-zinc-100">
        <div className="flex min-h-full flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
