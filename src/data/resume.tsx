import { Icons } from "@/components/icons";
import { HomeIcon, BookOpen, Code, MessageSquare, Sparkles } from "lucide-react";
import { OrcidIcon } from "@/components/ui/svgs/orcid";

export const DATA = {
  name: "Chamuditha Ekanayake",
  initials: "CE",
  url: "https://chamuditha.dev",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "MS Analytical Chemistry | Graduate Chemist | Passionate on Laboratory Digitalization | Baden-Powell  &  President Scout Awardee | Mountaineer | Nature Visualist",
  summary: `Hello! 👋😊

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
    email: "chamudithasawan@gmail.com",
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
        url: "mailto:chamudithasawan@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
      ORCID: {
        name: "ORCID",
        url: "https://orcid.org/0009-0009-9678-3735",
        icon: OrcidIcon,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CBL Group",
      title: "Quality Assurance Executive",
      badge: "Full-time",
      logoUrl: "/cbl.jpg",
      start: "Oct 2024",
      end: "Jun 2025",
      description: "Sri Lanka · On-site",
      skills:
        "Laboratory Operations Management (Lab Layout Designing, Procurement & Vendor Management, Workflow Optimization), Internal Auditing - ISO/IEC 17025:2017 (Laboratory Accreditation), Method Implementation & Validation, Regulatory & Compliance, Laboratory Digitalization.",
    },
    {
      company: "Unilever",
      title:
        "Executive – Quality Assurance and Instructor – Laboratory (Dual Responsibilities)",
      badge: "Full-time",
      logoUrl: "/unilever_logo.jpeg",
      start: "Sep 2023",
      end: "Sep 2024",
      description: "Horana, Western Province, Sri Lanka · On-site",
      skills:
        "Analytical instrument operation & data interpretation: (GC-FID, FTNIR, FTIR, Celsis Advanced Luminometer) Laboratory Management, Lab Personnel Training, SOPs Development, Laboratory Digitalization"
    },

    {
      company: "Unilever",
      title:
        "Industrial Trainee - Quality Assurance",
      badge: "Full-time",
      logoUrl: "/unilever_logo.jpeg",
      start: "Feb 2023",
      end: "Jul 2023", 
      description: "Horana, Western Province, Sri Lanka · On-site",
      skills:
        "Managing multiple factory-level projects simultaneously"
    },

    {
      company: "Intertek",
      title: "Intern",
      badge: "Internship",
      logoUrl: "/intertek.jpg",
      start: "Aug 2022",
      end: "Jan 2023",
      description: "Sri Lanka",
      skills: "Analytical instrument operation: ICP-MS",
    },
  ] as Array<{
    company: string;
    href?: string;
    badge?: string;
    title: string;
    logoUrl?: string;
    start: string;
    end: string;
    description?: string;
    skills?: string;
  }>,
  experienceSkills: [
    "Project Management", 
    "Project Planning", 
    "Team Leadership",
    "Analytical Chemistry (GC-FID, FTNIR, FTIR, Celsis Advanced II)",
    "Industrial Automation",
    "Quality & Supply Chain Management",
  ],
  education: [
    {
      school: "University of Peradeniya",
      degree: "Master of Analytical Chemistry",
      logoUrl: "/peradeniya.png",
      start: "Feb 2024",
      end: "Present",
      description:
        "Independent Study: Nanocomposites for Corrosion Inhibition of Steel-Based Objects",
      skills:
        "Instrumental Analysis (EIS, GC-MS, FTIR, PXRD, AAS, NMR, Raman, UV-Vis), Scientific Writing",
    },
    {
      school: "College of Chemical Sciences, Institute of Chemistry Ceylon",
      degree: "Graduateship in Chemistry",
      logoUrl: "/ichem.png",
      start: "2019",
      end: "2023",
      skills:
        "Handling & interpreting data (FT-NIR spectrometer, GC-FID), Chemometrics Modeling, Software (Origin, ChemDraw, CurveExpert Professional, Minitab & Mendeley), Method Development & Validation",
    },
    {
      school: "Chartered Institute of Personnel Management (CIPM)",
      degree: "Advanced Certificate Course in Human Resource Management",
      logoUrl: "/cimp.png",
      start: "Nov 2020",
      end: "Mar 2021",
    },
    {
      school: "Trinity College Kandy",
      degree: "Primary and Secondary Education",
      logoUrl: "/trinity.png",
      start: "Jan 2007",
      end: "Aug 2018",
      description:
        "Activities and societies: Boy Scout, Rover Scout, Science Society, Electronic Club. G.C.E Advanced Level Examination (2018): Biological Science. ACHIEVEMENTS: President Scout Award (2016), Scout of the Year 2016, Best Explorer Scout - 18th Sampath Ranawaka Memorial Challenge Trophy All Island Competition Hike (2016), Represented Sri Lanka at the 23rd World Scout Jamboree, Japan (2015). Thumbnail for Baden Powell Award - Highest International Award in Scouting (Dec, 2024).",
      skills: "Team Leadership, Project Planning, Project Management",
    },
  ] as Array<{
    school: string;
    href?: string;
    degree: string;
    logoUrl?: string;
    start: string;
    end: string;
    description?: string;
    skills?: string;
  }>,
  blogs: [
    {
      title: "Pitching Tents in the Clouds: The Magic of Mountain Camping",
      href: "https://medium.com/@chamudithasawan/pitching-tents-in-the-clouds-the-magic-of-mountain-camping-7b64b74d4c05",
      dates: "April 26, 2026",
      active: true,
      description:
        "A reflection on mountain camping adventures, careful expedition planning, and the unforgettable experience of pitching tents in nature with a strong team.",
      technologies: ["Adventure", "Camping", "Mountain Hiking"],
      links: [
        {
          type: "Read on Medium",
          href: "https://medium.com/@chamudithasawan/pitching-tents-in-the-clouds-the-magic-of-mountain-camping-7b64b74d4c05",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tents.webp",
      video: "",
      claps: 20,
      comments: 0,
      mediumPostId: "7b64b74d4c05",
    },
    {
      title: "Beyond the Pedals",
      href: "https://medium.com/@chamudithasawan/beyond-the-pedals-8c15c04d1f3c",
      dates: "March 28, 2026",
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
      title: "From 4 Hours to 1 Minute: Measuring Baby Soap TFM Using FTNIR",
      href: "https://medium.com/@chamudithasawan/from-4-hours-to-1-minute-measuring-baby-soap-tfm-using-ftnir-95186def2eb8",
      dates: "March 11, 2026",
      active: true,
      description:
        "How FTNIR plus chemometric modeling transformed baby soap TFM analysis from a 4-hour solvent-based method into a 1-minute rapid, non-destructive, and safer workflow.",
      technologies: ["Analytical Chemistry", "FTNIR", "Quality Assurance", "Chemometrics"],
      links: [
        {
          type: "Read on Medium",
          href: "https://medium.com/@chamudithasawan/from-4-hours-to-1-minute-measuring-baby-soap-tfm-using-ftnir-95186def2eb8",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/FTNIR.png",
      video: "",
      claps: 51,
      comments: 0,
      mediumPostId: "95186def2eb8",
    },
    {
      title: "Ink, Mud and Memories: My Scout Log Book",
      href: "https://medium.com/@chamudithasawan/ink-mud-and-memories-my-scout-log-book-65d87079d742",
      dates: "March 1, 2026",
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
      dates: "February 26, 2026",
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
  projects: [
    {
      title:
        "Obtaining a Correlation between Standard Method and Rapid Method to Determine Total Fatty Matter (TFM) Content in Laundry & Toilet Soap",
      dates: "Research and Development",
      description:
        "Developed a linear regression based mathematical model to correlate standard and rapid testing methods for TFM determination in laundry and toilet soaps. The validated equation reduced analysis turnaround from about 4 hours to 30 minutes, enabling ~90% faster quality assurance decision making for production.",
      details:
        "Developed a mathematical model using linear regression analysis to establish a correlation factor between standard and rapid testing methods for determining TFM in laundry and toilet soaps. This equation enables rapid TFM quantification, drastically reducing the analysis turnaround time from 4 hours to just 30 minutes. Ultimately, this efficiency gain empowered the factory Quality Assurance team to make critical, on-time production decisions ~90% faster.\n\n## TECHNIQUES & INSTRUMENTATION USED\n\nLinear Regression, ANOVA, Random Sampling, Instrument Calibration Verification, MX 50 Moisture Analyzer, Heidolph Rotary Evaporator, Solvent Extraction.\n\n## WORK PERFORMED\n\nCollected 30-soap samples (from each soap variant) representing soap batches and simultaneously analysed samples using standard and rapid methods.\n\nApplied linear regression and ANOVA to the data to evaluate variance, confirm statistical significance, and build a robust mathematical equation bridging the two methodologies.\n\nDeployed the validated correlation model to the R&D and QA teams, successfully slashing routine analysis time by ~90% and accelerating daily production decision-making.",
      images: [
        "/Laundry Soap Correlation.PNG",
        "/Toilet Soap Correlation.PNG",
      ],
      technologies: [],
    },
    {
      title:
        "Reducing Product Aeration via Process & Formulation Improvement in an Anti-Dandruff Shampoo",
      dates: "Process and Formulation Improvement",
      description:
        "Unwanted aeration caused inconsistent bottle fills, resulting in numerous reported quality defects. To resolve this, I led a process engineering and formulation initiative to eliminate entrapped air. Through rheological characterization of key Carbopol polymer and systematic optimization of mechanical parameters, the project reduced unwanted aeration by 30%, resolving filling issues and improving manufacturing efficiency.",
      details:
        "Unwanted aeration caused inconsistent bottle fills, resulting in numerous reported quality defects. To resolve this, spearheaded a process engineering and formulation initiative to eliminate the entrapped air. Characterized the rheological behavior of key Carbopol polymer and systematically optimized mechanical parameters, this project successfully reduced unwanted aeration by 30%, directly resolving the filling issues and improving overall manufacturing efficiency.\n\n## TECHNIQUES & INSTRUMENTATION USED\n\nRoot Cause Analysis (RCA), Polymer Characterization, Viscosity Profiling.\n\n## WORK PERFORMED\n\nDesigned and executed four targeted batch trials to systematically isolate the operational and chemical causes of unwanted aeration.\n\nInvestigated the temperature-dependent behavior of the carbopol, specifically mapping its rheological impact on product viscosity across varying thermal conditions.\n\nEvaluated and recalibrated core manufacturing variables including pump RPM, agitator speed, and total agitation time to establish a low-aeration processing environment.",
      technologies: [],
    },
    {
      title:
        "Reduction of Excess Give Away (EGA) - Weight in Toilet Soap by 50%",
      dates: "Process Optimization and Yield Improvement",
      description:
        "In large-scale commercial soap production, even minor weight fluctuations can cause major financial losses through Excess Give Away (EGA). By performing an end-to-end process audit, analyzing stamping die dimensions, and correlating them with soap density data, I identified key mechanical deviations and implemented corrective actions that reduced EGA by 50%, improving product yield and profitability.",
      details:
        "In large-scale commercial soap production, even minor weight fluctuations lead to significant financial losses through Excess Give Away (EGA). To address a high EGA variance in the toilet soap line, I conducted an end-to-end audit of the manufacturing process to isolate the root causes and by systematically analyzing the physical dimensions of the stamping dies and correlating them with the density of the extruded soap, I successfully identified specific mechanical deviations. Addressing these root causes ultimately reduced the EGA by 50%, directly improving product yield and overall profitability.\n\n## TECHNIQUES & INSTRUMENTATION USED\n\nProcess Audit, Root Cause Analysis (RCA).\n\n## WORK PERFORMED\n\nConducted a comprehensive, end-to-end evaluation of the toilet soap manufacturing line to systematically track material flow and isolate the root causes of weight fluctuations.\n\nMeasured the physical dimensions of each stamping die and analyzed the specific density of the individual soap samples produced by each mold.\n\nCorrelated the data to identify specific mechanical variations and deviations in individual die performance that were directly contributing to the excess weight.\n\nImplemented targeted corrective actions based on the dimensional and density data.",
      technologies: [],
    },
    {
      title:
        "Implementation & Validation of ISO 685:2020 for TFM Determination in Baby Soap",
      dates: "ISO Method Implementation and Validation",
      description:
        "Implemented and validated the globally recognized ISO 685:2020 method for TFM determination in baby soap at the Unilever manufacturing chemical laboratory. Performed gap analyses, standardized chemical preparations, and cross-validated results with independent accredited laboratories before embedding the method into routine operations.",
      details:
        "Implemented and validation of the universally recognized ISO 685:2020 method for determination of TFM in baby soap at the chemical laboratory in Unilever manufacturing plant. Conducted gap analyses, standardized chemical preparations, and cross-validated our results with independent, accredited laboratories and successfully embedded this method into routine operations.\n\n## TECHNIQUES USED\n\nISO Method Implementation & Validation, Gap Analysis, Regulatory Compliance & Quality Assurance.\n\n## WORK PERFORMED\n\nProcured highly specific reagents and prepared the internal laboratory infrastructure to execute the new, universally applied method from the ground up and validated it.",
      technologies: [],
    },
    {
      title: "Laboratory Digitalization",
      dates: "Laboratory Process Digital Transformation",
      description:
        "This initiative transitioned standard laboratory operations from manual, paper-based workflows to integrated digital systems. The project modernized inventory management, sample tracking, and calibration verification, improving data accessibility, operational efficiency, and sustainability while reducing paper usage by about 1,260 sheets per month.",
      details:
        "This was a digitalization initiative to transition standard laboratory operations from manual, paper-based workflows to integrated digital systems. This project revolutionized inventory management, sample tracking, and calibration verification processes. By modernizing these critical workflows, the initiative significantly improved data accessibility, operational efficiency, and sustainability, resulting in a reduction of ~1,260 sheets of paper per month.\n\n## TECHNIQUES USED\n\nMicrosoft Power BI (Data Visualization & Dashboards), Microsoft Power Apps (Custom Application Development), Microsoft Forms (Data Collection), Adobe Acrobat Sign (Digital Workflows & E-Signatures), Process Optimization & Resource Management.\n\n## WORK PERFORMED\n\nInventory Dashboard: Developed a dynamic Microsoft Power BI dashboard to streamline laboratory inventory management, providing a highly visible, user-friendly interface for tracking materials and reagents.\n\nSample Intake App: Engineered a custom Incoming Sample Log application utilizing Microsoft Power Apps, heavily promoting efficiency and accuracy in the handling and routing of incoming samples.\n\nCalibration Digitization: Designed and implemented digital templates for instrument calibration verification using a combination of Microsoft Power Apps and Forms to ensure strict, easily accessible compliance records.\n\nTransitioned the standard laboratory request workflow to a fully digital format using Adobe Acrobat Sign, ensuring seamless document routing, approval, and archiving.",
      technologies: [],
    },
  ] as Array<{
    title: string;
    href?: string;
    description: string;
    details?: string;
    dates: string;
    technologies: readonly string[];
    image?: string;
    images?: string[];
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