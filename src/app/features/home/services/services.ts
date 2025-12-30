import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { CardComponent } from '../../../shared/components/card/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, CardComponent],
  template: `
    <section id="categories" class="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <app-section-title 
          title="Hizmet Alanlarımız" 
          subtitle="Hizmet sürecimizin ilk adımı, işverenin mevcut durumunu doğru şekilde tespit etmektir. Bu aşamada işletmenin faaliyet alanı, çalışan profili, mevcut bordro ve özlük dosyaları ile sosyal güvenlik uygulamaları detaylı olarak incelenir. Amaç; firmanın güçlü ve zayıf yönlerini ortaya koymak, mevzuata uyum noktasında karşılaşabileceği riskleri önceden belirlemek ve işverenin ihtiyaç duyduğu hizmetleri netleştirmektir.">
        </app-section-title>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          @for (service of services; track service.id) {
            <app-card 
              [title]="service.title" 
              [description]="service.description"
              [fullDescription]="service.fullDescription"
              [icon]="service.icon"
              (openModal)="openServiceModal(service)">
            </app-card>
          }
        </div>
      </div>

      <!-- Modal -->
      @if (selectedService()) {
        <div 
          class="fixed inset-0 z-50 overflow-y-auto"
          (click)="closeModal()">
          <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <!-- Background overlay -->
            <div 
              class="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75"
              (click)="closeModal()">
            </div>

            <!-- Modal panel -->
            <div 
              class="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
              (click)="$event.stopPropagation()">
              <!-- Modal header -->
              <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
                    {{ selectedService()?.icon }}
                  </div>
                  <h3 class="text-2xl font-bold text-white">
                    {{ selectedService()?.title }}
                  </h3>
                </div>
                <button 
                  (click)="closeModal()"
                  class="text-white/80 hover:text-white transition-colors duration-200">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <!-- Modal body -->
              <div class="px-6 py-6 bg-white">
                <p class="text-gray-700 leading-relaxed text-base">
                  {{ selectedService()?.fullDescription || selectedService()?.description }}
                </p>
              </div>

              <!-- Modal footer -->
              <div class="bg-gray-50 px-6 py-4 flex justify-end gap-3">
                <button 
                  (click)="closeModal()"
                  class="px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200">
                  Kapat
                </button>
                <button 
                  (click)="closeModal()"
                  class="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  İletişime Geç
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  `,
  styles: []
})
export class ServicesComponent {
  selectedService = signal<any>(null);

