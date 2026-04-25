import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    return (
        <section id="projects" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div className="flex min-h-0 flex-col gap-y-8 w-full px-8 sm:px-16 lg:px-20">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 w-full mx-auto max-w-6xl" style={{ gridAutoRows: '3fr' }}>
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
                                details={project.details}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                images={project.images}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}

