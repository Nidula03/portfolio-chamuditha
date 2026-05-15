"use client";

import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import { DramaMarquee } from "@/components/drama-marquee";
import { AuroraText } from "@/registry/magicui/aurora-text";
import { DATA } from "@/data/resume";
import { useState, useEffect } from "react";
import { Mountain, Tent, Camera, Star, Instagram } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const tabs = [
  { id: "hiking",      label: "Hiking & Camping", icon: Tent },
  { id: "photography", label: "Photography",  icon: Camera   },
  { id: "acting",      label: "Stage Play",    icon: Star     },
];

function InstagramImageCarousel() {
  const images = [
    "/instaPics/insta1.jpg",
    "/instaPics/insta2.jpg",
    "/instaPics/insta3.jpg",
    "/instaPics/insta4.jpg",
    "/instaPics/insta5.jpg",
    "/instaPics/insta6.jpg",
  ];

  return (
    <blockquote 
      className="instagram-media w-full max-w-2xl dark:bg-slate-900 dark:border-slate-800" 
      style={{
        background: "var(--instagram-bg, #FFF)",
        border: "1px solid var(--instagram-border, #e1e8ed)",
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: "0",
        width: "calc(100% - 2px)"
      }}
    >
      {/* Profile Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-start gap-4">
          {/* Profile Picture */}
          <div className="flex-shrink-0 mt-1">
            <div className="relative w-24 h-24 rounded-full overflow-hidden">
              <Image
                src="/me.png"
                alt="Profile"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 pt-1">
            <div className="flex items-start justify-between gap-2">
              <a href="https://www.instagram.com/chamma_sawan" target="_blank" rel="noopener noreferrer" className="flex-1 hover:opacity-70 transition-opacity">
                <p className="font-bold text-black text-sm cursor-pointer">chamma_sawan</p>
                <p className="text-sm text-black font-bold mt-0.5 cursor-pointer">Chamuditha Sawan Ekanayake😊</p>
              </a>
              
              {/* Instagram Logo */}
              <a href="https://www.instagram.com/chamma_sawan" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:opacity-70 transition-opacity">
                <Instagram className="w-6 h-6 text-pink-500 cursor-pointer" />
              </a>
            </div>
            
            {/* Stats - Below */}
            <a href="https://www.instagram.com/chamma_sawan" target="_blank" rel="noopener noreferrer" className="flex gap-6 mt-4 text-sm hover:opacity-70 transition-opacity">
              <div className="cursor-pointer">
                <p className="font-bold text-black text-lg">1,354</p>
                <p className="text-black text-xs font-semibold">followers</p>
              </div>
              <div className="cursor-pointer">
                <p className="font-bold text-black text-lg">161</p>
                <p className="text-black text-xs font-semibold">posts</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Grid of Images */}
      <a href="https://www.instagram.com/chamma_sawan" target="_blank" rel="noopener noreferrer">
        <div className="grid grid-cols-3 gap-px bg-slate-300 dark:bg-slate-700 cursor-pointer hover:opacity-90 transition-opacity">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square bg-slate-100 dark:bg-slate-900 overflow-hidden">
              <Image
                src={image}
                alt={`Instagram photo ${index + 1}`}
                fill
                className="object-cover hover:opacity-80 transition-opacity"
                quality={85}
              />
            </div>
          ))}
        </div>
      </a>

      {/* Footer */}
      <div className="p-3 text-center text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
        <a href="https://www.instagram.com/chamma_sawan" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
          View on Instagram
        </a>
      </div>
    </blockquote>
  );
}

