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
        <div className="flex justify-center px-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-border/60 bg-muted/30 p-1.5 sm:gap-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className="flex items-center gap-1 sm:gap-2 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap"
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
                  <Icon className="size-4 shrink-0" />
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
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 w-full mx-auto max-w-4xl" style={{ gridAutoRows: '3fr' }}>
              <BlurFade delay={BLUR_FADE_DELAY * 4} className="h-full">
                <div className="flex flex-col h-full border border-border rounded-xl overflow-hidden transition-all duration-500 ease-out hover:ring-2 hover:ring-muted hover:scale-[1.02]">
                  <div className="relative shrink-0">
                    <HeroVideoDialog
                      animationStyle="from-center"
                      videoSrc="https://www.youtube.com/embed/hEtcEOtqu5U"
                      thumbnailSrc="https://img.youtube.com/vi/hEtcEOtqu5U/maxresdefault.jpg"
                      thumbnailAlt="Hiking Adventure Video"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                        <h3 className="text-lg sm:text-xl font-semibold">Hike to Hunasgiriya</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Mobile Videography 🌎👣
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 5} className="h-full">
                <div className="flex flex-col h-full border border-border rounded-xl overflow-hidden transition-all duration-500 ease-out hover:ring-2 hover:ring-muted hover:scale-[1.02]">
                  <div className="relative shrink-0">
                    <HeroVideoDialog
                      animationStyle="from-center"
                      videoSrc="https://www.youtube.com/embed/SpIwOkBT8UY"
                      thumbnailSrc="https://img.youtube.com/vi/SpIwOkBT8UY/maxresdefault.jpg"
                      thumbnailAlt="Ramboda Falls Video"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                        <h3 className="text-lg sm:text-xl font-semibold">Ramboda Falls</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Mobile Videography 💧
                      </p>
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