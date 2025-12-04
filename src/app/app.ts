import { Component } from '@angular/core';
import { HeaderComponent } from './core/components/header/header';
import { FooterComponent } from './core/components/footer/footer';
import { HeroComponent } from './features/home/hero/hero';
import { AboutComponent } from './features/home/about/about';
import { ServicesComponent } from './features/home/services/services';
import { ReferencesComponent } from './features/home/references/references';
import { MediaComponent } from './features/home/media/media';
import { ContactComponent } from './features/home/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ReferencesComponent,
    MediaComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