export default function InterestsPage() {
  const [activeId, setActiveId] = useState("hiking");

  useEffect(() => {
    // Load Instagram embed script
    if (activeId === "photography") {
      // Check if script is already loaded
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      } else {
        // Only add script if it doesn't already exist
        if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
          const script = document.createElement("script");
          script.src = "https://www.instagram.com/embed.js";
          script.async = true;
          document.body.appendChild(script);
        }
      }
    }
  }, [activeId]);

  return (
    <main className="min-h-dvh flex flex-col gap-10 pt-16">
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
        <div className="flex justify-center px-6 sm:px-4 max-w-xs mx-auto">
          <div className="inline-flex flex-nowrap items-center justify-center gap-2 sm:gap-2 rounded-full border border-border/60 bg-muted/30 p-2 sm:p-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className="flex items-center gap-1 rounded-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap"
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
                  <Icon className="size-3 sm:size-4 shrink-0" />
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
            {/* Description Text */}
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="w-full flex justify-center px-4">
                <div className="space-y-4 max-w-2xl">
                  <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                      Every climb reveals hidden beauty,
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200 mt-2">
                      every step becomes a memory.
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Photo Gallery */}
            <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
              <div className="columns-2 gap-4 sm:columns-3 w-full mx-auto max-w-5xl">
                {[
                  'IMG_5960.jpg',
                  'IMG_5964.jpg',
                  'IMG_5959.jpg',
                  'IMG_5967.jpg',
                  'IMG_5955.jpg',
                  'IMG_5972.jpg',
                  'IMG_5963.jpg',
                  'IMG_5961.jpg',
                  'IMG_5970.jpg',
                  'IMG_5958.jpg',
                  'IMG_5965.jpg',
                  'IMG_5968.jpg',
                  'IMG_5962.jpg',
                  'IMG_5969.jpg',
                  'IMG_5957.jpg',
                  'IMG_5971.jpg',
                  'IMG_5966.jpg',
                ].map((imageName, idx) => (
                  <BlurFade key={imageName} delay={BLUR_FADE_DELAY * (4.5 + idx * 0.05)} inView>
                    <div className="mb-4 relative rounded-lg overflow-hidden">
                      <Image
                        src={`/hiking_pics/${imageName}`}
                        alt={`Hiking photo ${idx + 1}`}
                        width={500}
                        height={600}
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="w-full h-auto rounded-lg object-cover"
                        loading="lazy"
                        quality={85}
                      />
                    </div>
                  </BlurFade>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
              <div className="w-full flex justify-center px-4">
                <p className="max-w-2xl text-center text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                  Watch snapshots of my hikes,
                  <span className="block">from paths to peaks</span>
                </p>
              </div>
            </BlurFade>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full mx-auto max-w-5xl" style={{ gridAutoRows: 'auto' }}>
              {/* Card 1 */}
              <BlurFade delay={BLUR_FADE_DELAY * 6} className="h-full">
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
              <BlurFade delay={BLUR_FADE_DELAY * 7} className="h-full">
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
              <div className="w-full flex justify-center px-4">
                <div className="space-y-4 max-w-2xl">
                  <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent leading-tight">
                      The stage is a world of entertainment
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200 mt-2">
                      and being on a stage is a great fun 😀
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full mx-auto max-w-5xl" style={{ gridAutoRows: 'auto' }}>
              {/* Card 1 */}
              <BlurFade delay={BLUR_FADE_DELAY * 5} className="h-full">
                <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-950/50 border border-slate-200 dark:border-slate-800/50 shadow-lg transition-all duration-300 ease-out hover:border-slate-300 dark:hover:border-slate-700/80 group">
                  <div className="relative shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-900/80 transition-transform duration-300 group-hover:scale-110" style={{ objectPosition: 'center 40%' }}>
                    <HeroVideoDialog
                      animationStyle="from-center"
                      videoSrc="https://www.youtube.com/embed/xsebIKfulTA"
                      thumbnailSrc="/drama1/thumbnail1.jpeg"
                      thumbnailAlt="Eeswah Play - Act 1"
                    />
                  </div>
                  <div className="flex flex-col p-5 sm:p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                             Act 1 - Eeswah Play
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
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed pt-2">
                        Got engaged in the drama titled <span className="font-semibold text-slate-900 dark:text-white">"Eeswah Play"</span> at <span className="font-semibold text-slate-900 dark:text-white">AURA XI</span>, playing the role of <span className="italic font-semibold text-slate-900 dark:text-white">Lucifer, The King of Hell</span>. Moreover through this stage play we conveyed to the community the lesson that doing the incorrect thing will always have a negative outcome.
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {["#acting", "#action", "#comedy", "#entertainment", "#cast"].map((tag) => (
                          <span key={tag} className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>

              {/* Card 2 */}
              <BlurFade delay={BLUR_FADE_DELAY * 6} className="h-full">
                <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-950/50 border border-slate-200 dark:border-slate-800/50 shadow-lg transition-all duration-300 ease-out hover:border-slate-300 dark:hover:border-slate-700/80 group">
                  <div className="relative shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-900/80 transition-transform duration-300 group-hover:scale-110" style={{ objectPosition: 'center 25%' }}>
                    <HeroVideoDialog
                      animationStyle="from-center"
                      videoSrc="https://www.youtube.com/embed/HBh2qspoajg"
                      thumbnailSrc="/drama2/thumbnail2.jpeg"
                      thumbnailAlt="Act 2 - Kelani Palama"
                    />
                  </div>
                  <div className="flex flex-col p-5 sm:p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                            Act 2 - Kelani Palama
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

          {/* Aurora Text Quote */}
          <BlurFade delay={BLUR_FADE_DELAY * 7} className="w-full flex justify-center pt-8 sm:pt-12 md:pt-16 px-4">
            <p className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 max-w-2xl">
              Moments that lived beyond the <AuroraText>script</AuroraText>
            </p>
          </BlurFade>

          {/* Drama Marquee */}
          <BlurFade delay={BLUR_FADE_DELAY * 8} className="w-full">
            <DramaMarquee />
          </BlurFade>
        </section>
      )}

      {/* Photography Section */}
      {activeId === "photography" && (
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="flex flex-col gap-y-8 w-full px-4 sm:px-8 md:px-16 lg:px-20">
            {/* Description Text */}
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="w-full flex justify-center px-4">
                <div className="space-y-4 max-w-2xl">
                  <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                      Follow my photography, adventures, and creative journey on Instagram.
                    </h2>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Instagram Frame with Image Carousel */}
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="w-full flex justify-center">
                <InstagramImageCarousel />
              </div>
            </BlurFade>
          </div>
        </section>
      )}
    </main>
  );
}