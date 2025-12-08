import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import { siteMetadata } from "@/data/siteMetadata";
import { Github, Linkedin, Mail, Instagram, Hand } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About - Leo",
  description: "About me",
};

export default function AboutPage() {
  return (
    <div>
      <Header />
      <SectionContainer>
        <div className="py-8">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">About</h1>
          <hr className="my-8 border-gray-200 dark:border-gray-700" />
          <div className="flex flex-col md:flex-row md:space-x-12">
            {/* Left Column */}
            <div className="md:w-1/3 flex flex-col items-center">
              <Image
                src="/profile-image.jpg"
                alt="Leonardo Torres"
                width={192}
                height={192}
                className="rounded-full mb-4"
              />
              <h2 className="text-2xl font-bold">Leonardo Torres</h2>
              <p className="text-lg text-muted-foreground">
                Tech Lead @ Santander
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6 text-gray-500 hover:text-primary" />
                </a>
                <a
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 text-gray-500 hover:text-primary" />
                </a>
                <a href={`mailto:${siteMetadata.email}`}>
                  <Mail className="w-6 h-6 text-gray-500 hover:text-primary" />
                </a>
                <a
                  href={siteMetadata.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6 text-gray-500 hover:text-primary" />
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-2/3 mt-8 md:mt-0">
              <h1 className="text-3xl sm:text-3xl font-bold mb-4 text-center md:text-left">
                Hi{" "}
                <Hand className="inline-block w-8 h-8 ml-2 text-yellow-500" />,
                I&apos;m Leonardo Torres
              </h1>
              <div className="space-y-4">
                <p className="text-base text-foreground">
                  I&apos;m a Tech Lead from Brazil 🇧🇷 with a passion for AI and
                  full-stack development. I enjoy creating innovative solutions
                  that enhance efficiency and performance. My journey in
                  technology involves building AI-powered applications,
                  microservices, and full-stack solutions that challenge the
                  boundaries of what&apos;s possible. I hold a Bachelor&apos;s
                  degree in Information Systems.
                </p>
                <p className="text-base text-foreground">
                  Currently, I&apos;m at Santander in Brazil, where I focus on
                  integrating cutting-edge AI features and developing robust
                  backend systems. Whether I&apos;m coding or working with
                  cross-functional teams, my goal is to ensure our products not
                  only meet the highest standards but also amaze our users ✨.
                </p>
                <p className="text-base text-foreground">
                  When I&apos;m not in front of a screen, you can find me
                  listening to my favorite music 🎶 or watching movies 🎬. These
                  hobbies keep my creativity alive and my mind sharp.
                </p>
                <p className="text-base text-foreground">
                  I&apos;m currently diving deep into AI concepts, mastering
                  Golang, and exploring AWS certifications ☁️. Continuous
                  learning is my motto, and I&apos;m always searching for the
                  next big thing in technology 🚀.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
