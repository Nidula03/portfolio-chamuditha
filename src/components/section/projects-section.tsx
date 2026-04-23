import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    return (
        <section id="projects" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div className="flex min-h-0 flex-col gap-y-8 w-full px-8 sm:px-16 lg:px-20">
                <div className="flex flex-col gap-y-4 items-center justify-center w-full">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">My Blogs</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest blog posts</h2>
                    
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 w-full mx-auto max-w-5xl" style={{ gridAutoRows: '3fr' }}>
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                                claps={project.claps}
                                comments={project.comments}
                                mediumPostId={project.mediumPostId}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}

