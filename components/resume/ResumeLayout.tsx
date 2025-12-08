import { ReactNode } from "react";

interface ResumeLayoutProps {
  children: ReactNode;
  toc: ReactNode;
}

export default function ResumeLayout({ children, toc }: ResumeLayoutProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-[73rem] xl:px-0 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-6xl font-bold mb-3">Resume</h1>
        <p className="text-lg text-muted-foreground">
          My professional career, experiences, and skills
        </p>
        <hr className="mt-6 border-border border-t-2" />
      </div>

      {/* Two-column layout with shared off-white background (forced in dark mode too) */}
      <div className="bg-gray-50 dark:bg-gray-50 rounded-lg p-8 shadow-sm">
        <div className="xl:grid xl:grid-cols-[250px_1fr] xl:gap-8 xl:relative">
          {/* TOC - hidden on mobile/tablet */}
          <aside className="hidden xl:block text-gray-800">{toc}</aside>

          {/* Vertical divider between TOC and content - only visible on desktop */}
          <div className="hidden xl:block absolute left-[250px] top-0 bottom-0 w-px bg-gray-300 ml-4"></div>

          {/* Main content */}
          <main className="min-w-0 text-gray-800">{children}</main>
        </div>
      </div>
    </div>
  );
}
