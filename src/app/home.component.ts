import { Component } from '@angular/core';
import { HeaderComponent } from './core/components/header/header';
import { FooterComponent } from './core/components/footer/footer';
import { HeroComponent } from './features/home/hero/hero';
import { CarouselComponent } from './features/home/carousel/carousel';
import { FeaturesComponent } from './features/home/features/features';
import { AboutComponent } from './features/home/about/about';
import { ServicesComponent } from './features/home/services/services';
import { PortfolioComponent } from './features/home/portfolio/portfolio';
import { MediaComponent } from './features/home/media/media';
import { TestimonialsComponent } from './features/home/testimonials/testimonials';
import { BlogPostsComponent } from './features/home/blog-posts/blog-posts';
import { CtaComponent } from './features/home/cta/cta';
import { ReferencesComponent } from './features/home/references/references';
import { ContactComponent } from './features/home/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CarouselComponent,
    FeaturesComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    MediaComponent,
    TestimonialsComponent,
    BlogPostsComponent,
    CtaComponent,
    ReferencesComponent,
    ContactComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-carousel></app-carousel>
      <app-features></app-features>
      <app-about></app-about>
      <app-services></app-services>
      <app-portfolio></app-portfolio>
      <app-media></app-media>
      <app-testimonials></app-testimonials>
      <app-blog-posts></app-blog-posts>
      <app-cta></app-cta>
      <app-references></app-references>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class HomeComponent {
}

