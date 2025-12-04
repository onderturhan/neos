import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Modern Çözümlerle
              <span class="text-blue-600">Geleceği Şekillendirin</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              İşinizi bir adım öne taşıyacak yenilikçi teknolojiler ve profesyonel hizmetlerle yanınızdayız.
            </p>
            <a 
              href="#contact" 
              class="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Hemen İletişime Geçin
            </a>
          </div>
          <div class="hidden md:block">
            <div class="bg-white rounded-2xl shadow-2xl p-8">
              <div class="aspect-square bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg class="w-32 h-32 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {
}

