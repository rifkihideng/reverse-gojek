import {
  CalendarCheck,
  Check,
  Leaf,
  RefreshCw,
  Truck,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Plan = {
  icon: LucideIcon;
  eyebrow: string;
  name: string;
  price: string;
  desc: string;
  perks: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    icon: CalendarCheck,
    eyebrow: "LajuRide",
    name: "Pass Komuter",
    price: "20 trip / bulan",
    desc: "Bolak-balik kerja atau kampus tanpa mikir ongkos. Kuota trip bulanan yang bisa dipakai kapan saja.",
    perks: ["Hemat ±25% per trip", "Bisa dipakai kapan saja", "Prioritas driver jam sibuk"],
  },
  {
    icon: RefreshCw,
    eyebrow: "LajuMart",
    name: "Auto Belanja",
    price: "Jadwal otomatis",
    desc: "Beras, minyak, galon, dan kebutuhan rutin diantar otomatis. Bisa di-skip atau diubah kapan pun.",
    perks: ["Gratis ongkir langganan", "Harga terkunci sebulan", "Pengingat sebelum diantar"],
  },
  {
    icon: Truck,
    eyebrow: "LajuSend",
    name: "Bisnis UMKM",
    price: "Tarif langganan",
    desc: "Jemputan terjadwal harian untuk penjual online. Resi massal dan pelacakan dari satu dasbor.",
    perks: ["Jemputan harian otomatis", "Tarif kirim lebih murah", "Laporan pengiriman rapi"],
  },
  {
    icon: Leaf,
    eyebrow: "LajuGreen",
    name: "Mode Ramah Lingkungan",
    price: "0 emisi",
    desc: "Pilih ojek atau kurir motor listrik dan lihat jejak karbon yang berhasil kamu hemat tiap perjalanan.",
    perks: ["Opsi motor listrik", "Pelacak jejak karbon", "Badge LajuGreen"],
    featured: true,
  },
];

export default function LajuPlus() {
  return (
    <section id="langganan" className="border-t border-hairline bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="04"
            eyebrow="Laju Plus"
            title={
              <>
                Paket yang bikin
                <br />
                <span className="text-outline">hidup makin ringan.</span>
              </>
            }
          />
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted md:pb-2 md:text-right">
            Langganan &amp; fitur yang belum ada di super-app lain — khusus
            pengguna Laju.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Reveal key={plan.name} delay={index * 80} className="h-full">
                <article
                  className={`flex h-full flex-col gap-6 rounded-3xl border p-8 transition-colors ${
                    plan.featured
                      ? "border-forest bg-forest text-paper"
                      : "border-hairline bg-surface text-ink hover:border-forest/30"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`grid size-12 place-items-center rounded-2xl ${
                        plan.featured ? "bg-lime text-ink" : "bg-ink text-lime"
                      }`}
                    >
                      <Icon className="size-6" />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold ${
                        plan.featured ? "bg-paper/10 text-lime" : "bg-lime/40 text-ink"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>

                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                        plan.featured ? "text-lime" : "text-ink-muted"
                      }`}
                    >
                      {plan.eyebrow}
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{plan.name}</h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        plan.featured ? "text-paper/70" : "text-ink-muted"
                      }`}
                    >
                      {plan.desc}
                    </p>
                  </div>

                  <ul className="mt-auto space-y-2.5">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5 text-sm font-semibold">
                        <span
                          className={`grid size-5 place-items-center rounded-full ${
                            plan.featured ? "bg-lime text-ink" : "bg-lime/40 text-ink"
                          }`}
                        >
                          <Check className="size-3" />
                        </span>
                        <span className={plan.featured ? "text-paper/90" : "text-ink"}>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
