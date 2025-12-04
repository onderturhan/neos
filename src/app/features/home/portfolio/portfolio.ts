import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="portfolio" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title 
          title="Öne Çıkan Kategoriler" 
          subtitle="En çok okunan ve takip edilen hukuk kategorileri">
        </app-section-title>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          @for (item of portfolioItems; track item.id) {
            <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white">
              <!-- Image/Visual -->
              <div 
                class="relative h-64 overflow-hidden transition-all duration-500"
                [style.background]="item.gradient">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-7xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {{ item.icon }}
                  </div>
                </div>
                
                <!-- Base Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                <!-- Category Badge -->
                <div class="absolute top-4 left-4 z-10">
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                    {{ item.category }}
                  </span>
                </div>
                
                <!-- Hover Overlay - Full Content -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 z-20">
                  <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 class="text-2xl font-bold text-white mb-3 leading-tight">{{ item.title }}</h3>
                    <p class="text-white/90 text-base mb-4 leading-relaxed">{{ item.description }}</p>
                    <div class="flex items-center justify-between mb-4">
                      <span class="text-white/70 text-sm font-medium">{{ item.stats }} Makale</span>
                      <a href="#" class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                        Detayları Gör
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Bottom Content (Hidden on Hover) -->
              <div class="p-6 bg-white group-hover:hidden transition-all duration-300">
                <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{{ item.title }}</h3>
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-600">{{ item.stats }} Makale</p>
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class PortfolioComponent {
  portfolioItems = [
    {
      id: 1,
      title: 'Ticaret Hukuku',
      description: 'Şirketler hukuku ve ticari işlemler',
      category: 'İş Hukuku',
      stats: '125',
      icon: '⚖️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'İş Hukuku',
      description: 'İşçi hakları ve işveren yükümlülükleri',
      category: 'Çalışma',
      stats: '98',
      icon: '👔',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Gayrimenkul',
      description: 'Tapu işlemleri ve kira hukuku',
      category: 'Mülkiyet',
      stats: '87',
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Ceza Hukuku',
      description: 'Siber suçlar ve ceza mevzuatı',
      category: 'Güvenlik',
      stats: '76',
      icon: '🔒',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      title: 'Aile Hukuku',
      description: 'Boşanma ve velayet konuları',
      category: 'Aile',
      stats: '65',
      icon: '👨‍👩‍👧‍👦',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      title: 'Fikri Mülkiyet',
      description: 'Telif hakları ve patent',
      category: 'Mülkiyet',
      stats: '54',
      icon: '📝',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];
}

