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
<h1 id="bai-5-tinh-truu-tuong" tabindex="-1"><a class="header-anchor" href="#bai-5-tinh-truu-tuong" aria-hidden="true">#</a> Bài 5. Tính trừu tượng</h1>
<p>Lập trình hướng đối tượng gồm 4 tính chất chính: <a href="">Tính đóng gói</a>, <a href="">Tính đa hình</a>, <a href="">Tính kế thừa</a>, <a href="">Tính trừu tượng</a>.</p>
<h2 id="_1-abstract" tabindex="-1"><a class="header-anchor" href="#_1-abstract" aria-hidden="true">#</a> 1. Abstract</h2>
<p><code v-pre>Data Abstact</code> (<em>trừu tượng dữ liệu</em>) có nghĩa là ẩn một số chi tiết nhất định và hiển thị những thứ cần thiết cho người dùng.</p>
<blockquote>
<p>💡 Hiểu đơn giản thì bạn gọi một món ăn thì bạn không cần phải biết quy trình nấu ăn, công thức nấu... chỉ cần ăn thôi.</p>
</blockquote>
<p>Từ khoá <code v-pre>abstract</code> là một <code v-pre>non-access modifier</code> bạn đã học trong bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/2.Modifier.md" target="_blank" rel="noopener noreferrer">Phạm vi truy cập</a> , sử dụng cho <code v-pre>classes</code> và <code v-pre>methods</code> :</p>
<ul>
<li><code v-pre>Abstract class</code> : đây là một <code v-pre>class</code> không được sử dụng để tạo <code v-pre>Object</code> (<em>nó chỉ dùng để kế thừa</em>).</li>
<li><code v-pre>Abstact method</code> : có thể sử dụng trong <code v-pre>Abstract class</code> và không có phần <code v-pre>body</code> (<em>phần <code v-pre>body</code> được cung cấp bởi <code v-pre>subclass</code> hoặc kế thừa từ nó</em>).</li>
</ul>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">animalSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Zzz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p>⚠️ Không thể tạo <code v-pre>Object</code> từ một lớp <code v-pre>Abstract</code> như sau :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">Animal</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// sẽ lỗi</span>
</code></pre></div></blockquote>
<h3 id="đe-truy-cap-vao-abstract-class-thi-ta-phai-lam-sao" tabindex="-1"><a class="header-anchor" href="#đe-truy-cap-vao-abstract-class-thi-ta-phai-lam-sao" aria-hidden="true">#</a> Để truy cập vào <code v-pre>abstract class</code>, thì ta phải làm sao ?</h3>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</b></summary>
<br>
<p>Nó phải được kế thừa từ <code v-pre>class</code> khác. Hãy đổi lớp <code v-pre>Animal</code> mà ta sử udng5</p>
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
<span class="token comment">/* Con mèo kêu : mèo méo meo
   Zzz  */</span>
</code></pre></div><blockquote>
<p>💡 Như bạn đã thấy, <code v-pre>abstract class</code> chỉ cho phép kế thừa nó, và ta sử dụng thôi, dễ mà !!!</p>
</blockquote>
</details>
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
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//không có body => gọi là interface method</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p>🔥 Để truy cập vào <code v-pre>Interface Methods</code> ta phải dùng từ khoá <code v-pre>implements</code> (<em>thay vì sử dụng <code v-pre>extends</code></em>) như sau :</p>
</blockquote>
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
</code></pre></div><blockquote>
<p>🧨 Tính chất của <code v-pre>Interface</code> :</p>
<ul>
<li>Các <code v-pre>Interface methods</code> không có phần <code v-pre>body</code>, được cung cấp bởi lớp <code v-pre>implement</code></li>
<li>Về việc dùng <code v-pre>Interface</code>, bạn phải ghi đè lại tất cả <code v-pre>methods</code></li>
<li>Mặc định thì <code v-pre>Interface methods</code> là <code v-pre>abstract</code> và <code v-pre>public</code></li>
<li>Mặc định thì <code v-pre>Interface attributes</code> là <code v-pre>public</code>, <code v-pre>static</code>, <code v-pre>final</code></li>
</ul>
<p>⚠️ Các lưu ý sau :</p>
<ul>
<li>Giống như <code v-pre>abstract class</code>, <code v-pre>interface</code> không sử dụng để tạo <code v-pre>Object</code></li>
<li>Một <code v-pre>Interface</code> không thể chứa <code v-pre>constructor</code></li>
</ul>
</blockquote>
<h3 id="tai-sao-ta-phai-su-dung-interface" tabindex="-1"><a class="header-anchor" href="#tai-sao-ta-phai-su-dung-interface" aria-hidden="true">#</a> Tại sao ta phải sử dụng <code v-pre>Interface</code> ?</h3>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</b></summary>
<br>
<ul>
<li>Để được sử bảo mật an toàn.</li>
<li><code v-pre>Java</code> không hỗ trợ <code v-pre>multiple inheritance</code> (<em>đa kế thừa</em>) - tức là một <code v-pre>class</code> có thể kế thừa từ một <code v-pre>subclass</code> ==&gt; Tuy nhiên ta có thể làm được điều đó bằng cách sử dụng <code v-pre>Interface</code></li>
</ul>
<blockquote>
<p>💭 Đơn giản hơn là khi bạn vào nhà hàng, người ta sẽ đưa cho bạn cái menu chọn món, chứ không ai lại dẫn bạn vào nhà bếp coi món nào để chọn ==&gt; <code v-pre>Interface</code> là cái menu đó.</p>
</blockquote>
</details>
<br>
<h3 id="o-tren-noi-co-the-dung-interface-đe-đa-ke-thua-vay-dung-sao" tabindex="-1"><a class="header-anchor" href="#o-tren-noi-co-the-dung-interface-đe-đa-ke-thua-vay-dung-sao" aria-hidden="true">#</a> Ở trên nói có thể dùng <code v-pre>Interface</code> để đa kế thừa, vậy dùng sao ?</h3>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời</b></summary>
<br>
<p>Ta sử dụng từ khoá <code v-pre>implement</code> đến nhiều <code v-pre>Interface</code> cách nhau bởi dấu <code v-pre>;</code> như sau :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">interface</span> <span class="token function">firstInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myMethod1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token function">secondInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myMethod2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">implements</span> firstInterface<span class="token punctuation">,</span> secondInterface <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myMethod1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"bla bla bla"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myMethod2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ble ble ble"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DemoClass</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DemoClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myObj<span class="token punctuation">.</span><span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myObj<span class="token punctuation">.</span><span class="token function">myOtherMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* bla bla bla
   ble ble ble */</span>
</code></pre></div></details></div></template>
