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
        
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Misyonumuz
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Neos Danışmanlık olarak, işverenlere sosyal güvenlik ve iş hukuku alanında güncel, güvenilir ve uygulanabilir çözümler sunmayı amaçlıyoruz. Özellikle teşvikler, mevzuat değişiklikleri ve yasal yükümlülükler konusunda işletmelerin yanında yer alarak onların doğru adımlar atmasını sağlıyoruz. Bunun yanında, sigortalıların bordrolarının hazırlanması, işçi özlük dosyalarının düzenlenmesi ve takibi, denetim süreçlerinde destek verilmesi gibi tamamlayıcı hizmetlerle işverenlerin tüm insan kaynakları ve mevzuat süreçlerini güvenle yönetmelerine yardımcı oluyoruz.
              </p>
            </div>
          </div>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Vizyonumuz
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Türkiye'de sosyal güvenlik ve iş hukuku danışmanlığında öncü ve güvenilir bir marka olmak; mevzuatın karmaşık yapısını işverenler için anlaşılır, uygulanabilir ve verimli bir sisteme dönüştürmek. Amacımız, yalnızca danışmanlık sunmak değil, aynı zamanda iş dünyasında sürdürülebilir uyum kültürü oluşturmak; müşterilerimizin maliyet avantajı sağlamasına, risklerini azaltmasına ve çalışanlarıyla daha güçlü bir gelecek inşa etmesine katkıda bulunmaktır.
              </p>
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

