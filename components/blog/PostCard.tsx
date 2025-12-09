import Link from "next/link";
import { type Post } from "contentlayer/generated";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  className?: string;
}

export default function PostCard({ post, className }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article
        className={cn(
          "h-full rounded-xl border border-border/50 bg-card p-6 transition-all duration-300",
          "hover:border-border hover:shadow-lg hover:shadow-primary/5",
          "hover:-translate-y-1",
          className
        )}
      >
        <div className="flex flex-col h-full">
          <time className="text-sm text-muted-foreground mb-3">
            {formattedDate}
          </time>

          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h2>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {post.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                +{post.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
