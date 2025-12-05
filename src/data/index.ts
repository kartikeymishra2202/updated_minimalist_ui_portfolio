import type { Project, Testimonial } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "GenHub – AI-Powered Content Publishing Platform",
    category: "Full-Stack | Next.js + Node.js + MongoDB",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "NextAuth",
      "Gemini API",
    ],
    image: "/genhub.png",
    link: "https://genhub-cicl.onrender.com/",
  },
  {
    id: 2,
    title: "ShareSphere – Neighborhood Item Sharing Platform",
    category: "Full-Stack | Next.js + MERN + Socket.io",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "NextAuth",
      "Socket.io",
    ],
    image: "/shareSphere.png",
    link: "https://share-sphere-2-0.vercel.app/",
  },
  {
    id: 3,
    title: "Content Gene – Full-Stack Content Management Platform",
    category: "Full-Stack | Next.js + Prisma + PostgreSQL",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/content_gene.png",
    link: "https://content-gener.onrender.com",
  },
  {
    id: 4,
    title: "Second Brain – Smart Link Saving & Preview App",
    category: "Full-Stack | React + Node.js + MongoDB",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/secondBrain.png",
    link: "https://secondbrainv2.netlify.app/",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Verma",
    role: "Founder",
    company: "TaskFlow Labs",
    content:
      "Kartikey built our complete Task Management SaaS using MERN, and the performance is outstanding. From authentication to real-time updates, everything works flawlessly. Highly reliable and communicates clearly throughout the project.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "MedicoX Healthcare",
    content:
      "We hired Kartikey for our internal dashboard built in React + Node.js. His API structuring, database design and UI work were top-notch. The delivery was ahead of schedule and exceeded expectations. Extremely reliable developer.",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Aman Sharma",
    role: "CTO",
    company: "FinEdge Finance",
    content:
      "The backend APIs Kartikey developed for our fintech platform were clean, secure, and scalable. JWT authentication, role management, and transaction flows were implemented perfectly. A strong backend engineer with deep Node.js expertise.",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Carter",
    role: "Operations Lead",
    company: "ShopHub E-commerce",
    content:
      "Kartikey redesigned our entire front-end in Next.js. The website loads significantly faster, SEO improved, and UI looks modern. He understands both design and performance optimization extremely well.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    rating: 5,
  },
  {
    id: 5,
    name: "Daniel Foster",
    role: "Co-Founder",
    company: "ChatSync",
    content:
      "We needed a real-time chat application and Kartikey delivered a full MERN + Socket.io solution. Smooth real-time sync, clean code, and excellent project structure. He's definitely our go-to developer now.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
    rating: 5,
  },
];
