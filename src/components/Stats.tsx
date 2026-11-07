"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: 15, suffix: "jt+", label: "Pengguna aktif", desc: "di seluruh Indonesia & Singapura" },
  { value: 900, suffix: "rb+", label: "Mitra terdaftar", desc: "driver & merchant di ekosistem Laju" },
  { value: 40, suffix: "+", label: "Kota terjangkau", desc: "dan terus bertambah setiap bulan" },
  { value: 99, suffix: "%", label: "Kepuasan pengguna", desc: "rating rata-rata di App Store & Play Store" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const numbers = Array.from(
      container.querySelectorAll<HTMLSpanElement>("[data-count]")
    );

    const animate = (span: HTMLSpanElement) => {
      const target = parseInt(span.dataset.count ?? "0", 10);
      if (Number.isNaN(target)) return;

      const duration = 1400;
      let start: number | null = null;

      const tick = (ts: number) => {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        span.textContent = Math.round(target * eased).toLocaleString("id-ID");
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          numbers.forEach(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-b border-hairline bg-surface">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-16 sm:px-8 lg:grid-cols-4 lg:gap-6"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-hairline bg-paper p-7 sm:p-8"
          >
            <p className="text-[clamp(2rem,3.4vw,2.9rem)] font-extrabold leading-none tracking-tight text-ink">
              <span data-count={stat.value}>0</span>
              <span className="text-lime-deep">{stat.suffix}</span>
            </p>
            <p className="mt-4 text-base font-bold text-ink">{stat.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
