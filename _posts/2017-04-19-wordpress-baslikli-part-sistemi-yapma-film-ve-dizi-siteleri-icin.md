---
title: WordPress Başlıklı Part Sistemi Yapma (Film ve Dizi Siteleri için)
date: 2017-04-19 10:46:40 Z
permalink: "/wordpress-baslikli-part-sistemi-yapma-film-ve-dizi-siteleri-icin/"
categories:
- Snippet
tags:
- dizi part sistemi
- film part sistemi
- wordpress part sistemi
id: 88
author: fsahin
layout: post
guid: http://www.frdshn.com/?p=88
design: two
image:
  feature: speed-up-wordpress.png
---

Merhaba arkadaşlar, bu yazımda sizlere başlıklı part sistemi nasıl yapılır bunu kısaca ve anlayacağınız şekilde anlatmak istiyorum. Bunu genelde film ve dizi sitelerinde görebilirsiniz ve onlar için daha uygun ama farketmez sadece film ve dizi siteleri ile kısıtlamıyorum. İlk olarak WordPress&#8217;in kendi part sisteminde şu şekilde oluyor.

**Sayfalar:** 1 2 3

Biz bunu şu yaptığımız şu şekilde olacak

**Genel &#8211; VK &#8211; Odnok &#8211; Openload**

Şimdi başlayalım:

<script src="https://gist.github.com/FSahinn/493990ceefeaf8d1148aec8f733c348b.js"></script>

İlk bölümdeki kodları functions.php&#8217;nin en altına ekleyin.

İkinci bölümde bulunan kodu ise single.php&#8217;de eklemek istediğiniz alana ekleyin genelde film dizi sitelerinde playerın hemen üstüne ya da hemen altına ekliyorlar. Ama siz normal bir tema yapıyorsanız o halde <?php the_content(); ?> kısmının hemen altına ekleyebilirsiniz.

Bunları yaptıktan sonra herşey tamamlanmış olacak.

Kullanım ise ayırmak istediğiniz alanların hemen altına

> <span class="pl-c"><!&#8211;</span>nextpage<span class="pl-c">&#8211;><!&#8211;</span>partbaslik: Site Adı <span class="pl-c">&#8211;></span>

Bu şekilde ayırma etiketi koyacaksınız. Site adı yazan yere istediğinizi yazabilirsiniz. Yapamadığınız ya da sormak istediğiniz şeyler olursa yorum yapabilirseniz elimden geldiği kadar yardımcı olmaya çalışırım. Bir sonraki yazımda görüşmek üzere&#8230;