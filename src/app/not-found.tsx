import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-5 py-24 text-center">
      <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-lime-deep">
        404
      </p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-4 max-w-md text-ink-muted">
        Sepertinya halaman yang kamu cari sudah pindah atau tidak pernah ada.
      </p>
      <Link
        href="/"
        className={buttonVariants({
          className: "mt-8 h-12 rounded-xl px-6 font-bold",
        })}
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
