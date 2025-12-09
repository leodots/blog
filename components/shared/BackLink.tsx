import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface BackLinkProps {
  href: string
  label: string
}

export default function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Link>
  )
}
