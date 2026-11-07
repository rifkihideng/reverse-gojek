"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  BatteryFull,
  Bike,
  Car,
  Check,
  ChevronLeft,
  CreditCard,
  Leaf,
  MapPin,
  Package,
  Plus,
  Search,
  ShoppingBag,
  Signal,
  Star,
  Store,
  Utensils,
  Wallet,
  Wifi,
  Zap,
} from "lucide-react";

const queries = [
  "Mau ke mana hari ini?",
  "Cari “mie ayam”…",
  "Kirim paket…",
  "Pesan ojek…",
];

const statuses = {
  Ride: [
    { Icon: Search, title: "Mencari driver terdekat…", sub: "Menghubungkan ke mitra Laju" },
    { Icon: Bike, title: "Driver menuju lokasi", sub: "Tiba dalam 3 menit · 1,2 km" },
    { Icon: Check, title: "Sampai tujuan!", sub: "Terima kasih sudah naik Laju 😊" },
  ],
  Food: [
    { Icon: Search, title: "Mencari restoran…", sub: "Memilih menu favoritmu" },
    { Icon: Utensils, title: "Pesanan dimasak", sub: "Restoran menyiapkan pesananmu" },
    { Icon: Check, title: "Makanan diterima!", sub: "Selamat menikmati 😋" },
  ],
  Send: [
    { Icon: Search, title: "Mencari kurir…", sub: "Menghubungkan ke mitra Laju" },
    { Icon: Package, title: "Paket dijemput", sub: "Kurir mengambil paketmu" },
    { Icon: Check, title: "Paket terkirim!", sub: "Terima kasih 🙌" },
  ],
  Pay: [
    { Icon: CreditCard, title: "Memproses pembayaran", sub: "Menghubungkan ke bank" },
    { Icon: Check, title: "Pembayaran berhasil", sub: "Rp18.000 telah terkirim" },
    { Icon: Check, title: "Transaksi selesai", sub: "Struk tersimpan" },
  ],
} as const;

const tiles = [
  { icon: Bike, label: "Ride" },
  { icon: Utensils, label: "Food" },
  { icon: Package, label: "Send" },
  { icon: CreditCard, label: "Pay" },
] as const;

type Service = (typeof tiles)[number]["label"];
type Screen = "home" | Service;

type Ripple = { id: number; x: number; y: number; size: number; label: Service };

