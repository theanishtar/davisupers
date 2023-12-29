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
<h1 id="bai-2-tinh-đong-goi" tabindex="-1"><a class="header-anchor" href="#bai-2-tinh-đong-goi" aria-hidden="true">#</a> Bài 2. Tính đóng gói</h1>
<p>Lập trình hướng đối tượng gồm 4 tính chất chính: <a href="">Tính đóng gói</a>, <a href="">Tính đa hình</a>, <a href="">Tính kế thừa</a>, <a href="">Tính trừu tượng</a>.</p>
<p><strong>Tính đóng gói</strong> (encapsulation) là một trong những nguyên tắc chính của lập trình hướng đối tượng (OOP) trong Java và các ngôn ngữ lập trình khác. Nó là một kỹ thuật để bảo vệ dữ liệu và hành động của một đối tượng hoặc một class từ việc truy cập và thay đổi bởi các đối tượng hoặc class khác.</p>
<p>Trong tất cả mọi bài trước, bạn đã rất quen thuộc với <code v-pre>public</code> trong ví dụ sau :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token comment">// code...</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p>🔥 Là một từ khoá <code v-pre>access modifier</code> (<em>Phạm vi truy cập</em>), sử dụng để đặt các mức độ sử dụng cho <code v-pre>classes</code>, <code v-pre>attributes</code>, <code v-pre>methods</code> và <code v-pre>constructors</code>...</p>
</blockquote>
<p>Có 2 loại <code v-pre>Modifiers</code> :</p>
<ul>
<li><code v-pre>Access Modifiers</code> : <em>kiểm soát mức độ truy cập</em></li>
<li><code v-pre>Non-Access Modifiers</code> : <em>không kiểm soát nhưng cung cấp các chức năng khác</em></li>
</ul>
<hr>
<h2 id="_1-access-modifiers" tabindex="-1"><a class="header-anchor" href="#_1-access-modifiers" aria-hidden="true">#</a> 1. Access Modifiers</h2>
<p>🧚‍♂️ <strong>Đối với</strong> <code v-pre>classes</code>, bạn có thể sử dụng <code v-pre>public</code> và <code v-pre>default</code></p>
<table>
<thead>
<tr>
<th>Modifier</th>
<th>Mô tả</th>
<th>Lưu ý</th>
</tr>
</thead>
<tbody>
<tr>
<td>public</td>
<td><code v-pre>class</code> có thể được truy cập bởi bất kỳ <code v-pre>class</code> nào khác</td>
<td></td>
</tr>
<tr>
<td>default</td>
<td><code v-pre>class</code> chỉ được truy cập bởi <code v-pre>class</code> chung <code v-pre>package</code></td>
<td>💡 Tìm hiểu <code v-pre>package</code> tại bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/3.Pkg%26Encapsulation.md" target="_blank" rel="noopener noreferrer">Package và Tính đóng gói</a></td>
</tr>
</tbody>
</table>
<p>🧚‍♂️ <strong>Đối với</strong> <code v-pre>attributes</code>, <code v-pre>methods</code>, <code v-pre>constructors</code> bạn có thể sử dụng như sau:</p>
<table>
<thead>
<tr>
<th>Modifier</th>
<th>Mô tả</th>
<th>Lưu ý</th>
</tr>
</thead>
<tbody>
<tr>
<td>public</td>
<td><code v-pre>code</code> có thể truy cập cho tất cả <code v-pre>classes</code></td>
<td></td>
</tr>
<tr>
<td>private</td>
<td><code v-pre>code</code> chỉ có thể truy cập trong <code v-pre>class</code> đã khai báo (<em>xem bài</em>)</td>
<td></td>
</tr>
<tr>
<td>default</td>
<td><code v-pre>code</code> chỉ có thể truy cập trong cùng <code v-pre>package</code> (<em>xem package tại</em>)</td>
<td>💡Tìm hiểu <code v-pre>package</code> tại bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/3.Pkg%26Encapsulation.md" target="_blank" rel="noopener noreferrer">Package và Tính đóng gói</a></td>
</tr>
<tr>
<td>protected</td>
<td><code v-pre>code</code> có thể truy cập trong cùng <code v-pre>package</code> và <code v-pre>subclasses</code> (<em>class con</em>).</td>
<td>💡 Tìm hiểu về kế thừa tại bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/4.Inheritance%26Polymorphism.md" target="_blank" rel="noopener noreferrer">Tính kế thừa và Đa hình</a></td>
</tr>
</tbody>
</table>
<blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-05-59-Know How.png"> Cách hiểu đơn giản như sau:</b></summary>
<br>
<ul>
<li>
<p><code v-pre>public</code> là công khai truy cập được mọi nơi,</p>
</li>
<li>
<p><code v-pre>private</code> là riêng tư chỉ truy cập được trong khu vực nó khai báo</p>
</li>
<li>
<p><code v-pre>default</code> chỉ truy cập trong <code v-pre>package</code></p>
</li>
<li>
<p><code v-pre>protected</code> chỉ truy cập trong <code v-pre>package</code> và <code v-pre>class</code> con.</p>
</li>
</ul>
<p>==&gt; <code v-pre>public</code> &gt; <code v-pre>protected</code> &gt; <code v-pre>default</code> &gt; <code v-pre>private</code></p>
</details>
</blockquote>
<hr>
<h2 id="_2-non-access-modifiers" tabindex="-1"><a class="header-anchor" href="#_2-non-access-modifiers" aria-hidden="true">#</a> 2. Non-Access Modifiers</h2>
<p>🧚‍♂️ <strong>Đối với</strong> <code v-pre>classes</code>, bạn có thể sử dụng <code v-pre>final</code> và <code v-pre>abstract</code></p>
<table>
<thead>
<tr>
<th>Modifier</th>
<th>Mô tả</th>
<th>Lưu ý</th>
</tr>
</thead>
<tbody>
<tr>
<td>final</td>
<td><code v-pre>class</code> không thể thừa kế bởi các <code v-pre>classes</code> khác</td>
<td>💡 Tìm hiểu về kế thừa tại bài <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/4.Inheritance%26Polymorphism.md" target="_blank" rel="noopener noreferrer">Tính kế thừa và Đa hình</a></td>
</tr>
<tr>
<td>abstract</td>
<td><code v-pre>class</code> không thể sử dụng để tạo <code v-pre>objects</code></td>
<td>⚠️ để truy cập một <code v-pre>class</code> <code v-pre>abstract</code> , nó phải kế thừa thì <code v-pre>class</code> khác</td>
</tr>
</tbody>
</table>
<p>🧚‍♂️ <strong>Đối với</strong> <code v-pre>attributes</code>, <code v-pre>methods</code>, <code v-pre>constructors</code> bạn có thể sử dụng như sau:</p>
<table>
<thead>
<tr>
<th>Modifier</th>
<th>Mô tả</th>
<th>Lưu ý</th>
</tr>
</thead>
<tbody>
<tr>
<td>final</td>
<td><code v-pre>Atrributes</code> và <code v-pre>methods</code> không để sửa đổi</td>
<td></td>
</tr>
<tr>
<td>static</td>
<td><code v-pre>Attributes</code> và <code v-pre>methods</code> thuộc về <code v-pre>class</code> chứ không phải <code v-pre>objects</code></td>
<td></td>
</tr>
<tr>
<td>abstract</td>
<td>chỉ có thể sử dụng trên một <code v-pre>abstract class</code> và <code v-pre>methods</code>.</td>
<td>⚠️ <code v-pre>methods</code> không có body, như <code v-pre>abstact void run();</code><br>body được cung cấp bởi <code v-pre>subclass</code> (được kế thừa)</td>
</tr>
<tr>
<td>transient</td>
<td><code v-pre>Attributes</code> và <code v-pre>Methods</code> có thể bỏ qua khi tuần tự hoá <code v-pre>object</code> chứa chúng</td>
<td></td>
</tr>
<tr>
<td>synchronized</td>
<td><code v-pre>Methods</code> chỉ có thể truy cập mỗi lần một <code v-pre>thread</code></td>
<td></td>
</tr>
<tr>
<td>volatile</td>
<td>Giá trị của <code v-pre>attribute</code> không được lưu trong <code v-pre>thread-locally</code>, và luôn đọc từ <code v-pre>main memory</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="giai-thich-cu-the-tung-modifier" tabindex="-1"><a class="header-anchor" href="#giai-thich-cu-the-tung-modifier" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png" alt="ithubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png">Giải thích cụ thể từng <code v-pre>modifier</code></h3>
<ul>
<li>
<details>
<summary><b>🤖 Final</b></summary>
<br>
<p>Nếu bạn không muốn bất kỳ chỉnh sửa nào thì khai báo <code v-pre>final</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-33-28-Ảnh chụp Màn hình 2021-02-02 lúc 14.33.22.png" alt="Ảnh chụp Màn hình 2021-02-02 lúc 14.33.22.png"></p>
<blockquote>
<p>💡 Sẽ gặp lỗi ngay nếu bạn cố thay đổi nó.</p>
</blockquote>
</details>
</li>
<li>
<details>
<summary><b>🤖 Static</b></summary>
<br>
<p>Nó có truy cập mà không cần tạo một <code v-pre>Object</code> của <code v-pre>class</code>, không như <code v-pre>public</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">myStatic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// tạo một method static</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Đây là static"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myPublic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// tạo một method public</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Đây là Public"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">myStatic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">Demo</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      myObj<span class="token punctuation">.</span><span class="token function">myPublic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*Đây là static
  Đây là Public */</span>
