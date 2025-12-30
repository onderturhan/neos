import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 h-full flex flex-col overflow-hidden border border-gray-100 hover:border-blue-200">
      <!-- Gradient overlay on hover -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div class="relative z-10 flex flex-col flex-grow">
        <div class="flex items-center justify-between gap-3 mb-3">
          @if (icon()) {
            <div class="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
              {{ icon() }}
            </div>
          }
          <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-right flex-1">
            {{ title() }}
          </h3>
        </div>
        @if (description()) {
          <p class="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
            {{ getShortDescription() }}
          </p>
        }
        @if (hasMoreContent()) {
          <button 
            (click)="openModal.emit()"
            class="mt-auto inline-flex items-center text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/btn">
            Devamını Oku
            <svg class="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
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
  fullDescription = input<string>();
  openModal = output<void>();

  getShortDescription(): string {
    return this.fullDescription() || this.description() || '';
  }

  hasMoreContent(): boolean {
    const desc = this.fullDescription() || this.description() || '';
    // Eğer fullDescription varsa ve description'dan farklıysa, modal göster
    return !!this.fullDescription() && this.fullDescription() !== this.description();
  }
}

