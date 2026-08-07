export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  details: string;
}

export const projects: Project[] = [
  {
    title: "Oracle FLEXCUBE Implementation",
    category: "Banking",
    description:
      "Worked on Oracle FLEXCUBE Digital Banking, OBVAM, OBLM, OBCM, UAT Testing and Core Banking implementation.",
    image: "/project1.jpg",
    tech: ["Oracle", "FLEXCUBE", "SQL", "UAT"],
    demo: "#",
    details: "#",
  },

  {
    title: "Income Tax Consultancy",
    category: "Tax",
    description:
      "Professional income tax return preparation, e-TIN registration, tax planning and compliance services.",
    image: "/project2.jpg",
    tech: ["Income Tax", "Finance", "e-TIN"],
    demo: "#",
    details: "#",
  },

  {
    title: "Smart Banking BD",
    category: "YouTube",
    description:
      "Educational YouTube channel focused on Banking, Loans and Finance.",
    image: "/project3.jpg",
    tech: ["YouTube", "SEO", "Finance"],
    demo: "#",
    details: "#",
  },
];