</code></pre></div><blockquote>
<p>🔥 Như bạn đã thấy thì khi khai báo <code v-pre>static</code> không cần thông qua <code v-pre>Object</code></p>
</blockquote>
</details>
</li>
<li>
<details>
<summary><b>🤖 Abstract</b></summary>
<br>
<p>Một phương thức trừu tượng (<code v-pre>abstract</code>) của một lớp trừu tượng và nó không có phần body, body được cung cấp từ <code v-pre>subclasses</code> như sau:</p>
</details>
</li>
</ul>
<h2 id="_1-encapsulation" tabindex="-1"><a class="header-anchor" href="#_1-encapsulation" aria-hidden="true">#</a> 1. Encapsulation</h2>
<p>Có nghĩa đơn giản là đảm bảo dữ liệu (<em>nhạy cảm</em>) được ẩn khỏi người dùng, Để làm điều đó, bạn phải :</p>
<ul>
<li>Khai báo <code v-pre>class</code>,<code v-pre>variables</code>, <code v-pre>attributes</code> dạng  <code v-pre>private</code></li>
<li>Cung cấp phương thức <code v-pre>get</code> và <code v-pre>set</code> truy cập công khai và cập nhật giá trị của biến <code v-pre>private</code></li>
</ul>
<h3 id="tai-sao-phai-su-dung-encapsulation-đong-goi" tabindex="-1"><a class="header-anchor" href="#tai-sao-phai-su-dung-encapsulation-đong-goi" aria-hidden="true">#</a> Tại sao phải sử dụng Encapsulation - đóng gói ?</h3>
<details>
<summary>
<b>Trả lời </b>
</summary>
<br>
<ul>
<li>Kiểm soát tốt hơn <code v-pre>Attributes</code> và <code v-pre>Methods</code> của <code v-pre>Class</code></li>
<li><code v-pre>Attributes</code> của <code v-pre>Class</code> có thể đặt ở chế độ <code v-pre>read-only</code> hay <code v-pre>write-only</code> (<em>nếu bạn sử dụng set &amp; get</em>)</li>
<li>Linh hoạt hơn, có thể thay đổi thành phần mã mà không ảnh hưởng các phần khác.</li>
<li>Tăng độ bảo mật</li>
</ul>
</details>
<h3 id="get-va-set" tabindex="-1"><a class="header-anchor" href="#get-va-set" aria-hidden="true">#</a> Get và Set</h3>
<p>Như bạn đã biết khi đặt biến <code v-pre>private</code> thì chỉ có thể truy cập trong <code v-pre>class</code> đó (<em>các <code v-pre>class</code> khác không truy cập được</em>).</p>
<blockquote>
<p>🔥 Tuy nhiên có thể truy cập được chúng nếu bạn cung cấp phương thức <code v-pre>set</code> và <code v-pre>get</code> công khai</p>
<ul>
<li><code v-pre>set</code> là đặt giá trị</li>
<li><code v-pre>get</code> là trả về giá trị</li>
</ul>
<p>⚠️ Cú pháp theo sau là tên của biến và chữ cái đầu viết hoa.</p>
</blockquote>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span> <span class="token comment">//khai báo truy cập giới hạn</span>

     <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// trả về giá trị của tên biến</span>
         <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">//this tượng trưng cho object hiện tại</span>
     <span class="token punctuation">}</span>

     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> newName<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//nhận tham số newName và gán là biến name</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> newName<span class="token punctuation">;</span> <span class="token comment">//this tượng trưng cho object hiện tại</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p>🔥 Như bạn đã thấy thì trong <code v-pre>get</code> và <code v-pre>set</code> thì luôn có từ <code v-pre>this</code></p>
