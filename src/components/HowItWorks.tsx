import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Pilih layanan",
    desc: "Tentukan rute perjalanan, restoran, atau barang yang mau dikirim.",
  },
  {
    num: "02",
    title: "Konfirmasi & bayar",
    desc: "Lihat estimasi biaya di muka, pilih metode bayar, lalu konfirmasi.",
  },
  {
    num: "03",
    title: "Pantau sampai tiba",
    desc: "Lacak perjalanan atau pesananmu secara real-time hingga selesai.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="border-t border-hairline bg-surface/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Cara kerja"
          title={
            <>
              Tiga langkah,
              <br />
              <span className="text-outline">beres semua.</span>
            </>
          }
        />

        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.num} delay={index * 100} className="h-full">
              <li className="flex h-full flex-col gap-8 bg-paper p-9 sm:p-10">
                <span className="font-mono text-4xl font-bold text-hairline sm:text-5xl">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
