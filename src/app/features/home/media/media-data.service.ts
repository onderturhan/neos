import { Injectable } from '@angular/core';
import { MediaItem } from './media-item.interface';

@Injectable({
  providedIn: 'root'
})
export class MediaDataService {
  
  /**
   * Tüm paylaşım içeriklerinin listesi
   * Yeni içerik eklemek için buraya yeni bir obje ekleyin
   */
  getMediaItems(): MediaItem[] {
    return [
      {
        id: 1,
        icon: '📋',
        title: 'Eksik Günlere İlişkin Bilgi ve Belgeler',
        category: 'Sosyal Güvenlik Hukuku',
        date: '27 Ocak 2025',
        readTime: 15,
        preview: 'Kayıt dışı istihdam; istihdama katılanların gün ve kazançlarının Sosyal Güvenlik Kurumuna hiç bildirilmemesi ya da çalışma gün sayılarının ve prime esas kazançlarının eksik bildirilmesi olarak ifade edilebilir.',
        content: `
          <p class="mb-4">Kayıt dışı istihdam; istihdama katılanların gün ve kazançlarının Sosyal Güvenlik Kurumuna hiç bildirilmemesi ya da çalışma gün sayılarının ve prime esas kazançlarının eksik bildirilmesi olarak ifade edilebilir. Günümüz ekonomi şartlarında işverenlerin daha az prim ödemek amacıyla çalıştırdıkları kişileri tamamen kayıt dışı çalıştırmak yerine gün ve/veya kazançlarını eksik bildirerek çalıştırma eğiliminde oldukları gözlemlenmektedir. Ancak bu durum Sosyal Güvenlik Kurumunun denetim ve incelemeleri sonucunda işverenlerin idari yaptırımlarla karşılaşmasına neden olmaktadır.</p>
          
          <p class="mb-4">Eksik günlere ilişkin bilgi ve belgelerin mevzuata uygun şekilde düzenlenmemesi nedeniyle Kurumca geçerli sayılmaması ya da Kurumca belirlenen yasal süre içerisinde ibraz edilmemesi halinde çalışanların eksik gün ve kazançları Kurumca re' sen tamamlanarak işverenler hem idari para cezası ile karşı karşıya gelmekte hem de muhteviyatı primler tahsil edilmektedir. Ayrıca bu durum işverenin yararlandığı teşvik, destek gibi unsurların iptal olmasına sebep olmaktadır.</p>
          
          <p class="mb-4">Ay içinde otuz günden az çalışan veya eksik ücret ödenen sigortalılara ilişkin Kurumca çıkarılan yönetmelikte yer alan eksik çalışmaya ilişkin belgeler aşağıda yer almaktadır:</p>
          
          <ul class="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>a)</strong> Kurumca elektronik ortamda alınabilenler hariç Kurumca yetkilendirilmiş sağlık hizmeti sunucularından veya işyeri hekimlerinden alınmış istirahatli olduğunu gösteren rapor,</li>
            <li><strong>b)</strong> Sigortalı ve işverenin imzasını taşıyan ücretsiz veya aylıksız izinli olduğunu kanıtlayan izin belgesi,</li>
            <li><strong>c)</strong> Sigortalıya tebliğ edilen disiplin cezası uygulamasına ilişkin belge,</li>
            <li><strong>ç)</strong> Gözaltına alınma ile tutukluluk hâline ilişkin belgeler,</li>
            <li><strong>d)</strong> Kısmi süreli çalışmalara ait sigortalı ve işverenin imzasını taşıyan yazılı iş sözleşmesi,</li>
            <li><strong>e)</strong> Sigortalının imzasını taşıyan puantaj kayıtları,</li>
            <li><strong>f)</strong> Grev, lokavt, genel hayatı etkileyen olaylar, doğal afetler nedeniyle işyerinde faaliyetin durdurulduğunu veya işe ara verildiğini gösteren ilgili resmî makamlardan alınan yazı örneği,</li>
            <li><strong>g)</strong> İşe devamsızlığa ilişkin belgeler,</li>
            <li><strong>ğ)</strong> İş sözleşmesinin fesih edildiği tarihte çalışılmadığına dair belge,</li>
            <li><strong>h)</strong> Kısa çalışma ödeneği alındığına dair ilgili resmî makamlardan alınan belge,</li>
            <li><strong>ı)</strong> 5434 sayılı Kanunun mülga ek 76 ve mülga geçici 192 nci maddelerine tabi olunduğunu gösterir belge</li>
            <li><strong>i)</strong> Yarım çalışma ödeneği alındığına dair ilgili resmî makamlardan alınan belge,</li>
            <li><strong>j)</strong> İş Sağlığı ve Güvenliği Kayıt, Takip ve İzleme Programı İSG-KATİP üzerinden alınan sözleşmeler</li>
          </ul>
          
          <p class="mb-4">Ay içinde otuz günden az çalışan veya eksik ücret ödenen sigortalılara ilişkin olarak yukarıda yer alan (a), (c), (ç), (f), (h), (ı), (i) ve (j) maddelerinde belirtilen belgeler her zaman düzenlenebilir nitelikte olmayan belgeler olup diğer belgeler ise her zaman düzenlenebilir nitelikte olan belge olarak işlem görmektedir.</p>
          
          <p class="mb-4">Ay içinde bazı iş günlerinde çalıştırılmayan ve ücret ödenmeyen sigortalıların eksik gün nedeninin ve eksik gün sayısının, işverence ilgili aya ait aylık prim ve hizmet belgesinde veya muhtasar ve prim hizmet beyannamesinde belirtilmesi Kurumca yeterli sayılmaktadır. Sigortalıların eksik çalıştıklarını ispatlayan belgelerin ilgili ayda düzenlenip işverence saklanması esas olup Kurumca istenilmesi halinde ibrazı gerekmektedir. Burada işçi özlük dosyasının önemi ortaya çıkmaktadır. İşçi özlük dosyasında sadece işe alımda gerekli evrakların bulunması yeterli olmamakta, çalışanların durum değişikliklerinin (ücretsiz izin, rapor, devamsızlık vb. durumlarda) güncel ve periyodik olarak kayıt altına alınması gerekmektedir.</p>
          
          <p class="mb-4">Bu itibarla, eksik gün nedenlerine ilişkin bilgi ve belgelerin Kurumca yapılan tebligatla onbeş gün içinde ibraz edilmesinin talep edilmesine rağmen tebligatın alındığı tarihi takip eden 15 günlük süre içinde verilmemesi veya verilmesine rağmen Kurumca geçerli sayılmaması halinde, işverenden eksik bildirilen günlere ilişkin ek nitelikteki aylık prim ve hizmet belgelerinin veya muhtasar prim hizmet beyannamelerinin bir aylık süre içinde verilmesi 7201 sayılı Kanuna göre tebliğ edilecek yazı ile istenilecek, ek nitelikteki aylık prim ve hizmet belgelerinin söz konusu yazının tebliğinden itibaren bir aylık süre içinde verilmemesi halinde, bahse konu prim belgeleri ilgili ünitece re' sen düzenlenerek, tahakkuk eden primler yazı ile işverene tebliğ edilecektir.</p>
          
          <p class="mb-4">Eksik gün nedenlerine ilişkin bilgi ve belgeleri Kuruma vermekle yükümlü tutuldukları halde vermeyen veya vermelerine rağmen Kurumca geçerli sayılmayan işverene gönderilecek olan tebligatlarda, ek nitelikteki aylık prim ve hizmet belgelerinin hangi sigortalılar için düzenlenmesi gerektiği, prim ödeme gün sayısı ve prime esas kazanç tutarı da belirtilecektir.</p>
          
          <p class="mb-4">Eksik günlere ilişkin Kurumca istenilen belgenin tebellüğ edildiği tarihten itibaren bir ay içerisinde verilmesi halinde belgeye ek nitelikteki belgenin verilmemesi nedeniyle aylık asgari ücretin iki katını geçmemek kaydıyla her bir ek belgede kayıtlı sigortalı sayısı başına, aylık asgari ücretin sekizde biri tutarında, idari para cezası uygulanacaktır. Ancak belgenin tebellüğ edildiği tarihten itibaren bir aylık süre geçtikten sonra verilmesi halinde ise aylık asgari ücretin iki katını geçmemek kaydıyla her bir ek belgede kayıtlı sigortalı sayısı başına aylık asgari ücretin yarısı tutarında idari para cezası uygulanacaktır.</p>
          
          <p class="mb-4">Diğer yandan belgenin tebligatta belirtilen süre dışında ancak ünite tarafından resen düzenlenmeden önce verilmesi halinde ise aylık asgari ücretin iki katını geçmemek kaydıyla her bir ek belgede kayıtlı sigortalı sayısı başına aylık asgari ücretin yarısı tutarında idari para cezası uygulanacaktır.</p>
        `
      },
      // Yeni içerikler buraya eklenebilir:
      // {
      //   id: 2,
      //   icon: '📄',
      //   title: 'Yeni Başlık',
      //   category: 'Kategori',
      //   date: 'Tarih',
      //   readTime: 10,
      //   preview: 'Kısa önizleme metni...',
      //   content: '<p>Tam içerik HTML formatında...</p>'
      // },
      // {
      //   id: 3,
      //   icon: '⚖️',
      //   title: 'Başka Bir Başlık',
      //   category: 'Başka Kategori',
      //   date: 'Başka Tarih',
      //   readTime: 8,
      //   preview: 'Başka önizleme metni...',
      //   content: '<p>Başka tam içerik HTML formatında...</p>'
      // },
    ];
  }
}
