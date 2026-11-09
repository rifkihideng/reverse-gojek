import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Media — Laju",
  description:
    "Siaran pers resmi, kontak media, dan aset merek Laju untuk jurnalis dan partner.",
};

const releases = [
  {
    title: "Laju Resmi Operasi di 10 Kota Baru",
    date: "20 Oktober 2026",
    desc: "Setelah enam bulan uji coba, LajuRide dan LajuFood kini melayani pengguna di Pekanbaru, Balikpapan, Samarinda, dan tujuh kota lain — total 40+ kota.",
  },
  {
    title: "Transaksi LajuPay Naik Tiga Kali Lipat dalam Setahun",
    date: "5 Oktober 2026",
    desc: "Enam dari sepuluh transaksi di Laju kini berjalan tanpa uang tunai. Pengguna makin jarang cari receh, mitra makin jarang pegang cash.",
  },
  {
    title: "Laju Raih Penghargaan Aplikasi Paling Transparan",
    date: "1 September 2026",
    desc: "Penghargaan atas tarif yang ditampilkan sebelum pesan dan laporan pendapatan mitra yang bisa dicek kapan saja.",
  },
];

export default function MediaPage() {
  return (
    <InfoPage
      title="Media"
      intro="Ruang buat jurnalis dan partner: siaran pers resmi, kontak media, dan bahan merek Laju."
    >
      <section>
        <h2>Siaran Pers</h2>
        <div className="grid gap-4">
          {releases.map((release) => (
            <div
              key={release.title}
              className="grid gap-2 rounded-2xl border border-hairline bg-surface p-6"
            >
              <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-lime-deep">
                {release.date}
              </span>
              <h3 className="font-bold text-ink">{release.title}</h3>
              <p className="text-sm">{release.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Kontak Media</h2>
        <p>
          Untuk wawancara, data, atau konfirmasi berita, kirim surel ke{" "}
          <a
            href="mailto:media@laju.app"
            className="font-semibold text-ink underline decoration-lime-deep decoration-2 underline-offset-4"
          >
            media@laju.app
          </a>
          . Kami balas maksimal 1&times;24 jam di hari kerja.
        </p>
      </section>

      <section>
        <h2>Aset Merek</h2>
        <p>
          Logo, palet warna, dan panduan singkat tersedia untuk keperluan
          editorial. Minta akses unduhannya ke{" "}
          <a
            href="mailto:media@laju.app"
            className="font-semibold text-ink underline decoration-lime-deep decoration-2 underline-offset-4"
          >
            media@laju.app
          </a>
          , kami kirimkan tautannya langsung.
        </p>
      </section>
    </InfoPage>
  );
}
