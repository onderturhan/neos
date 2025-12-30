import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isVisible()) {
      <button
        (click)="scrollToTop()"
        class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        style="background-color: #2d485c;"
        onmouseover="this.style.backgroundColor='#3d5a6e'"
        onmouseout="this.style.backgroundColor='#2d485c'"
        aria-label="Yukarı çık">
        <svg 
          class="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" 
          fill="none" 
          stroke="#f1f1f1" 
          viewBox="0 0 24 24">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M5 10l7-7m0 0l7 7m-7-7v18">
          </path>
        </svg>
      </button>
    }
  `,
  styles: []
})
export class ScrollToTopComponent {
  isVisible = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // 300px scroll yapıldığında butonu göster
    this.isVisible.set(window.scrollY > 300);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

