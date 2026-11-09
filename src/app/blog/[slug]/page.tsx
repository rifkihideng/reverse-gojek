import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InfoPage from "@/components/InfoPage";
import { getAllPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artikel tidak ditemukan — Laju" };
  return { title: `${post.title} — Laju`, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <InfoPage title={post.title} intro={post.excerpt} updatedAt={post.date}>
      {post.content.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
    </InfoPage>
  );
}
