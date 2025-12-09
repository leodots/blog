interface NavLink {
  href: string
  title: string
  hidden?: boolean
}

export const headerNavLinks: NavLink[] = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
  { href: '/resume', title: 'Resume' },
]
