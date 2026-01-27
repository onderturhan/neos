import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MediaDataService } from './media-data.service';
import { MediaItem } from './media-item.interface';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="articles" class="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <app-section-title 
          title="Paylaşımlar" 
          subtitle="Güncel Gelişmeler ve Analizler">
        </app-section-title>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (item of mediaItems; track item.id) {
            <article 
              class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 cursor-pointer"
              (click)="openModal(item)">
              <!-- Image/Icon Section -->
              <div class="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    {{ item.icon }}
                  </div>
                </div>
                <div class="absolute top-4 right-4">
                  <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-blue-600 rounded-full">
                    {{ item.category }}
                  </span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <!-- Content Section -->
              <div class="p-6">
                <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{{ item.date }}</span>
                  <span>•</span>
                  <span>{{ item.readTime }} dk okuma</span>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-3 leading-tight">
                  {{ item.title }}
                </h3>
                
                <p class="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
                  {{ item.preview }}
                </p>
                
                <button class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  Devamını Oku
                  <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
              
              <!-- Hover Effect Border -->
              <div class="absolute inset-0 border-2 border-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </article>
          }
        </div>
        
        <!-- Modal -->
        @if (isModalOpen()) {
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
                class="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
                (click)="$event.stopPropagation()">
                <!-- Modal header -->
                <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
                  <div class="flex items-center gap-4 flex-1 pr-4">
                    <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl flex-shrink-0">
                      {{ selectedMediaItem()?.icon }}
                    </div>
                    <h3 class="text-xl font-bold text-white leading-tight">
                      {{ selectedMediaItem()?.title }}
                    </h3>
                  </div>
                  <button 
                    (click)="closeModal()"
                    class="text-white/80 hover:text-white transition-colors duration-200 flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                <!-- Modal body -->
                <div class="px-6 py-6 bg-white max-h-[70vh] overflow-y-auto">
                  <div class="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{{ selectedMediaItem()?.date }}</span>
                    <span>•</span>
                    <span>{{ selectedMediaItem()?.readTime }} dk okuma</span>
                    <span>•</span>
                    <span class="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                      {{ selectedMediaItem()?.category }}
                    </span>
                  </div>
                  
                  <div class="text-gray-700 leading-relaxed prose prose-lg max-w-none" [innerHTML]="getSanitizedContent()">
                  </div>
                </div>

                <!-- Modal footer -->
                <div class="bg-gray-50 px-6 py-4 flex justify-end gap-3">
                  <button 
                    (click)="closeModal()"
                    class="px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200">
                    Kapat
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: []
})
export class MediaComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private mediaDataService: MediaDataService
  ) {}

  isModalOpen = signal<boolean>(false);
  selectedMediaItem = signal<MediaItem | null>(null);
  mediaItems: MediaItem[] = [];

  ngOnInit() {
    this.mediaItems = this.mediaDataService.getMediaItems();
  }

  getSanitizedContent(): SafeHtml {
    const content = this.selectedMediaItem()?.content || '';
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  openModal(item: MediaItem) {
    this.selectedMediaItem.set(item);
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.selectedMediaItem.set(null);
    document.body.style.overflow = '';
  }
}

