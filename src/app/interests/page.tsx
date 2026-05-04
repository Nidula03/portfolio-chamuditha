"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import { DATA } from "@/data/resume";
import { useState } from "react";
import { Mountain, Flame, Camera, Star } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const tabs = [
  { id: "hiking",      label: "Hiking",      icon: Mountain },
  { id: "camping",     label: "Camping",      icon: Flame    },
  { id: "photography", label: "Photography",  icon: Camera   },
  { id: "acting",      label: "Acting",       icon: Star     },
];

export default function InterestsPage() {
  const [activeId, setActiveId] = useState("hiking");

  return (
    <main className="min-h-dvh flex flex-col gap-10">
      {/* Header */}
      <div className="space-y-4">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="block w-full text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          yOffset={8}
          text="Beyond the Lab"
        />
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex items-center w-full justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </BlurFade>
      </div>

      {/* Pill Tab Bar */}
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="flex justify-center px-4 sm:px-4 max-w-xs mx-auto">
          <div className="inline-flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-border/60 bg-muted/30 p-2 sm:p-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className="flex items-center gap-1 rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap"
                  style={
                    isActive
                      ? {
                          background: "var(--muted)",
                          color: "var(--foreground)",
                          border: "1px solid color-mix(in srgb, var(--border) 80%, transparent)",
                        }
                      : {
                          color: "var(--muted-foreground)",
                          border: "1px solid transparent",
                        }
                  }
                >
                  <Icon className="size-3.5 sm:size-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </BlurFade>

      {/* Tab Content */}
      {activeId === "hiking" && (
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="flex flex-col gap-y-8 w-full px-4 sm:px-8 md:px-16 lg:px-20">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full mx-auto max-w-5xl" style={{ gridAutoRows: 'auto' }}>
              {/* Card 1 */}
              <BlurFade delay={BLUR_FADE_DELAY * 4} className="h-full">
                <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-950/50 border border-slate-200 dark:border-slate-800/50 shadow-lg transition-all duration-300 ease-out hover:border-slate-300 dark:hover:border-slate-700/80 group">
                  <div className="relative shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-900/80">
                    <HeroVideoDialog
                      animationStyle="from-center"
                      videoSrc="https://www.youtube.com/embed/hEtcEOtqu5U"
                      thumbnailSrc="https://img.youtube.com/vi/hEtcEOtqu5U/maxresdefault.jpg"
                      thumbnailAlt="Hiking Adventure Video"
                    />
                  </div>
                  <div className="flex flex-col p-5 sm:p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                            Hike to Hunasgiriya
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            Sri Lanka • Mountain Trail
                          </p>
                        </div>
                   
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="dark:block hidden">
                          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="dark:hidden block">
                          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Mobile Videography</span>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>

              {/* Card 2 */}
              <BlurFade delay={BLUR_FADE_DELAY * 5} className="h-full">
                <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-950/50 border border-slate-200 dark:border-slate-800/50 shadow-lg transition-all duration-300 ease-out hover:border-slate-300 dark:hover:border-slate-700/80 group">
                  <div className="relative shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-900/80">
                    <HeroVideoDialog
                      animationStyle="from-center"
                      videoSrc="https://www.youtube.com/embed/SpIwOkBT8UY"
                      thumbnailSrc="https://img.youtube.com/vi/SpIwOkBT8UY/maxresdefault.jpg"
                      thumbnailAlt="Ramboda Falls Video"
                    />
                  </div>
                  <div className="flex flex-col p-5 sm:p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                            Ramboda Falls
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            Sri Lanka • Waterfall Trek
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="dark:block hidden">
                          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="dark:hidden block">
                          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Mobile Videography</span>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
      )}

      {/* Acting Section */}
      {activeId === "acting" && (
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="flex flex-col gap-y-8 w-full px-4 sm:px-8 md:px-16 lg:px-20">
            {/* Description */}
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="w-full flex justify-center">
                <div className="w-full max-w-2xl rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md p-4 sm:p-5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 justify-center">
                
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        The Stage Experience
                      </h3>
                    </div>
                    
                   
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed text-center">
                      The stage is a world of entertainment and being on a stage is a great fun 😀
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed text-center">
                      I got engaged in the drama titled <span className="font-semibold text-slate-900 dark:text-white">"Eeswah Play"</span> at <span className="font-semibold text-slate-900 dark:text-white">AURA XI</span>, playing the role of <span className="italic font-semibold text-slate-900 dark:text-white">Lucifer, The King of Hell</span>. Moreover through this stage play we conveyed to the community the lesson that doing the incorrect thing will always have a negative outcome.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2 justify-center">
                      {["#acting", "#action", "#comedy", "#entertainment", "#cast"].map((tag) => (
                        <span key={tag} className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full mx-auto max-w-5xl" style={{ gridAutoRows: 'auto' }}>
              {/* Card 1 */}
              <BlurFade delay={BLUR_FADE_DELAY * 5} className="h-full">
                <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-950/50 border border-slate-200 dark:border-slate-800/50 shadow-lg transition-all duration-300 ease-out hover:border-slate-300 dark:hover:border-slate-700/80 group">
                  <div className="relative shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-900/80">
                    <HeroVideoDialog
                      animationStyle="from-center"
                      videoSrc="https://www.youtube.com/embed/xsebIKfulTA"
                      thumbnailSrc="https://img.youtube.com/vi/xsebIKfulTA/maxresdefault.jpg"
                      thumbnailAlt="Eeswah Play - Act 1"
                    />
                  </div>
                  <div className="flex flex-col p-5 sm:p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                            Eeswah Play - Act 1
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            AURA XI • Drama Performance
                          </p>
                        </div>
                    
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="dark:block hidden">
                          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="dark:hidden block">
                          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Featured Performance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>

              {/* Card 2 */}
              <BlurFade delay={BLUR_FADE_DELAY * 6} className="h-full">
                <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-950/50 border border-slate-200 dark:border-slate-800/50 shadow-lg transition-all duration-300 ease-out hover:border-slate-300 dark:hover:border-slate-700/80 group">
                  <div className="relative shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-900/80">
                    <HeroVideoDialog
                      animationStyle="from-center"
                      videoSrc="https://www.youtube.com/embed/HBh2qspoajg"
                      thumbnailSrc="https://img.youtube.com/vi/HBh2qspoajg/maxresdefault.jpg"
                      thumbnailAlt="Eeswah Play - Act 2"
                    />
                  </div>
                  <div className="flex flex-col p-5 sm:p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                            Eeswah Play - Act 2
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                            AURA XI • Drama Performance
                          </p>
                        </div>
                       
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="dark:block hidden">
                          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="dark:hidden block">
                          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Featured Performance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}