import {
  Github,
  Linkedin,
  Mail,
  Music,
  Instagram,
  GitFork,
} from "lucide-react";

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  spotify: Music,
  instagram: Instagram,
  githubFork: GitFork,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href?: string;
  size?: 5 | 6 | 8;
};

const sizeMap = {
  5: "h-5 w-5",
  6: "h-6 w-6",
  8: "h-8 w-8",
};

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-muted-foreground transition-colors hover:text-primary"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`${sizeMap[size]}`} />
    </a>
  );
};

export default SocialIcon;
