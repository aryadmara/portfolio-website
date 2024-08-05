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
        'A mobile application for task management with real-time updates and team collaboration features.',
      techStack: ['Next', 'Tailwind', 'ShadCn UI', 'Express', 'Prisma'],
      role: 'Full Stack Developer',
      imageUrl: '/portfolio/5.png',
      link: 'https://www.linkedin.com/posts/muhamad-arya-60aa10210_webdevelopment-techinnovation-webapp-activity-7201053585978056704-PYD3?utm_source=share&utm_medium=member_desktop',
    },
    {
      name: 'Mulia Village 🏘️',
      description:
        'An interactive dashboard for visualizing complex datasets with customizable charts and filters.',
      techStack: ['Next', 'Tailwind'],
      role: 'Front-end Developer',
      imageUrl: '/portfolio/6.png',
      link: 'https://mulia-village.vercel.app/',
    },
    {
      name: 'Rocket Lister 🚀',
      description:
        'An interactive dashboard for visualizing complex datasets with customizable charts and filters.',
      techStack: ['Vite', 'Tailwind'],
      role: 'Front-end Developer',
      imageUrl: '/portfolio/7.png',
      link: 'https://property-vite.vercel.app/',
    },
  ];
}
