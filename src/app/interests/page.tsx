import BlurFadeText from "@/components/magicui/blur-fade-text";
import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interests",
  description: "Explore my interests and passions",
};

const BLUR_FADE_DELAY = 0.04;

export default function InterestsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="interests">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="space-y-4">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="block w-full text-center text-3xl font-bold tracking-tighter sm:text-4xl"
              yOffset={8}
              text="Interests"
            />
            <div className="flex items-center w-full justify-center">
              <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
            </div>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Scouting:</strong> Baden Powell Award and President&apos;s Scout Award recipient. Passionate about outdoor expeditions and community service.
              </p>
              <p>
                <strong>Hiking:</strong> Avid hiker who loves exploring challenging trails and connecting with nature.
              </p>
              <p>
                <strong>Personal Growth:</strong> Dedicated to continuous learning, resilience building, and exploring new experiences.
              </p>
              <p>
                <strong>Leadership:</strong> Committed to mentoring and guiding others through outdoor and community activities.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
