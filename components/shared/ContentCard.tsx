import Link from "next/link"
import { cn } from "@/lib/utils"
import { formatDate } from "@/lib/formatDate"
import TagList from "./TagList"

interface ContentCardProps {
  href: string
  title: string
  description: string
  date: string
  tags: string[]
  badge?: string
  dateStyle?: 'short' | 'long'
  className?: string
}

export default function ContentCard({
  href,
  title,
  description,
  date,
  tags,
  badge,
  dateStyle = 'short',
  className,
}: ContentCardProps) {
  return (
    <Link href={href} className="block group">
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
            <time className="text-sm text-muted-foreground">
              {formatDate(date, dateStyle)}
            </time>
            {badge && (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                {badge}
              </span>
            )}
          </div>

          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h2>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
            {description}
          </p>

          <TagList tags={tags} limit={4} className="mt-auto" />
        </div>
      </article>
    </Link>
  )
}
