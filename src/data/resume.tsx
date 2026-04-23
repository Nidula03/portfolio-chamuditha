import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Chamuditha Ekanayake",
  initials: "DV",
  url: "https://chamuditha.dev",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Scout • Explorer",
  summary:
    `Scouting has been a defining part of my journey, shaping how I approach leadership, discipline, and problem-solving in both nature and everyday life.

As a Rover Scout, I’ve been involved in a wide range of outdoor expeditions, community service activities, and leadership programs that have helped me develop resilience, adaptability, and a strong sense of responsibility.

I’ve been honored with the Baden Powell Award and the President’s Scout Award, representing the highest levels of recognition in scouting at both national and international standards. These achievements reflect years of commitment, service, and personal growth.

Beyond formal scouting activities, I’m an avid hiker who finds inspiration in nature and challenging trails. I enjoy experiences that push mental and physical limits while offering perspective and clarity.

Today, I continue to explore, learn, and grow through scouting and outdoor experiences — building discipline, leadership, and a deeper connection with the world around me.`,
  avatarUrl: "/me.png",
  skills: [],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chamuditha-sawan-ekanayake/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [] as Array<{
    company: string;
    href?: string;
    badge?: string;
    title: string;
    logoUrl?: string;
    start: string;
    end: string;
    description?: string;
  }>,
  education: [] as Array<{
    school: string;
    href?: string;
    degree: string;
    logoUrl?: string;
    start: string;
    end: string;
  }>,
  projects: [
    {
      title: "Beyond the Pedals",
      href: "https://medium.com/@chamudithasawan/beyond-the-pedals-8c15c04d1f3c",
      dates: "2024",
      active: true,
      description:
        "An exploration of cycling as a metaphor for life's journey, discovering resilience, discipline, and personal growth through pedaling.",
      technologies: ["Cycling", "Personal Growth", "Adventure"],
      links: [
        {
          type: "Read on Medium",
          href: "https://medium.com/@chamudithasawan/beyond-the-pedals-8c15c04d1f3c",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/beyod_pedals.webp",
      video: "",
      claps: 51,
      comments: 0,
      mediumPostId: "8c15c04d1f3c",
    },
    {
      title: "Ink, Mud and Memories: My Scout Log Book",
      href: "https://medium.com/@chamudithasawan/ink-mud-and-memories-my-scout-log-book-65d87079d742",
      dates: "2026",
      active: true,
      description:
        "A journey through my Scout Log Book - a treasure of memories capturing badge work, survival tips, and unforgettable adventures from camps and hikes spanning nearly eight years.",
      technologies: ["Scouting", "Memories", "Personal Growth"],
      links: [
        {
          type: "Read on Medium",
          href: "https://medium.com/@chamudithasawan/ink-mud-and-memories-my-scout-log-book-65d87079d742",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/logbook.webp",
      video: "",
      claps: 50,
      comments: 0,
      mediumPostId: "65d87079d742",
    },
       {
      title: "Blind on the Summit: How a Pipeline Saved Our Hike",
      href: "https://medium.com/@chamudithasawan/blind-on-the-summit-how-a-pipeline-saved-our-hike-218197818958",
      dates: "2026",
      active: true,
      description:
        "A spontaneous hike turned into a survival situation when I lost my glasses at the summit. Discover how instinct, memory, and a water pipeline led us back to safety.",
      technologies: ["Mountain Hiking", "Survival", "Life Lessons"],
      links: [
        {
          type: "Read on Medium",
          href: "https://medium.com/@chamudithasawan/blind-on-the-summit-how-a-pipeline-saved-our-hike-218197818958",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Blind _Summit.webp",
      video: "",
      claps: 57,
      comments: 0,
      mediumPostId: "218197818958",
    },

    






  ],
  hackathons: [] as Array<{
    title: string;
    dates: string;
    image?: string;
    location?: string;
    description?: string;
    links?: Array<{ href: string; title: string; icon: React.ReactNode }>;
  }>,
} as const;
