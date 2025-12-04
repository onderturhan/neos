import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <!-- Animated Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div class="text-center">
          <div class="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span class="text-white text-sm font-medium">📚 Hukuksal Bilgi Paylaşım Platformu</span>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hukuk Dünyasında
            <span class="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Güncel Kalın
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Yasal düzenlemeler, mahkeme kararları ve hukuki analizler hakkında en güncel bilgilere ulaşın.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#articles" 
              class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <span class="relative z-10">Son Paylaşımları İncele</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#categories" 
              class="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              Kategorilere Göz At
            </a>
          </div>
        </div>
        
        <!-- Stats -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
            <div class="text-gray-300">Hukuki Makale</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
            <div class="text-gray-300">Kategori</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
            <div class="text-gray-300">Okuyucu</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
            <div class="text-gray-300">Güncel İçerik</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {
}

