import { Award, Medal, Trophy, ShieldCheck } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Super-app Favorit Masyarakat", source: "DTKJ Awards 2024" },
  { icon: Medal, title: "Perusahaan Pengantar Makanan Pilihan Konsumen", source: "Bisnis Indonesia Logistics Awards 2024" },
  { icon: ShieldCheck, title: "Best Organizational CX Gold", source: "Contact Center World Awards" },
  { icon: Award, title: "Perusahaan Pengubah Dunia", source: "Fortune Change the World" },
];

export default function Achievements() {
  return (
    <section aria-label="Penghargaan" className="border-b border-hairline bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.source}
              className="flex items-start gap-4 bg-paper px-6 py-8 sm:px-8"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-lime/40 text-ink">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold leading-snug text-ink">{item.title}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
                  {item.source}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
