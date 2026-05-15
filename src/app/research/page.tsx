import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { AchievementCard } from "@/components/achievement-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Explore my research projects and publications",
};

const BLUR_FADE_DELAY = 0.04;

export default function ResearchPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-8 sm:gap-14 relative">
      <section id="research">
        <div className="mx-auto w-full max-w-2xl space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="block w-full text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter"
              yOffset={8}
              text="Research"
            />
            <div className="flex items-center w-full justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="space-y-6 sm:space-y-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
              <div className="grid grid-cols-1 gap-4 w-full mx-auto max-w-6xl">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                  <AchievementCard
                    index={0}
                    title="Novel Model Development in Fourier Transform - Near Infrared Spectroscopy (FTNIR) for Total Fatty Matter (TFM) Determination in Baby Soap"
                    category="Research"
                    date="2024"
                    organization="Research Project"
                    description="update the project info in the doc"
                    image="/FTNIR.png"
                  />
                </BlurFade>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
