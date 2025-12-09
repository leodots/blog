import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Github, ExternalLink } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";
import MDXContent from "@/components/mdx/MDXContent";
import BackLink from "@/components/shared/BackLink";
import TagList from "@/components/shared/TagList";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/formatDate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - Leo`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <SectionContainer size="sm">
      <article className="py-8">
        <BackLink href="/projects" label="Back to projects" />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-muted-foreground">
              {formatDate(project.date)}
            </time>
            {project.featured && (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

          <p className="text-lg text-muted-foreground mb-6">
            {project.description}
          </p>

          <TagList tags={project.tags} className="mb-6" />

          {(project.github || project.demo) && (
            <div className="flex gap-3">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          )}
        </header>

        <MDXContent code={project.body.code} />
      </article>
    </SectionContainer>
  );
}
