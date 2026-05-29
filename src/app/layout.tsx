import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { OrcidIcon } from "@/components/ui/svgs/orcid";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { generatePersonSchema, generateWebsiteSchema } from "./schema";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - Analytical Chemist & Researcher`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    DATA.name,
    "Chamuditha Ekanayake",
    "Chamuditha Sawan Ekanayake",
    "analytical chemist",
    "chemistry researcher",
    "laboratory digitalization",
    "MS Analytical Chemistry",
    "graduate chemist",
    "scientific research",
  ],
  authors: [{ name: DATA.name }],
  creator: DATA.name,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: `${DATA.name} - Analytical Chemist & Researcher`,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    images: [
      {
        url: `${DATA.url}/me.png`,
        width: 400,
        height: 400,
        alt: DATA.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} - Analytical Chemist & Researcher`,
    description: DATA.description,
    card: "summary_large_image",
    images: [`${DATA.url}/me.png`],
  },
  verification: {
    google: "E9kagQYYrWpG9in0E4Z-E8ecNv247VLdKbTa5eYd3Sc",
    yandex: "",
  },
  alternates: {
    canonical: DATA.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LinkedInIcon = DATA.contact.social.LinkedIn.icon;
  const EmailIcon = DATA.contact.social.email.icon;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePersonSchema()) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebsiteSchema()) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="relative z-10 max-w-2xl mx-auto pt-20 py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar />
            <footer className="border-t border-border/60 bg-muted/30">
              <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-muted-foreground">
                <p className="text-sm">&copy; 2026 Chamuditha Ekanayake</p>
                <div className="flex items-center gap-4">
                  <a
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="transition-colors hover:text-foreground"
                  >
                    <LinkedInIcon className="size-4" />
                  </a>
                  <a
                    href={DATA.contact.social.email.url}
                    aria-label="Email"
                    className="transition-colors hover:text-foreground"
                  >
                    <EmailIcon className="size-4" />
                  </a>
                  <a
                    href="https://orcid.org/0009-0009-9678-3735"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ORCID"
                    className="transition-colors hover:text-foreground"
                  >
                    <OrcidIcon className="size-4" />
                  </a>
                </div>
              </div>
            </footer>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}