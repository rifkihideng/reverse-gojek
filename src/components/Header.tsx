"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#langganan", label: "Langganan" },
  { href: "#mitra", label: "Jadi Mitra" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#beranda" className="flex items-center gap-2.5 font-extrabold tracking-tight">
          <span className="logo-mark" aria-hidden="true" />
          <span className="text-xl">Laju</span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#unduh"
            className={buttonVariants({
              className: "hidden h-10 rounded-xl px-5 font-bold sm:inline-flex",
            })}
          >
            Unduh aplikasi
            <ArrowUpRight className="size-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobileNav"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="grid size-10 place-items-center rounded-xl border border-hairline lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobileNav"
          aria-label="Navigasi seluler"
          className="border-t border-hairline bg-paper lg:hidden"
        >
          <ul className="grid gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 font-semibold text-ink hover:bg-surface"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#unduh"
                onClick={() => setOpen(false)}
                className={buttonVariants({ className: "h-11 w-full rounded-xl font-bold" })}
              >
                Unduh aplikasi
                <ArrowUpRight className="size-4" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
