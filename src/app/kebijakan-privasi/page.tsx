import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — Laju",
  description:
    "Kebijakan privasi yang menjelaskan bagaimana Laju mengelola data pengguna.",
};

export default function KebijakanPrivasiPage() {
  return (
    <InfoPage
      title="Kebijakan Privasi"
      updatedAt="8 November 2026"
      intro="Kami menghargai privasi kamu. Dokumen ini menjelaskan data yang kami kelola."
    >
      <section>
        <h2>1. Data yang Kami Kumpulkan</h2>
        <p>
          Laju mengumpulkan data akun, lokasi, dan riwayat transaksi yang
          dibutuhkan untuk menjalankan layanan. Dokumen ini merupakan contoh
          untuk keperluan portofolio.
        </p>
      </section>
      <section>
        <h2>2. Penggunaan Data</h2>
        <p>
          Data digunakan untuk memproses pesanan, mencocokkan pengguna dengan
          mitra, dan meningkatkan kualitas layanan.
        </p>
      </section>
      <section>
        <h2>3. Keamanan Data</h2>
        <p>
          Kami menerapkan langkah pengamanan teknis dan organisasi untuk
          melindungi data dari akses yang tidak sah.
        </p>
      </section>
      <section>
        <h2>4. Hak Pengguna</h2>
        <p>
          Kamu dapat meminta akses, perubahan, atau penghapusan data pribadi
          dengan menghubungi kami melalui email halo@laju.app.
        </p>
      </section>
    </InfoPage>
  );
}
