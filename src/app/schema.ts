import { DATA } from "@/data/resume";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    image: `${DATA.url}/me.png`,
    description: DATA.description,
    jobTitle: "MS Analytical Chemistry | Graduate Chemist | Researcher",
    sameAs: [
      DATA.contact.social.LinkedIn.url,
      "https://www.linkedin.com/in/chamuditha-sawan-ekanayake/",
      "https://orcid.org/0009-0009-9678-3735",
    ],
    email: DATA.contact.email,
    knowsAbout: [
      "Analytical Chemistry",
      "Laboratory Digitalization",
      "Research",
      "Chemistry",
      "Scientific Analysis",
      "Laboratory Management",
      "ISO/IEC 17025",
      "Method Validation",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: DATA.name,
    url: DATA.url,
    description: DATA.description,
    creator: {
      "@type": "Person",
      name: DATA.name,
    },
  };
}
