"use client";
import { useEffect, useRef } from "react";
import { ModelViewer } from "./model-viewer";
import Typed from "typed.js";

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: "#bios",
    typeSpeed: 100,
    autoInsertCss: true,
    cursorChar: "|", // specify the cursor character
    // attr: 'text-4xl font-extrabold' , // specify additional HTML attributes
    // backSpeed: 100,
    // loop: true,
    // backDelay: 1000,
  });
}

export default function Hero() {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = createTypedInstance(el.current);
      //   typed.current.cursor = (<span className="">|</span>)
    }
    return () => {
      typed?.current?.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto -mt-28 md:-mt-16 flex h-screen flex-col content-center justify-center px-6 py-5 text-center">
      <ModelViewer />
      <div className="text-4xl font-extrabold tracking-tighter text-primary sm:text-6xl">
        <ul id="bios" className="hidden">
          <li>Hi it&apos;s Leo!</li>
        </ul>
        <span ref={el} />
      </div>
      <p className="mx-auto mt-3 max-w-lg px-2 text-base text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl">
        Welcome to my over-engineered personal blog where I write about software
        engineering, productivity, and other stupid stuff that I like.
      </p>
      <p className="mx-auto max-w-lg px-2 text-base text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl">
        Also, it&apos;s my portfolio.
      </p>
    </div>
  );
}
