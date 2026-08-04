import type { Metadata } from "next";
import { Cinzel, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cinefonia-nights.pe";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CINEFONÍA Nights - La música del cine, vivida en escena",
    template: "%s | CINEFONÍA Nights",
  },
  description: "Concierto inmersivo de música de cámara y cine en vivo. 22 de Agosto de 2026 en el Teatro Municipal de Arequipa. Compra tus entradas y conoce opciones de patrocinio.",
  keywords: ["cinefonia", "cinefonia nights", "concierto arequipa", "musica de camara", "musica de cine", "teatro municipal de arequipa", "concierto 2026", "evento cultural arequipa"],
  authors: [{ name: "CINEFONÍA" }],
  creator: "CINEFONÍA",
  publisher: "CINEFONÍA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    title: "CINEFONÍA Nights - La música del cine, vivida en escena",
    description: "Concierto inmersivo de música de cámara y cine en vivo. 22 de Agosto de 2026 en el Teatro Municipal de Arequipa.",
    siteName: "CINEFONÍA Nights",
    images: [
      {
        url: "/images/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "CINEFONÍA Nights - Recital de Música de Cámara y Cine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CINEFONÍA Nights - La música del cine, vivida en escena",
    description: "Concierto inmersivo de música de cámara y cine en vivo. 22 de Agosto de 2026 en el Teatro Municipal de Arequipa.",
    images: ["/images/og-main.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  "name": "CINEFONÍA",
  "url": siteUrl,
  "logo": `${siteUrl}/images/logo.png`,
  "sameAs": [
    "https://facebook.com",
    "https://instagram.com",
    "https://youtube.com"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contacto@cinefonia-nights.pe",
    "contactType": "customer support",
    "areaServed": "PE"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${cinzel.variable} scroll-smooth`}>
      <head>
        <JsonLd data={orgSchema} />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between bg-brand-bg text-gray-200">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
