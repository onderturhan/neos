import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="about" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title 
          title="Hakkımızda" 
          subtitle="Yılların deneyimi ve yenilikçi yaklaşımımızla sektörde öncüyüz">
        </app-section-title>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">
              Misyonumuz
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Müşterilerimize en kaliteli hizmeti sunmak ve sektörde öncü olmak için sürekli kendimizi geliştiriyoruz. 
              Modern teknolojiler ve yenilikçi çözümlerle iş ortaklarımızın başarısına katkıda bulunuyoruz.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Deneyimli ekibimiz ve müşteri odaklı yaklaşımımızla, her projede mükemmelliği hedefliyoruz.
            </p>
          </div>
          
          <div class="grid grid-cols-2 gap-6">
            <div class="text-center p-6 bg-gray-50 rounded-lg">
              <div class="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div class="text-gray-600">Yıllık Deneyim</div>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-lg">
              <div class="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div class="text-gray-600">Mutlu Müşteri</div>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-lg">
              <div class="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div class="text-gray-600">Tamamlanan Proje</div>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-lg">
              <div class="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div class="text-gray-600">Uzman Ekip</div>
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

