import { Icons } from "@/components/icons";
import { HomeIcon, BookOpen, Code, MessageSquare, Sparkles } from "lucide-react";
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
  initials: "CE",
  url: "https://chamuditha.dev",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Scout • Explorer",
  summary: `Hello! 👋😊 , You can call me Chamuditha!

I'm a self-driven researcher with expertise in analytical chemistry and passionate about applying analytical techniques to solve complex problems with a focus on innovation and sustainability through multi-disciplinary knowledge in academic and industrial setting.

Advancing the traditional laboratory, I ♥️ go beyond the bench by implementing laboratory digitalization strategies to streamline workflows and integrating modern scientific techniques into conventional chemistry methods. 

Outside the lab, I am an avid hiker who finds inspiration in exploring challenging trails and the untamed beauty of nature. My experiences as a Boy Scout and Rover Scout, culminating in receiving both the Baden Powell Award and the President’s Scout Award—the highest honors at the international and national levels of scouting have profoundly shaped my character.
Today, I continue to explore, learn, and grow through scouting and outdoor experiences — building discipline, leadership, and a deeper connection with the world around me.`,
  avatarUrl: "/me.png",
  skills: [],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: Code, label: "Projects" },
    { href: "/blog", icon: BookOpen, label: "Blog" },
    { href: "/talks", icon: MessageSquare, label: "Talks" },
    { href: "/interests", icon: Sparkles, label: "Interests" },
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
  blogs: [
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
  ] as Array<{
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: string[];
    links: Array<{ type: string; href: string; icon: React.ReactNode }>;
    image: string;
    video: string;
    claps: number;
    comments: number;
    mediumPostId: string;
  }>,
  projects: [] as Array<{
    title: string;
    href?: string;
    description: string;
    dates: string;
    technologies: readonly string[];
    image?: string;
    video?: string;
    links?: Array<{ icon: React.ReactNode; type: string; href: string }>;
    claps?: number;
    comments?: number;
    mediumPostId?: string;
  }>,
  hackathons: [] as Array<{
    title: string;
    dates: string;
    image?: string;
    location?: string;
    description?: string;
    links?: Array<{ href: string; title: string; icon: React.ReactNode }>;
  }>,
} as const;
