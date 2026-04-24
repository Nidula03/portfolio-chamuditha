import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest blog posts and articles",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="blog" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="flex min-h-0 flex-col gap-y-8 w-full px-8 sm:px-16 lg:px-20">
          <div className="flex flex-col gap-y-4 items-center justify-center w-full">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                <span className="text-background text-sm font-medium">My Blogs</span>
              </div>
              <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="flex flex-col gap-y-3 items-center justify-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest blog posts</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 w-full mx-auto max-w-5xl" style={{ gridAutoRows: '3fr' }}>
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
                  claps={blog.claps}
                  comments={blog.comments}
                  mediumPostId={blog.mediumPostId}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
