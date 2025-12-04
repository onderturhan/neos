import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="about" class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title 
          title="Hakkımızda" 
          subtitle="Hukuk dünyasındaki gelişmeleri takip eden, güvenilir bir bilgi kaynağı">
        </app-section-title>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Misyonumuz
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Hukuk alanındaki güncel gelişmeleri, yasal düzenlemeleri ve önemli mahkeme kararlarını 
                herkesin anlayabileceği şekilde paylaşarak, hukuki bilgiye erişimi kolaylaştırmayı hedefliyoruz.
              </p>
            </div>
            
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Neden Bizi Tercih Etmelisiniz?
              </h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Güncel ve doğrulanmış hukuki içerikler</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Uzman hukukçular tarafından hazırlanan analizler</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Kolay anlaşılır dil ve pratik örnekler</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Geniş kategorilerde kapsamlı içerik yelpazesi</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-6">
            <div class="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">500+</div>
              <div class="text-gray-700 font-medium">Hukuki Makale</div>
            </div>
            <div class="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <div class="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">50+</div>
              <div class="text-gray-700 font-medium">Kategori</div>
            </div>
            <div class="text-center p-8 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl border border-pink-100 hover:shadow-lg transition-shadow duration-300">
              <div class="text-5xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">10K+</div>
              <div class="text-gray-700 font-medium">Aylık Okuyucu</div>
            </div>
            <div class="text-center p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow duration-300">
              <div class="text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div class="text-gray-700 font-medium">Güncel İçerik</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {
}

