"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="flex min-h-0 flex-col gap-y-8 w-full px-8 sm:px-16 lg:px-20">
          
          {/* Hero with Profile and About Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Profile Picture and Info */}
            <div className="flex flex-col gap-y-6 self-start h-fit md:sticky md:top-24">
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
                  className="text-2xl  font-bold"
                  yOffset={8}
                  text={DATA.name}
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
                    <a href="#About" className="text-muted-foreground hover:text-foreground transition-colors text-xs">About me</a>
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
                <div id="About" className="scroll-mt-24">
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
                <div id="Education" className="space-y-4 scroll-mt-24">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY * 7}
                    className="text-3xl font-bold tracking-tighter"
                    yOffset={8}
                    text="Education"
                  />
                  <div className="mt-4 space-y-4">
                    {DATA.education.map((item, index) => (
                      <div
                        key={`${item.school}-${item.degree}-${index}`}
                        className="rounded-xl border border-border/50 bg-muted/20 p-4"
                      >
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex items-center gap-3">
                            {item.logoUrl ? (
                              <div className="size-10 overflow-hidden rounded-full border border-border/60 bg-background shrink-0">
                                <Image
                                  src={item.logoUrl}
                                  alt={`${item.school} logo`}
                                  width={40}
                                  height={40}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            ) : null}
                            <div>
                              <h3 className="text-base font-semibold text-foreground">{item.school}</h3>
                              <p className="text-sm text-muted-foreground">{item.degree}</p>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground sm:mt-0 mt-1">
                            {item.start} - {item.end}
                          </p>
                        </div>

                        {item.description ? (
                          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        ) : null}

                        {item.skills ? (
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            <span className="font-medium text-foreground">Skills:</span> {item.skills}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 8}>
                <div id="Experience" className="space-y-4 scroll-mt-24">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY * 9}
                    className="text-3xl font-bold tracking-tighter"
                    yOffset={8}
                    text="Experience"
                  />
                  {DATA.work.length > 0 ? (
                    <div className="mt-4 space-y-4">
                      {DATA.work.map((item, index) => (
                        <div
                          key={`${item.company}-${item.title}-${index}`}
                          className="rounded-xl border border-border/50 bg-muted/20 p-4"
                        >
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex items-center gap-3">
                              {item.logoUrl ? (
                                <div className="size-10 overflow-hidden rounded-full border border-border/60 bg-background shrink-0">
                                  <Image
                                    src={item.logoUrl}
                                    alt={`${item.company} logo`}
                                    width={40}
                                    height={40}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              ) : null}
                              <div>
                                <h3 className="text-base font-semibold text-foreground">{item.company}</h3>
                                <p className="text-sm text-muted-foreground">{item.title}</p>
                                {item.badge ? (
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    {item.badge}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground sm:mt-0 mt-1">
                              {item.start} - {item.end}
                            </p>
                          </div>

                          {item.description ? (
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          ) : null}

                          {item.skills ? (
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                              <span className="font-medium text-foreground">Skills:</span> {item.skills}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {DATA.experienceSkills.length > 0 ? (
                    <div id="Skills" className="mt-8 space-y-4 scroll-mt-24">
                      <BlurFadeText
                        delay={BLUR_FADE_DELAY * 9.5}
                        className="text-3xl font-bold tracking-tighter"
                        yOffset={8}
                        text="Skills"
                      />
                      <div className="flex flex-wrap gap-2">
                        {DATA.experienceSkills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-border/60 bg-muted/30 px-4 py-2 text-sm text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
