import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

export default function SectionContainer({
  children,
  size = "lg",
  className = "",
}: Props) {
  let baseClass = "";

  switch (size) {
    case "sm":
      baseClass = "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-[50rem] xl:px-8";
      break;
    case "md":
      baseClass = "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-[64rem] xl:px-8";
      break;
    case "lg":
      baseClass = "mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-[73rem] xl:px-0";
      break;
    case "xl":
      baseClass = "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-[80rem] xl:px-8";
      break;
    case "2xl":
      baseClass = "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-[96rem] xl:px-8";
      break;
  }

  return <section className={`${baseClass} ${className}`}>{children}</section>;
}
