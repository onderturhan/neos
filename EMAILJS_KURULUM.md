# EmailJS Kurulum Talimatları

Bu dosya, iletişim formunun EmailJS ile çalışması için gerekli kurulum adımlarını içerir.

## Adım 1: EmailJS Hesabı Oluşturma

1. [EmailJS](https://www.emailjs.com/) sitesine gidin
2. Ücretsiz hesap oluşturun (ayda 200 email ücretsiz)
3. Giriş yapın

## Adım 2: Email Servisi Ekleme

1. EmailJS dashboard'da **Email Services** sekmesine gidin
2. **Add New Service** butonuna tıklayın
3. Gmail, Outlook veya başka bir email servisi seçin
4. Email adresinizi bağlayın (info@neosdanismanlik.net)
5. Servis oluşturulduktan sonra **Service ID**'yi kopyalayın

## Adım 3: Email Template Oluşturma

1. **Email Templates** sekmesine gidin
2. **Create New Template** butonuna tıklayın
3. Template'i şu şekilde yapılandırın:

   **Subject (Konu):**
   ```
   {{subject}}
   ```
   
   **Not:** Subject artık kod tarafından gönderiliyor, bu yüzden template'de sadece `{{subject}}` kullanın.

   **Content (İçerik):**
   ```
   Yeni bir iletişim formu mesajı aldınız:
   
   Gönderen: {{from_name}}
   E-posta: {{from_email}}
   Telefon: {{phone}}
   
   Mesaj:
   {{message}}
   
   ---
   Bu mesaj neosdanismanlik.net web sitesinden gönderilmiştir.
   ```

4. **To Email** alanına: `info@neosdanismanlik.net` yazın
5. **From Name** alanına: `{{from_name}}` yazın
6. **Reply To** alanına: `{{reply_to}}` yazın
7. Template'i kaydedin ve **Template ID**'yi kopyalayın

## Adım 4: Public Key Alma

1. **Account** sekmesine gidin
2. **General** altında **Public Key** değerini kopyalayın

## Adım 5: Kodda Yapılandırma

`src/app/features/home/contact/contact.ts` dosyasını açın ve şu satırları bulun:

```typescript
private readonly EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
private readonly EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
private readonly EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

Bu değerleri EmailJS'den aldığınız değerlerle değiştirin:

```typescript
private readonly EMAILJS_SERVICE_ID = 'service_xxxxxxx'; // Adım 2'den
private readonly EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // Adım 3'ten
private readonly EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxx'; // Adım 4'ten
```

## Test Etme

1. Uygulamayı çalıştırın: `npm start` veya `yarn start`
2. İletişim formunu doldurun
3. Gönder butonuna tıklayın
4. info@neosdanismanlik.net adresine email gelip gelmediğini kontrol edin

## Notlar

- EmailJS ücretsiz planında ayda 200 email gönderebilirsiniz
- EmailJS güvenli bir servistir ve API key'leriniz public key olarak kullanılabilir
- Form gönderildiğinde kullanıcıya başarı mesajı gösterilir
- Hata durumunda kullanıcıya bilgilendirme yapılır

## Alternatif Çözümler

Eğer EmailJS kullanmak istemezseniz, şu alternatifleri değerlendirebilirsiniz:

1. **Formspree** - Benzer bir servis, ücretsiz plan mevcut
2. **Web3Forms** - Ücretsiz, basit kurulum
3. **Backend API** - Kendi backend'inizi oluşturup email gönderebilirsiniz

