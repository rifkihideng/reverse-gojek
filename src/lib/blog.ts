export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readMinutes: number;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "tips-aman-naik-ojek-malam-hari",
    title: "Pulang Malam Naik Ojek? Lakukan 5 Hal Ini Dulu",
    category: "Tips & Keamanan",
    date: "3 November 2026",
    readMinutes: 4,
    excerpt:
      "Pulang larut itu biasa, yang penting jangan lengah. Ini lima langkah sederhana biar perjalanan malam kamu tetap aman dan tenang.",
    content: [
      "Pulang malam sendirian itu sering bikin deg-degan, dan itu wajar. Kabar baiknya, aplikasi Laju punya beberapa fitur yang sengaja kami bikin buat kondisi kayak gini. Bukan fitur hiasan — fitur yang benar-benar dipakai tim keamanan kami tiap hari.",
      "Sebelum naik, cek dulu nama, foto, dan nomor polisi pengemudi. Kalau ada yang beda dari yang tertera di aplikasi, jangan naik — batalkan dan pesan ulang. Kedengarannya sepele, tapi ini langkah yang paling sering dilewatkan.",
      "Begitu perjalanan dimulai, aktifkan Bagikan Perjalanan. Satu kali ketuk, rute kamu terkirim ke orang terdekat secara real time. Kami juga menaruh tombol darurat tepat di layar perjalanan — bukan di dalam menu yang sulit dicari.",
      "Terakhir, pilih titik jemput yang terang dan ramai, dan jangan sungkan melapor ke LajuCare kalau ada yang janggal. Lebih baik laporan yang ternyata aman daripada diam yang akhirnya jadi penyesalan.",
    ],
  },
  {
    slug: "cara-mudah-jadi-mitra-laju",
    title: "Dari Iseng Sampai Penghasilan Utama: Cara Daftar Mitra Laju",
    category: "Mitra",
    date: "28 Oktober 2026",
    readMinutes: 5,
    excerpt:
      "Banyak mitra kami mulai cuma buat tambahan, lalu jadi andalan. Begini proses daftarnya, dari unduh aplikasi sampai terima order pertama.",
    content: [
      "Kami sering dengar cerita yang sama dari mitra: awalnya cuma iseng nyambi, sekarang jadi penghasilan utama. Kalau kamu punya kendaraan dan waktu luang, proses daftarnya kami bikin sesingkat mungkin — tidak perlu bolak-balik kantor.",
      "Mulai dari unduh aplikasi Laju Mitra dan daftar pakai nomor ponsel aktif. Siapkan KTP, SIM, dan STNK, lalu unggah fotonya lewat aplikasi. Tim kami memverifikasi dokumen dalam 1–2 hari kerja, dan kamu bisa pantau statusnya langsung dari aplikasi.",
      "Setelah lolos verifikasi, ada pelatihan singkat secara daring tentang standar pelayanan dan keselamatan. Tidak lama, dan bisa dikerjakan sambil santai. Begitu selesai, akun kamu aktif dan order pertama bisa masuk hari itu juga.",
      "Satu saran dari mitra senior: pelajari peta area kamu dulu di minggu pertama, dan jangan malu bertanya di komunitas mitra. Penghasilan stabil itu dibangun dari kebiasaan kecil yang konsisten.",
    ],
  },
  {
    slug: "kenalan-dengan-lajusend",
    title: "LajuSend: Kirim Paket Tanpa Antre Ekspedisi",
    category: "Fitur",
    date: "15 Oktober 2026",
    readMinutes: 3,
    excerpt:
      "Dokumen mendesak, makanan titipan, sampai paket buat toko online — semua bisa jalan tanpa kamu harus antre di konter ekspedisi.",
    content: [
      "Dulu kirim paket artinya antre, isi formulir, lalu menunggu berhari-hari. LajuSend dibuat buat nyingkirin semua itu: kamu pesan lewat aplikasi, mitra datang menjemput, dan paket langsung meluncur ke alamat tujuan.",
      "Caranya sama gampangnya dengan pesan ojek. Pilih LajuSend, isi alamat penjemputan dan tujuan, lalu tunggu mitra datang. Tarif dihitung transparan dari jarak di awal — jadi tidak ada biaya tambahan yang bikin kaget pas paket sampai.",
      "Yang paling menenangkan: kamu bisa melacak posisi paket secara real time sampai diterima. Cocok buat dokumen mendesak, kiriman buat pelanggan toko online, atau sekadar titip oleh-oleh ke rumah orang tua.",
    ],
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
