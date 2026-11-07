import {
  Briefcase,
  Bike,
  Store,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type Program = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const programs: Program[] = [
  {
    icon: Bike,
    title: "Gabung jadi Mitra Driver",
    desc: "Fleksibilitas penuh, penghasilan berkelanjutan, dan ragam program manfaat khusus Mitra Driver Laju.",
  },
  {
    icon: Store,
    title: "Gabung jadi Mitra Usaha",
    desc: "Kembangkan bisnis dan jangkau jutaan pelanggan lewat ekosistem LajuFood, LajuMart, dan LajuSend.",
  },
  {
    icon: Briefcase,
    title: "Gabung jadi LajuTroops",
    desc: "Jadilah bagian dari kami dan kembangkan talenta yang berkontribusi pada ekonomi digital Indonesia.",
  },
];

export default function Partner() {
  return (
    <section id="mitra" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
              <span className="inline-block size-2 rounded-full bg-lime" aria-hidden="true" />
              Gabung jadi bagian dari Laju
            </p>
            <h2 className="mt-5 max-w-2xl text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold leading-[1.12] tracking-tight">
              Punya motor, toko, atau talenta?
              <br />
              <span className="text-lime-deep">Jadikan itu penghasilan.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted md:pb-2 md:text-right">
            Tumbuh bersama ekosistem yang sudah dipercaya jutaan pengguna di
            seluruh Indonesia.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Reveal key={program.title} delay={index * 80} className="h-full">
                <article className="flex h-full flex-col gap-6 rounded-3xl border border-hairline bg-paper p-8 transition-shadow hover:shadow-lg hover:shadow-ink/5">
                  <span className="grid size-14 place-items-center rounded-2xl bg-lime text-ink">
                    <Icon className="size-7" />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight">{program.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{program.desc}</p>
                  </div>
                  <a
                    href="#unduh"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-ink transition-colors hover:text-lime-deep"
                  >
                    Selengkapnya
                    <ArrowRight className="size-4" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
