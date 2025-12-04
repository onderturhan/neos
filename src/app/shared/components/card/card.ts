import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 h-full flex flex-col">
      @if (icon()) {
        <div class="mb-6 text-4xl">
          {{ icon() }}
        </div>
      }
      <h3 class="text-xl font-semibold text-gray-900 mb-3">
        {{ title() }}
      </h3>
      @if (description()) {
        <p class="text-gray-600 flex-grow">
          {{ description() }}
        </p>
      }
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CardComponent {
  title = input.required<string>();
  description = input<string>();
  icon = input<string>();
}

