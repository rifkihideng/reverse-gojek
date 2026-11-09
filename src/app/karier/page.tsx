import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Karier — Laju",
  description:
    "Lowongan kerja di Laju: tim kecil yang bikin urusan kota jalan lebih cepat. Lihat budaya, benefit, dan posisi terbuka.",
};

const benefits = [
  {
    title: "Gaji dan bonus yang jujur",
    desc: "Nominal jelas sejak awal. Naik karena hasil kerjamu, bukan lamanya ngantor.",
  },
  {
    title: "Asuransi buat sekeluarga",
    desc: "Kesehatan dan jiwa untuk kamu, pasangan, dan anak.",
  },
  {
    title: "Budget belajar tahunan",
    desc: "Kursus, buku, konferensi — kami yang bayar, kamu yang pilih.",
  },
  {
    title: "Kerja dari mana saja",
    desc: "Remote-first dengan kantor opsional di Jakarta. Yang penting hasil.",
  },
];

const jobs = [
  {
    role: "Product Manager — LajuPay",
    dept: "Produk",
    type: "Full-time",
    location: "Jakarta / Remote",
    desc: "Kamu yang menentukan arah produk pembayaran untuk jutaan pengguna.",
  },
  {
    role: "Frontend Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
    desc: "Bangun antarmuka yang cepat dan enak dipakai, bukan sekadar jalan.",
  },
  {
    role: "Data Analyst — Growth",
    dept: "Data",
    type: "Full-time",
    location: "Jakarta",
    desc: "Bantu kami mengambil keputusan dari angka, bukan dari feeling.",
  },
];

export default function KarierPage() {
  return (
    <InfoPage
      title="Karier"
      intro="Kami cari orang yang kepikiran bikin urusan kota jadi lebih cepat — bukan sekadar numpang absen."
    >
      <section>
        <h2>Budaya Kami</h2>
        <p>
          Laju bukan tempat buat kamu yang suka rapat panjang. Kami ambil
          keputusan cepat, gagal cepat, dan belajar lebih cepat. Satu hal yang
          tidak bisa ditawar: semua orang — dari engineer sampai tim support —
          rutin turun ke lapangan dan mendengarkan mitra.
        </p>
        <ul className="mt-4 grid gap-2">
          {[
            "Meeting diganti email kalau bisa",
            "Keputusan diambil orang yang paling dekat dengan masalahnya",
            "Kritik terbuka, jabatan tidak bikin suara lebih lantang",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-ink-muted">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-lime-deep" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Benefit</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-hairline bg-surface p-6"
            >
              <h3 className="font-bold text-ink">{benefit.title}</h3>
              <p className="mt-2 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Posisi Terbuka</h2>
        <div className="grid gap-4">
          {jobs.map((job) => (
            <div
              key={job.role}
              className="rounded-2xl border border-hairline bg-surface p-6"
            >
              <h3 className="font-bold text-ink">{job.role}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
                {job.dept} · {job.type} · {job.location}
              </p>
              <p className="mt-3 text-sm">{job.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          Tertarik? Kirim CV dan portofoliomu ke{" "}
          <a
            href="mailto:karir@laju.app"
            className="font-semibold text-ink underline decoration-lime-deep decoration-2 underline-offset-4"
          >
            karir@laju.app
          </a>
          .
        </p>
      </section>
    </InfoPage>
  );
}
