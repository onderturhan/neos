import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header 
      [class]="'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + (isScrolled() ? 'shadow-md' : 'bg-transparent')"
      [style.background]="isScrolled() ? '#2d485c' : 'transparent'">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          
          <div class="hidden md:flex md:space-x-8">
            @for (item of menuItems; track item.id) {
              <a 
                [href]="item.href" 
                class="font-medium transition-colors duration-200 text-white hover:opacity-80"
                style="color: white;">
                {{ item.label }}
              </a>
            }
          </div>
          <button 
            class="md:hidden p-2 rounded-md text-white"
            (click)="toggleMobileMenu()">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        @if (mobileMenuOpen()) {
          <div class="md:hidden py-4 space-y-4" style="background-color: #2d485c;">
            @for (item of menuItems; track item.id) {
              <a 
                [href]="item.href" 
                class="block font-medium text-white hover:opacity-80 transition-colors"
                (click)="closeMobileMenu()">
                {{ item.label }}
              </a>
            }
          </div>
        }
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  menuItems = [
    { id: 1, label: 'Ana Sayfa', href: '#home' },
    { id: 2, label: 'Hakkımızda', href: '#about' },
    { id: 3, label: 'Hizmet Alanlarımız', href: '#categories' },
    { id: 4, label: 'Özellikler', href: '#features' },
    { id: 5, label: 'Paylaşımlar', href: '#articles' },
    { id: 6, label: 'İletişim', href: '#contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}

