import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layanan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layanan.component.html',
  styleUrl: './layanan.component.css',
})
export class LayananComponent {
  techStack = [
    {
      name: 'HTML',
      image: '/logo/html.png',
    },
    {
      name: 'CSS',
      image: '/logo/css.png',
    },
    {
      name: 'JavaScript',
      image: '/logo/js.png',
    },
    {
      name: 'TypeScript',
      image: '/logo/ts.webp',
    },
    {
      name: 'Next',
      image: '/logo/next.png',
    },
    {
      name: 'Tailwind',
      image: '/logo/tailwind.png',
    },
    {
      name: 'Express',
      image: '/logo/express.png',
    },
    {
      name: 'Node.js',
      image: '/logo/node.png',
    },
    {
      name: 'MySQL',
      image: '/logo/MySQL.png',
    },
  ];
}
