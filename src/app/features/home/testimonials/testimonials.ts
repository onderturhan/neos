import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="testimonials" class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title 
          title="Okuyucularımız Ne Diyor?" 
          subtitle="Platformumuzu kullanan okuyucularımızın görüşleri">
        </app-section-title>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          @for (testimonial of testimonials; track testimonial.id) {
            <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              <!-- Quote Icon -->
              <div class="mb-4">
                <svg class="w-12 h-12 text-blue-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                </svg>
              </div>
              
              <!-- Content -->
              <p class="text-gray-700 mb-6 leading-relaxed italic">
                "{{ testimonial.content }}"
              </p>
              
              <!-- Author -->
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {{ testimonial.author.charAt(0) }}
                </div>
                <div>
                  <div class="font-semibold text-gray-900">{{ testimonial.author }}</div>
                  <div class="text-sm text-gray-500">{{ testimonial.role }}</div>
                </div>
              </div>
              
              <!-- Stars -->
              <div class="flex gap-1 mt-4">
                @for (star of [1,2,3,4,5]; track star) {
                  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      content: 'Bu platform sayesinde hukuki konularda güncel kalmak çok kolaylaştı. İçerikler hem anlaşılır hem de güvenilir.',
      author: 'Ahmet Yılmaz',
      role: 'İş Hukuku Uzmanı'
    },
    {
      id: 2,
      content: 'Mesleğim gereği sürekli güncel kalmam gerekiyor. Bu platform tam ihtiyacım olan kaynak. Her gün kontrol ediyorum.',
      author: 'Ayşe Demir',
      role: 'Avukat'
    },
    {
      id: 3,
      content: 'Karmaşık hukuki konuları bu kadar anlaşılır şekilde anlatan başka bir kaynak görmedim. Harika bir iş çıkarmışsınız.',
      author: 'Mehmet Kaya',
      role: 'Hukuk Öğrencisi'
    }
  ];
}

