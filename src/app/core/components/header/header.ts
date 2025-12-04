import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header 
      [class]="'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + (isScrolled() ? 'bg-white shadow-md' : 'bg-transparent')">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          <div class="flex-shrink-0">
            <a href="#home" class="text-2xl font-bold" [class.text-white]="!isScrolled()" [class.text-gray-900]="isScrolled()">
              Neos
            </a>
          </div>
          <div class="hidden md:flex md:space-x-8">
            @for (item of menuItems; track item.id) {
              <a 
                [href]="item.href" 
                class="font-medium transition-colors duration-200 hover:text-blue-600"
                [class.text-white]="!isScrolled()"
                [class.text-gray-700]="isScrolled()">
                {{ item.label }}
              </a>
            }
          </div>
          <button 
            class="md:hidden p-2 rounded-md"
            [class.text-white]="!isScrolled()"
            [class.text-gray-700]="isScrolled()"
            (click)="toggleMobileMenu()">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        @if (mobileMenuOpen()) {
          <div class="md:hidden py-4 space-y-4">
            @for (item of menuItems; track item.id) {
              <a 
                [href]="item.href" 
                class="block font-medium text-gray-700 hover:text-blue-600"
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
    { id: 1, label: 'Home', href: '#home' },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Services', href: '#services' },
    { id: 4, label: 'References', href: '#references' },
    { id: 5, label: 'Media', href: '#media' },
    { id: 6, label: 'Contact', href: '#contact' },
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

