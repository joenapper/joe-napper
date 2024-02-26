import { ProjectCard } from "@components/ProjectCard";

const projects = [
  {
    title: "Napper Network",
    type: "Website",
    text: "Aestetic & functional website focused on user experience for a digital marketing agency to showcase services and generate enquiries.",
    image: "/projects/napper-network.webp",
    link: "https://nappernetwork.com/",
  },
  {
    title: "Unite Coaching",
    type: "Website",
    text: "A high performing, accessible and responsive website for a coaching business to generate conversions to download their app.",
    image: "/projects/unite-coaching.webp",
    link: "https://www.coachedbyunite.com/",
  },
  {
    title: "Velocity Steel",
    type: "Website",
    text: "A responsive & high performing website for a steel fabrication company to generate leads and showcase their projects.",
    image: "/projects/velocity-steel.webp",
    link: "https://velocitysteel.co.uk/",
  },
  {
    title: "I-Rank",
    type: "Website",
    text: "A cutting-edge website with a high performance search tool to show a large range of data so users can see where they rank in different categories.",
    image: "/projects/i-rank.webp",
    link: "https://www.i-rank.net/",
  },
  {
    title: "Outdoor Revive",
    type: "Website",
    text: "A seamless, user-friendly & responsive website for an outdoor cleaning company to generate high quality leads and stand out from the crowd.",
    image: "/projects/outdoor-revive.webp",
    link: "https://outdoor-revive.co.uk/",
  },
];

export const items = projects.map((project, index) => (
  <ProjectCard key={index} {...project} />
));

export const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
};
