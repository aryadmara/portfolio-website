import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CodingProject {
  name: string;
  description: string;
  techStack: string[];
  role: string;
  imageUrl?: string;
  link?: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  codingProjects: CodingProject[] = [
    {
      name: 'Tech Titans 🛒',
      description:
        'Tech Titans is an advanced multi-warehouse e-commerce platform that connects technology enthusiasts with a vast array of cutting-edge products.',
      techStack: ['Next', 'MUI', 'Express', 'Zod', 'Prisma'],
      role: 'Full Stack Developer',
      imageUrl: '/portfolio/4.png',
      link: 'https://jcwdsby021201.purwadhikabootcamp.com/',
    },
    {
      name: 'Ngivent 🎫',
      description:
        'Ngivent is an innovative web platform that connects ticket sellers with users who want to buy tickets for their favorite events.',
      techStack: ['Next', 'Tailwind', 'ShadCn UI', 'Express', 'Prisma'],
      role: 'Full Stack Developer',
      imageUrl: '/portfolio/5.png',
      link: 'https://www.linkedin.com/posts/muhamad-arya-60aa10210_webdevelopment-techinnovation-webapp-activity-7201053585978056704-PYD3?utm_source=share&utm_medium=member_desktop',
    },
    {
      name: 'Mulia Village 🏘️',
      description:
        'This is a project request from the Mulia Village team with the main aim of displaying offers for Mulia Village products, including promotions, featured products, and client testimonials.',
      techStack: ['Next', 'Tailwind'],
      role: 'Front-end Developer',
      imageUrl: '/portfolio/6.png',
      link: 'https://mulia-village.vercel.app/',
    },
    {
      name: 'Rocket Lister 🚀',
      description:
        'This project aims to create a clone website from an existing web design with the main focus on creating a company profile.',
      techStack: ['Vite', 'Tailwind'],
      role: 'Front-end Developer',
      imageUrl: '/portfolio/7.png',
      link: 'https://property-vite.vercel.app/',
    },
    {
      name: 'Netflix Clone 🎬',
      description:
        'This project aims to create a clone of the Netflix landing page, with the main focus on replicating its design for learning and development purposes.',
      techStack: ['Angular', 'Tailwind', 'Daisy UI'],
      role: 'Front-end Developer',
      imageUrl: '/portfolio/8.png',
      link: 'https://clone-project1.netlify.app/',
    },
  ];
}
