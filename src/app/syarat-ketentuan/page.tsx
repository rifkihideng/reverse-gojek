import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan — Laju",
  description:
    "Syarat dan ketentuan penggunaan aplikasi Laju.",
};

export default function SyaratKetentuanPage() {
  return (
    <InfoPage
      title="Syarat & Ketentuan"
      updatedAt="8 November 2026"
      intro="Dokumen ini mengatur penggunaan aplikasi Laju."
    >
      <section>
        <h2>1. Penerimaan Ketentuan</h2>
        <p>
          Dengan mengunduh dan menggunakan aplikasi Laju, kamu dianggap telah
          membaca, memahami, dan menyetujui seluruh ketentuan di bawah ini.
          Dokumen ini merupakan contoh untuk keperluan portofolio.
        </p>
      </section>
      <section>
        <h2>2. Layanan</h2>
        <p>
          Laju menyediakan layanan transportasi, pesan antar makanan, kirim
          barang, dan pembayaran digital melalui mitra terverifikasi.
        </p>
      </section>
      <section>
        <h2>3. Tanggung Jawab Pengguna</h2>
        <p>
          Pengguna bertanggung jawab atas keakuratan informasi yang diberikan
          serta wajib menggunakan layanan sesuai hukum yang berlaku.
        </p>
      </section>
      <section>
        <h2>4. Perubahan Ketentuan</h2>
        <p>
          Laju dapat memperbarui ketentuan ini sewaktu-waktu. Perubahan akan
          diumumkan melalui aplikasi.
        </p>
      </section>
    </InfoPage>
  );
}
