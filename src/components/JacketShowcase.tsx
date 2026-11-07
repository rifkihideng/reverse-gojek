import ClothingRailHero from "@/components/ui/product-rail-gallery";
import type { RailGarment } from "@/components/ui/product-rail-gallery";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";

const jackets: RailGarment[] = [
  {
    id: "armada-ride",
    name: "Bomber LajuRide · Forest",
    kind: "jacket",
    color: "#14291f",
    trim: "#c8f135",
    description: "Jaket bomber armada transportasi. Aksen lime khas Laju dengan lining fleece yang hangat.",
    details: ["Water repellent", "Lining fleece", "Aksen lime"],
  },
  {
    id: "armada-food",
    name: "Bomber LajuFood · Ember",
    kind: "jacket",
    color: "#e8590c",
    trim: "#c8f135",
    description: "Warna ember untuk armada pesan-antar makanan. Tetap satu identitas dengan armada lain.",
    details: ["Tahan noda", "Lining fleece", "Aksen lime"],
  },
  {
    id: "armada-send",
    name: "Bomber LajuSend · Biru",
    kind: "jacket",
    color: "#1971c2",
    trim: "#c8f135",
    description: "Biru kurir untuk armada pengiriman. Saku ekstra untuk resi dan dokumen.",
    details: ["Saku resi", "Tahan air", "Aksen lime"],
  },
  {
    id: "armada-pay",
    name: "Bomber LajuPay · Violet",
    kind: "jacket",
    color: "#7048e8",
    trim: "#c8f135",
    description: "Violet modern untuk armada pembayaran digital. Ringan dan mudah dipadukan.",
    details: ["Ringan", "Lining fleece", "Aksen lime"],
  },
  {
    id: "armada-mart",
    name: "Bomber LajuMart · Teal",
    kind: "jacket",
    color: "#0ca678",
    trim: "#c8f135",
    description: "Teal segar untuk armada belanja harian. Nyaman dipakai seharian.",
    details: ["Anti-air", "Banyak saku", "Aksen lime"],
  },
  {
    id: "armada-care",
    name: "Bomber LajuCare · Rosa",
    kind: "jacket",
    color: "#e64980",
    trim: "#c8f135",
    description: "Rosa lembut untuk armada layanan rumah. Tampil ramah dan profesional.",
    details: ["Lembut", "Lining fleece", "Aksen lime"],
  },
];

export default function JacketShowcase() {
  return (
    <section id="jaket" className="border-t border-hairline bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Laju Store"
          title={
            <>
              Satu identitas,
              <br />
              <span className="text-outline">enam armada.</span>
            </>
          }
          description="Koleksi jaket bomber resmi buat setiap armada Laju. Geser untuk memilih, klik untuk memutar, angkat untuk melihat bagian belakang."
        />

        <ClothingRailHero
          items={jackets}
          hanger="wood"
          autoplay
          caption="Geser, klik, atau tahan jaket untuk memutarnya — angkat untuk melihat bagian belakang."
          labels={{ front: "Depan", back: "Belakang", close: "Tutup", show: "Lihat" }}
          className="mt-14 rounded-3xl border border-hairline"
          action={
            <Button size="lg" className="rounded-full">
              Lihat koleksi
            </Button>
          }
        />
      </div>
    </section>
  );
}
