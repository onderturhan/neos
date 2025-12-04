import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="media" class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title 
          title="Medya" 
          subtitle="Projelerimizden ve etkinliklerimizden görüntüler">
        </app-section-title>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (item of mediaItems; track item.id) {
            <div class="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div class="aspect-video bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                <div class="text-6xl text-white opacity-80">
                  {{ item.icon }}
                </div>
              </div>
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <div class="p-4 bg-white">
                <h4 class="font-semibold text-gray-900">{{ item.title }}</h4>
                <p class="text-sm text-gray-600 mt-1">{{ item.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class MediaComponent {
  mediaItems = [
    { id: 1, icon: '📸', title: 'Proje 1', description: 'Başarılı proje tanıtımı' },
    { id: 2, icon: '🎥', title: 'Video 1', description: 'Etkinlik görüntüleri' },
    { id: 3, icon: '📷', title: 'Proje 2', description: 'Müşteri testimonial' },
    { id: 4, icon: '🎬', title: 'Video 2', description: 'Şirket tanıtım videosu' },
    { id: 5, icon: '📹', title: 'Proje 3', description: 'Başarı hikayesi' },
    { id: 6, icon: '🎞️', title: 'Video 3', description: 'Ürün tanıtımı' }
  ];
}

