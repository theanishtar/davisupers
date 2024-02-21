<template><div><!-- ---
layout: Post
title: Giới thiệu về lập trình hướng đối tượng trong Java
subtitle: Lập trình hướng đối tượng với Java
author: Theanishtar
date: 2023-06-09
useHeaderImage: false
headerImage: /img/in-post/2020-10-07https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/1.png?raw=true
headerMask: rgba(30, 69, 110, 0.61)
permalinkPattern: /ebook/java/java-oop/:slug/
tags:
  - Java OOP
---

Hướng đối tượng là phương pháp lập trình phổ biến nhất hiện nay!!! Cùng mình tìm hiểu về OOP trog bài viết này nhé  -->
<!-- more -->
<h1 id="bai-5-tinh-truu-tuong" tabindex="-1"><a class="header-anchor" href="#bai-5-tinh-truu-tuong" aria-hidden="true">#</a> Bài 5. Tính trừu tượng</h1>
<p>Lập trình hướng đối tượng gồm 4 tính chất chính: <a href="">Tính đóng gói</a>, <a href="">Tính đa hình</a>, <a href="">Tính kế thừa</a>, <a href="">Tính trừu tượng</a>.</p>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/1.png?raw=true" alt="Image 1" style="width:500px; height:50%;">
<details class="custom-container details"><summary><b>Nội dung chính</b></summary>
<br>
<div class="scroll" style="width: 100%; overflow-x: auto; white-space: nowrap;">
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/1.png?raw=true" alt="Image 1" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/2.png?raw=true" alt="Image 2" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/3.png?raw=true" alt="Image 3" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/4.png?raw=true" alt="Image 1" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/5.png?raw=true" alt="Image 1" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/6.png?raw=true" alt="Image 1" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/7.png?raw=true" alt="Image 1" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/8.png?raw=true" alt="Image 1" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/9.png?raw=true" alt="Image 1" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/10.png?raw=true" alt="Image 1" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/11.png?raw=true" alt="Image 1" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/12.png?raw=true" alt="Image 1" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/13.png?raw=true" alt="Image 1" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <div style="display: inline-block; margin-right: 15px;">
    <img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/14.png?raw=true" alt="Image 1" style="width:500px; height:50%;object-fit: cover; margin:0px;">
  </div>
  <!-- Add more slides as needed -->
</div>
</details>
<h2 id="_1-abstract" tabindex="-1"><a class="header-anchor" href="#_1-abstract" aria-hidden="true">#</a> 1. Abstract</h2>
<p><code v-pre>Data Abstact</code> (<em>trừu tượng dữ liệu</em>) có nghĩa là ẩn một số chi tiết nhất định và hiển thị những thứ cần thiết cho người dùng.</p>
<blockquote>
<p>💡 Hiểu đơn giản thì bạn gọi một món ăn thì bạn không cần phải biết quy trình nấu ăn, công thức nấu... chỉ cần ăn thôi.</p>
</blockquote>
<p>Từ khoá <code v-pre>abstract</code> là một <code v-pre>non-access modifier</code>, sử dụng cho <code v-pre>classes</code> và <code v-pre>methods</code> :</p>
<ul>
<li><code v-pre>Abstract class</code> : đây là một <code v-pre>class</code> không được sử dụng để tạo <code v-pre>Object</code> (<em>nó chỉ dùng để kế thừa</em>).</li>
<li><code v-pre>Abstact method</code> : có thể sử dụng trong <code v-pre>Abstract class</code> và không có phần <code v-pre>body</code> (<em>phần <code v-pre>body</code> được cung cấp bởi <code v-pre>subclass</code> hoặc kế thừa từ nó</em>).</li>
</ul>
<h3 id="lop-truu-tuong" tabindex="-1"><a class="header-anchor" href="#lop-truu-tuong" aria-hidden="true">#</a> Lớp trừu tượng</h3>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span> <span class="token comment">//lớp trừu tượng</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">animalSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//phương thức trừu tượng</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Zzz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="thuc-thi" tabindex="-1"><a class="header-anchor" href="#thuc-thi" aria-hidden="true">#</a> Thực thi</h4>
<p>⚠️ Không thể tạo <code v-pre>Object</code> từ một lớp <code v-pre>Abstract</code> như sau :</p>
<blockquote>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">Animal</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// sẽ lỗi</span>
</code></pre></div></blockquote>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<ul>
<li>Lớp trừu tượng không thể khởi tạo bằng từ khóa <code v-pre>new</code></li>
<li>Để sử dụng được lớp trừu tượng, ta cần tạo một lớp thỏa mãn hai yêu cầu sau:
<ul>
<li>Lớp này không phải là lớp trừu tượng (Abstract Class)</li>
<li>Lớp này sẽ kế thừa và trở thành lớp con của lớp trừu tượng</li>
</ul>
</li>
</ul>
</div>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token comment">//khai báo lớp abstract</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">animalSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Zzz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//khai báo subclass (kế thừa từ lớp Animal)</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">animalSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"mèo méo meo mèo meo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Cat</span> myCat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myCat<span class="token punctuation">.</span><span class="token function">animalSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myCat<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* mèo méo meo
   Zzz  */</span>
