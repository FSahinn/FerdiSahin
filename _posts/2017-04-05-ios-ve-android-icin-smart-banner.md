---
id: 70
title: iOS ve Android için Smart Banner
date: 2017-04-05T15:27:43+00:00
author: fsahin
layout: post
guid: http://www.frdshn.com/?p=70
permalink: /ios-ve-android-icin-smart-banner/
design: one
image:
  feature: AppBannerExample.png
categories:
  - jQuery
tags:
  - android smart banner
  - ios smart banner
  - smart banner
---
Merhaba arkadaşlar,

Smart Banner olayını sanırım çoğu kişi bilmiyordur belki bilenlerde sınırlı sayıda vardır. Bugün sizlere Smart Banner&#8217;ı nasıl temalarımıza entegre ederiz bunu anlatacağım. Tabi smart banner&#8217;ın ne olduğunu söyleyerek işe başlayım.

Smart Banner, websitelerin uygulamaları varsa gelen ziyaretçileri uygulamaya yönlendiren bir bildirim kutusu. Eğer android veya iOS uygulamanız yoksa bunu boşuna yapmanızı önermem tabi varsa bunu yapmanızı kesinlikle öneririm. Örnek olarak aşağıdaki görsele bakabilirsiniz:

<img class="alignnone wp-image-71 size-full" src="http://www.frdshn.com/wp-content/uploads/2017/04/AppBannerExample.png" alt="" width="743" height="399" srcset="http://www.frdshn.com/wp-content/uploads/2017/04/AppBannerExample.png 743w, http://www.frdshn.com/wp-content/uploads/2017/04/AppBannerExample-300x161.png 300w" sizes="(max-width: 743px) 100vw, 743px" />

Bunu yapmak için hazır jQuery dosyalarından yardım almamız gerekiyor yoksa yapamıyoruz.

<a href="https://github.com/ain/smartbanner.js/archive/master.zip" target="_blank"><strong>Buraya</strong></a> tıklayıp smartbanner.js&#8217;yi indirelim.

İndirdikten sonra ZiP dosyasının içeriğini çıkartalım. dist klasörünün içinde bulunan smartbanner.css dosyasını CSS klasörüne smartbanner.js dosyasını ise JS klasörüne atalım. Ya da yolları kendinize göre siz belirleyebilirsiniz.

Bunları yaptıktan sonra herşey hazır hale gelmiş olacaktır bize sadece son ayarları yapmak kalacak.

Tema dosyanızın **<head></head> **tagları arasına aşağıdaki kodları ekleyin.

> <pre>&lt;<span class="pl-ent">meta</span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>smartbanner:title<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"FRDSHN</span><span class="pl-pds">"</span></span>&gt; // Uygulama adı
&lt;<span class="pl-ent">meta</span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>smartbanner:author<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"Ferdi Şahin</span><span class="pl-pds">"</span></span>&gt; //Uygulamayı Yapanın Adı ya da Paylaşan Kişinin Adı
&lt;<span class="pl-ent">meta</span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>smartbanner:price<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"Ücretsiz</span><span class="pl-pds">"</span></span>&gt; // Eğer uygulama ücretliyse Fiyatı eğer ücretsizse Ücretsiz yazabilirsiniz
&lt;<span class="pl-ent">meta</span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>smartbanner:price-suffix-apple<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"</span> - App Store'dan İndir<span class="pl-pds">"</span></span>&gt;
&lt;<span class="pl-ent">meta</span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>smartbanner:price-suffix-google<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"</span> - Google Play'den İndir<span class="pl-pds">"</span></span>&gt;
&lt;<span class="pl-ent">meta</span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>smartbanner:icon-apple<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"</span>https://url/to/apple-store-icon.png<span class="pl-pds">"</span></span>&gt; // iOS için Uygulama Resimi
&lt;<span class="pl-ent">meta</span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>smartbanner:icon-google<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"</span>https://url/to/google-play-icon.png<span class="pl-pds">"</span></span>&gt; // Android için Uygulama Resimi
&lt;<span class="pl-ent">meta</span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>smartbanner:button<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"Görüntüle</span><span class="pl-pds">"</span></span>&gt; // Butonun adı 
&lt;<span class="pl-ent">meta</span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>smartbanner:button-url-apple<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"</span>https://ios/application-url<span class="pl-pds">"</span></span>&gt; // iOS için indirme bağlantısı
&lt;<span class="pl-ent">meta</span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>smartbanner:button-url-google<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"</span>https://android/application-url<span class="pl-pds">"</span></span>&gt; // Android için indirme bağlantısı
&lt;<span class="pl-ent">meta</span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>smartbanner:enabled-platforms<span class="pl-pds">"</span></span> <span class="pl-e">content</span>=<span class="pl-s"><span class="pl-pds">"</span>android,ios<span class="pl-pds">"</span></span>&gt; // buraya sadece android yazarsanız android'de sadece ios yazarsanız iOS cihazlarda görünür ama android,ios yazarsanız her 2 cihazda da görünür olacaktır.
</pre>

Bunu da yaptıktan sonra bütün işlem tamam olacaktır ve artık Smart Banner&#8217;ı sitenizde aktif etmiş olacaksınız.

Herhangi bir sorunla karşılaşırsanız yorum yapmanız yeterlidir, elimden geldiği kadar yardımcı olmaya çalışırım.