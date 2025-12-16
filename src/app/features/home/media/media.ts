import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="articles" class="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <app-section-title 
          title="Paylaşımlar" 
          subtitle="Hukuk dünyasındaki en güncel gelişmeler ve analizler">
        </app-section-title>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (item of mediaItems; track item.id) {
            <article class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200">
              <!-- Image/Icon Section -->
              <div class="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    {{ item.icon }}
                  </div>
                </div>
                <div class="absolute top-4 right-4">
                  <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-blue-600 rounded-full">
                    {{ item.category }}
                  </span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <!-- Content Section -->
              <div class="p-6">
                <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{{ item.date }}</span>
                  <span>•</span>
                  <span>{{ item.readTime }} dk okuma</span>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {{ item.title }}
                </h3>
                
                <p class="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {{ item.description }}
                </p>
                
                <a href="#" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  Devamını Oku
                  <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
              
              <!-- Hover Effect Border -->
              <div class="absolute inset-0 border-2 border-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </article>
          }
        </div>
        
        <!-- View All Button -->
        <div class="text-center mt-12">
          <a href="#" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Tüm Makaleleri Görüntüle
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class MediaComponent {
  mediaItems = [
    { 
      id: 1, 
      icon: '⚖️', 
      title: 'Yeni Ticaret Kanunu Değişiklikleri ve Şirketler Hukuku', 
      description: '2024 yılında yürürlüğe giren yeni düzenlemeler ve şirketler hukuku alanındaki önemli değişiklikler hakkında detaylı analiz.',
      category: 'Ticaret Hukuku',
      date: '15 Aralık 2024',
      readTime: 8
    },
    { 
      id: 2, 
      icon: '👔', 
      title: 'Uzaktan Çalışma Düzenlemeleri ve İşçi Hakları', 
      description: 'Uzaktan çalışma modelinin hukuki boyutları, işçi hakları ve işveren yükümlülükleri konusunda güncel bilgiler.',
      category: 'İş Hukuku',
      date: '12 Aralık 2024',
      readTime: 6
    },
    { 
      id: 3, 
      icon: '🏢', 
      title: 'Gayrimenkul Alım-Satımında Dikkat Edilmesi Gerekenler', 
      description: 'Tapu işlemleri, noter sözleşmeleri ve gayrimenkul alım-satım süreçlerinde bilinmesi gereken önemli noktalar.',
      category: 'Gayrimenkul',
      date: '10 Aralık 2024',
      readTime: 5
    },
    { 
      id: 4, 
      icon: '🔒', 
      title: 'Dijital Suçlar ve Siber Güvenlik Hukuku', 
      description: 'Siber suçlar, veri koruma ve dijital güvenlik konularında ceza hukuku açısından önemli gelişmeler.',
      category: 'Ceza Hukuku',
      date: '8 Aralık 2024',
      readTime: 7
    },
    { 
      id: 5, 
      icon: '👨‍👩‍👧‍👦', 
      title: 'Boşanma Sürecinde Mal Paylaşımı ve Nafaka', 
      description: 'Boşanma davalarında mal paylaşımı, nafaka hesaplama ve velayet konularında güncel yargıtay kararları.',
      category: 'Aile Hukuku',
      date: '5 Aralık 2024',
      readTime: 9
    },
    { 
      id: 6, 
      icon: '📝', 
      title: 'Yapay Zeka ve Fikri Mülkiyet Hakları', 
      description: 'AI teknolojilerinin fikri mülkiyet hukuku açısından değerlendirilmesi ve telif hakları konusundaki yeni düzenlemeler.',
      category: 'Fikri Mülkiyet',
      date: '3 Aralık 2024',
      readTime: 10
    }
  ];
}

