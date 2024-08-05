import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { LayananComponent } from './layanan/layanan.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoryComponent } from './story/story.component';
import { GalleryComponent } from "./gallery/gallery.component";
import { BackToTopComponent } from "./back-to-top/back-to-top.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    AboutComponent,
    FooterComponent,
    HeroComponent,
    LayananComponent,
    NavbarComponent,
    StoryComponent,
    GalleryComponent,
    BackToTopComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'state-management';
}
