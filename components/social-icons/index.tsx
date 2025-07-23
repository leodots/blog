import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  X,
  Mastodon,
  Threads,
  Instagram,
  Medium,
  Bluesky,
} from './icons'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  x: X,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
  medium: Medium,
  bluesky: Bluesky,
}

type IconsBundleProps = {
  kind: keyof typeof components | string
  href?: string | undefined
  size?: number
  hover?: boolean
  iconType?: 'linkButton' | 'link' | 'icon' | 'Link' | 'LinkButton'
  variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost'
  className?: string
  parentClassName?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  text?: string
  strokeWidth?: number
}
const IconsBundle = ({
  kind,
  href,
  size = 8,
  iconType = 'link',
  variant = 'outline',
  className,
  parentClassName,
  hover = true,
  target,
  text,
  strokeWidth,
}: IconsBundleProps) => {
  const SocialSvg = components[kind]

  // check if kind already exists in the components object
  if (kind in components === false) {
    return null
  }

  if ((iconType === 'link' || iconType === 'Link' || iconType === 'LinkButton') && !href) {
    return null
  }

  // if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
  //   return (
  //     <SocialSvg
  //       className={`${hover ? 'hover:text-red-500 dark:hover:text-red-400' : ''} h-${size} w-${size}`}
  //     />
  //   )
  // convert tailwind size to px

  const combinedClass = cn(`${text ? 'mr-2' : ''}  h-${size} w-${size} text-inherit`, className)

  const combinedParentClass = cn(
    'flex items-center justify-center',
    `${hover ? 'hover:text-sky-900 dark:hover:text-sky-900' : ''}`,
    parentClassName
  )

  if (iconType === 'LinkButton' && href) {
    return (
      <Button
        variant={variant}
        size={!text ? 'icon' : 'default'}
        className={combinedParentClass}
        asChild
      >
        <Link href={href} target={target}>
          <span className="sr-only">{kind}</span>
          <SocialSvg className={combinedClass} strokeWidth={strokeWidth} />
          {text}
        </Link>
      </Button>
    )
  }
  if (iconType === 'Link' && href) {
    return (
      <Link href={href} className={combinedParentClass} target={target}>
        <span className="sr-only">{kind}</span>
        <SocialSvg className={combinedClass} strokeWidth={strokeWidth} />
        {text}
      </Link>
    )
  }

  if (iconType === 'icon') {
    return <SocialSvg className={cn(`h-${size} w-${size}`, className)} strokeWidth={strokeWidth} />
  }

  if (iconType === 'linkButton' && href) {
    return (
      <Button
        variant={variant}
        size={!text ? 'icon' : 'default'}
        className={parentClassName}
        asChild
      >
        <a
          className={cn('text-sm transition', combinedParentClass)}
          target={'_blank'}
          rel="noopener noreferrer"
          href={href}
        >
          <span className="sr-only">{kind}</span>
          <SocialSvg className={combinedClass} strokeWidth={strokeWidth} />
          {text}
        </a>
      </Button>
    )
  }

  return (
    <>
      <a
        className={cn('text-sm transition', combinedParentClass)}
        target={'_blank'}
        rel="noopener noreferrer"
        href={href}
      >
        <span className="sr-only">{kind}</span>
        <SocialSvg className={combinedClass} strokeWidth={strokeWidth} />
        {text}
      </a>
    </>
  )
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200 h-${size} w-${size}`}
      />
    </a>
  )
}

export default IconsBundle
