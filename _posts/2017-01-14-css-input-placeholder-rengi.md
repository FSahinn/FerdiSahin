---
title: CSS Input Placeholder Rengi
date: 2017-01-14 21:42:55 Z
permalink: "/css-input-placeholder-rengi/"
categories:
- CSS
tags:
- css input placeholder rengi
- input placeholder color
- input placeholder rengi
id: 39
author: fsahin
layout: post
guid: http://www.frdshn.com/?p=39
image:
  feature: the-difference-placeholder.png
---

Merhaba arkadaşlar, yeni yazım ile karşınızdayım. Her ne kadar sürekli yazı yazamasamda sizin için yararlı olabilecek yazıları yazmaya çalışıyorum. Umarım bu yazımda bilmeyen arkadaşlara yardımcı olur.

Her ne kadar CSS&#8217;e aşina olsanızda bazen yapamadığınız şeyler olabilir ve sinirleriniz doğal olarak bozulabilir.

Eğer CSS&#8217;e yeni başladıysanız ve tasarım yaparken Input&#8217;un Placeholder rengini değiştiremediğinizi farkettiyseniz doğru yazıya geldiniz demektir 😀

Yapmanız gereken şey tam olarak şudur:

> <span class="token selector"><span class="token pseudo-element">.sinif::-webkit-input-placeholder</span> </span><span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* Chrome/Opera/Safari için */</span>
> 
> <span class="token property">color</span><span class="token punctuation">:</span> #2d2d2d<span class="token punctuation">;</span>
> 
> <span class="token punctuation">}</span>
> 
> <span class="token selector"><span class="token pseudo-element">.sinif::-moz-placeholder</span> </span><span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* Firefox 19+ ve üstü */</span>
> 
> <span class="token property">color</span><span class="token punctuation">:</span> #2d2d2d<span class="token punctuation">;</span>
> 
> <span class="token punctuation">}</span>
> 
> <span class="token selector"><span class="token pseudo-class">.sinif:-ms-input-placeholder</span> </span><span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* IE 10+ ve üst */</span>
> 
> <span class="token property">color</span><span class="token punctuation">:</span> #2d2d2d<span class="token punctuation">;</span>
> 
> <span class="token punctuation">}</span>
> 
> <span class="token selector"><span class="token pseudo-class">.sinif:-moz-placeholder</span> </span><span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* Firefox 18- ve altı */</span>
> 
> <span class="token property">color</span><span class="token punctuation">:</span> #2d2d2d<span class="token punctuation">;</span>
> 
> <span class="token punctuation">}</span>

Bu şekilde yaptığınızda Input&#8217;ların Placeholder rengini değiştirebilirsiniz. Umarım yardımcı olabilmişimdir. Herhangi bir sorun olursa yorum kısmından yorum yapmayı unutmayın.

Bir sonraki yazımda görüşmek üzere 🙂