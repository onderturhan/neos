import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Hukuki Bilgiye Erişimde Yeni Dönem
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Güncel hukuki gelişmelerden haberdar olmak için bize katılın. 
          Haftalık bültenimize abone olun ve önemli güncellemeleri kaçırmayın.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            class="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105">
            Hemen Abone Ol
          </a>
          <a 
            href="#articles" 
            class="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300">
            Son Makaleleri İncele
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CtaComponent {
}

