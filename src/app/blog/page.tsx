import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Laju",
  description:
    "Tips, kabar, dan cerita dari tim Laju — ditulis buat kamu, bukan buat algoritma.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <InfoPage
      title="Blog"
      intro="Tips, kabar, dan cerita dari tim Laju — ditulis buat kamu, bukan buat algoritma."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="grid gap-3 rounded-2xl border border-hairline bg-surface p-6 transition-colors hover:border-lime-deep"
          >
            <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-lime-deep">
              {post.category}
            </span>
            <h2 className="text-lg font-bold leading-snug text-ink">
              {post.title}
            </h2>
            <p className="text-sm">{post.excerpt}</p>
            <span className="text-xs text-ink-muted">
              {post.date} · {post.readMinutes} menit baca
            </span>
          </Link>
        ))}
      </div>
    </InfoPage>
  );
}
