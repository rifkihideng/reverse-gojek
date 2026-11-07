import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Laju — Semua Kebutuhan, Satu Aplikasi",
  description:
    "Laju adalah super-app untuk transportasi, pesan makanan, kirim barang, dan pembayaran digital dalam satu genggaman.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={cn("h-full antialiased", jakarta.variable)}>
      <body className="font-sans min-h-full flex flex-col">{children}</body>
    </html>
  );
}
