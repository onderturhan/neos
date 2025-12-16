import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { CardComponent } from '../../../shared/components/card/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, CardComponent],
  template: `
    <section id="categories" class="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <app-section-title 
          title="Hizmet Alanlarımız" 
          subtitle="Geniş yelpazede hukuki konularda güncel içerikler ve analizler">
        </app-section-title>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services; track service.id) {
            <app-card 
              [title]="service.title" 
              [description]="service.description"
              [icon]="service.icon">
            </app-card>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ServicesComponent {
  services = [
    {
      id: 1,
      title: 'Ticaret Hukuku',
      description: 'Şirketler hukuku, ticari işlemler, sözleşmeler ve ticari uyuşmazlıklar hakkında güncel bilgiler.',
      icon: '⚖️'
    },
    {
      id: 2,
      title: 'İş Hukuku',
      description: 'İşçi hakları, iş sözleşmeleri, toplu iş sözleşmeleri ve iş hukuku mevzuatı.',
      icon: '👔'
    },
    {
      id: 3,
      title: 'Gayrimenkul Hukuku',
      description: 'Tapu işlemleri, kira hukuku, imar mevzuatı ve gayrimenkul alım-satım süreçleri.',
      icon: '🏢'
    },
    {
      id: 4,
      title: 'Ceza Hukuku',
      description: 'Ceza mevzuatı, suç tipleri, ceza davaları ve ceza hukuku uygulamaları.',
      icon: '🔒'
    },
    {
      id: 5,
      title: 'Aile Hukuku',
      description: 'Boşanma, velayet, nafaka, miras ve aile hukuku ile ilgili tüm konular.',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      id: 6,
      title: 'Fikri Mülkiyet',
      description: 'Telif hakları, patent, marka tescili ve fikri mülkiyet koruması.',
      icon: '📝'
    }
  ];
}

