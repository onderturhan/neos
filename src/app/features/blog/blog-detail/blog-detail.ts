import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../core/components/header/header';
import { FooterComponent } from '../../../core/components/footer/footer';

interface BlogPost {
  id: number;
  title: string;
  content: string;
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
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    
    <main class="pt-20 pb-20 bg-gray-50 min-h-screen">
      <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Back Button -->
        <div class="mb-8">
          <button 
            (click)="goBack()"
            class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Geri Dön
          </button>
        </div>
        
        @if (post) {
          <!-- Header Image -->
          <div class="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-xl">
            @if (post.image) {
              <img 
                [src]="post.image" 
                [alt]="post.title"
                class="w-full h-full object-cover">
            } @else {
              <div 
                class="w-full h-full flex items-center justify-center"
                [style.background]="post.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'">
                <div class="text-9xl">
                  {{ post.icon }}
                </div>
              </div>
            }
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            <!-- Category Badge -->
            <div class="absolute top-6 left-6">
              <span class="px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-600 text-sm font-semibold rounded-full">
                {{ post.category }}
              </span>
            </div>
          </div>
          
          <!-- Article Header -->
          <header class="mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {{ post.title }}
            </h1>
            
            <!-- Meta Information -->
            <div class="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-200">
              <div class="flex items-center gap-3">
                @if (post.authorAvatar) {
                  <img [src]="post.authorAvatar" [alt]="post.author" class="w-12 h-12 rounded-full">
                } @else {
                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {{ post.author.charAt(0) }}
                  </div>
                }
                <div>
                  <div class="font-semibold text-gray-900">{{ post.author }}</div>
                  <div class="text-sm text-gray-500">{{ post.date }}</div>
                </div>
              </div>
              
              <div class="flex items-center gap-6 text-sm text-gray-600">
                <span class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {{ post.readTime }} dakika okuma
                </span>
                <span class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  {{ post.views }} görüntüleme
                </span>
              </div>
            </div>
          </header>
          
          <!-- Article Content -->
          <div class="prose prose-lg max-w-none bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div class="text-gray-700 leading-relaxed space-y-6" [innerHTML]="post.content"></div>
          </div>
          
          <!-- Share Section -->
          <div class="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Bu Yazıyı Paylaş</h3>
            <div class="flex flex-wrap gap-4">
              <button class="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
              <button class="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </button>
              <button class="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </button>
            </div>
          </div>
        } @else {
          <div class="text-center py-20">
            <p class="text-gray-600">Makale bulunamadı.</p>
          </div>
        }
      </article>
    </main>
    
    <app-footer></app-footer>
  `,
  styles: []
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | null = null;
  
  private posts: BlogPost[] = [
    {
      id: 1,
      title: 'Yeni Ticaret Kanunu Değişiklikleri ve Şirketler Hukuku',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Giriş</h2>
        <p class="mb-4">2024 yılında yürürlüğe giren yeni Ticaret Kanunu düzenlemeleri, şirketler hukuku alanında köklü değişiklikler getiriyor. Bu makalede, özellikle limited şirket kuruluş süreçleri, sermaye artırımı prosedürleri ve yönetim kurulu sorumlulukları konusunda yapılan önemli güncellemeleri detaylı bir şekilde inceleyeceğiz.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Limited Şirket Kuruluş Süreçleri</h2>
        <p class="mb-4">Yeni düzenlemelerle birlikte limited şirket kuruluş süreçleri önemli ölçüde sadeleştirildi. Artık kuruluş işlemleri daha hızlı ve daha az bürokratik engelle gerçekleştirilebiliyor. Özellikle dijital başvuru süreçlerinin yaygınlaşması, şirket kuruluş süresini önemli ölçüde kısalttı.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Sermaye Artırımı Prosedürleri</h2>
        <p class="mb-4">Sermaye artırımı konusunda yapılan değişiklikler, şirketlerin finansal yapılarını güçlendirmelerine olanak sağlıyor. Yeni düzenlemeler, sermaye artırımı süreçlerini daha şeffaf ve denetlenebilir hale getiriyor.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Yönetim Kurulu Sorumlulukları</h2>
        <p class="mb-4">Yönetim kurulu üyelerinin sorumlulukları konusunda yapılan güncellemeler, şirket yönetiminde daha fazla şeffaflık ve hesap verebilirlik sağlıyor. Bu değişiklikler, şirket yönetiminde daha iyi bir yönetişim yapısı oluşturmayı hedefliyor.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Sonuç</h2>
        <p class="mb-4">Yeni Ticaret Kanunu düzenlemeleri, şirketler hukuku alanında önemli bir dönüşümü temsil ediyor. Bu değişikliklerin, iş dünyasında daha şeffaf ve etkin bir yapı oluşturması bekleniyor.</p>
      `,
      author: 'Av. Mehmet Yılmaz',
      date: '15 Aralık 2024',
      category: 'Ticaret Hukuku',
      readTime: 8,
      views: 1250,
      icon: '⚖️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  ];
  
