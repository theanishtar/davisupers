<template><div><!-- ---
layout: Post
title: Giới thiệu về lập trình hướng đối tượng trong Java
subtitle: Lập trình hướng đối tượng với Java
author: Theanishtar
date: 2023-06-09
useHeaderImage: false
headerImage: /img/in-post/2020-10-07/header.jpg
headerMask: rgba(30, 69, 110, 0.61)
permalinkPattern: /ebook/java/java-oop/:slug/
tags:
  - Java OOP
---

Hướng đối tượng là phương pháp lập trình phổ biến nhất hiện nay!!! Cùng mình tìm hiểu về OOP trog bài viết này nhé  -->
<!-- more -->
<h1 id="bai-3-tinh-ke-thua" tabindex="-1"><a class="header-anchor" href="#bai-3-tinh-ke-thua" aria-hidden="true">#</a> Bài 3. Tính kế thừa</h1>
<p>Lập trình hướng đối tượng gồm 4 tính chất chính: <a href="">Tính đóng gói</a>, <a href="">Tính đa hình</a>, <a href="">Tính kế thừa</a>, <a href="">Tính trừu tượng</a>.</p>
<h2 id="_1-ke-thua-inheritance" tabindex="-1"><a class="header-anchor" href="#_1-ke-thua-inheritance" aria-hidden="true">#</a> 1. Kế thừa (<code v-pre>Inheritance</code>)</h2>
<p>Trong <code v-pre>Java</code> các <code v-pre>attributes</code> và <code v-pre>methods</code> có thể kế thừa từ <code v-pre>class</code> khác.</p>
<p>Ở đây,chúng tôi gọi đó là <code v-pre>Inheritance</code>,  gồm 2 loại :</p>
<ul>
<li><code v-pre>subclass</code> (con) : <em>là <code v-pre>class</code> được kế thừa từ <code v-pre>class</code> khác</em></li>
<li><code v-pre>superclass</code> (cha) : là <code v-pre>class</code> thừa kế</li>
</ul>
<p>Ta sử dụng từ khoá <code v-pre>extends</code> để kế thừa từ một <code v-pre>class</code> :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Animals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"mèo"</span><span class="token punctuation">;</span> <span class="token comment">//thuộc tính</span>
    <span class="token keyword">public</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//phương thước</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Con vật đang chạy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Aminals</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> spec <span class="token operator">=</span> <span class="token string">"chó"</span><span class="token punctuation">;</span> <span class="token comment">//thuộc tính</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Dog</span> myDog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//tạo một object từ class Dog kế thừa từ Animals</span>
        myDog<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//gọi phương thức run() từ class Dog kế thừa từ Animals</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myDog<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> myDog<span class="token punctuation">.</span>spec<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Con vật đang chạy 
   mèo chó  */</span>
