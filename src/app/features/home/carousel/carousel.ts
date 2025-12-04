import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image?: string;
  icon?: string;
  category?: string;
  date?: string;
  gradient?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="carousel" class="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <!-- Background Decoration -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Öne Çıkan İçerikler
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Hukuk dünyasındaki en önemli gelişmeler ve güncel analizler
          </p>
        </div>

        <!-- Carousel Container -->
        <div class="relative">
          <!-- Carousel Wrapper -->
          <div class="overflow-hidden rounded-3xl">
            <div 
              class="flex transition-transform duration-700 ease-in-out"
              [style.transform]="'translateX(-' + (currentIndex() * 100) + '%)'">
              @for (item of items; track item.id) {
                <div class="w-full flex-shrink-0">
                  <div class="grid md:grid-cols-2 gap-0">
                    <!-- Image/Visual Section -->
                    <div 
                      class="relative h-64 md:h-[500px] overflow-hidden"
                      [style.background]="item.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'">
                      @if (item.image) {
                        <img 
                          [src]="item.image" 
                          [alt]="item.title"
                          class="w-full h-full object-cover">
                      } @else {
                        <div class="absolute inset-0 flex items-center justify-center">
                          @if (item.icon) {
                            <div class="text-9xl opacity-80">
                              {{ item.icon }}
                            </div>
                          } @else {
                            <div class="text-6xl font-bold text-white/80">
                              {{ item.title.charAt(0) }}
                            </div>
                          }
                        </div>
                      }
                      
                      <!-- Gradient Overlay -->
                      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                      
                      <!-- Category Badge -->
                      @if (item.category) {
                        <div class="absolute top-6 left-6">
                          <span class="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-semibold rounded-full border border-white/30">
                            {{ item.category }}
                          </span>
                        </div>
                      }
                    </div>

                    <!-- Content Section -->
                    <div class="bg-white p-8 md:p-12 flex flex-col justify-center">
                      @if (item.date) {
                        <div class="flex items-center gap-2 text-sm text-gray-500 mb-4">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <span>{{ item.date }}</span>
                        </div>
                      }
                      
                      <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {{ item.title }}
                      </h3>
                      
                      <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                        {{ item.description }}
                      </p>
                      
                      <a 
                        href="#" 
                        class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-fit">
                        Devamını Oku
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Navigation Buttons -->
          <button 
            (click)="previousSlide()"
            class="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group hover:scale-110"
            aria-label="Önceki slide">
            <svg class="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            (click)="nextSlide()"
            class="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group hover:scale-110"
            aria-label="Sonraki slide">
            <svg class="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <!-- Dots Indicator -->
          <div class="flex justify-center gap-2 mt-8">
            @for (item of items; track item.id; let i = $index) {
              <button
                (click)="goToSlide(i)"
                class="w-3 h-3 rounded-full transition-all duration-300"
                [class.bg-blue-600]="currentIndex() === i"
                [class.bg-gray-300]="currentIndex() !== i"
                [class.w-8]="currentIndex() === i"
                [attr.aria-label]="'Slide ' + (i + 1)">
              </button>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentIndex = signal(0);
  private autoPlayInterval: any;

  items: CarouselItem[] = [
    {
      id: 1,
      title: 'Yeni Ticaret Kanunu: Şirketler Hukukunda Devrim Niteliğinde Değişiklikler',
      description: '2024 yılında yürürlüğe giren yeni Ticaret Kanunu düzenlemeleri, şirketler hukuku alanında köklü değişiklikler getiriyor. Limited şirket kuruluş süreçleri, sermaye artırımı prosedürleri ve yönetim kurulu sorumlulukları konusunda önemli güncellemeler yapıldı.',
      category: 'Ticaret Hukuku',
      date: '15 Aralık 2024',
      icon: '⚖️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Uzaktan Çalışma Düzenlemeleri: İşçi ve İşveren Hakları',
      description: 'Dijital dönüşümle birlikte yaygınlaşan uzaktan çalışma modeli, iş hukuku açısından yeni düzenlemeler gerektiriyor. İşçi hakları, çalışma saatleri, iş güvenliği ve işveren yükümlülükleri konusunda güncel mevzuat ve yargıtay kararları.',
      category: 'İş Hukuku',
      date: '12 Aralık 2024',
      icon: '👔',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Gayrimenkul Alım-Satımında Yeni Düzenlemeler ve Dikkat Edilmesi Gerekenler',
      description: 'Tapu işlemleri, noter sözleşmeleri ve gayrimenkul alım-satım süreçlerinde 2024 yılında yapılan değişiklikler. Ön ödeme, peşinat ve kredi süreçleri hakkında bilinmesi gereken önemli noktalar ve yasal yükümlülükler.',
      category: 'Gayrimenkul Hukuku',
      date: '10 Aralık 2024',
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Dijital Suçlar ve Siber Güvenlik: Ceza Hukuku Açısından Yeni Düzenlemeler',
      description: 'Siber suçlar, veri koruma ve dijital güvenlik konularında ceza hukuku açısından önemli gelişmeler. Kişisel verilerin korunması kanunu kapsamındaki suçlar ve cezai yaptırımlar hakkında detaylı analiz.',
      category: 'Ceza Hukuku',
      date: '8 Aralık 2024',
      icon: '🔒',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  nextSlide() {
    this.currentIndex.update(index => (index + 1) % this.items.length);
    this.resetAutoPlay();
  }

  previousSlide() {
    this.currentIndex.update(index => (index - 1 + this.items.length) % this.items.length);
    this.resetAutoPlay();
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
    this.resetAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // 5 saniyede bir otomatik geçiş
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}

