const footerColumns = [
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Karier", href: "/karier" },
      { label: "Blog", href: "/blog" },
      { label: "Media", href: "/media" },
    ],
  },
  {
    title: "Layanan",
    links: [
      { label: "LajuRide", href: "#layanan" },
      { label: "LajuFood", href: "#layanan" },
      { label: "LajuSend", href: "#layanan" },
      { label: "LajuPay", href: "#layanan" },
      { label: "LajuMart", href: "#layanan" },
      { label: "LajuCare", href: "#layanan" },
    ],
  },
  {
    title: "Dukungan",
    links: [
      { label: "Pusat Bantuan", href: "#cara-kerja" },
      { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
      { label: "Hubungi Kami", href: "mailto:halo@laju.app" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-forest-800 bg-forest text-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-5 py-16 sm:px-8 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <a href="#beranda" className="flex items-center gap-2.5 font-extrabold tracking-tight">
            <span className="logo-mark" aria-hidden="true" />
            <span className="text-xl">Laju</span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
            Semua urusan kota, satu aplikasi. Dibuat dengan standar keamanan dan
            transparansi.
          </p>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-lime">
              {column.title}
            </h4>
            <ul className="mt-5 grid gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/60 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-forest-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Laju. Seluruh hak cipta.</p>
          <p>Dibuat untuk keperluan portofolio.</p>
        </div>
      </div>
    </footer>
  );
}
