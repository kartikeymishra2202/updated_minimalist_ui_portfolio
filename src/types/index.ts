export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  type: string;
}
