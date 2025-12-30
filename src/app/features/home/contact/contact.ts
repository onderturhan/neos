import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionTitleComponent],
  template: `
    <section id="contact" class="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <app-section-title 
          title="İletişim">
        </app-section-title>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">İletişim Bilgileri</h3>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-semibold text-gray-900">Adres</h4>
                  <p class="text-gray-600">Adalet Mah. Manas Bulv. No:39 Folkart Towers B Kule K:32 D:3201<br>Bayraklı/İZMİR</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-semibold text-gray-900">Telefon</h4>
                  <a href="tel:+905544773434" class="text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-200">+90 554 477 34 34</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-semibold text-gray-900">E-posta</h4>
                  <a href="mailto:info@neosdanismanlik.net" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">info@neosdanismanlik.net</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="max-w-md">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                  Ad Soyad
                </label>
                <input 
                  type="text" 
                  id="name"
                  formControlName="name"
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  [class.border-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                  <p class="mt-1 text-xs text-red-600">Ad soyad gereklidir</p>
                }
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                  E-posta
                </label>
                <input 
                  type="email" 
                  id="email"
                  formControlName="email"
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                  <p class="mt-1 text-xs text-red-600">Geçerli bir e-posta adresi giriniz</p>
                }
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  formControlName="phone"
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition">
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                  Mesaj
                </label>
                <textarea 
                  id="message"
                  formControlName="message"
                  rows="4"
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  [class.border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"></textarea>
                @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                  <p class="mt-1 text-xs text-red-600">Mesaj gereklidir</p>
                }
              </div>
              
              <button 
                type="submit"
                [disabled]="contactForm.invalid || isSubmitting"
                class="w-full bg-blue-600 text-white px-5 py-2.5 text-sm rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed">
                @if (isSubmitting) {
                  Gönderiliyor...
                } @else {
                  Gönder
                }
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Modal -->
      @if (showModal) {
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
              class="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              (click)="$event.stopPropagation()">
              <!-- Modal header -->
              <div class="px-6 py-4 flex items-center justify-between"
                [class.bg-gradient-to-r]="modalType === 'success'"
                [class.from-blue-600]="modalType === 'success'"
                [class.to-blue-700]="modalType === 'success'"
                [class.from-red-500]="modalType === 'error'"
                [class.to-rose-600]="modalType === 'error'">
                <div class="flex items-center gap-4">
                  @if (modalType === 'success') {
                    <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  } @else {
                    <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                  }
                  <h3 class="text-2xl font-bold text-white">
                    {{ modalTitle }}
                  </h3>
                </div>
                <button 
                  (click)="closeModal()"
                  class="text-white/80 hover:text-white transition-colors duration-200">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <!-- Modal body -->
              <div class="px-6 py-6 bg-white">
                <p class="text-gray-700 leading-relaxed text-base">
                  {{ modalMessage }}
                </p>
              </div>

              <!-- Modal footer -->
              <div class="bg-gray-50 px-6 py-4 flex justify-end">
                <button 
                  (click)="closeModal()"
                  class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Tamam
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  `,
  styles: []
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  showModal = false;
  modalTitle = '';
  modalMessage = '';
  modalType: 'success' | 'error' = 'success';

  // EmailJS yapılandırması
  private readonly EMAILJS_SERVICE_ID = 'service_bnb49eq';
  private readonly EMAILJS_TEMPLATE_ID = 'template_i05msbw';
  private readonly EMAILJS_PUBLIC_KEY = 'fZdZ53y8bwM2tRci0';

  constructor(
    private fb: FormBuilder
  ) {
    // EmailJS'i initialize et
    emailjs.init(this.EMAILJS_PUBLIC_KEY);
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required]]
    });
  }

  /**
   * Türkçe karakterleri İngilizce karakterlere çevirir
   * EmailJS encoding sorunu nedeniyle kullanılıyor
   */
  private turkishToEnglish(text: string): string {
    const turkishChars: { [key: string]: string } = {
      'İ': 'I', 'ı': 'i', 'Ş': 'S', 'ş': 's',
      'Ğ': 'G', 'ğ': 'g', 'Ü': 'U', 'ü': 'u',
      'Ö': 'O', 'ö': 'o', 'Ç': 'C', 'ç': 'c'
    };

    return text
      .split('')
      .map(char => turkishChars[char] || char)
      .join('');
  }

  /**
   * Modal göster
   */
  private showModalDialog(title: string, message: string, type: 'success' | 'error' = 'success') {
    this.modalTitle = title;
    this.modalMessage = message;
    this.modalType = type;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  /**
   * Modal'ı kapat
   */
  closeModal() {
    this.showModal = false;
    document.body.style.overflow = '';
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const formData = this.contactForm.value;

      // EmailJS template parametreleri
      // EmailJS'in encoding sorunu nedeniyle Türkçe karakterleri İngilizce karakterlere çeviriyoruz
      // NOT: EmailJS template'de subject alanı TAMAMEN {{subject}} olmalı
      const nameEnglish = this.turkishToEnglish(formData.name);
      const subjectText = `Yeni Iletisim Formu Mesaji - ${nameEnglish}`;
      
      const templateParams = {
        to_email: 'info@neosdanismanlik.net',
        from_name: nameEnglish,
        from_email: formData.email,
        phone: formData.phone || 'Belirtilmemiş',
        message: formData.message,
        reply_to: formData.email,
        subject: subjectText
      };

      // EmailJS SDK kullanarak email gönder
      // Public key'i her seferinde gönderiyoruz (bazı durumlarda daha iyi çalışır)
      emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: this.EMAILJS_PUBLIC_KEY
        }
      ).then(
        (response) => {
          console.log('Email başarıyla gönderildi:', response);
          this.showModalDialog(
            'Başarılı!',
            'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
            'success'
          );
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        (error) => {
          console.error('Email gönderme hatası:', error);
          this.showModalDialog(
            'Hata!',
            'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin veya doğrudan info@neosdanismanlik.net adresine e-posta gönderin.',
            'error'
          );
          this.isSubmitting = false;
        }
      );
    }
  }
}

