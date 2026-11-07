import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const tickerItems = [
  "LajuRide",
  "LajuFood",
  "LajuSend",
  "LajuPay",
  "LajuMart",
  "LajuCare",
];

const trustPoints = ["Tanpa biaya tersembunyi", "Mitra terverifikasi", "Bantuan 24/7"];

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:pt-8">
        {/* Kiri — copy */}
        <div>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
            <span className="inline-block size-2 rounded-full bg-lime" aria-hidden="true" />
            Super-app urban · 40+ kota
          </p>

          <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4.4rem)] font-extrabold leading-[1.08] tracking-tight">
            Semua urusan
            <br />
            kota,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">satu aplikasi.</span>
              <span
                className="absolute inset-x-0 bottom-[0.08em] z-0 h-[0.22em] bg-lime"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-muted">
            Laju menghubungkan kamu dengan transportasi, makanan, belanja, dan
            pembayaran — cepat, transparan, tanpa drama.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#unduh"
              className={buttonVariants({
                size: "lg",
                className: "h-12 rounded-xl px-6 font-bold",
              })}
            >
              Mulai sekarang
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#layanan"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "h-12 rounded-xl border-hairline bg-transparent px-6 font-bold hover:bg-surface",
              })}
            >
              Lihat layanan
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-semibold text-ink-muted">
                <span className="grid size-5 place-items-center rounded-full bg-lime text-ink">
                  <svg viewBox="0 0 12 12" className="size-3" fill="none" aria-hidden="true">
                    <path d="M2 6.5 4.5 9 10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Kanan — mockup aplikasi */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative z-10">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative border-y border-hairline bg-surface/60 py-4">
        <div className="marquee overflow-hidden">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                {tickerItems.map((item) => (
                  <span key={`${dup}-${item}`} className="flex items-center">
                    <span className="px-6 text-sm font-extrabold uppercase tracking-[0.14em] text-ink">
                      {item}
                    </span>
                    <span className="text-lime-deep">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
