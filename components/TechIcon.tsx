type TechIconProps = {
  kind: 'nextjs' | 'typescript' | 'tailwind' | 'shadcn' | 'contentlayer'
  href: string
  size?: 5 | 6 | 8
}

const sizeMap = {
  5: 'h-5 w-5',
  6: 'h-6 w-6',
  8: 'h-8 w-8',
}

const TechIcon = ({ kind, href, size = 6 }: TechIconProps) => {
  const svgSize = sizeMap[size]

  const renderIcon = () => {
    switch (kind) {
      case 'nextjs':
        return (
          <svg
            className={svgSize}
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_408_139"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="180"
              height="180"
            >
              <circle cx="90" cy="90" r="90" fill="#000" />
            </mask>
            <g mask="url(#mask0_408_139)">
              <circle cx="90" cy="90" r="90" fill="#000" />
              <path
                d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                fill="url(#paint0_linear_408_139)"
              />
              <rect
                x="115"
                y="54"
                width="12"
                height="72"
                fill="url(#paint1_linear_408_139)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_408_139"
                x1="109"
                y1="116.5"
                x2="144.5"
                y2="160.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFF" />
                <stop offset="1" stopColor="#FFF" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_408_139"
                x1="121"
                y1="54"
                x2="120.799"
                y2="106.875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFF" />
                <stop offset="1" stopColor="#FFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        )
      case 'typescript':
        return (
          <svg
            className={svgSize}
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <rect width="256" height="256" rx="28" fill="#3178C6" />
            <path
              d="M56.611 128.85l-.081 10.483h33.32v94.68h23.568v-94.68h33.321v-10.28c0-5.69-.122-10.444-.284-10.566-.122-.162-20.4-.244-44.983-.203l-44.739.122-.122 10.443Zm149.955-10.742c6.501 1.626 11.459 4.51 16.01 9.224 2.357 2.52 5.851 7.111 6.136 8.208.08.325-11.053 7.802-17.798 11.987-.244.162-1.22-.894-2.317-2.52-3.291-4.795-6.745-6.867-12.028-7.233-7.76-.528-12.759 3.535-12.718 10.321 0 1.992.284 3.17 1.097 4.795 1.707 3.536 4.876 5.649 14.832 9.955 18.326 7.883 26.168 13.084 31.045 20.48 5.445 8.249 6.664 21.415 2.966 31.208-4.063 10.646-14.14 17.88-28.323 20.277-4.388.772-14.79.65-19.504-.203-10.28-1.829-20.033-6.908-26.047-13.572-2.357-2.601-6.949-9.387-6.664-9.875.122-.162 1.178-.812 2.356-1.503 1.138-.65 5.446-3.13 9.509-5.485l7.355-4.267 1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305 8.167 4.307 19.383 3.698 24.909-1.26 2.357-2.153 3.332-4.388 3.332-7.68 0-2.966-.366-4.266-1.91-6.5-1.99-2.845-6.054-5.243-17.595-10.24-13.206-5.69-18.895-9.225-24.096-14.832-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.616-1.22-12.678-.447-16.335 2.723-12.76 12.353-21.658 26.25-24.3 4.51-.853 14.994-.528 19.424.569Z"
              fill="#FFF"
            />
          </svg>
        )
      case 'tailwind':
        return (
          <svg
            className={svgSize}
            viewBox="0 0 256 154"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient">
                <stop stopColor="#2298BD" offset="0%" />
                <stop stopColor="#0ED7B5" offset="100%" />
              </linearGradient>
            </defs>
            <path
              d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
              fill="url(#gradient)"
            />
          </svg>
        )
      case 'shadcn':
        return (
          <svg
            className={svgSize}
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="256" height="256" fill="#000" rx="60" />
            <path
              fill="#FFF"
              d="M121.633 61.013 54.73 176.246a5.665 5.665 0 0 0 4.905 8.496h133.806c3.684 0 6.266-3.663 4.906-8.496L131.444 61.013a5.666 5.666 0 0 0-9.81 0Z"
            />
          </svg>
        )
      case 'contentlayer':
        return (
          <svg
            className={svgSize}
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="contentlayer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
            </defs>
            <rect width="256" height="256" fill="url(#contentlayer-gradient)" rx="60" />
            <path
              fill="#FFF"
              d="M128 50 L180 90 L180 170 L128 210 L76 170 L76 90 Z M128 80 L100 100 L100 160 L128 180 L156 160 L156 100 Z"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <a
      className="transition-opacity hover:opacity-80"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={kind}
    >
      {renderIcon()}
    </a>
  )
}

export default TechIcon
