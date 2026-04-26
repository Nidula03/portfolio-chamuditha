import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import ProjectsSection from "@/components/section/projects-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects",
  description: "Explore my projects and work",
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="projects">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="space-y-4">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="block w-full text-center text-3xl font-bold tracking-tighter sm:text-4xl"
              yOffset={8}
              text="My Projects"
            />
            <div className="flex items-center w-full justify-center">
              <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
            </div>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <ProjectsSection />
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
