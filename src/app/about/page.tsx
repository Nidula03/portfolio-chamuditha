import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Chamuditha and their journey",
};

const BLUR_FADE_DELAY = 0.04;

export default function AboutPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="about">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-4xl font-bold tracking-tighter sm:text-5xl"
            yOffset={8}
            text="About Me"
          />
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
