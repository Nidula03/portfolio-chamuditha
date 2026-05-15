"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BlogStatsCard } from "@/components/blog-stats-card";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useEffect, useRef, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function BlogPageClient() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [statsTop, setStatsTop] = useState<string>("6rem");

  useEffect(() => {
    const compute = () => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        // Convert viewport-relative to document-relative coordinates for fixed positioning
        setStatsTop(`${rect.top + window.scrollY}px`);
      }
    };

    compute();
    window.addEventListener("resize", compute);
    window.addEventListener("scroll", compute);
    return () => {
      window.removeEventListener("resize", compute);
      window.removeEventListener("scroll", compute);
    };
  }, []);

  return (
    <>
      <BlurFade delay={BLUR_FADE_DELAY * 2} className="w-full mx-auto max-w-5xl block lg:hidden">
        <BlogStatsCard />
      </BlurFade>

      <div ref={gridRef} className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 w-full mx-auto max-w-5xl" style={{ gridAutoRows: '3fr' }}>
        {DATA.blogs.map((blog, id) => (
          <BlurFade
            key={blog.title}
            delay={BLUR_FADE_DELAY * 3 + id * 0.05}
            className="h-full"
          >
            <ProjectCard
              href={blog.href}
              title={blog.title}
              description={blog.description}
              dates={blog.dates}
              tags={blog.technologies}
              image={blog.image}
              video={blog.video}
              links={blog.links}
              showViewProjectButton={true}
              ctaLabel="Read on Medium"
              claps={blog.claps}
              mediumPostId={blog.mediumPostId}
            />
          </BlurFade>
        ))}
      </div>

      <div className="hidden lg:block fixed right-8 w-80" style={{ top: statsTop }}>
        <BlurFade delay={BLUR_FADE_DELAY * 2} className="w-full">
          <BlogStatsCard />
        </BlurFade>
      </div>
    </>
  );
}
