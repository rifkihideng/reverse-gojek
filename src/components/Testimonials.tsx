"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { testimonials } from "@/lib/testimonials";

const TestimonialGlobe = dynamic(
  () => import("@/components/ui/testimonial-globe"),
  {
    ssr: false,
    loading: () => <TestimonialSkeleton />,
  }
);

function TestimonialSkeleton() {
  return (
    <section
      aria-hidden="true"
      className="border-t border-hairline bg-background"
    >
      <div className="mx-auto flex h-[440px] w-full max-w-[1200px] items-center justify-center px-6 sm:h-[520px]">
        <span className="h-2 w-24 animate-pulse rounded-full bg-muted" />
      </div>
    </section>
  );
}

export default function Testimonials() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setNear(true), 0);
      return () => window.clearTimeout(id);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      // Mulai unduh & render sedikit sebelum section terlihat di layar.
      { rootMargin: "600px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef}>
      {near ? (
        <TestimonialGlobe
          items={testimonials}
          eyebrow="Testimoni"
          heading="Kata mereka yang sudah jalan bareng Laju"
          caption="Dari pengguna, mitra driver, sampai pemilik usaha di 40+ kota — cerita mereka yang bikin Laju terus melaju."
          autoplay
          interval={4000}
          size={520}
          labels={{
            previous: "Ulasan sebelumnya",
            next: "Ulasan berikutnya",
            pin: "Tampilkan ulasan dari",
          }}
          className="border-t border-hairline"
        />
      ) : (
        <TestimonialSkeleton />
      )}
    </div>
  );
}