<p>Vậy <code v-pre>this</code> là gì ?</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời </b></summary>
<br>
<p><code v-pre>this</code> nghĩa là nó, thực chất là một biến tham chiếu tới <code v-pre>object</code> hiện tại trong một <code v-pre>methods</code> hoặc <code v-pre>constructor</code>, có thể sử dụng để :</p>
<ul>
<li>Gọi <code v-pre>constructor</code> | <code v-pre>method</code> | <code v-pre>object</code> của class hiện tại</li>
<li>Truyền một đối số trong lệnh gọi <code v-pre>method</code> hoặc <code v-pre>constructor</code></li>
</ul>
</details>
</blockquote>
<blockquote>
<p>⚠️ Không nên khai báo biến là <code v-pre>public</code> ==&gt; Bởi <code v-pre>đóng gói</code> mà show ra ngoài thì còn gì là đóng nữa.</p>
</blockquote>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">Person</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     myObj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Zen"</span><span class="token punctuation">;</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myObj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token comment">// output : Zen</span>
</code></pre></div><blockquote>
<p>👨‍🚒 Bạn có thể <code v-pre>getName()</code> và <code v-pre>setName()</code> để cập nhật biến như sau :</p>
</blockquote>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Person</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myObj<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"Zen"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myObj<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token comment">// output : Zen</span>
</code></pre></div><hr>
<h2 id="_2-package-api" tabindex="-1"><a class="header-anchor" href="#_2-package-api" aria-hidden="true">#</a> 2. Package &amp; API</h2>
<p><code v-pre>Package</code> được sử dụng để nhóm nhiều <code v-pre>class</code> lại với nhau.</p>
<blockquote>
<p>😁 Hiểu đơn giản thì <code v-pre>class</code> là tệp, còn <code v-pre>Package</code> là thư mục</p>
<p>🧚‍♂️ Sử dụng để :</p>
<ul>
<li>Tránh xung đột tên</li>
<li>Bảo trì tốt hơn</li>
</ul>
</blockquote>
<p>Gồm 2 loại :</p>
<ul>
<li><code v-pre>Built-in Packages</code> : <em>các packages từ <code v-pre>Java API</code></em></li>
<li><code v-pre>User-defined Packages</code> :  <em>tự tạo các packages của riêng mình</em></li>
</ul>
<h3 id="built-in-packages" tabindex="-1"><a class="header-anchor" href="#built-in-packages" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-19-23-Knowledge Growth.png" alt="Knowledge Growth.png"> Built-in Packages</h3>
<p><code v-pre>Java API</code> là một thư viện được viết sẵn, bạn chỉ cần dùng thôi</p>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png"> Giải thích cụ thể:</b>
</summary>
<br>
<p>Thư viện chứa các thành phần quản lí <code v-pre>input</code>, <code v-pre>database</code> và nhiều thứ khác, tham khảo tại trang web của <a href="https://docs.oracle.com/en/java/javase/15/docs/api/index.html" target="_blank" rel="noopener noreferrer">tại đây</a></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-05-10-Ảnh chụp Màn hình 2021-02-06 lúc 22.05.04.png" alt="Ảnh chụp Màn hình 2021-02-06 lúc 22.05.04.png"></p>
<p>Thư viện được chia thành các <code v-pre>packages</code> và <code v-pre>classes</code> (<em>nghĩa là bạn chỉ cần import <code v-pre>class</code> thì nó sẽ có sẵn <code v-pre>method</code> và <code v-pre>attributes</code> được định sẵn</em>).</p>
</details>
<blockquote>
<p>🔥 Để sử dụng <code v-pre>class</code> hoặc <code v-pre>package</code> từ thư viện, bạn sử dụng từ khoá <code v-pre>import</code> như sau :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">package<span class="token punctuation">.</span>name<span class="token punctuation">.</span></span><span class="token class-name">Class</span></span><span class="token punctuation">;</span> <span class="token comment">//import một class đơn</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">package<span class="token punctuation">.</span>name<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span> <span class="token comment">// import toàn bộ package</span>
</code></pre></div></blockquote>
<h4 id="cu-the-ve-import" tabindex="-1"><a class="header-anchor" href="#cu-the-ve-import" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-05-59-Know How.png" alt="ithubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png"> Cụ thể về import :</h4>
<details>
<summary><b>☲ Import một class</b></summary>
<br>
<p>Ví dụ có một <code v-pre>class</code> là <code v-pre>Scanner</code> (<em>cho phép người dùng nhập từ bàn phím</em>) : Ta gõ Scanner và enter để nó tự <code v-pre>import</code> trong Vscode như sau:</p>
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-17-33-Ảnh chụp Màn hình 2021-02-06 lúc 22.17.24.png" title="" alt="Ảnh chụp Màn hình 2021-02-06 lúc 22.17.24.png" width="500">
<blockquote>
<p>🔥 Chỉ cần enter là nó sẽ tự <code v-pre>import</code> vào
Để sử dụng <code v-pre>class</code> <code v-pre>Scanner</code>, ta tạo một <code v-pre>Object</code> từ nó và sử dụng nó theo docs như sau:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token class-name">Scanner</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Enter username"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token class-name">String</span> userName <span class="token operator">=</span> myObj<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Username is: "</span> <span class="token operator">+</span> userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token comment">//Output : nhập gì ra đó</span>
</code></pre></div></blockquote>
</details>
<details>
<summary><b>☲ Import một Package</b></summary>
<br>
<p>Như ví dụ trước, ta sử dụng <code v-pre>Scanner</code> từ gói <code v-pre>java.util</code>, vậy ta chỉ cần thêm <code v-pre>*</code> phía sau đó, có nghĩa là tất cả mọi thứ trong gói <code v-pre>java.util</code> như sau :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
</code></pre></div></details>
<h4 id="vay-toi-muon-tu-import-rieng-package-cua-toi-thi-lam-sao" tabindex="-1"><a class="header-anchor" href="#vay-toi-muon-tu-import-rieng-package-cua-toi-thi-lam-sao" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language Learning.png" alt="Language Learningpng">Vậy tôi muốn tự import riêng <code v-pre>package</code> của tôi thì làm sao ?</h4>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions And Answers.png"> Trả lời </b></summary>
<br>
<p>Thì bạn hãy tự tạo lấy <code v-pre>package</code> của riêng nhưng phải đặt nó trong thư mục lưu trữ nó, như này :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-34-11-Ảnh chụp Màn hình 2021-02-06 lúc 22.34.10.png" alt="Ảnh chụp Màn hình 2021-02-06 lúc 22.34.10.png"></p>
<blockquote>
<p>Sử dụng từ khoá <code v-pre>package</code> tử tạo một gói mới :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> mypack<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">MyPackageClass</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Đây là package của tôi!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>
</code></pre></div></blockquote>
<p>Mở <code v-pre>Terminal</code> hoặc <code v-pre>CMD</code></p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>javac -d <span class="token builtin class-name">.</span> MyPackageClass.java
</code></pre></div><blockquote>
<p>Nó sẽ bắt buộc tạo ra 1 <code v-pre>MyPackageClass.java</code> nằm trong thư mục <code v-pre>mypack</code> như hình dưới đây :</p>
</blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-44-55-Ảnh chụp Màn hình 2021-02-06 lúc 22.44.49.png" alt="Ảnh chụp Màn hình 2021-02-06 lúc 22.44.49.png"></p>
<blockquote>
<p>⚠️ Hãy viết tên <code v-pre>Package</code> bằng chữ thường để tránh xung đột với tên <code v-pre>class</code>.</p>
<p>Và bạn chỉ cần gọi <code v-pre>class</code> trong <code v-pre>package như sau</code> :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>java mypack.MyPackageClass.java
//output <span class="token builtin class-name">:</span> Đây là package của tôi<span class="token operator">!</span>
</code></pre></div></blockquote>
</details></div></template>
