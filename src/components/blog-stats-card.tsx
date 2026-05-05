"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MagicCard } from "@/registry/magicui/magic-card";
import { NumberTicker } from "@/registry/magicui/number-ticker";

const MEDIUM_PROFILE_URL = "https://medium.com/@chamudithasawan";

export function BlogStatsCard() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [totalClaps, setTotalClaps] = useState(
    DATA.blogs.reduce((sum, blog) => sum + (blog.claps ?? 0), 0)
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const refreshStats = async () => {
      try {
        const results = await Promise.all(
          DATA.blogs.map(async (blog) => {
            if (!blog.mediumPostId) {
              return blog.claps ?? 0;
            }

            try {
              const response = await fetch(
                `/api/medium-stats?postId=${blog.mediumPostId}&live=1`
              );
              if (!response.ok) {
                return blog.claps ?? 0;
              }

              const data = await response.json();
              return typeof data.claps === "number" ? data.claps : (blog.claps ?? 0);
            } catch {
              return blog.claps ?? 0;
            }
          })
        );

        if (isMounted) {
          setTotalClaps(results.reduce((sum, claps) => sum + claps, 0));
        }
      } finally {
        // No loading state to update; the effect only refreshes the total count.
      }
    };

    refreshStats();
    const intervalId = window.setInterval(refreshStats, 60_000);

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, []);

  const articleCount = DATA.blogs.length;
  const gradientColor = mounted && theme === "dark" ? "#262626" : "#D9D9D955";

  return (
    <Card className="mx-auto w-full max-w-sm border-none p-0 shadow-none">
      <MagicCard
        gradientColor={gradientColor}
        className="p-0"
      >
        <CardHeader className="border-border border-b p-4 [.border-b]:pb-4 items-center text-center">
          <CardTitle className="text-2xl">Blog Statistics</CardTitle>
          <CardDescription className="mt-1 text-sm">
            A quick view of the articles published on Medium.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Total Articles
              </p>
              <NumberTicker
                value={articleCount}
                duration={2000}
                className="mt-2 text-3xl font-semibold tabular-nums"
              />
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Total Claps
              </p>
              <NumberTicker
                value={totalClaps}
                duration={2000}
                className="mt-2 text-3xl font-semibold tabular-nums"
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="border-border border-t p-4 [.border-t]:pt-4">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  aria-hidden="true"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z" />
                </svg>
                <span>Medium Profile</span>
              </p>
              <a
                href={MEDIUM_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-emerald-600"
              >
                @chamudithasawan
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <Button asChild className="w-full rounded-full px-5 sm:w-auto">
              <a href={MEDIUM_PROFILE_URL} target="_blank" rel="noreferrer">
                Visit Profile
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardFooter>
      </MagicCard>
    </Card>
  );
}