  services = [
    {
      id: 1,
      title: 'Sosyal Güvenlik ve İş Hukuku Danışmanlığı',
      description: 'İşverenlerin sosyal güvenlik ve iş hukuku alanındaki tüm yükümlülüklerini güncel mevzuata uygun şekilde yerine getirmelerine rehberlik ediyoruz.',
      fullDescription: 'İşverenlerin sosyal güvenlik ve iş hukuku alanındaki tüm yükümlülüklerini güncel mevzuata uygun şekilde yerine getirmelerine rehberlik ediyoruz. 2024 yılında yalnızca sosyal güvenlik denetim elemanları ve iş müfettişleri tarafından yaklaşık 170 bin işyeri denetlenmiştir. Bu tablo, mevzuata uyumun işletmeler açısından ne denli kritik bir unsur olduğunu açıkça ortaya koymaktadır. Biz, müşterilerimize bu süreçlerde yalnızca yol gösterici olmakla kalmıyor; aynı zamanda rutin kontroller ve iç denetim uygulamalarıyla firmalar için koruyucu bir halka işlevi görüyoruz. Bu sayede, devlet denetimlerinde karşılaşılabilecek riskleri en aza indiriyor, işletmelerin güvenli ve sürdürülebilir bir şekilde faaliyet göstermesine katkı sağlıyoruz.',
      icon: '🛡️'
    },
    {
      id: 2,
      title: 'Teşvik Danışmanlığı',
      description: 'İşverenlerin faydalanabileceği tüm sosyal güvenlik ve istihdam teşviklerini yakından takip ediyor, güncel mevzuat ışığında işletmelere en uygun çözümleri sunuyoruz.',
      fullDescription: 'İşverenlerin faydalanabileceği tüm sosyal güvenlik ve istihdam teşviklerini yakından takip ediyor, güncel mevzuat ışığında işletmelere en uygun çözümleri sunuyoruz. Teşvikler, firmaların maliyetlerini azaltmaları ve rekabet gücünü artırmaları açısından büyük önem taşımaktadır. Ancak teşviklerin uygulanması, mevzuattaki sürekli değişiklikler nedeniyle çoğu zaman karmaşık ve hata riskine açık bir süreç haline gelmektedir. Biz, kurucu ortaklarımızın uzun yıllara dayanan denetim tecrübesi sayesinde, teşvik haklarını eksiksiz ve doğru şekilde kullanmanızı sağlıyor, olası kayıpların önüne geçiyoruz. Böylece, yalnızca mevcut teşviklerden maksimum fayda sağlamanızı değil, aynı zamanda yeni çıkan destek mekanizmalarını da proaktif biçimde işletmenize entegre etmenizi mümkün kılıyoruz.',
      icon: '💰'
    },
    {
      id: 3,
      title: 'Bordro Outsource Hizmeti',
      description: 'Neos Danışmanlık, bordro süreçlerinin uzmanlık ve titizlik gerektiren bir alan olduğunun bilincindedir.',
      fullDescription: 'Neos Danışmanlık, bordro süreçlerinin uzmanlık ve titizlik gerektiren bir alan olduğunun bilincindedir. Çalışan maaşlarının, primlerinin ve yasal kesintilerinin doğru hesaplanması yalnızca mevzuata uyum açısından değil, aynı zamanda işverenin çalışanlarıyla arasındaki güven ilişkisinin korunması bakımından da kritik öneme sahiptir. Bu nedenle bordro süreçlerini outsource ederek profesyonel ekibimize emanet eden işletmeler, hem hata riskinden uzaklaşmakta hem de zaman ve maliyet avantajı elde etmektedir. Tüm bordro işlemleri güncel mevzuata uygun şekilde yürütülmekte, gerekli raporlamalar düzenli olarak işverene sunulmaktadır. Böylece firmalar, bordro yönetimi gibi yoğun ve teknik bir süreçle vakit kaybetmeden kendi işlerine odaklanabilmekte, aynı zamanda yasal uyumu garanti altına alabilmektedir.',
      icon: '📋'
    },
    {
      id: 4,
      title: 'Denetim Rehberliği',
      description: 'Devletin yürüttüğü denetim ve teftişler, işverenler için yasal uyumun kontrol edildiği ve ciddi yaptırımlara yol açabilecek kritik süreçlerdir.',
      fullDescription: 'Devletin yürüttüğü denetim ve teftişler, işverenler için yasal uyumun kontrol edildiği ve ciddi yaptırımlara yol açabilecek kritik süreçlerdir. Neos Danışmanlık, kurucu ortaklarının uzun yıllara dayanan denetim tecrübesiyle işverenlere bu süreçlerde kapsamlı destek sunmaktadır. SGK denetim elemanları veya iş müfettişleri tarafından yapılacak incelemelerde gerekli tüm evrak ve kayıtların eksiksiz şekilde hazırlanmasını sağlıyor, işveren adına süreci profesyonelce takip ediyoruz. Bu yaklaşım, işletmelerin yasal risklerini en aza indirirken, denetimlerde ortaya çıkabilecek potansiyel sorunları önceden öngörmemize imkân tanımaktadır. Düzenli kontrol ve hazırlıklarımız sayesinde işverenler, denetim süreçlerinde güvenle hareket edebilmekte ve iş sürekliliğini herhangi bir kesintiye uğramadan sürdürebilmektedir.',
      icon: '🔍'
    }
  ];

  openServiceModal(service: any) {
    this.selectedService.set(service);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedService.set(null);
    document.body.style.overflow = '';
  }
}

