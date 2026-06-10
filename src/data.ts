/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkExperience, SkillCategory, AcademicPaper } from "./types";

export const PERSONAL_DETAILS = {
  name: "CHAU Wing Yin, Sami",
  title: "Principal Data Analyst",
  aboutMeUrl: "https://about.me/chausami",
  githubUrl: "https://samichau903.github.io/resume",
  languages: ["English (Fluent)", "Cantonese (Fluent)", "Mandarin (Fluent)"],
  education: {
    degree: "BSc (Hons) First Class in Computer Science",
    school: "University of Warwick (UK)",
    period: "Sept. 2004 – Jul. 2007"
  },
  certification: "Bitwork Blockchain Certification"
};

export const MENTORSHIP_EXPERIENCE: WorkExperience[] = [
  {
    id: "mentor-generation",
    role: "Mentor for Junior Data Analyst Course",
    company: "Generation: You Employed (HK) Limited",
    period: "Aug. 2025 – Apr. 2026",
    details: [
      "Mentored individuals transitioning their careers from design and marketing into data analytics.",
      "Equipped mentees with essential industry data analyst skills, career transition confidence, and core analytical frameworks."
    ],
    skillsUsed: ["Leadership", "Communication", "Problem-solving", "Tableau", "Python 3"]
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "seek-principal",
    role: "Principal Data Analyst",
    company: "JobsDB Hong Kong Limited by SEEK",
    companySuffix: "(ASX: SEK)",
    period: "Mar. 2020 – Current",
    summaryBlock: "Driving product analytics, tagging architecture, and A/B testing strategy across APAC marketplace platforms.",
    metrics: [
      { label: "60+", value: "Experiments", desc: "Product experiments & releases successfully launched over 4 years" },
      { label: "$180M", value: "Unification", desc: "Supported candidate product metrics across 8 APAC platforms" },
      { label: "4-6", value: "Analysts Led", desc: "Spearheaded regional teams across Kuala Lumpur & New Zealand" }
    ],
    details: [
      "Spearhead a team of 4-6 product analysts across Kuala Lumpur and New Zealand, driving product analytics for the candidate job discovery platform to support strategic product and business decisions.",
      "Successfully supported over 60 key product experiments and releases, integrating traditional search mechanisms with advanced Generative AI LLM and Agentic solutions.",
      "Acted as a principal candidate product metrics support member during the high-stakes $180M tech unification of 8 major APAC marketplace platforms (including Jobstreet, JobsDB, and SEEK) from late 2022 to early 2024.",
      "Led the candidate job discovery analytics team through comprehensive tooling stack migrations: transitioned tracking from Adobe Analytics to Amplitude, shifted native web tagging to Tealium, and migrated reporting/dashboards to Tableau Cloud and Databricks.",
      "Managed analytics components during experiment tooling shifts: retired Apptimize and smoothly onboarded LaunchDarkly and Statsig for agile split-testing.",
      "Fostered an environment of innovation, high trust, shared ownership, and continuous education, effectively mentoring team members while keeping delivery velocity high.",
      "Collaborated deep-cross-functionally with senior leadership, PMs, software engineers, AI, design, and marketing teams throughout APAC to deliver end-to-end journey analytics (from job search, recommendations, personalizations, to applications) and traffic acquisition."
    ],
    skillsUsed: [
      "Tableau",
      "Databricks Dashboard",
      "Spark SQL on Databricks",
      "Tealium",
      "Amplitude",
      "GA4",
      "Adobe Analytics",
      "Segment",
      "Hubble (SEEK)",
      "Python 3",
      "Leadership",
      "Critical Thinking",
      "Communication"
    ]
  },
  {
    id: "iclick-manager",
    role: "Product & Performance Manager",
    company: "iClick Interactive Asia Limited",
    companySuffix: "(NASDAQ: ICLK)",
    period: "Jul. 2015 – Nov. 2019",
    details: [
      "Promoted from Product Specialist to Product & Performance Manager, leading a team of 4 digital marketing specialists on high-budget campaign delivery and operation.",
      "Enhanced iClick's core programmatic ecosystem: refined the Demand Side Platform (DSP), 'iAccess' bidding, and 'iAudience' audience intelligence products.",
      "Spearheaded major digital transformations for Cathay Pacific (Asia Miles), matching offline consumer data with online digital membership profiles.",
      "Engineered data monetization systems with Standard Chartered Bank utilizing Google Cloud, Google ADH (Ads Data Hub), BigQuery, and Adobe Creative Cloud.",
      "Delivered advanced tag management solutions (Google Tag Manager, Tealium), search engine marketing (SEM), and strategic media consultations for premium regional accounts."
    ],
    skillsUsed: [
      "Google Tag Manager",
      "Tealium",
      "Google Ads",
      "Google Ad Manager",
      "Google Marketing Platform",
      "Branch.io",
      "Adobe Analytics",
      "Leadership",
      "Problem-solving"
    ]
  },
  {
    id: "wcrf-coordinator",
    role: "Online Development & Fundraising Coordinator",
    company: "World Cancer Research Fund Hong Kong",
    period: "Feb. 2014 – Mar. 2015",
    details: [
      "Compiled modern website development blueprints and digital campaign structures for major charitable programs.",
      "Synthesized offline and online donor pathways to report on donation funnel leaks and donor retention behavior.",
      "Authored clean functional specifications and coordinated user acceptance testing (UAT) for the Charity Run portal.",
      "Orchestrated website redesign and rebranding project in lockstep with the UK web engineering and design squads."
    ],
    skillsUsed: ["GA4", "Problem-solving", "Communication"]
  },
  {
    id: "playality-assistant",
    role: "Community Manager & Technical Assistant",
    company: "Playality Limited",
    period: "Jun. 2011 – Aug. 2013",
    details: [
      "Processed and analyzed over 1 million records of historical Grand Poker game records using raw SQL/MySQL to perform behavioral and churn analysis.",
      "Architected Open Graph integrations and automated standard data exports for Facebook application instances.",
      "Monitored live game server status, API latency, and application conversion telemetry using Google Analytics and New Relic."
    ],
    skillsUsed: ["Google Analytics", "MySQL", "Problem-solving"]
  },
  {
    id: "freelancer-period",
    role: "Freelancer & Holiday Abroad",
    company: "Self-Employed",
    period: "Jan. 2010 – Jun. 2011",
    details: [
      "Explored regional opportunities and engaged in tactical digital delivery contracts while on international travel."
    ],
    skillsUsed: ["Problem-solving", "Communication"]
  },
  {
    id: "research-assistant",
    role: "Project Assistant & Research Assistant",
    company: "HKPU Computing Department & CUHK Translation Department",
    period: "Nov. 2007 – Jan. 2010",
    details: [
      "Contributed to specialized research models focusing on image indexes, academic search algorithms, and cross-departmental computational solutions."
    ],
    skillsUsed: ["Critical Thinking", "Problem-solving", "Python 3"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "BI & Data Visualization",
    iconName: "BarChart3",
    skills: ["Tableau", "Power BI", "Databricks Dashboard", "Databricks Genie"]
  },
  {
    title: "Modern Data Stack",
    iconName: "Database",
    skills: ["Spark SQL on Databricks", "Python 3", "SQL", "MySQL", "GitHub"]
  },
  {
    title: "Analytics Platforms",
    iconName: "LineChart",
    skills: ["Amplitude", "GA4", "Adobe Analytics", "Google Analytics", "New Relic"]
  },
  {
    title: "Tag & Platform Tracking",
    iconName: "Tag",
    skills: ["Tealium", "Google Tag Manager", "Appsflyer", "Segment", "Hubble (SEEK)"]
  },
  {
    title: "Ad Tech & Marketing",
    iconName: "Megaphone",
    skills: ["Google Ads", "Google Ad Manager", "Google Marketing Platform", "Branch.io"]
  },
  {
    title: "Core Capabilities",
    iconName: "Brain",
    skills: ["Leadership", "Communication", "Problem-solving", "Critical Thinking", "Open-mindedness"]
  }
];

export const ACADEMIC_PAPERS: AcademicPaper[] = [
  {
    title: "Trademark image retrieval using multi-resolution and directional details",
    journal: "Published in Pattern Recognition Journal (Elsevier / ScienceDirect)",
    description: "Developed robust content-based image retrieval (CBIR) algorithms targeted at large-scale trademark databases, optimizing visual feature extraction.",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0031320308003324"
  },
  {
    title: "Trademarks Image Retrieval Systems & Databases",
    journal: "Computer Science & Information Technology Chapter (IGI Global)",
    description: "Co-authored comprehensive chapters detailing the performance, indexing optimization, and retrieval mechanics of directional image matching systems.",
    url: "https://www.igi-global.com/chapter/trademark-image-retrieval/49105"
  }
];
