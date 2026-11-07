import {
  ArrowUpRight,
  Bike,
  Package,
  ShoppingCart,
  Sparkles,
  UtensilsCrossed,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Service = {
  icon: LucideIcon;
  name: string;
  tagline: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: Bike,
    name: "LajuRide",
    tagline: "Transportasi",
    desc: "Ojek & mobil dengan tarif jelas dan mitra terdekat di sekitarmu.",
  },
  {
    icon: UtensilsCrossed,
    name: "LajuFood",
    tagline: "Pesan makanan",
    desc: "Makanan favorit dari ribuan restoran, diantar hangat sampai tujuan.",
  },
  {
    icon: Package,
    name: "LajuSend",
    tagline: "Kirim barang",
    desc: "Barang & dokumen dijemput, dikirim, dan terlacak secara real-time.",
  },
  {
    icon: Wallet,
    name: "LajuPay",
    tagline: "Pembayaran",
    desc: "Tagihan, pulsa, dan transfer dari satu dompet digital.",
  },
  {
    icon: ShoppingCart,
    name: "LajuMart",
    tagline: "Belanja harian",
    desc: "Kebutuhan harian dari toko terdekat, tiba dalam hitungan menit.",
  },
  {
    icon: Sparkles,
    name: "LajuCare",
    tagline: "Layanan rumah",
    desc: "Pijat, kebersihan, dan perawatan profesional ke rumahmu.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="01"
            eyebrow="Layanan"
            title={
              <>
                Satu aplikasi,
                <br />
                <span className="text-outline">enam urusan.</span>
              </>
            }
          />
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted md:pb-2 md:text-right">
            Dari berangkat kerja sampai belanja bulanan — Laju menangani semuanya
            tanpa perlu ganti-ganti aplikasi.
          </p>
        </div>

        <ul className="mt-16 divide-y divide-hairline border-y border-hairline">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.name} delay={(index % 3) * 60}>
                <li>
                  <a
                    href="#unduh"
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-9 transition-colors hover:bg-surface sm:gap-8 sm:py-10"
                  >
                    <span className="hidden font-mono text-sm font-bold text-ink-muted/50 sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex items-center gap-5 sm:gap-7">
                      <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-hairline bg-surface text-ink transition-colors group-hover:bg-lime sm:size-16">
                        <Icon className="size-6.5" />
                      </span>
                      <span>
                        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                          <span className="text-lg font-extrabold tracking-tight sm:text-2xl">
                            {service.name}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                            {service.tagline}
                          </span>
                        </span>
                        <span className="mt-1 block max-w-xl text-sm leading-relaxed text-ink-muted">
                          {service.desc}
                        </span>
                      </span>
                    </span>

                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-hairline text-ink transition-all group-hover:bg-ink group-hover:text-paper">
                      <ArrowUpRight className="size-4.5" />
                    </span>
                  </a>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
