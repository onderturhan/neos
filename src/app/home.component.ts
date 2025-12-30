import { Component } from '@angular/core';
import { HeaderComponent } from './core/components/header/header';
import { FooterComponent } from './core/components/footer/footer';
import { HeroComponent } from './features/home/hero/hero';
import { FeaturesComponent } from './features/home/features/features';
import { AboutComponent } from './features/home/about/about';
import { ServicesComponent } from './features/home/services/services';
import { MediaComponent } from './features/home/media/media';
import { ContactComponent } from './features/home/contact/contact';
import { ScrollToTopComponent } from './shared/components/scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeaturesComponent,
    AboutComponent,
    ServicesComponent,
    MediaComponent,
    ContactComponent,
    ScrollToTopComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-services></app-services>
      <app-features></app-features>
      <app-media></app-media>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
    <app-scroll-to-top></app-scroll-to-top>
  `
})
export class HomeComponent {
}