</code></pre></div><blockquote>
<p>💡 Như bạn đã thấy, <code v-pre>abstract class</code> chỉ cho phép kế thừa nó, và ta sử dụng thôi, dễ mà !!!</p>
</blockquote>
<blockquote>
<p>🚀 Ta sử dụng tính <code v-pre>Abstract</code> (<em>trừu tượng</em>) để :</p>
<ul>
<li>Bảo đảm tính <strong>bảo mật</strong> (<em>ẩn các chi tiết quan trọng và chỉ hiển thị thứ cần thiết</em>)</li>
</ul>
</blockquote>
<hr>
<h2 id="_2-interface" tabindex="-1"><a class="header-anchor" href="#_2-interface" aria-hidden="true">#</a> 2. Interface</h2>
<p><code v-pre>Interfect</code> là một bản thiết kế cho <code v-pre>abstract class</code>, được sử dụng để nhóm các <code v-pre>methods</code> với phần <code v-pre>body</code> trống :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token comment">//interface</span>
<span class="token keyword">interface</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">animalSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//không có body => gọi là interface methods =</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//không có body => gọi là interface method, cũng được xem là phương thức trừu tượng</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Để truy cập vào <code v-pre>Interface Methods</code> ta phải dùng từ khoá <code v-pre>implements</code> (<em>thay vì sử dụng <code v-pre>extends</code></em>) như sau :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">animalSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">animalSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Con mèo kêu : mèo méo meo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Cat</span> myCat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myCat<span class="token punctuation">.</span><span class="token function">animalSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myCat<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Con mèo kêu mèo méo meo
   Zzz, khò khò  */</span>
