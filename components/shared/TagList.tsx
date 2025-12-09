import { cn } from "@/lib/utils"

interface TagListProps {
  tags: string[]
  limit?: number
  className?: string
}

export default function TagList({ tags, limit, className }: TagListProps) {
  const displayTags = limit ? tags.slice(0, limit) : tags
  const remaining = limit ? tags.length - limit : 0

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {displayTags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
        >
          {tag}
        </span>
      ))}
      {remaining > 0 && (
        <span className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
          +{remaining}
        </span>
      )}
    </div>
  )
}
