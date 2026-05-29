import BlogPageClient from "@/components/blog-page-client";
import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Analytical Chemistry & Adventure Stories",
  description: "Read my latest blog posts on data visualization, mountain hiking, cycling, scouting memories, and laboratory innovation techniques.",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="blog" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="w-full px-6 sm:px-8 md:px-16 lg:px-20">
            <div className="max-w-5xl mx-auto text-center ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest blog posts</h2>
              <div className="flex items-center justify-center mt-4">
                <div className="w-48 sm:w-80 md:w-96 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
            </div>
          </div>
        </BlurFade>

        <div className="flex min-h-0 flex-col gap-y-8 w-full px-6 sm:px-8 md:px-16 lg:px-20 lg:pr-96 mt-5">
          <BlogPageClient />
        </div>
      </section>
    </main>
  );
}
