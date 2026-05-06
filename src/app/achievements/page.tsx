import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { AchievementCard } from "@/components/achievement-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Achievements",
  description: "Explore my achievements and awards",
};

const BLUR_FADE_DELAY = 0.04;

export default function AchievementsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="achievements">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="space-y-4">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="block w-full text-center text-3xl font-bold tracking-tighter sm:text-4xl"
              yOffset={8}
              text="Achievements"
            />
            <div className="flex items-center w-full justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="space-y-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
              <div className="flex min-h-0 flex-col gap-y-8 w-full px-8 sm:px-16 lg:px-20">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-center">Scouting</h2>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 w-full mx-auto max-w-6xl" style={{ gridAutoRows: '3fr' }}>
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                      <AchievementCard
                        title="Baden Powell (BP) Award – Sri Lanka Scout Association"
                        category="Scouting"
                        date="Dec 2024"
                        organization="Sri Lanka Scout Association"
                        description="Achieved the highest internationally recognized award attainable by a Rover Scout. This global award recognizes exceptional dedication to community service, advanced scoutcraft, outdoor exploration, and consistent leadership."
                        image="/achievements/badenPowell.jpeg"
                        link="https://trinitycollege.lk/2025/03/06/the-trinity-college-rover-scout-crew/"
                      />
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                      <AchievementCard
                        title="President Scout Award – Sri Lanka Scout Association"
                        category="Scouting"
                        date="Dec 2016"
                        organization="Sri Lanka Scout Association"
                        description="The highest national award achievable by a Scout in Sri Lanka. I earned this prestigious award as the culmination of eight years of unwavering dedication to the Scouting movement. Achieving the rank of President's Scout demands rigorous training, outdoor expertise, and community service. Throughout this journey, I forged a strong foundation in self-discipline, collaborative team spirit, and decisive leadership."
                        image="/achievements/presidentScout.png"
                        link="https://trinitycollege.lk/2018/10/22/appointment-of-eighteen-presidents-scouts-from-trinity/"
                      />
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                      <AchievementCard
                        title="Represented Sri Lanka at the 23rd World Scout Jamboree"
                        category="Scouting"
                        date="Aug 2015"
                        organization="World Scout Jamboree - Yamaguchi, Japan"
                        description="The World Scout Jamboree is the largest regular event organized by the Scout Movement, and takes place every four years, including Nature, Culture, Science, Faith and Beliefs, Global Development Village, Water, Peace, and Community activities. Only 84 scouts were chosen through an interview to represent Sri Lanka at the Jamboree over 600 applicants. The World Scout Jamboree brought together ~30000 scouts from 143 countries."
                        images={["/achievements/certificate.png", "/achievements/jamboree1.png", "/achievements/jamboree2.png"]}
                        link="https://www.facebook.com/100069795514881/videos/907568832648548?__so__=permalink"
                      />
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                      <AchievementCard
                        title="Best Explorer Scout & Runner-Up Team Member"
                        category="Scouting"
                        date="Oct 2016"
                        organization="18th Sampath Ranawaka Memorial Challenge Trophy"
                        description="Achieved the highest overall score among more than 200 competitors. The rigorous competition tested participants across a wide range of advanced disciplines, pioneering, scoutcraft, water activities, outdoor survival skills, and general knowledge. The event tested our collective and individual limits across pioneering, scoutcraft, water activities, and survival skills."
                        images={["/achievements/bestExplorer1.png", "/achievements/bestExplorer2.png", "/achievements/bestExplorer3.png"]}
                      />
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 8}>
                      <AchievementCard
                        title="Scout of the Year – Trinity College Kandy"
                        category="Scouting"
                        date="Dec 2016"
                        organization="Trinity College Kandy, Sri Lanka"
                        description="Awarded as the most outstanding and dedicated Scout of the year. This award recognized the deep commitment to the Scouting movement and active, enthusiastic engagement in a wide variety of Scouting initiatives at the high school, national, and international levels."
                      />
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                      <AchievementCard
                        title="Champion Scouts Team Member"
                        category="Scouting"
                        date="Oct 2015"
                        organization="17th Sampath Ranawaka Memorial Challenge Trophy All Island Competition Hike"
                        description="This achievement stands as a proud milestone in my journey, reflecting not only physical endurance and determination but also the spirit of teamwork, resilience, and a passion for adventure. Competing against participants from across the island and emerging as champions was a truly rewarding and unforgettable experience."
                        image="/achievements/hikeTrophy.png"
                      />
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
