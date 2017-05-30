---
id: 26
title: CSS ile dikey ortalama
date: 2016-12-17T18:06:29+00:00
author: fsahin
layout: post
guid: http://frdshn.com/?p=26
permalink: /css-ile-dikey-ortalama/
image: 
  feature: Ekran-Resmi-2016-12-17-19.07.28.png
categories:
  - CSS
tags:
  - css dikey ortalama
  - css ile dikey ortalama
---
Hepinize merhaba, bu yazımda sizlere çoğu tasarımcının arayıpta farklı farklı çözümlerle elde ettiği dikey ortalamayı mantıklı bir şekilde nasıl ortalayacağımızı anlatacağım.

Normalde olan şu,

> <div class=&#8221;kutu&#8221;>
> 
> <div class=&#8221;ortala&#8221;>Bu yazıyı ortalayalım</div>
> 
> </div>

Biz böyle bir kutu oluşturduğumuzda bunun CSS kısmı ise şu şekilde olması gerekiyor.

> .kutu {
> 
> position: relative;
> 
> width: 200px;
> 
> height: 200px;
> 
> }
> 
> .kutu .ortala {
> 
> position: absolute;
> 
> left: 50%;
> 
> top: 50%;
> 
> }

Bu şekilde değer verdiğimizde ortalanmıyor arkadaşlar. Yani ortalayacağımız şey daha çok sağa doğru kayıyor. Peki bunun için ne yapmamız gerekiyor diyecek olursanız.

Ortalayacağımız dive aşağıdaki özellikleri verirsek tam olarak divimiz ortalanacaktır.

> -webkit-transform: translate(-50%, -50%); /\* Chrome için ortalama değeri \*/
  
> -moz-transform: translate(-50%, -50%); /\* Mozilla için ortalama değeri \*/
  
> -ms-transform: translate(-50%, -50%); /\* Microsoft için ortalama değeri \*/
  
> -o-transform: translate(-50%, -50%); /\* Opera için ortalama değeri \*/
  
> transform: translate(-50%, -50%); /\* Genel ortalama değeri \*/

Herhangi bir sorun olmadan bu şekilde ortalayabilirsiniz. Aşağıdaki örnekten de **Result** kısmına tıklayarak sonuca bakabilirsiniz.



Herhangi bir hata ile karşılaşırsanız yorum yapın en kısa sürede cevap vermeye çalışırım. Bir sonraki yazımda görüşmek üzere 🙂