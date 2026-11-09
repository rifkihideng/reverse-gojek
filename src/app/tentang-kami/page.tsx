import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Tentang Kami — Laju",
  description:
    "Cerita di balik Laju: dari garasi di Jakarta Selatan sampai super-app yang dipakai jutaan orang di 40+ kota.",
};

const principles = [
  {
    name: "Cepat itu sopan",
    desc: "Tidak ada yang suka menunggu. Kami mengukur keberhasilan dari seberapa singkat kamu menunggu, bukan dari seberapa banyak fitur yang kami pamerkan.",
  },
  {
    name: "Tarif dibuka, bukan ditebak",
    desc: "Harga tampil sebelum kamu memesan. Kalau ada perubahan, kamu tahu persis alasannya — tanpa biaya tersembunyi.",
  },
  {
    name: "Kerja dari lapangan",
    desc: "Fitur baru lahir dari keluhan mitra dan pengguna di jalan, bukan dari rapat panjang di ruangan ber-AC.",
  },
  {
    name: "Untung bareng-bareng",
    desc: "Kalau mitra pengemudi dan UMKM tidak sejahtera, Laju tidak akan bertahan lama. Kami tumbuh bersama mereka.",
  },
];

const milestones = [
  {
    year: "2019",
    text: "Laju dimulai dari garasi kecil di Jakarta Selatan dengan lima mitra pengemudi pertama dan satu mimpi: tarif ojek yang jujur.",
  },
  {
    year: "2021",
    text: "LajuFood dan LajuSend lahir dari pertanyaan mitra: kalau sudah bisa antar orang, kenapa tidak antar makanan dan barang?",
  },
  {
    year: "2023",
    text: "LajuPay dirilis. Pembayaran tunai mulai ditinggalkan dan transaksi digital jadi standar.",
  },
  {
    year: "2026",
    text: "Lebih dari 15 juta pengguna dan 900 ribu mitra di 40+ kota. Tapi prinsip kami masih sama seperti hari pertama.",
  },
];

export default function TentangKamiPage() {
  return (
    <InfoPage
      title="Tentang Kami"
      intro="Laju berawal dari satu pertanyaan: kenapa urusan sehari-hari di kota harus serumit ini? Sekarang satu aplikasi kami jawab semuanya — transportasi, makanan, kirim barang, sampai pembayaran."
    >
      <section>
        <h2>Mulai dari Garasi</h2>
        <p>
          Laju lahir pada 2019 dari garasi kecil di Jakarta Selatan. Waktu itu
          kami cuma punya lima pengemudi, satu meja lipat, dan keyakinan bahwa
          tarif yang transparan bisa mengembalikan kepercayaan orang terhadap
          ojek. Hari ini Laju dipakai jutaan orang — tapi cara kami bekerja
          tidak banyak berubah: dengarkan keluhan di lapangan dulu, baru bangun
          fiturnya.
        </p>
        <p>
          Kami tidak suka berteori. Setiap layanan — dari LajuRide sampai
          LajuPay — lahir karena ada masalah nyata yang dialami pengguna dan
          mitra di jalan.
        </p>
      </section>

      <section>
        <h2>Perjalanan Singkat</h2>
        <ol className="grid gap-4">
          {milestones.map((milestone) => (
            <li key={milestone.year} className="flex items-start gap-4">
              <span className="mt-0.5 shrink-0 rounded-lg bg-lime px-2.5 py-1 font-mono text-xs font-bold text-ink">
                {milestone.year}
              </span>
              <p>{milestone.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Yang Kami Pegang</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.name}
              className="rounded-2xl border border-hairline bg-surface p-6"
            >
              <h3 className="font-bold text-ink">{principle.name}</h3>
              <p className="mt-2 text-sm">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Tujuan Kami, Ringkasnya</h2>
        <p>
          Kami ingin Laju jadi aplikasi yang bikin orang tidak perlu mikir lagi
          &ldquo;ini pakai aplikasi apa ya?&rdquo; — semua urusan kota, satu
          tempat, selesai. Cepat, jujur, dan tanpa drama.
        </p>
      </section>
    </InfoPage>
  );
}
