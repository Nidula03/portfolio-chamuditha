import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { AchievementCard } from "@/components/achievement-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteering - Community Service & Leadership",
  description: "Explore my volunteering experiences including Boy Scout leadership, Rover Scout activities, mentoring, and community service initiatives.",
};

const BLUR_FADE_DELAY = 0.04;

export default function VolunteeringPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-8 sm:gap-14 relative">
      <section id="volunteering">
        <div className="mx-auto w-full max-w-2xl space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="block w-full text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter"
              yOffset={8}
              text="Volunteering"
            />
            <div className="flex items-center w-full justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="space-y-6 sm:space-y-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
              <div className="flex min-h-0 flex-col gap-y-6 sm:gap-y-8 w-full px-4 sm:px-8 md:px-16 lg:px-20">
                <div>
                  <div className="grid grid-cols-1 gap-6 w-full mx-auto max-w-6xl">
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                      <div className="border border-border bg-background rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <AchievementCard
                          index={0}
                          title="Evaluator, Student Research Symposium (SRS) – 2026"
                          date="Apr 2026"
                          organization="New Mexico Tech"
                          description="Evaluated three oral presentations and three research posters spanning multiple scientific disciplines. Provided structured and constructive feedback to help enhance students' research quality and scientific communication skills, while supporting the academic standards and integrity of the Symposium."
                          images={["/volunteer/srs1.jpg", "/volunteer/srs2.jpg"]}
                        />
                      </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                      <div className="border border-border bg-background rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <AchievementCard
                          index={1}
                          title="Volunteer Scout Instructor"
                          date="Feb 2022 - Dec 2023"
                          organization="Trinity College Kandy & Vidiyaloka Maha Vidyalaya Kandy, Sri Lanka"
                          description="Conducted weekly seminars and practical courses on the scouting badge syllabus with over 110 scouts aged 14 to 18, to assist in the completion of the badge work with 100 individual exams to achieve the President Scout Award."
                        />
                      </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                      <div className="border border-border bg-background rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <AchievementCard
                          index={2}
                          title="Volunteer Researcher"
                          date="Jul 2019 - Sep 2019"
                          organization="Department of Agricultural Biology at University of Peradeniya"
                          description="Engaged as a volunteer researcher for 2-months. Field visited Horton Plains National Park, Sri Lanka, and reported to the supervisor on duties related to the research topic on A Preliminary Estimation of the Sambar Deer, which included acquiring an accurate count of the Sambar Deer and categorizing them."
                        />
                      </div>
                    </BlurFade>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
