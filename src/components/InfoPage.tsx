import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type InfoPageProps = {
  title: string;
  intro?: string;
  updatedAt?: string;
  children: ReactNode;
};

export default function InfoPage({
  title,
  intro,
  updatedAt,
  children,
}: InfoPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-3xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-extrabold tracking-tight"
          >
            <span className="logo-mark" aria-hidden="true" />
            <span className="text-xl">Laju</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Beranda
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{intro}</p>
        )}
        {updatedAt && (
          <p className="mt-3 text-sm text-ink-muted">
            Terakhir diperbarui: {updatedAt}
          </p>
        )}
        <div className="mt-8 grid gap-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink [&_p]:leading-relaxed [&_p]:text-ink-muted">
          {children}
        </div>
      </main>

      <footer className="border-t border-hairline py-6 text-center text-xs text-ink-muted">
        © 2026 Laju. Seluruh hak cipta.
      </footer>
    </div>
  );
}
