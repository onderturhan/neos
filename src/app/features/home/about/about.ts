import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="about" class="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <app-section-title 
          title="Hakkımızda" 
          subtitle="Neos Danışmanlık, kurucu ortaklarının 10 yılı aşkın Sosyal Güvenlik Denetmenlik deneyimini iş dünyasına taşıyarak, sosyal güvenlik ve iş hukuku alanında uzman danışmanlık hizmeti sunmak amacıyla kurulmuştur.">
        </app-section-title>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          <!-- Misyonumuz -->
          <div class="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <!-- Icon -->
            <div class="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            
            <!-- Content -->
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              Misyonumuz
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Neos Danışmanlık olarak, işverenlere sosyal güvenlik ve iş hukuku alanında güncel, güvenilir ve uygulanabilir çözümler sunmayı amaçlıyoruz. Özellikle teşvikler, mevzuat değişiklikleri ve yasal yükümlülükler konusunda işletmelerin yanında yer alarak onların doğru adımlar atmasını sağlıyoruz. Bunun yanında, sigortalıların bordrolarının hazırlanması, işçi özlük dosyalarının düzenlenmesi ve takibi, denetim süreçlerinde destek verilmesi gibi tamamlayıcı hizmetlerle işverenlerin tüm insan kaynakları ve mevzuat süreçlerini güvenle yönetmelerine yardımcı oluyoruz.
            </p>
            
            <!-- Hover Effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>
          
          <!-- Vizyonumuz -->
          <div class="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <!-- Icon -->
            <div class="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            
            <!-- Content -->
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              Vizyonumuz
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Türkiye'de sosyal güvenlik ve iş hukuku danışmanlığında öncü ve güvenilir bir marka olmak; mevzuatın karmaşık yapısını işverenler için anlaşılır, uygulanabilir ve verimli bir sisteme dönüştürmek. Amacımız, yalnızca danışmanlık sunmak değil, aynı zamanda iş dünyasında sürdürülebilir uyum kültürü oluşturmak; müşterilerimizin maliyet avantajı sağlamasına, risklerini azaltmasına ve çalışanlarıyla daha güçlü bir gelecek inşa etmesine katkıda bulunmaktır.
            </p>
            
            <!-- Hover Effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {
}

