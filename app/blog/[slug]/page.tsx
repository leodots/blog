import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";
import ProjectMDXContent from "@/components/projects/ProjectMDXContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} - Leo`,
    description: post.description,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <SectionContainer size="sm">
      <article className="py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <header className="mb-8">
          <time className="text-sm text-muted-foreground mb-4 block">
            {formattedDate}
          </time>

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <p className="text-lg text-muted-foreground mb-6">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <ProjectMDXContent code={post.body.code} />

        {post.canonical && (
          <footer className="mt-12 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Originally published on{" "}
              <a
                href={post.canonical}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                DEV Community
              </a>
            </p>
          </footer>
        )}
      </article>
    </SectionContainer>
  );
}
