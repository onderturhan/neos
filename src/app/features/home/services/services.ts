import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { CardComponent } from '../../../shared/components/card/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, CardComponent],
  template: `
    <section id="services" class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title 
          title="Hizmetlerimiz" 
          subtitle="Geniş hizmet yelpazemizle ihtiyaçlarınıza özel çözümler sunuyoruz">
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
      title: 'Web Geliştirme',
      description: 'Modern ve responsive web siteleri ile dijital varlığınızı güçlendirin.',
      icon: '🌐'
    },
    {
      id: 2,
      title: 'Mobil Uygulama',
      description: 'iOS ve Android platformları için native ve cross-platform mobil uygulamalar.',
      icon: '📱'
    },
    {
      id: 3,
      title: 'E-Ticaret Çözümleri',
      description: 'Online satış platformunuzu kurun ve işinizi dijitalleştirin.',
      icon: '🛒'
    },
    {
      id: 4,
      title: 'Dijital Pazarlama',
      description: 'SEO, sosyal medya yönetimi ve dijital reklam stratejileri.',
      icon: '📈'
    },
    {
      id: 5,
      title: 'Bulut Çözümleri',
      description: 'Güvenli ve ölçeklenebilir bulut altyapı hizmetleri.',
      icon: '☁️'
    },
    {
      id: 6,
      title: 'Danışmanlık',
      description: 'Teknoloji danışmanlığı ve dijital dönüşüm stratejileri.',
      icon: '💼'
    }
  ];
}

