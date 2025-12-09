import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import SectionContainer from "@/components/SectionContainer";
import MDXContent from "@/components/mdx/MDXContent";
import BackLink from "@/components/shared/BackLink";
import TagList from "@/components/shared/TagList";
import { formatDate } from "@/lib/formatDate";

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

  return (
    <SectionContainer size="sm">
      <article className="py-8">
        <BackLink href="/blog" label="Back to blog" />

        <header className="mb-8">
          <time className="text-sm text-muted-foreground mb-4 block">
            {formatDate(post.date)}
          </time>

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <p className="text-lg text-muted-foreground mb-6">
            {post.description}
          </p>

          <TagList tags={post.tags} />
        </header>

        <MDXContent code={post.body.code} />

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
