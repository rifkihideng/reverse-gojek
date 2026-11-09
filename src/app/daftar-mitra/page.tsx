import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import MitraForm from "@/components/MitraForm";

export const metadata: Metadata = {
  title: "Daftar Mitra — Laju",
  description:
    "Daftar jadi mitra pengemudi Laju. Demo integrasi MCP: setiap kiriman formulir dibuatkan issue di repo GitHub.",
};

export default function DaftarMitraPage() {
  return (
    <InfoPage
      title="Daftar Mitra"
      intro="Isi formulir di bawah untuk mencoba alur pendaftaran mitra Laju. Ini masih demo: setiap kiriman diproses lewat GitHub (MCP) dan dibuatkan issue baru di repo Laju."
    >
      <section>
        <h2>Formulir Pendaftaran</h2>
        <MitraForm />
      </section>
    </InfoPage>
  );
}