export default function PhoneMockup() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [service, setService] = useState<Service>("Ride");
  const [screen, setScreen] = useState<Screen>("home");
  const [closing, setClosing] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isGreen, setIsGreen] = useState(false);
  const [co2, setCo2] = useState(0);
  const rippleId = useRef(0);

  // Efek mengetik pada placeholder pencarian
  useEffect(() => {
    let word = 0;
    let ch = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = queries[word % queries.length];
      if (!deleting) {
        ch += 1;
        setText(current.slice(0, ch));
        if (ch === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1600);
          return;
        }
        timer = setTimeout(tick, 65);
      } else {
        ch -= 1;
        setText(current.slice(0, ch));
        if (ch === 0) {
          deleting = false;
          word += 1;
        }
        timer = setTimeout(tick, 30);
      }
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  // Siklus status pesanan — reset tiap ganti layanan
  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % statuses[service].length);
    }, 3200);
    return () => clearInterval(id);
  }, [service]);

  // Hitung jejak karbon yang dihemat saat LajuGreen aktif
  useEffect(() => {
    if (!isGreen || (service !== "Ride" && service !== "Send")) return;

    const target = service === "Ride" ? 1.2 : 0.8;
    const duration = 1400;
    let start: number | null = null;
    let raf = 0;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCo2(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isGreen, service]);

  const handleTileClick = (e: MouseEvent<HTMLButtonElement>, label: Service) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.2;
    const id = ++rippleId.current;
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size, label },
    ]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 650);
    setService(label);
    setIdx(0);
    setHasVisited(true);
    setScreen(label);
  };

  const goBack = () => {
    if (closing) return;
    setClosing(true);
    setTimeout(() => {
      setScreen("home");
      setClosing(false);
    }, 280);
  };

  const { Icon: BaseIcon, title, sub } = statuses[service][idx];
  const greenActive = isGreen && (service === "Ride" || service === "Send");
  const StatusIcon = greenActive && BaseIcon === Bike ? Zap : BaseIcon;

  return (
    <div className="relative mt-4 flex justify-center lg:mt-0 lg:justify-end">
      <div className="phone" aria-hidden="true">
        <div className="phone-notch" />
        <div className="phone-screen">
          {/* Peta stylized di belakang UI */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 280 600"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <rect width="280" height="600" fill="#e6e8dc" />
            {/* Blok kota */}
            <g fill="#dcded0">
              <rect x="14" y="84" width="76" height="40" rx="7" />
              <rect x="102" y="84" width="56" height="40" rx="7" />
              <rect x="170" y="84" width="96" height="40" rx="7" />
              <rect x="14" y="140" width="56" height="48" rx="7" />
              <rect x="82" y="140" width="76" height="48" rx="7" />
              <rect x="170" y="140" width="96" height="48" rx="7" />
              <rect x="14" y="204" width="76" height="52" rx="7" />
              <rect x="102" y="204" width="164" height="52" rx="7" />
              <rect x="14" y="272" width="118" height="44" rx="7" />
              <rect x="144" y="272" width="122" height="44" rx="7" />
              <rect x="14" y="332" width="82" height="52" rx="7" />
              <rect x="108" y="332" width="158" height="52" rx="7" />
            </g>
            {/* Taman */}
            <rect x="184" y="430" width="82" height="68" rx="14" fill="#d5e4b4" />
            <rect x="14" y="438" width="58" height="54" rx="12" fill="#d5e4b4" />
            {/* Jalan */}
            <g stroke="#ffffff" strokeWidth="11" strokeLinecap="round" fill="none">
              <path d="M0 66 H280" />
              <path d="M0 126 H280" />
              <path d="M0 192 H280" />
              <path d="M0 256 H280" />
              <path d="M0 320 H280" />
              <path d="M0 400 H280" />
              <path d="M58 0 V600" />
              <path d="M148 0 V600" />
              <path d="M236 0 V600" />
            </g>
            {/* Rute aktif */}
            <path
              d="M38 520 C 80 476, 96 400, 150 356 C 190 322, 198 260, 184 180"
              fill="none"
              stroke="#14291f"
              strokeWidth="5"
              strokeDasharray="0.5 10"
              strokeLinecap="round"
            />
            <circle cx="38" cy="520" r="6" fill="#14291f" />
            <circle cx="184" cy="180" r="6" fill="#c8f135" stroke="#14291f" strokeWidth="2" />
          </svg>

          {screen === "home" ? (
            <div
              className={`relative z-10 flex min-h-0 flex-1 flex-col gap-2.5 ${
                hasVisited ? "screen-enter-left" : ""
              }`}
            >
          {/* Status bar */}
          <div className="relative z-10 flex items-center justify-between px-1.5 text-[11px] font-bold">
            <span>09:41</span>
            <span className="flex items-center gap-1.5 text-ink">
              <Signal className="size-3" />
              <Wifi className="size-3" />
              <BatteryFull className="size-3.5" />
            </span>
          </div>

          {/* Lokasi */}
          <div className="relative z-10 flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5 rounded-full border border-hairline bg-paper/90 px-2.5 py-1 shadow-sm backdrop-blur-sm">
              <MapPin className="size-3.5 text-ink" />
              <span className="text-[12px] font-bold">Jl. Sudirman, Jakarta</span>
            </div>
            <span className="grid size-7 place-items-center rounded-full bg-forest text-paper shadow-sm">
              <span className="text-[9px] font-extrabold">LA</span>
            </span>
          </div>

          {/* Search — placeholder mengetik sendiri */}
          <div className="relative z-10 flex items-center gap-2 rounded-full border border-hairline bg-paper/95 px-3.5 py-2 text-[12px] text-ink-muted shadow-md backdrop-blur-sm">
            <Search className="size-3.5 shrink-0" />
            <span className="truncate">
              {text}
              <span className="caret">|</span>
            </span>
          </div>

          {/* Promo card — shimmer */}
          <div className="relative z-10 flex items-center justify-between overflow-hidden rounded-2xl bg-forest p-2.5 text-paper shadow-md">
            <div>
              <p className="text-[11px] text-paper/60">Promo hari ini</p>
              <p className="text-[14px] font-extrabold">Gratis ongkir Rp20rb</p>
              <p className="text-[10px] text-lime">Kode: LAJUGO</p>
            </div>
            <div className="grid size-10 place-items-center rounded-xl bg-lime text-ink">
              <Utensils className="size-5" />
            </div>
            <span className="shimmer-sweep" />
          </div>

          {/* Grid layanan */}
          <div className="relative z-10 grid grid-cols-4 gap-2">
            {tiles.map(({ icon: Icon, label }) => {
              const active = service === label;
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={active}
                  onClick={(e) => handleTileClick(e, label)}
                  className={`tile relative flex flex-col items-center gap-1.5 overflow-hidden rounded-2xl border py-2.5 shadow-sm transition-all duration-150 active:scale-90 ${
                    active
                      ? "border-forest bg-forest text-paper"
                      : "border-hairline bg-paper/90 text-ink-muted backdrop-blur-sm hover:border-forest/30"
                  }`}
                >
                  {ripples
                    .filter((r) => r.label === label)
                    .map((r) => (
                      <span
                        key={r.id}
                        className={`ripple pointer-events-none absolute rounded-full ${
                          active ? "bg-lime/50" : "bg-ink/10"
                        }`}
                        style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
                      />
                    ))}
                  <span
                    className={`grid size-9 place-items-center rounded-xl transition-colors duration-200 ${
                      active ? "bg-lime text-ink" : "bg-lime/40 text-ink"
                    }`}
                  >
                    <Icon className="size-4.5" />
                  </span>
                  <span className="text-[10px] font-bold">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Order aktif — status bergilir + driver bergerak */}
          <div className="relative z-10 mt-auto rounded-t-3xl rounded-b-2xl border border-hairline bg-paper/95 p-2.5 pt-2 shadow-[0_-8px_24px_-12px_rgba(19,21,17,0.35)] backdrop-blur-md">
            <div className="mx-auto mb-2 h-1 w-9 rounded-full bg-hairline" />
            {(service === "Ride" || service === "Send") && (
              <div className="mb-1.5 flex items-center justify-between rounded-xl bg-lime/20 px-2.5 py-1">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-ink">
                  <Leaf className="size-3 text-forest" />
                  LajuGreen · Motor listrik
                </span>
                <button
                  type="button"
                  aria-pressed={isGreen}
                  onClick={() => setIsGreen((v) => !v)}
                  className={`relative h-4 w-7 shrink-0 rounded-full transition-colors duration-200 ${
                    isGreen ? "bg-forest" : "bg-hairline"
                  }`}
                >
                  <span
                    className={`absolute left-0.5 top-0.5 size-3 rounded-full transition-transform duration-200 ${
                      isGreen ? "translate-x-3 bg-lime" : "bg-ink/40"
                    }`}
                  />
                </button>
              </div>
            )}

            <div key={`${service}-${idx}`} className="status-in flex items-center gap-2.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-forest text-lime">
                <StatusIcon className="size-4.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-extrabold">{title}</p>
                <p className="truncate text-[10px] text-ink-muted">{sub}</p>
              </div>
              <span className="shrink-0 rounded-lg bg-lime/40 px-1.5 py-0.5 text-[10px] font-bold text-ink">
                Rp18rb
              </span>
            </div>

            {/* Rute mini dengan driver bergerak */}
            <div className="relative mt-2 h-6 overflow-hidden rounded-xl bg-paper/70">
              <div className="absolute left-2 right-2 top-1/2 h-px -translate-y-1/2 bg-hairline" />
              <span className="absolute left-[7%] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-lime" />
              <span className="absolute right-[7%] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-ink" />
              <span className={`bike-move absolute top-1/2 grid size-5 -translate-y-1/2 place-items-center rounded-full ${
                greenActive ? "bg-lime text-ink" : "bg-ink text-lime"
              }`}>
                {greenActive ? <Zap className="size-3" /> : <Bike className="size-3" />}
              </span>
            </div>

            {/* Jejak karbon — tampil saat LajuGreen aktif */}
            {greenActive && (
              <div key={`co2-${service}`} className="carbon-in mt-2.5 flex items-center justify-between rounded-xl bg-forest px-2.5 py-2 text-paper">
                <span className="flex items-center gap-1.5 text-[10px] font-bold">
                  <Leaf className="size-3 text-lime" />
                  Karbon dihemat
                </span>
                <span className="text-[11px] font-extrabold text-lime">
                  {co2.toFixed(1)} kg CO₂
                </span>
              </div>
            )}
          </div>
            </div>
          ) : (
            <div
              className={`relative z-10 flex min-h-0 flex-1 flex-col ${
                closing ? "screen-exit" : "screen-enter"
              }`}
            >
              <ServiceScreen screen={screen} onBack={goBack} />
            </div>
          )}
          <div className="home-indicator" />
        </div>
      </div>

    </div>
  );
}

const vehicles = [
  { id: "bike", icon: Bike, name: "LajuBike", eta: "3 menit", price: "Rp18rb", note: null },
  { id: "ev", icon: Zap, name: "LajuGreen", eta: "4 menit", price: "Rp18rb", note: "Hemat 1,2 kg CO₂" },
  { id: "car", icon: Car, name: "LajuCar", eta: "6 menit", price: "Rp42rb", note: null },
] as const;

type VehicleId = (typeof vehicles)[number]["id"];

const foods = [
  { icon: Utensils, name: "Ayam Geprek Mbak Sri", rating: "4.9", eta: "25 menit", price: "Rp32rb" },
  { icon: Store, name: "Kopi Nusantara", rating: "4.8", eta: "15 menit", price: "Rp18rb" },
  { icon: ShoppingBag, name: "Mart Sejahtera", rating: "4.7", eta: "20 menit", price: "Rp45rb" },
] as const;

type DetailScreen = Exclude<Screen, "home">;

function ServiceScreen({ screen, onBack }: { screen: DetailScreen; onBack: () => void }) {
  const [vehicle, setVehicle] = useState<VehicleId>("bike");

  const header = (title: string, sub: string) => (
    <div className="flex items-center gap-2.5">
      <button
        type="button"
        onClick={onBack}
        aria-label="Kembali"
        className="grid size-8 shrink-0 place-items-center rounded-full border border-hairline bg-paper/90 shadow-sm"
      >
        <ChevronLeft className="size-4" />
      </button>
      <div className="min-w-0">
        <p className="truncate text-[14px] font-extrabold leading-tight">{title}</p>
        <p className="truncate text-[10px] text-ink-muted">{sub}</p>
      </div>
    </div>
  );

  if (screen === "Ride") {
    const selected = vehicles.find((v) => v.id === vehicle) ?? vehicles[0];
    return (
      <div className="relative z-10 flex h-full flex-col">
        {header("LajuRide", "Pilih kendaraan & pesan")}

        <div className="mt-2 flex items-center gap-2 rounded-xl border border-hairline bg-paper/95 px-3 py-2.5 shadow-sm backdrop-blur-sm">
          <span className="size-2 shrink-0 rounded-full bg-lime" />
          <span className="truncate text-[12px] font-semibold text-ink-muted">
            Tujuan: Plaza Indonesia
          </span>
        </div>

        <div className="mt-3 space-y-2">
          {vehicles.map((v) => {
            const Icon = v.icon;
            const active = vehicle === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setVehicle(v.id)}
                className={`flex w-full items-center gap-2.5 rounded-2xl border p-2.5 text-left transition-all active:scale-[0.98] ${
                  active ? "border-forest bg-lime/20" : "border-hairline bg-paper/90"
                }`}
              >
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-xl ${
                    active ? "bg-forest text-lime" : "bg-surface text-ink"
                  }`}
                >
                  <Icon className="size-4.5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[12px] font-extrabold">{v.name}</span>
                    {v.id === "ev" && (
                      <span className="flex items-center gap-0.5 rounded-md bg-forest px-1 py-0.5 text-[8px] font-bold text-lime">
                        <Leaf className="size-2.5" />
                        HIJAU
                      </span>
                    )}
                  </span>
                  <span className="block truncate text-[10px] text-ink-muted">
                    {v.note ?? `Tiba dalam ${v.eta}`}
                  </span>
                </span>
                <span className="shrink-0 text-[12px] font-extrabold">{v.price}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="mt-auto flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-forest text-sm font-extrabold text-paper shadow-md active:scale-[0.98]"
        >
          Pesan {selected.name} · {selected.price}
        </button>
      </div>
    );
  }

  if (screen === "Food") {
    return (
      <div className="relative z-10 flex h-full flex-col">
        {header("LajuFood", "Restoran terdekat")}

        <div className="mt-2 flex items-center gap-2 rounded-xl border border-hairline bg-paper/95 px-3 py-2.5 text-[12px] text-ink-muted shadow-sm">
          <Search className="size-3.5 shrink-0" />
          <span>Cari makanan…</span>
        </div>

        <div className="mt-3 space-y-2">
          {foods.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.name}
                className="flex items-center gap-2.5 rounded-2xl border border-hairline bg-paper/90 p-2.5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lime/40 text-ink">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-extrabold">{f.name}</p>
                  <p className="flex items-center gap-1 text-[10px] text-ink-muted">
                    <Star className="size-2.5 text-lime-deep" fill="currentColor" />
                    {f.rating} · {f.eta} · {f.price}
                  </p>
                </div>
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-forest text-lime">
                  <Plus className="size-3.5" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (screen === "Send") {
    return (
      <div className="relative z-10 flex h-full flex-col">
        {header("LajuSend", "Kirim barang & dokumen")}

        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2 rounded-xl border border-hairline bg-paper/95 px-3 py-2.5 shadow-sm">
            <span className="size-2 shrink-0 rounded-full bg-lime" />
            <span className="truncate text-[12px] font-semibold text-ink-muted">Ambil: Jl. Sudirman</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-hairline bg-paper/95 px-3 py-2.5 shadow-sm">
            <span className="size-2 shrink-0 rounded-full bg-ink" />
            <span className="truncate text-[12px] font-semibold text-ink-muted">Antar: Jl. Kemang</span>
          </div>
        </div>

        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-ink-muted">
          Ukuran paket
        </p>
        <div className="mt-1.5 grid grid-cols-3 gap-2">
          {["S", "M", "L"].map((size) => (
            <button
              key={size}
              type="button"
              className="rounded-xl border border-hairline bg-paper/90 py-2.5 text-[12px] font-extrabold active:scale-95"
            >
              {size}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="mt-auto flex h-11 w-full items-center justify-center rounded-xl bg-forest text-sm font-extrabold text-paper shadow-md"
        >
          Lanjut ke kurir
        </button>
      </div>
    );
  }

  return (
    <div className="relative z-10 flex h-full flex-col">
      {header("LajuPay", "Dompet digital")}

      <div className="mt-2 rounded-2xl bg-forest p-4 text-paper shadow-md">
        <p className="text-[10px] text-paper/60">Saldo LajuPay</p>
        <p className="mt-1 text-2xl font-extrabold">Rp250.000</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { icon: Plus, label: "Isi saldo" },
            { icon: Wallet, label: "Transfer" },
            { icon: ShoppingBag, label: "Bayar" },
          ].map((a) => {
            const Icon = a.icon;
            return (
              <button
                key={a.label}
                type="button"
                className="flex flex-col items-center gap-1.5 rounded-xl bg-paper/10 py-2.5 text-[10px] font-bold active:scale-95"
              >
                <Icon className="size-4 text-lime" />
                {a.label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-ink-muted">
        Transaksi terakhir
      </p>
      <div className="mt-1.5 space-y-2">
        {[
          { icon: Utensils, name: "LajuFood · Ayam Geprek", time: "Hari ini", amount: "-Rp32.000" },
          { icon: Bike, name: "LajuRide · Sudirman", time: "Kemarin", amount: "-Rp18.000" },
        ].map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.name}
              className="flex items-center gap-2.5 rounded-xl border border-hairline bg-paper/90 p-2.5"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-surface text-ink">
                <Icon className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-extrabold">{t.name}</p>
                <p className="text-[9px] text-ink-muted">{t.time}</p>
              </div>
              <span className="shrink-0 text-[11px] font-bold text-ink-muted">{t.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
