import Link from "next/link";
import { type Project } from "contentlayer/generated";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <article
        className={cn(
          "h-full rounded-xl border border-border/50 bg-card p-6 transition-all duration-300",
          "hover:border-border hover:shadow-lg hover:shadow-primary/5",
          "hover:-translate-y-1",
          className
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-3">
            <time className="text-sm text-muted-foreground">{formattedDate}</time>
            {project.featured && (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                Featured
              </span>
            )}
          </div>

          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h2>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
