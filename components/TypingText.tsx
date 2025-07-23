'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import IconsBundle from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function TypingText() {
  const el = useRef(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        // backSpeed: 50,
        // backDelay: 1500,
        // startDelay: 500,
        // loop: true,
        cursorChar: '|',
        autoInsertCss: true,
      })
    }

    return () => {
      typed.current?.destroy()
    }
  }, [])

  return (
    <div className="text-primary mt-6 mb-32 text-center text-4xl font-extrabold tracking-tighter sm:text-6xl">
      <ul id="typed-strings" className="hidden">
        <li>Hi it's Leo!</li>
      </ul>

      <span ref={el} className="inline" />
      <p className="mx-auto mt-3 max-w-lg font-normal tracking-normal text-gray-500 md:text-xl lg:text-lg xl:text-xl dark:text-gray-400">
        Welcome to my over-engineered personal blog where I write about software engineering,
        productivity, and other stupid stuff.
      </p>
      <p className="mx-auto max-w-lg font-normal tracking-normal text-gray-500 md:text-xl lg:text-lg xl:text-xl dark:text-gray-400">
        Also, it's my portfolio.
      </p>
      <IconsBundle
        kind="mail"
        iconType="linkButton"
        href={`mailto:${siteMetadata.email}`}
        text="Say Hi!"
        size={5}
        parentClassName="font-normal tracking-normal w-32 mx-auto p-4 mt-3 text-gray-900 dark:text-gray-100"
      />
    </div>
  )
}
