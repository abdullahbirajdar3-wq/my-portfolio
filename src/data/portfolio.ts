export type ProjectLink = {
  /** Text shown on the link. */
  label: string;
  /** Destination. */
  href: string;
};

export type Project = {
  /** Stable identifier, used as a React key. */
  id: string;
  /** Display title. */
  title: string;
  /** Discipline the work belongs to. */
  category: string;
  /** Year the work started or shipped. */
  year: string;
  /** A short account of the problem and the outcome. */
  summary: string;
  /** Techniques used to build it. */
  stack: string[];
  /** `shipped` work is finished; `in-progress` work is a current build. */
  status: "shipped" | "in-progress";
  /** Where the work can be seen. Empty for work still in progress. */
  links: ProjectLink[];
};

export const profile = {
  name: "Abdullah",
  role: "Data Science Student",
  /** Positioning line used under the hero headline. */
  tagline:
    "Studying data science at Atharva University and learning to turn scripts into software — one build at a time.",
  location: "Ahmedabad, India",
  /** Shown beside the status dot in the hero. */
  availability: "Open to internships & collaborations",
} as const;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

/** Hero status strip — small facts, set on the baseline of the headline. */
export const heroFacts = [
  { label: "Location", value: "Ahmedabad, India" },
  { label: "University", value: "Atharva University" },
  { label: "Focus", value: "Data Science & Frontend" },
] as const;

/** Principles used in the about section. */
export const principles = [
  {
    title: "Learn in public",
    body: "Every commit is a checkpoint. Pushing the half-finished version is how the work compounds instead of stalling.",
  },
  {
    title: "Data before pixels",
    body: "Studying data science taught me to question the input before polishing the output. Most bugs are decided before a single pixel moves.",
  },
  {
    title: "Ship small, ship often",
    body: "One working feature beats a perfect plan that never runs. Blood Availability started as a single ugly form and got better by shipping.",
  },
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/abdullahbirajdar3-wq" },
  { label: "Vercel", href: "https://vercel.com/abdullah-db4e" },
  { label: "Instagram", href: "https://www.instagram.com/demonic_ox" },
] as const;

export const projects: Project[] = [
  {
    id: "blood-availability",
    title: "Blood Availability",
    category: "Web Application",
    year: "2026",
    summary:
      "My first end-to-end build: a web application that helps people find blood available to them, matched by blood group and location so nobody has to guess where to look. It taught me more about designing a database and an interface people can actually use than any tutorial did.",
    stack: ["Full-Stack", "Database", "Responsive UI"],
    status: "shipped",
    links: [
      { label: "Source code", href: "https://github.com/abdullahbirajdar3-wq" },
    ],
  },
  {
    id: "campus-analytics",
    title: "Campus Analytics",
    category: "Data Science",
    year: "2026",
    summary:
      "Working through a semester of attendance, marks and lab usage to find which factors genuinely predict performance — practising a full analysis-to-visualisation pipeline on data I know well enough to question.",
    stack: ["Python", "Pandas", "Visualisation"],
    status: "in-progress",
    links: [],
  },
  {
    id: "component-toolkit",
    title: "Component Toolkit",
    category: "Frontend",
    year: "2026",
    summary:
      "A small library of reusable React components and utilities, built slowly enough to actually understand the patterns behind them rather than copy-paste them.",
    stack: ["React", "TypeScript"],
    status: "in-progress",
    links: [],
  },
];
