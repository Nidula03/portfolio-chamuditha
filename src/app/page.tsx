"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const handleScroll = () => {
    const sidebarElement = document.getElementById('sticky-sidebar');
    if (!sidebarElement) return;
    
    const scrollY = window.scrollY;
    
    if (scrollY < 697) {
      sidebarElement.style.position = 'relative';
      sidebarElement.style.top = 'auto';
    } else {
      sidebarElement.style.position = 'sticky';
      sidebarElement.style.top = '5rem';
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="flex min-h-0 flex-col gap-y-8 w-full px-8 sm:px-16 lg:px-20">
          
          {/* Hero with Profile and About Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Profile Picture and Info - Sticky until 697px */}
            <div id="sticky-sidebar" className="flex flex-col gap-y-6 self-start h-fit relative">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="size-40 border rounded-full shadow-lg ring-4 ring-muted overflow-hidden">
                  <Image
                    src={DATA.avatarUrl}
                    alt={DATA.name}
                    width={160}
                    height={160}
                    priority
                    quality={75}
                    className="w-full h-full object-cover"
                  />
                </div>
              </BlurFade>
              <div>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY * 1}
                  className="text-lg font-semibold"
                  yOffset={8}
                  text={DATA.name}
                />
                <BlurFadeText
                  delay={BLUR_FADE_DELAY * 1.5}
                  className="text-2xl font-bold"
                  yOffset={8}
                  text={DATA.name.split(" ")[0]}
                />
                <BlurFadeText
                  delay={BLUR_FADE_DELAY * 2}
                  className="text-sm text-muted-foreground mt-2"
                  yOffset={8}
                  text={DATA.description}
                />
              </div>

              {/* Contents Section */}
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="bg-muted/20 rounded-lg p-4 border border-border/40">
                  <h3 className="text-sm font-semibold mb-3">Contents</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#Education" className="text-muted-foreground hover:text-foreground transition-colors text-xs">About me</a>
                    <a href="#Education" className="text-muted-foreground hover:text-foreground transition-colors text-xs">Education</a>
                    <a href="#Experience" className="text-muted-foreground hover:text-foreground transition-colors text-xs">Experience</a>
                    <a href="#Skills" className="text-muted-foreground hover:text-foreground transition-colors text-xs">Skills</a>
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* Right: About Me Section */}
            <div className="md:col-span-2 space-y-8">
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div>
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY * 5}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl"
                    yOffset={8}
                    text="About Me"
                  />
                  <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert mt-4">
                    <Markdown>{DATA.summary}</Markdown>
                  </div>
                </div>
              </BlurFade>

              {/* My Values Section */}
              <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <div className="space-y-4">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY * 7}
                    className="text-3xl font-bold tracking-tighter"
                    yOffset={8}
                    text="Education"
                  />
                  <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert mt-4">
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
