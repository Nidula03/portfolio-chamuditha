import BlurFadeText from "@/components/magicui/blur-fade-text";
import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talks",
  description: "My talks and presentations",
};

const BLUR_FADE_DELAY = 0.04;

export default function TalksPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="talks">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-4xl font-bold tracking-tighter sm:text-5xl"
            yOffset={8}
            text="Talks & Presentations"
          />
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="text-muted-foreground">
              <p>Upcoming talks and presentations will be featured here.</p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
