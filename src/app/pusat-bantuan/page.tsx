import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Pusat Bantuan — Laju",
  description:
    "Jawaban untuk pertanyaan paling sering soal Laju: pesan layanan, pembayaran, jadi mitra, keamanan, dan komplain.",
};

const faqs = [
  {
    q: "Gimana cara pesan ojek, makanan, atau kirim barang?",
    a: "Buka aplikasi, pilih layanan yang kamu mau (LajuRide, LajuFood, atau LajuSend), isi alamat penjemputan dan tujuan, lalu konfirmasi. Tarif tampil sebelum kamu bayar, jadi tidak ada kejutan.",
  },
  {
    q: "Pembayaran LajuPay gagal, tapi uang saya kepotong. Gimana?",
    a: "Tenang, dana kamu aman. Transaksi yang gagal otomatis dikembalikan maksimal 1×24 jam. Kalau lebih dari itu belum balik, kirim bukti transaksi lewat menu Bantuan di aplikasi, tim kami bantu cek.",
  },
  {
    q: "Lupa kata sandi atau tidak bisa masuk akun?",
    a: "Ketuk \"Lupa kata sandi\" di layar masuk, lalu ikuti instruksi lewat nomor HP terdaftar. Kalau nomornya sudah ganti, hubungi kami lewat email dan siapkan data akun untuk verifikasi.",
  },
  {
    q: "Saya mau komplain soal order atau mitra. Ke mana?",
    a: "Menu LajuCare di aplikasi adalah jalur tercepat. Ceritakan detailnya (nomor order, foto kalau ada), dan tim kami merespons maksimal 1×24 jam di hari kerja.",
  },
  {
    q: "Bagaimana kalau saya merasa tidak aman selama perjalanan?",
    a: "Gunakan tombol darurat di layar perjalanan dan aktifkan Bagikan Perjalanan. Tim keamanan kami siaga 24/7 dan bisa dihubungi langsung dari tombol tersebut.",
  },
  {
    q: "Saya mau jadi mitra pengemudi. Mulai dari mana?",
    a: "Unduh aplikasi Laju Mitra, daftar dengan nomor HP aktif, dan lengkapi dokumen. Kamu juga bisa isi formulirnya di halaman Daftar Mitra.",
  },
];

export default function PusatBantuanPage() {
  return (
    <InfoPage
      title="Pusat Bantuan"
      intro="Kumpulan jawaban untuk pertanyaan yang paling sering masuk ke tim kami. Kalau tidak ketemu, kami satu pesan jauhnya."
    >
      {faqs.map((faq) => (
        <section key={faq.q}>
          <h2>{faq.q}</h2>
          <p>{faq.a}</p>
        </section>
      ))}

      <section>
        <h2>Masih butuh bantuan?</h2>
        <p>
          Tim kami membalas lewat email maksimal 1×24 jam di hari kerja. Lihat
          semua cara menghubungi kami di halaman{" "}
          <Link
            href="/hubungi-kami"
            className="font-semibold text-ink underline decoration-lime-deep decoration-2 underline-offset-4"
          >
            Hubungi Kami
          </Link>
          .
        </p>
      </section>
    </InfoPage>
  );
}
