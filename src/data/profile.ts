export const profile = {
  name: "Pawan Shahi",
  title: "Senior Full Stack Developer",
  location: "Kailali, Nepal",
  email: "pawanshahi49@gmail.com",
  phone: "9867084830",
  website: "pawanshahi.com.np",
  socials: {
    linkedin: "https://www.linkedin.com/in/motion-suke",
    x: "https://x.com/motion_suke",
    facebook: "https://www.facebook.com/motion.suke",
  },
} as const;

export const about = {
  headline: "Building reliable products end-to-end.",
  body: [
    "Senior full stack developer with experience across health-tech platforms, banking systems, and enterprise-grade applications.",
    "Currently working as a Senior Developer at Ashray Tech, delivering scalable, secure, and high-performance systems.",
    "Previously worked at NMB Bank (IT & Development Department), building internal tools and workflows that improve operational efficiency.",
  ],
} as const;

export const skills = {
  frontend: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "NestJS", "ASP.NET"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "MSSQL", "Redis"],
  tools: ["AWS", "GitHub", "CI/CD", "Prisma", "Socket.IO", "Cron Jobs"],
} as const;

export const experience = [
  {
    role: "Senior Developer",
    company: "Ashray Tech",
    range: "Apr 2025 – Present",
    points: [
      "Lead delivery of full stack web platforms with reliable CI/CD and production monitoring.",
      "Design scalable APIs and data models, focusing on performance, security, and clean architecture.",
    ],
  },
  {
    role: "Junior Assistant IT",
    company: "NMB Bank",
    range: "Sep 2023 – May 2025",
    points: [
      "Worked in IT & Development Department building internal applications and automation.",
      "Collaborated with stakeholders to improve workflows, reporting, and operational visibility.",
    ],
  },
  {
    role: "Computer Instructor",
    company: "CG Computer Education",
    range: "Jan 2022 – Jun 2022",
    points: [
      "Taught fundamentals of computing and practical software skills to students.",
    ],
  },
  {
    role: "Freelancer",
    company: "UK-based projects",
    range: "Feb 2019 – Jul 2021",
    points: [
      "Delivered client websites and web apps end-to-end: discovery, UI implementation, backend integration, and deployment.",
      "Built maintainable, performance-focused features with clean architecture and clear handover documentation.",
    ],
  },
] as const;

export const projects = [
  {
    name: "Mate Health Platform",
    tech: ["Next.js", "NestJS", "MySQL", "Redis", "AWS"],
    description:
      "Male fertility testing platform with Shopify payment and MES lab integration. Sole developer.",
    highlights: [
      "Shopify payments",
      "MES lab integration",
      "End-to-end ownership",
    ],
  },
  {
    name: "Pertus Gut Health System",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "AWS"],
    description:
      "Gut health testing system for US/UK users with automated scheduling and cron jobs. Lead developer.",
    highlights: [
      "Automated scheduling",
      "Cron-driven workflows",
      "Global user base",
    ],
  },
  {
    name: "Raise Ticketing System",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO", "Cron Jobs"],
    description:
      "Real-time ticketing and chat system with 7/14/21/28 day escalation workflow and automated emails. Sole developer.",
    highlights: [
      "Realtime chat",
      "Escalation workflow",
      "Automated notifications",
    ],
  },
  {
    name: "Employee Productivity System",
    tech: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "AWS"],
    description: "Employee tracking and productivity analytics system.",
    highlights: [
      "Analytics dashboards",
      "Role-based access",
      "Performance-focused APIs",
    ],
  },
] as const;

export const education = [
  { title: "BSc IT", org: "BFIT Dehradun", year: "2019", detail: "" },
  { title: "+2 Management", org: "HSEB", year: "2014", detail: "" },
  { title: "SLC", org: "Nepal", year: "2012", detail: "" },
] as const;
