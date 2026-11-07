import {
  Headphones,
  Receipt,
  ShieldCheck,
  Siren,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Mitra terverifikasi",
    desc: "Setiap driver dan merchant melewati proses verifikasi ketat sebelum bergabung.",
  },
  {
    icon: Siren,
    title: "Tombol darurat",
    desc: "Bagikan lokasi perjalananmu ke kontak terdekat hanya dengan sekali tekan.",
  },
  {
    icon: Receipt,
    title: "Tarif transparan",
    desc: "Estimasi biaya tampil sebelum memesan. Tanpa biaya siluman di akhir.",
  },
  {
    icon: Headphones,
    title: "Dukungan 24/7",
    desc: "Tim bantuan siap membantumu kapan pun, lewat chat atau telepon.",
  },
];

export default function Features() {
  return (
    <section id="keunggulan" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            index="03"
            eyebrow="Keunggulan"
            title={
              <>
                Dibangun untuk
                <br />
                <span className="text-outline">rasa aman.</span>
              </>
            }
            description="Bukan sekadar aplikasi — Laju dirancang dengan standar keamanan dan transparansi di setiap langkahnya."
          />
          <div className="mt-10 hidden rounded-2xl border border-hairline bg-forest p-6 text-paper lg:block">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime">Safety first</p>
            <p className="mt-3 text-3xl font-extrabold leading-tight tracking-tight">
              “Perjalananmu
              <br />
              pantauan kami.”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 70} className="h-full">
                <div className="flex h-full flex-col gap-5 bg-paper p-9 transition-colors hover:bg-lime/30">
                  <span className="grid size-12 place-items-center rounded-2xl bg-ink text-lime">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
