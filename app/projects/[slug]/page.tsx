import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";
import ProjectMDXContent from "@/components/projects/ProjectMDXContent";
import { Button } from "@/components/ui/button";

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

  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <SectionContainer size="sm">
      <article className="py-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-muted-foreground">{formattedDate}</time>
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

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

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

        <ProjectMDXContent code={project.body.code} />
      </article>
    </SectionContainer>
  );
}