  private getPostContent(id: number): string {
    // Burada gerçek içerikler olacak, şimdilik placeholder
    return `
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Makale İçeriği</h2>
      <p class="mb-4">Bu makale içeriği detaylı olarak burada yer alacaktır. Hukuki konular, analizler ve önemli noktalar bu bölümde detaylı bir şekilde açıklanacaktır.</p>
      <p class="mb-4">Makale içeriği yazarlarımız tarafından özenle hazırlanmaktadır ve güncel hukuki gelişmeleri kapsamaktadır.</p>
    `;
  }
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const foundPost = this.posts.find(p => p.id === +id);
      if (foundPost) {
        this.post = {
          ...foundPost,
          content: foundPost.content || this.getPostContent(+id)
        };
      } else {
        // Blog-posts'taki verilerden oluştur
        const blogPostsData = this.getBlogPostsData();
        const found = blogPostsData.find(p => p.id === +id);
        if (found) {
          this.post = {
            ...found,
            content: this.getPostContent(+id)
          };
        }
      }
    }
  }
  
  private getBlogPostsData(): any[] {
    // Blog-posts component'indeki veriler
    return [
      { id: 1, title: 'Yeni Ticaret Kanunu Değişiklikleri ve Şirketler Hukuku', author: 'Av. Mehmet Yılmaz', date: '15 Aralık 2024', category: 'Ticaret Hukuku', readTime: 8, views: 1250, icon: '⚖️', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      { id: 2, title: 'Uzaktan Çalışma Düzenlemeleri ve İşçi Hakları', author: 'Av. Ayşe Demir', date: '14 Aralık 2024', category: 'İş Hukuku', readTime: 6, views: 980, icon: '👔', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
      { id: 3, title: 'Gayrimenkul Alım-Satımında Dikkat Edilmesi Gerekenler', author: 'Av. Can Kaya', date: '13 Aralık 2024', category: 'Gayrimenkul', readTime: 5, views: 875, icon: '🏢', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
      { id: 4, title: 'Dijital Suçlar ve Siber Güvenlik Hukuku', author: 'Av. Zeynep Özkan', date: '12 Aralık 2024', category: 'Ceza Hukuku', readTime: 7, views: 1120, icon: '🔒', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
      { id: 5, title: 'Boşanma Sürecinde Mal Paylaşımı ve Nafaka', author: 'Av. Fatma Şahin', date: '11 Aralık 2024', category: 'Aile Hukuku', readTime: 9, views: 1450, icon: '👨‍👩‍👧‍👦', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
      { id: 6, title: 'Yapay Zeka ve Fikri Mülkiyet Hakları', author: 'Av. Emre Çelik', date: '10 Aralık 2024', category: 'Fikri Mülkiyet', readTime: 10, views: 890, icon: '📝', gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' }
    ];
  }
  
  goBack() {
    this.router.navigate(['/']);
  }
}