</code></pre></div><h3 id="tinh-chat-cua-interface" tabindex="-1"><a class="header-anchor" href="#tinh-chat-cua-interface" aria-hidden="true">#</a> Tính chất của <code v-pre>Interface</code></h3>
<blockquote>
<ul>
<li>Các <code v-pre>Interface methods</code> không có phần <code v-pre>body</code>, được cung cấp bởi lớp <code v-pre>implement</code></li>
<li>Về việc dùng <code v-pre>Interface</code>, bạn phải ghi đè lại tất cả <code v-pre>methods</code></li>
<li>Mặc định thì <code v-pre>Interface methods</code> là <code v-pre>abstract</code> và <code v-pre>public</code></li>
<li>Mặc định thì <code v-pre>Interface attributes</code> là <code v-pre>public</code>, <code v-pre>static</code>, <code v-pre>final</code></li>
</ul>
</blockquote>
<h3 id="cac-luu-y" tabindex="-1"><a class="header-anchor" href="#cac-luu-y" aria-hidden="true">#</a> Các lưu ý</h3>
<ul>
<li>Giống như <code v-pre>abstract class</code>, <code v-pre>interface</code> không sử dụng để tạo <code v-pre>Object</code></li>
<li>Một <code v-pre>Interface</code> không thể chứa <code v-pre>constructor</code></li>
</ul>
<h3 id="tai-sao-ta-phai-su-dung-interface" tabindex="-1"><a class="header-anchor" href="#tai-sao-ta-phai-su-dung-interface" aria-hidden="true">#</a> Tại sao ta phải sử dụng <code v-pre>Interface</code> ?</h3>
<br>
<ul>
<li>Để được sử bảo mật an toàn.</li>
<li><code v-pre>Java</code> không hỗ trợ <code v-pre>multiple inheritance</code> (<em>đa kế thừa</em>), tức là một <code v-pre>class</code> có thể kế thừa từ một <code v-pre>subclass</code> ==&gt; Tuy nhiên ta có thể làm được điều đó bằng cách sử dụng <code v-pre>Interface</code> (Xem lại bài <RouterLink to="/java-oop/session3.html">Tính kế thừa</RouterLink>)</li>
</ul>
<blockquote>
<p>💭 Đơn giản hơn là khi bạn vào nhà hàng, người ta sẽ đưa cho bạn cái menu chọn món, chứ không ai lại dẫn bạn vào nhà bếp coi món nào để chọn ==&gt; <code v-pre>Interface</code> là cái menu đó.</p>
</blockquote>
<h2 id="so-sanh-interface-va-absctract" tabindex="-1"><a class="header-anchor" href="#so-sanh-interface-va-absctract" aria-hidden="true">#</a> So sánh Interface và Absctract</h2>
<h3 id="cac-phuong-thuc" tabindex="-1"><a class="header-anchor" href="#cac-phuong-thuc" aria-hidden="true">#</a> Các phương thức</h3>
<ul>
<li>Tất cả phương thức trong Interface đều là phương thức trừu tượng (không có phần thân). Từ Java8 có thêm các phương thức <code v-pre>default</code>, <code v-pre>static</code></li>
<li>Abstract Class thì có cả các loại phương thức khác</li>
</ul>
<h3 id="cac-bien" tabindex="-1"><a class="header-anchor" href="#cac-bien" aria-hidden="true">#</a> Các biến</h3>
<ul>
<li>Trong Interface, các biến là <code v-pre>final</code> (constant) và <code v-pre>static</code></li>
<li>Abstract Class có thể <code v-pre>final</code> hoặc không, <code v-pre>static</code> hoặc không</li>
</ul>
<h3 id="thuc-thi-1" tabindex="-1"><a class="header-anchor" href="#thuc-thi-1" aria-hidden="true">#</a> Thực thi</h3>
<ul>
<li>Để triển khai một Interface ta sẽ dừng từ khóa implements</li>
<li>Abstract Class thì dùng extends</li>
</ul>
<h3 id="ke-thua" tabindex="-1"><a class="header-anchor" href="#ke-thua" aria-hidden="true">#</a> Kế thừa</h3>
<ul>
<li>Interface có thể extends từ các Interfaces khác</li>
<li>Abstract Class thể thể extends một lớp khác và implements nhiều interfaces</li>
</ul>
<h3 id="truu-tuong" tabindex="-1"><a class="header-anchor" href="#truu-tuong" aria-hidden="true">#</a> Trừu tượng</h3>
<ul>
<li>Interface đạt được trừu tượng toàn phần (chứa các <code v-pre>non-abstract method</code>)</li>
<li>Abstract Class chỉ đath trừu tượng một phần</li>
</ul>
<h3 id="kha-nang-truy-cap" tabindex="-1"><a class="header-anchor" href="#kha-nang-truy-cap" aria-hidden="true">#</a> Khả năng truy cập</h3>
<ul>
<li>Interface mặc định các methods, attribute là <code v-pre>public</code></li>
<li>Abstract Class có thể tất cả như <code v-pre>private</code>, <code v-pre>protected</code></li>
</ul>
</div></template>
