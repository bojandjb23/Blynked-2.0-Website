import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomBar } from "@/components/layout/mobile-bottom-bar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Blynked — Growth Partner for Tech Companies",
    template: "%s | Blynked",
  },
  description:
    "We build predictable revenue pipelines for tech companies. No vendor BS — just a system that works.",
  metadataBase: new URL("https://blynked.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blynked.io",
    siteName: "Blynked",
    title: "Blynked — Growth Partner for Tech Companies",
    description:
      "We build predictable revenue pipelines for tech companies. No vendor BS — just a system that works.",
    images: [{ url: "/images/og/default.png", width: 1200, height: 630, alt: "Blynked" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blynked — Growth Partner for Tech Companies",
    description:
      "We build predictable revenue pipelines for tech companies. No vendor BS — just a system that works.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Header />
        <main id="main-content" className="min-h-screen pt-[72px] pb-[80px] lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
