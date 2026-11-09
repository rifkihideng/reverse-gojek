"use client";

import { TestimonialGlobe } from "@/components/ui/testimonial-globe";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
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
  );
}
