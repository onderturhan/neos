import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image?: string;
  icon?: string;
  author: string;
  authorAvatar?: string;
  date: string;
  category: string;
  readTime: number;
  views: number;
  gradient?: string;
}

@Component({
  selector: 'app-blog-posts',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionTitleComponent],
  template: `
    <section id="blog-posts" class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title 
          title="Yazarların Paylaşımları" 
          subtitle="Uzman yazarlarımızın hukuk dünyasındaki güncel analizleri ve makaleleri">
        </app-section-title>
        
        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            (click)="selectedCategory.set('all')"
            [class]="'px-6 py-2 rounded-full font-semibold transition-all duration-300 ' + 
                     (selectedCategory() === 'all' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200')">
            Tümü
          </button>
          @for (cat of categories; track cat) {
            <button 
              (click)="selectedCategory.set(cat)"
              [class]="'px-6 py-2 rounded-full font-semibold transition-all duration-300 ' + 
                       (selectedCategory() === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200')">
              {{ cat }}
            </button>
          }
        </div>
        
        <!-- Blog Posts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (post of filteredPosts(); track post.id) {
            <article 
              class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <!-- Image Section -->
              <a [routerLink]="['/blog', post.id]" class="block relative h-48 overflow-hidden">
                @if (post.image) {
                  <img 
                    [src]="post.image" 
                    [alt]="post.title"
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                } @else {
                  <div 
                    class="w-full h-full flex items-center justify-center"
                    [style.background]="post.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'">
                    <div class="text-6xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {{ post.icon }}
                    </div>
                  </div>
                }
                
                <!-- Category Badge -->
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded-full">
                    {{ post.category }}
                  </span>
                </div>
                
                <!-- Gradient Overlay on Hover -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              
              <!-- Content Section -->
              <div class="p-6">
                <!-- Meta Info -->
                <div class="flex items-center gap-3 mb-4">
                  <div class="flex items-center gap-2">
                    @if (post.authorAvatar) {
                      <img [src]="post.authorAvatar" [alt]="post.author" class="w-8 h-8 rounded-full">
                    } @else {
                      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        {{ post.author.charAt(0) }}
                      </div>
                    }
                    <span class="text-sm font-medium text-gray-700">{{ post.author }}</span>
                  </div>
                  <span class="text-gray-400">•</span>
                  <span class="text-xs text-gray-500">{{ post.date }}</span>
                </div>
                
                <!-- Title -->
                <a [routerLink]="['/blog', post.id]">
                  <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                    {{ post.title }}
                  </h3>
                </a>
                
                <!-- Excerpt -->
                <p class="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
                  {{ post.excerpt }}
                </p>
                
                <!-- Footer Info -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div class="flex items-center gap-4 text-xs text-gray-500">
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ post.readTime }} dk
                    </span>
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      {{ post.views }} görüntüleme
                    </span>
                  </div>
                  <a 
                    [routerLink]="['/blog', post.id]"
                    class="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Oku
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          }
        </div>
        
        <!-- Load More Button -->
        @if (displayedCount() < getFilteredPostsCount()) {
          <div class="text-center mt-12">
            <button 
              (click)="loadMore()"
              class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Daha Fazla Yükle ({{ getFilteredPostsCount() - displayedCount() }} paylaşım kaldı)
            </button>
          </div>
        }
      </div>
    </section>
  `,
  styles: []
})
export class BlogPostsComponent {
  selectedCategory = signal<string>('all');
  displayedCount = signal<number>(9);
  
  categories = ['Ticaret Hukuku', 'İş Hukuku', 'Gayrimenkul', 'Ceza Hukuku', 'Aile Hukuku', 'Fikri Mülkiyet'];
  
  allPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Yeni Ticaret Kanunu Değişiklikleri ve Şirketler Hukuku',
      excerpt: '2024 yılında yürürlüğe giren yeni düzenlemeler ve şirketler hukuku alanındaki önemli değişiklikler hakkında detaylı analiz.',
      author: 'Av. Mehmet Yılmaz',
      date: '15 Aralık 2024',
      category: 'Ticaret Hukuku',
      readTime: 8,
      views: 1250,
      icon: '⚖️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Uzaktan Çalışma Düzenlemeleri ve İşçi Hakları',
      excerpt: 'Uzaktan çalışma modelinin hukuki boyutları, işçi hakları ve işveren yükümlülükleri konusunda güncel bilgiler.',
      author: 'Av. Ayşe Demir',
      date: '14 Aralık 2024',
      category: 'İş Hukuku',
      readTime: 6,
      views: 980,
      icon: '👔',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Gayrimenkul Alım-Satımında Dikkat Edilmesi Gerekenler',
      excerpt: 'Tapu işlemleri, noter sözleşmeleri ve gayrimenkul alım-satım süreçlerinde bilinmesi gereken önemli noktalar.',
      author: 'Av. Can Kaya',
      date: '13 Aralık 2024',
      category: 'Gayrimenkul',
      readTime: 5,
      views: 875,
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Dijital Suçlar ve Siber Güvenlik Hukuku',
      excerpt: 'Siber suçlar, veri koruma ve dijital güvenlik konularında ceza hukuku açısından önemli gelişmeler.',
      author: 'Av. Zeynep Özkan',
      date: '12 Aralık 2024',
      category: 'Ceza Hukuku',
      readTime: 7,
      views: 1120,
      icon: '🔒',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      title: 'Boşanma Sürecinde Mal Paylaşımı ve Nafaka',
      excerpt: 'Boşanma davalarında mal paylaşımı, nafaka hesaplama ve velayet konularında güncel yargıtay kararları.',
      author: 'Av. Fatma Şahin',
      date: '11 Aralık 2024',
      category: 'Aile Hukuku',
      readTime: 9,
      views: 1450,
      icon: '👨‍👩‍👧‍👦',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      title: 'Yapay Zeka ve Fikri Mülkiyet Hakları',
      excerpt: 'AI teknolojilerinin fikri mülkiyet hukuku açısından değerlendirilmesi ve telif hakları konusundaki yeni düzenlemeler.',
      author: 'Av. Emre Çelik',
      date: '10 Aralık 2024',
      category: 'Fikri Mülkiyet',
      readTime: 10,
      views: 890,
      icon: '📝',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 7,
      title: 'Şirket Birleşmeleri ve Devir İşlemleri',
      excerpt: 'Şirket birleşmeleri, devir işlemleri ve bu süreçlerde dikkat edilmesi gereken hukuki prosedürler.',
      author: 'Av. Mehmet Yılmaz',
      date: '9 Aralık 2024',
      category: 'Ticaret Hukuku',
      readTime: 7,
      views: 765,
      icon: '⚖️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 8,
      title: 'İş Sözleşmesi Türleri ve Farkları',
      excerpt: 'Belirsiz süreli, belirli süreli ve kısmi süreli iş sözleşmeleri arasındaki farklar ve uygulamaları.',
      author: 'Av. Ayşe Demir',
      date: '8 Aralık 2024',
      category: 'İş Hukuku',
      readTime: 6,
      views: 920,
      icon: '👔',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 9,
      title: 'Kira Hukuku ve Kiracı Hakları',
      excerpt: 'Kira sözleşmeleri, kiracı hakları, kira artışları ve tahliye süreçleri hakkında güncel bilgiler.',
      author: 'Av. Can Kaya',
      date: '7 Aralık 2024',
      category: 'Gayrimenkul',
      readTime: 5,
      views: 1100,
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 10,
      title: 'Kişisel Verilerin Korunması Kanunu Uygulamaları',
      excerpt: 'KVKK kapsamında veri işleme, saklama ve silme yükümlülükleri ile cezai yaptırımlar.',
      author: 'Av. Zeynep Özkan',
      date: '6 Aralık 2024',
      category: 'Ceza Hukuku',
      readTime: 8,
      views: 1340,
      icon: '🔒',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 11,
      title: 'Velayet ve Kişisel İlişki Düzenlemeleri',
      excerpt: 'Boşanma sonrası velayet düzenlemeleri, kişisel ilişki kurma hakkı ve uygulamaları.',
      author: 'Av. Fatma Şahin',
      date: '5 Aralık 2024',
      category: 'Aile Hukuku',
      readTime: 7,
      views: 980,
      icon: '👨‍👩‍👧‍👦',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 12,
      title: 'Marka Tescil Süreçleri ve Koruma',
      excerpt: 'Marka tescili başvuru süreçleri, itiraz prosedürleri ve marka hakkının korunması.',
      author: 'Av. Emre Çelik',
      date: '4 Aralık 2024',
      category: 'Fikri Mülkiyet',
      readTime: 6,
      views: 720,
      icon: '📝',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 13,
      title: 'Limited Şirket Kuruluş Süreçleri',
      excerpt: 'Limited şirket kuruluş adımları, gerekli belgeler ve dikkat edilmesi gereken noktalar.',
      author: 'Av. Mehmet Yılmaz',
      date: '3 Aralık 2024',
      category: 'Ticaret Hukuku',
      readTime: 5,
      views: 650,
      icon: '⚖️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 14,
      title: 'Toplu İş Sözleşmeleri ve Grev Hakkı',
      excerpt: 'Toplu iş sözleşmesi müzakereleri, grev ve lokavt süreçleri hakkında detaylı bilgiler.',
      author: 'Av. Ayşe Demir',
      date: '2 Aralık 2024',
      category: 'İş Hukuku',
      readTime: 8,
      views: 890,
      icon: '👔',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 15,
      title: 'İmar Mevzuatı ve Yapı Ruhsatı',
      excerpt: 'İmar planları, yapı ruhsatı başvuruları ve yapı kullanma izni süreçleri.',
      author: 'Av. Can Kaya',
      date: '1 Aralık 2024',
      category: 'Gayrimenkul',
      readTime: 6,
      views: 1050,
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 16,
      title: 'Bilişim Suçları ve Ceza Hukuku',
      excerpt: 'Bilişim sistemlerine yönelik suçlar, siber saldırılar ve cezai yaptırımlar.',
      author: 'Av. Zeynep Özkan',
      date: '30 Kasım 2024',
      category: 'Ceza Hukuku',
      readTime: 7,
      views: 1120,
      icon: '🔒',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 17,
      title: 'Miras Hukuku ve Mirasçılık',
      excerpt: 'Miras paylaşımı, saklı pay hakları ve mirasçılık sıfatının kazanılması.',
      author: 'Av. Fatma Şahin',
      date: '29 Kasım 2024',
      category: 'Aile Hukuku',
      readTime: 9,
      views: 1250,
      icon: '👨‍👩‍👧‍👦',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 18,
      title: 'Patent Başvuru Süreçleri',
      excerpt: 'Patent başvurusu, inceleme süreçleri ve patent hakkının korunması.',
      author: 'Av. Emre Çelik',
      date: '28 Kasım 2024',
      category: 'Fikri Mülkiyet',
      readTime: 8,
      views: 680,
      icon: '📝',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 19,
      title: 'Anonim Şirket Yönetim Kurulu',
      excerpt: 'Anonim şirketlerde yönetim kurulu görevleri, sorumlulukları ve yetkileri.',
      author: 'Av. Mehmet Yılmaz',
      date: '27 Kasım 2024',
      category: 'Ticaret Hukuku',
      readTime: 6,
      views: 540,
      icon: '⚖️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 20,
      title: 'İş Kazası ve Meslek Hastalığı',
      excerpt: 'İş kazası tanımı, meslek hastalığı tespiti ve tazminat hakları.',
      author: 'Av. Ayşe Demir',
      date: '26 Kasım 2024',
      category: 'İş Hukuku',
      readTime: 7,
      views: 980,
      icon: '👔',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ];
  
  filteredPosts = computed(() => {
    const cat = this.selectedCategory();
    const count = this.displayedCount();
    const filtered = cat === 'all' 
      ? this.allPosts 
      : this.allPosts.filter(p => p.category === cat);
    return filtered.slice(0, count);
  });
  
  getFilteredPostsCount(): number {
    const cat = this.selectedCategory();
    return cat === 'all' 
      ? this.allPosts.length 
      : this.allPosts.filter(p => p.category === cat).length;
  }
  
  loadMore() {
    const maxCount = this.getFilteredPostsCount();
    this.displayedCount.update(count => Math.min(count + 9, maxCount));
  }
}