</code></pre></div><blockquote>
<p>⚠️ Hãy để ý ở lớp <code v-pre>Animals</code> tôi đã sử dụng <code v-pre>protected</code> để khai báo ==&gt; Vì nếu</p>
<ul>
<li>Đặt <code v-pre>private</code> thì lớp <code v-pre>Dog</code> sẽ không truy cập được</li>
<li>Đặt <code v-pre>public</code> thì không bảo đảm tính <strong>an toàn</strong> và <strong>đóng gói</strong></li>
</ul>
</blockquote>
<h4 id="oi-toi-khong-muon-ke-thua-cua-ai-het-toi-can-lam-sao" tabindex="-1"><a class="header-anchor" href="#oi-toi-khong-muon-ke-thua-cua-ai-het-toi-can-lam-sao" aria-hidden="true">#</a> Ôi, tôi không muốn kế thừa của ai hết, tôi cần làm sao ?</h4>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời
</b></summary>
<br>
<p>Sử dụng từ khoá <code v-pre>final</code> quốc dân thôi !!!</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Animals</span><span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animals</span><span class="token punctuation">{</span> <span class="token comment">// Dòng này sẽ lỗi ngay lập tức</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p>💡 Nếu bạn cố gắng kế thừa lớp <code v-pre>Animals</code> thì sẽ lỗi ngay !!!</p>
</blockquote>
</details>
<hr>
<h2 id="_2-đa-hinh-polymorphism" tabindex="-1"><a class="header-anchor" href="#_2-đa-hinh-polymorphism" aria-hidden="true">#</a> 2. Đa hình (<code v-pre>Polymorphism</code>)</h2>
<p><code v-pre>Polymorphism</code> có nghĩa là &quot;many forms&quot;, nhiều <code v-pre>class</code> liên quan với nhau <strong>kế thừa</strong> nhau</p>
<blockquote>
<p>💡 Như bạn đã biết thì <code v-pre>Interitance</code> sẽ cho phép <code v-pre>attributes</code> và <code v-pre>methods</code> kế thừa từ <code v-pre>class</code> khác. Thì <strong>đa hình</strong> có nghĩa là vẫn <code v-pre>methods</code> đó nhưng cách thức thực hiện khác nhau.</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png"> Ví dụ đơn giản</b></summary>
<br>
<p>🔥 Hiểu đơn giản, cũng là hàm <code v-pre>dientich()</code> để tính <strong>diện tích</strong>, nhưng nếu bạn nhập thông số của <strong>hình vuông</strong> nó sẽ ra <strong>diện tích hình vuông</strong>, nhập thông số <strong>hình chữ nhật</strong> thì sẽ ra <strong>diện tích hình chữ nhật</strong></p>
</details>
</blockquote>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">HinhHoc</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dienTich</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Tính diện tích hình học"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">HinhVuong</span> <span class="token keyword">extends</span> <span class="token class-name">HinhHoc</span><span class="token punctuation">{</span> <span class="token comment">// class hình vuông kế thừa từ class hình học</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">dienTich</span><span class="token punctuation">(</span><span class="token keyword">int</span> canh<span class="token punctuation">)</span><span class="token punctuation">{</span> 
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Diện tích hình vuông là "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>canh<span class="token operator">*</span>canh<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">HinhChuNhat</span> <span class="token keyword">extends</span> <span class="token class-name">HinhHoc</span><span class="token punctuation">{</span> <span class="token comment">// class hình chữ nhật kế thừa từ class hình học</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dienTich</span><span class="token punctuation">(</span><span class="token keyword">int</span> dai<span class="token punctuation">,</span><span class="token keyword">int</span> rong<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Diện tích hình chữ nhật là "</span> <span class="token operator">+</span> <span class="token punctuation">(</span>dai<span class="token operator">*</span>rong<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p>🔥 Như bạn đã thấy thì hàm <code v-pre>dienTich()</code> được lớp <code v-pre>HinhVuong</code> và lớp <code v-pre>HinhChuNhat</code> kế thừa từ lớp <code v-pre>HinhHoc</code> nhưng dĩ nhiên chức năng của nó khác nhau như sau :</p>
</blockquote>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">HinhHoc</span> hinhHoc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HinhHoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HinhVuong</span> hinhVuong <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HinhVuong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HinhChuNhat</span> hinhChuNhat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HinhChuNhat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hinhHoc<span class="token punctuation">.</span><span class="token function">dienTich</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hinhVuong<span class="token punctuation">.</span><span class="token function">dienTich</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hinhChuNhat<span class="token punctuation">.</span><span class="token function">dienTich</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Tính diện tích hình học
   Diện tích hình vuông là 25
   Diện tích hình chữ nhật là 15
*/</span>
</code></pre></div><blockquote>
<p>🚀 Sử dụng tốt <strong>đa hình</strong> và <strong>kế thừa</strong> sẽ khiến code của bạn có tính tái sử dụng cao (<em>chỉ cần viết 1 lần dùng cho các vấn đề tương tự</em>)</p>
</blockquote>
<hr>
<h2 id="_3-cac-class-long-nhau-inner-classes" tabindex="-1"><a class="header-anchor" href="#_3-cac-class-long-nhau-inner-classes" aria-hidden="true">#</a> 3. Các Class lồng nhau (<code v-pre>Inner Classes</code>)</h2>
<p>Trong <code v-pre>Java</code>, ta có thể viết các <code v-pre>class</code> này lồng <code v-pre>class</code> khác để làm cho code dễ bảo trì và dễ hiểu hơn.</p>
<h4 id="vay-lam-the-nao-đe-tao-mot-class-long-voi-class-khac" tabindex="-1"><a class="header-anchor" href="#vay-lam-the-nao-đe-tao-mot-class-long-voi-class-khac" aria-hidden="true">#</a> Vậy làm thế nào để tạo một <code v-pre>class</code> lồng với <code v-pre>class</code> khác ?</h4>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</b></summary>
<br>
<p>Hãy tạo một <code v-pre>Object</code> của <code v-pre>class</code> ngoài, sau đó tạo một <code v-pre>Object</code> của <code v-pre>class</code> trong, như sau :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> lopNgoai<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">class</span> lopTrong<span class="token punctuation">{</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        lopNgoai myOuter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">lopNgoai</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        lopNgoai<span class="token punctuation">.</span>lopTrong myInner <span class="token operator">=</span> myOuter<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token function">lopTrong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myInner<span class="token punctuation">.</span>y <span class="token operator">+</span> myOuter<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : 15 (5 + 10)</span>
</code></pre></div><blockquote>
<p>💡 Như bạn đã thấy thì thì lớp <code v-pre>lopTrong</code> nằm trong lớp <code v-pre>lopNgoai</code>, vì thế chúng ta cũng có cách khai báo như trên.</p>
</blockquote>
</details>
<br>
<h4 id="cac-class-trong-co-the-truy-cap-len-class-ngoai-đuoc-khong" tabindex="-1"><a class="header-anchor" href="#cac-class-trong-co-the-truy-cap-len-class-ngoai-đuoc-khong" aria-hidden="true">#</a> Các <code v-pre>class</code> trong có thể truy cập lên <code v-pre>class</code> ngoài được không ?</h4>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</b></summary>
<br>
<p>Dĩ nhiên là được, vì đó là lợi thế của việc sử dụng <code v-pre>Inner Classes</code>, như sau :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> lopNgoai<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">class</span> lopTrong<span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">myInnerMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> x<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        lopNgoai myOuter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">lopNgoai</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        lopNgoai<span class="token punctuation">.</span>lopTrong myInner <span class="token operator">=</span> myOuter<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token function">lopTrong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myInner<span class="token punctuation">.</span><span class="token function">myInnerMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : 10</span>
</code></pre></div></details>
<br>
<blockquote>
<p>💡 Bạn cũng có thể khai báo <code v-pre>class</code> bên trong là <code v-pre>static</code> để có thể sử dụng mà không cần tạo <code v-pre>Object</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png"> Cụ thể như sau:</b></summary>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> lopNgoai<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> lopTrong<span class="token punctuation">{</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        lopNgoai<span class="token punctuation">.</span>lopTrong myInner <span class="token operator">=</span> <span class="token keyword">new</span> lopNgoai<span class="token punctuation">.</span><span class="token function">lopTrong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myInner<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output : 5</span>
</code></pre></div></details>
<blockquote>
<p>⚠️  Sử dụng <code v-pre>static</code> sẽ làm cho <code v-pre>class</code> trong không thể truy cập <code v-pre>class</code> ngoài ==&gt; <code v-pre>myInner.x</code> là sai và lỗi.</p>
</blockquote>
</div></template>
