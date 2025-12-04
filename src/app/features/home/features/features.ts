import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="features" class="py-20 bg-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title 
          title="Neden Bizi Seçmelisiniz?" 
          subtitle="Hukuki bilgiye erişimde fark yaratan özelliklerimiz">
        </app-section-title>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          @for (feature of features; track feature.id) {
            <div class="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <!-- Icon -->
              <div class="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-3xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                {{ feature.icon }}
              </div>
              
              <!-- Content -->
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ feature.description }}
              </p>
              
              <!-- Hover Effect -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class FeaturesComponent {
  features = [
    {
      id: 1,
      title: 'Güncel İçerik',
      description: 'Hukuk dünyasındaki en son gelişmeleri takip eden, sürekli güncellenen içerikler.',
      icon: '🔄'
    },
    {
      id: 2,
      title: 'Uzman Analizler',
      description: 'Alanında uzman hukukçular tarafından hazırlanan detaylı ve güvenilir analizler.',
      icon: '👨‍⚖️'
    },
    {
      id: 3,
      title: 'Kolay Erişim',
      description: 'Karmaşık hukuki konuları herkesin anlayabileceği şekilde sunan, erişilebilir içerikler.',
      icon: '📱'
    },
    {
      id: 4,
      title: 'Kapsamlı Kategori',
      description: 'Geniş yelpazede hukuki konularda kapsamlı içerik arşivi ve detaylı kategoriler.',
      icon: '📚'
    }
  ];
}

