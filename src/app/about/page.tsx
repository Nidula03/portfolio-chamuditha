import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Chamuditha Ekanayake - Analytical Chemist & Researcher",
  description: "Learn about Chamuditha Sawan Ekanayake - MS Analytical Chemistry graduate, passionate about laboratory digitalization, scouting awardee, and nature enthusiast with expertise in analytical techniques.",
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
            <div className="prose max-w-full text-pretty leading-relaxed text-muted-foreground dark:prose-invert">
              <div style={{ textAlign: 'justify' }}>
                <p>Hello! 👋😊</p>
                <p>I'm a self-driven researcher with expertise in analytical chemistry and passionate about applying analytical techniques to solve complex problems with a focus on innovation and sustainability through multi-disciplinary knowledge in academic and industrial setting.</p>
              </div>
              <div style={{ textAlign: 'justify' }}>
                <Markdown>{`Advancing the traditional laboratory, I ♥️ go beyond the bench by implementing laboratory digitalization strategies to streamline workflows and integrating modern scientific techniques into conventional chemistry methods.`}</Markdown>
              </div>
              <div style={{ textAlign: 'justify' }}>
                <Markdown>{`Outside the lab, I am an avid hiker who finds inspiration in exploring challenging trails and the untamed beauty of nature. My experiences as a Boy Scout and Rover Scout, culminating in receiving both the Baden Powell Award and the President's Scout Award—the highest honors at the international and national levels of scouting have profoundly shaped my character. Today, I continue to explore, learn, and grow through scouting and outdoor experiences — building discipline, leadership, and a deeper connection with the world around me.`}</Markdown>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
