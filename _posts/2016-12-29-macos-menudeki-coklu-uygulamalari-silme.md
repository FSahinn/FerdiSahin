---
title: MacOS menüdeki çoklu uygulamaları silme
date: 2016-12-29 18:19:37 Z
permalink: "/macos-menudeki-coklu-uygulamalari-silme/"
categories:
- MacOS
tags:
- macos çift uygulama
- macos çift uygulama sorunu
id: 34
author: fsahin
layout: post
guid: http://www.frdshn.com/?p=34
image:
  feature: remove-duplicates-customize-open-with-menu-mac-os-x.w1456.jpg
---

Merhaba arkadaşlar, son bir kaç gündür MacOS&#8217;ta böyle bir sorunla karşılaştım. HTML bir dosyaya sağ tıklayıp şununla aç dediğimde Brackets 2 tane olarak görünüyordu. Brackets o anda açık olmasına rağmen eğer ben diğer Brackets&#8217;ı seçersem 2. Brackets uygulaması Dock&#8217;ta görünüyordu.

5-6 aydır MacOS kullanıyorum fakat ilk defa böyle bir şey başıma geldi. Bende biraz yabancı kaynakları araştırdım ve 2 yıl önceki konuda birisinin yazdığı çözüm önerisini aynen uyguladım ve sorunu düzelttim. Fakat farkettiyseniz 2 yıl diyorum ve bu sorun 2 yıldır düzeltilmemiş. Hata sadece bende olsa anlayacağım fakat çoğu kişide bu hata mevcutmuş. Herneyse şimdi nasıl düzelteceğimizi kısa olarak anlatacağım.

İlk olarak Terminal&#8217;i açıyoruz.

> **_/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user_**

Bunu yazıyoruz (isterseniz CMD+C yapıp terminal ekranında CMD+V yapabilirsiniz). Yazdıktan sonra Enter&#8217;layın ve bir süre bekleyin. Yaklaşık 15 saniye sonra tekrar terminal ekranına aşağıdakini yazın.

> **_killall Finder_**

Bunu da yaptıktan sonra Finder penceresi açılacak. Ve şimdi herhangi bir dosya üzerinde sağ tık yapıp şununla aç derseniz sorun olmadığını görürsünüz.

Umarım benim gibi bu hata ile karşılaşan arkadaşlar bu şekilde sorunu çözebilir. Bir sonraki yazımda görüşmek üzere.