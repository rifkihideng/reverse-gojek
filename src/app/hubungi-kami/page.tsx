import type { Metadata } from "next";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Hubungi Kami — Laju",
  description:
    "Cara menghubungi tim Laju: email, WhatsApp, alamat kantor, dan jam operasional layanan bantuan.",
};

const contacts = [
  {
    icon: Mail,
    label: "Email umum",
    value: "halo@laju.app",
    href: "mailto:halo@laju.app",
    desc: "Untuk pertanyaan umum, kerja sama, dan media.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 812 3456 7890",
    href: "https://wa.me/6281234567890",
    desc: "Balasan cepat di jam operasional, Senin–Jumat.",
  },
  {
    icon: Clock,
    label: "Jam operasional bantuan",
    value: "Senin–Jumat, 08.00–20.00 WIB",
    href: null,
    desc: "Layanan darurat & keamanan tetap siaga 24/7 lewat aplikasi.",
  },
  {
    icon: MapPin,
    label: "Kantor pusat",
    value: "Jl. Kemang Raya No. 88, Jakarta Selatan",
    href: null,
    desc: "Kunjungan hanya dengan janji temu.",
  },
];

export default function HubungiKamiPage() {
  return (
    <InfoPage
      title="Hubungi Kami"
      intro="Kami lebih suka jawaban cepat daripada form panjang. Pilih jalur yang paling nyaman buat kamu."
    >
      <section>
        <h2>Kontak Langsung</h2>
        <div className="grid gap-4">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const content = (
              <>
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-lime/40 text-ink">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
                    {contact.label}
                  </p>
                  <p className="mt-1 font-bold text-ink">{contact.value}</p>
                  <p className="mt-1 text-sm">{contact.desc}</p>
                </div>
              </>
            );

            return (
              <div
                key={contact.label}
                className="flex items-start gap-4 rounded-2xl border border-hairline bg-surface p-6"
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-start gap-4"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2>Perlu bantuan soal order?</h2>
        <p>
          Kalau pertanyaanmu soal order yang sedang berjalan, komplain, atau
          keamanan, jalur tercepat adalah menu LajuCare di aplikasi — bukan
          email. Tim kami merespons maksimal 1×24 jam di hari kerja.
        </p>
      </section>
    </InfoPage>
  );
}
