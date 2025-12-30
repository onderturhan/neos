import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Main Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <!-- Business Background Image -->
      <div class="absolute inset-0">
        <!-- Main Background Image - Modern Office Building -->
        <img 
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Modern Ofis Binası"
          class="w-full h-full object-cover">
        <!-- Dark Overlay for better text readability -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div class="text-center">
          
          <div class="mb-6 flex justify-center">
            <img 
              src="/assets/neos_saydam.png" 
              alt="Neos Danışmanlık" 
              class="h-40 md:h-52 lg:h-64 w-auto object-contain max-w-full">
          </div>
          
          <p class="text-xl md:text-2xl lg:text-3xl text-white font-light mb-8 max-w-3xl mx-auto leading-relaxed" style="font-family: 'Josefin Sans', sans-serif;">
            <span class="text-3xl md:text-4xl lg:text-5xl text-white/80 mr-2">&ldquo;</span>
            Mevzuatın karmaşasını çözüme dönüştürüyoruz.
            <span class="text-3xl md:text-4xl lg:text-5xl text-white/80 ml-2">&rdquo;</span>
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#articles" 
              class="group relative px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              style="background: linear-gradient(to right, #3d5a6e, #2d485c); box-shadow: 0 20px 25px -5px rgba(45, 72, 92, 0.3), 0 10px 10px -5px rgba(45, 72, 92, 0.2);"
              onmouseover="this.style.boxShadow='0 20px 25px -5px rgba(45, 72, 92, 0.5), 0 10px 10px -5px rgba(45, 72, 92, 0.4)'"
              onmouseout="this.style.boxShadow='0 20px 25px -5px rgba(45, 72, 92, 0.3), 0 10px 10px -5px rgba(45, 72, 92, 0.2)'">
              <span class="relative z-10">Son Paylaşımları İncele</span>
              <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background: linear-gradient(to right, #2d485c, #1e3442);"></div>
            </a>
            <a 
              href="#categories" 
              class="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              Kategorilere Göz At
            </a>
          </div>
        </div>
        
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {
}

