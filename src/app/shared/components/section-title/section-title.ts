import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
  styles: []
})
export class SectionTitleComponent {
  title = input.required<string>();
  subtitle = input<string>();
}

