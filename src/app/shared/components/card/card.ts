import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full flex flex-col overflow-hidden border border-gray-100 hover:border-blue-200">
      <!-- Gradient overlay on hover -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div class="relative z-10">
        @if (icon()) {
          <div class="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-3xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
            {{ icon() }}
          </div>
        }
        <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {{ title() }}
        </h3>
        @if (description()) {
          <p class="text-gray-600 flex-grow leading-relaxed">
            {{ description() }}
          </p>
        }
        <ng-content></ng-content>
      </div>
      
      <!-- Decorative corner -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-bl-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
    </div>
  `,
  styles: []
})
export class CardComponent {
  title = input.required<string>();
  description = input<string>();
  icon = input<string>();
}

