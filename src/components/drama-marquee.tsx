import { type ComponentPropsWithoutRef } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number
}

function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex gap-4 overflow-hidden p-2 [--duration:40s]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333% - 0.5rem));
          }
        }
        @keyframes marquee-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-33.333% - 0.5rem));
          }
        }
      `}</style>
      <div
        className={cn("flex shrink-0 gap-4", {
          "flex-row": !vertical,
          "flex-col": vertical,
        })}
        style={{
          animation: vertical
            ? `marquee-vertical 50s linear infinite`
            : `marquee 50s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: pauseOnHover ? "running" : undefined,
          display: "flex",
          gap: "1rem",
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) {
            (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) {
            (e.currentTarget as HTMLElement).style.animationPlayState = "running";
          }
        }}
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  )
}

const drama1Images = [
  "/drama1/drama1_3.jpeg",
  "/drama2/drama2_1.jpeg",

  
  "/drama2/drama2_3.jpeg",
  "/drama2/drama2_2.jpeg",
  "/drama1/drama1_2.jpeg",
 
  "/drama1/drama1_4.jpeg",
];

const drama2Images = [
  "/drama2/drama2_2.jpeg",
  "/drama1/drama1_1.jpeg",
  "/drama1/drama1_5.jpeg",
  "/drama2/drama2_4.jpeg",
  "/drama1/drama1_6.jpeg",

];

const PhotoCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <figure className="relative h-64 w-48 shrink-0 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw, 33vw"
        className="h-full w-full object-cover"
        loading="lazy"
        quality={85}
      />
    </figure>
  );
};

export function DramaMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-8 py-8">
      {/* Drama 1 - Top Scroll */}
      <div className="w-full">
        <Marquee className="[--duration:80s]">
          {drama1Images.map((image, i) => (
            <PhotoCard
              key={`drama1-${i}`}
              src={image}
              alt={`Drama 1 - Photo ${i + 1}`}
            />
          ))}
        </Marquee>
      </div>

      {/* Drama 2 - Bottom Scroll Reverse */}
      <div className="w-full">
        <Marquee reverse className="[--duration:80s]">
          {drama2Images.map((image, i) => (
            <PhotoCard
              key={`drama2-${i}`}
              src={image}
              alt={`Drama 2 - Photo ${i + 1}`}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
