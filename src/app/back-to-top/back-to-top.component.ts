import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      *ngIf="isVisible"
      (click)="scrollToTop()"
      class=" bg-white fixed bottom-5 right-5  text-black p-2 rounded-full shadow-lg hover:bg-primary-focus transition-all duration-300 text-2xl font-bold"
    >
      Back to Top ⬆️
    </button>
  `,
  styles: [],
})
export class BackToTopComponent {
  isVisible = false;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isVisible = scrollPosition > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
