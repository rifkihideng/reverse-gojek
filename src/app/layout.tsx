import type { Metadata } from "next";
import { Hanken_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const display = Hanken_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Laju — Semua Kebutuhan, Satu Aplikasi",
  description: SITE_DESCRIPTION,
  keywords: [
    "Laju",
    "ojek online",
    "pesan makanan",
    "kirim barang",
    "pembayaran digital",
    "super-app",
    "Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: SITE_NAME,
    title: "Laju — Semua Kebutuhan, Satu Aplikasi",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Laju — Semua Kebutuhan, Satu Aplikasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laju — Semua Kebutuhan, Satu Aplikasi",
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={cn("h-full antialiased", display.variable, sans.variable)}>
      <body className="font-sans min-h-full flex flex-col">{children}</body>
    </html>
  );
}
