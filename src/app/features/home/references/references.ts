import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="references" class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title 
          title="Güvenilir Kaynaklar" 
          subtitle="İçeriklerimizde referans aldığımız güvenilir kaynaklar ve kurumlar">
        </app-section-title>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          @for (reference of references; track reference.id) {
            <div class="group flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div class="text-4xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                {{ reference.logo }}
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ReferencesComponent {
  references = [
    { id: 1, logo: '🏢', name: 'Şirket 1' },
    { id: 2, logo: '🏭', name: 'Şirket 2' },
    { id: 3, logo: '🏪', name: 'Şirket 3' },
    { id: 4, logo: '🏬', name: 'Şirket 4' },
    { id: 5, logo: '🏛️', name: 'Şirket 5' },
    { id: 6, logo: '🏨', name: 'Şirket 6' },
    { id: 7, logo: '🏗️', name: 'Şirket 7' },
    { id: 8, logo: '🏦', name: 'Şirket 8' },
    { id: 9, logo: '🏥', name: 'Şirket 9' },
    { id: 10, logo: '🏫', name: 'Şirket 10' },
    { id: 11, logo: '🏰', name: 'Şirket 11' },
    { id: 12, logo: '🏯', name: 'Şirket 12' }
  ];
}

