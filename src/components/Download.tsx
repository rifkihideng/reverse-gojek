import { Smartphone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Download() {
  return (
    <section id="unduh" className="border-t border-hairline bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-hairline bg-ink text-paper">
          <div className="grid grid-cols-1 items-center gap-10 p-10 sm:p-14 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-lime">
                <Smartphone className="size-4" />
                Gratis di semua perangkat
              </p>
              <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.1] tracking-tight">
                Unduh Laju,
                <br />
                mulai sekarang.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
                Tersedia gratis di Google Play dan App Store. Satu aplikasi untuk
                semua urusan kotamu.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://play.google.com/store/search?q=Laju&c=apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    className: "h-12 gap-3 rounded-xl px-5 font-bold",
                  })}
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                    <path d="M3.6 1.8 13.7 12 3.6 22.2c-.4-.3-.6-.8-.6-1.4V3.2c0-.6.2-1.1.6-1.4Zm11.4 12.7 2.2-2.1 3.4 1.9c.8.5.8 1.7 0 2.2l-3.4 1.9-2.2-3.9Zm-1.3-1.4L4.3 2.9c.1-.1.3-.1.4-.1l10.9 6.3-1.9 4Zm0-2 1.9-4-10.9 6.3c-.1 0-.3 0-.4-.1l9.4-10.2Z" />
                  </svg>
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-semibold uppercase opacity-70">Get it on</span>
                    <span className="block text-sm font-extrabold">Google Play</span>
                  </span>
                </a>
                <a
                  href="https://apps.apple.com/id/search?term=Laju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    className:
                      "h-12 gap-3 rounded-xl border-paper/25 bg-transparent px-5 font-bold text-paper hover:bg-paper/10 hover:text-paper",
                  })}
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                    <path d="M17.05 12.54c0-2.4 2-3.58 2.1-3.64-1.15-1.68-2.94-1.9-3.57-1.93-1.52-.15-2.97.9-3.74.9-.77 0-1.96-.88-3.23-.85-1.66.02-3.19.96-4.05 2.45-1.72 2.99-.44 7.42 1.24 9.85.82 1.18 1.8 2.5 3.08 2.45 1.24-.05 1.7-.8 3.2-.8s1.92.8 3.23.78c1.34-.02 2.18-1.2 3-2.38.95-1.38 1.34-2.72 1.36-2.78-.03-.02-2.62-1.02-2.62-4.05ZM14.2 4.05c.68-.82 1.14-1.97 1.02-3.11-.98.04-2.17.65-2.88 1.48-.63.73-1.18 1.9-1.03 3.02 1.09.09 2.2-.56 2.89-1.39Z" />
                  </svg>
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-semibold uppercase opacity-70">Download on the</span>
                    <span className="block text-sm font-extrabold">App Store</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="hidden justify-center lg:flex">
              <div className="rounded-2xl border border-paper/15 bg-paper p-5">
                <div className="grid grid-cols-4 gap-1.5" aria-hidden="true">
                  {Array.from({ length: 64 }).map((_, i) => {
                    const filled = (i * 7 + 3) % 11 < 6;
                    return (
                      <span
                        key={i}
                        className={`size-2.5 rounded-[2px] ${filled ? "bg-ink" : "bg-ink/10"}`}
                      />
                    );
                  })}
                </div>
                <p className="mt-4 text-center font-mono text-xs font-bold text-ink">
                  SCAN UNTUK UNDUH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
