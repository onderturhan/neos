import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="references" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title 
          title="Referanslarımız" 
          subtitle="Güvenilir iş ortaklarımız ve başarılı projelerimiz">
        </app-section-title>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          @for (reference of references; track reference.id) {
            <div class="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div class="text-4xl font-bold text-gray-400">
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

