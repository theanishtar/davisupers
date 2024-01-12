<template><div><h1 id="bai-3-tinh-ke-thua" tabindex="-1"><a class="header-anchor" href="#bai-3-tinh-ke-thua" aria-hidden="true">#</a> Bài 3. Tính kế thừa</h1>
<p><strong>Kế thừa <em>(Inheritance)</em></strong> là một trong 4 tính chất của lập trình hướng đối tượng. <a href="">Tính đóng gói</a>, <RouterLink to="/java-oop/session2.html">Tính đa hình</RouterLink>, <RouterLink to="/java-oop/session3.html">Tính kế thừa</RouterLink>, <a href="">Tính trừu tượng</a>.</p>
<p><strong>Inheritance</strong> (tính kế thừa) được hiểu như sau:</p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">Định nghĩa</p>
<p>Là thừa hưởng các đặc trưng và hành động của một lớp khác</p>
</div>
<blockquote>
<p>Làm sao nhận biết được trong code có sử dụng tính kế thừa hay không?</p>
</blockquote>
<p>Ta sẽ tìm hiểu qua biểu hiện của Tính kế thừa nhé!</p>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">Biểu hiện</p>
<p>Gồm ba thành phần: lớp con (subclass), lớp cha (superclass), interface</p>
</div>
<h2 id="cac-thanh-phan" tabindex="-1"><a class="header-anchor" href="#cac-thanh-phan" aria-hidden="true">#</a> Các thành phần</h2>
<h3 id="lop-co-so-lop-cha" tabindex="-1"><a class="header-anchor" href="#lop-co-so-lop-cha" aria-hidden="true">#</a> Lớp cơ sở (Lớp cha)</h3>
<p>Các lớp được tạo ra trước và cho phép kế thừa được gọi là lớp cha (superclass)</p>
<p>Lớp cha sẽ cho những lớp kế thừa nó sử dụng lại các code đã xây dựng.</p>
<p>Ví dụ ta có lớp <code v-pre>Animal.java</code> và phương thức <code v-pre>sleep()</code> như sau:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Sleeping... !!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Với trường hợp ta cần tạo các lớp khác và không muốn khởi tạo phương thức <code v-pre>sleep()</code> cho từng lớp, ta có thể sử dụng từ khóa <code v-pre>extends</code> để kế thừa lại lớp <code v-pre>Animal.java</code></p>
<h3 id="lop-ke-thua-lop-con" tabindex="-1"><a class="header-anchor" href="#lop-ke-thua-lop-con" aria-hidden="true">#</a> Lớp kế thừa (lớp con)</h3>
<p>Lớp con là lớp kế thừa lại <a href="">lớp cơ sở</a> bằng từ khóa <code v-pre>extends</code>, còn được gọi là <a href="">supclass</a></p>
<p>Giờ ta xây dựng thêm lớp <code v-pre>Cat.java</code> và phương thức <code v-pre>sleep()</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cat<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * Sleeping... !!!
 */</span>
</code></pre></div><p>Như ta thấy, ta có thể kế thừa lại phương thức <code v-pre>sleep()</code> từ lớp <code v-pre>Animal.java</code> mà không cần phải định nghĩa lại !!!</p>
<h3 id="lop-đa-ke-thua" tabindex="-1"><a class="header-anchor" href="#lop-đa-ke-thua" aria-hidden="true">#</a> Lớp đa kế thừa</h3>
<p>Các ngôn ngữ lập trình như Java, C Sharp chỉ hỗ trợ <a href="">đơn kế thừa</a>.</p>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">Đơn kế thừa</p>
<p>Đơn kế thừa nghĩa là một lớp con (supclass) chỉ được kế thừa từ một lớp cha (superclass)</p>
</div>
<p>Hiểu đơn giản thì mỗi đứa con chỉ có duy nhất một cha =)))</p>
<p>Với ví dụ trên, nếu ta cố tình cho kế thừa từ 2 lớp trở lên thì code sẽ lỗi.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">,</span> <span class="token class-name">Dog</span><span class="token punctuation">{</span> <span class="token comment">// Lỗi hiển thị ở đây</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cat<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Nhưng trên thực tế vẫn có nhiều trường hợp cần đến <a href="">đa kế thừa</a>.</p>
<p>Các bạn còn nhớ bài viết <a href="">các frameworks front-end</a> chứ, mình đã nói như sau:</p>
<blockquote>
<p>VueJS được ra đời sau được xem là sự kế hợp giữa Angular và ReactJS</p>
</blockquote>
<p>Như vậy VueJS là một dạng đa kế thừa từ Angular và ReactJS đúng chứ ???</p>
<p>Để triển khai <a href="">đa kế thừa</a> trong Java, ta sẽ sử dụng <code v-pre>interface</code> kết hợp với từ khóa <code v-pre>implements</code> để triển khai các phương thức.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Sleeping... !!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Ta muốn tạo một đối tượng mới vừa thừa hưởng từ <code v-pre>Animal.java</code> vừa thừa hưởng một tính chất khác thì làm thế nào??</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Human</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Xây dựng giao diện (interface) <code v-pre>Human.java</code> với phương thức <code v-pre>coding()</code></p>
<p>Ta xây dựng thêm lớp <code v-pre>FrogDev.java</code> thừa hưởng lại <code v-pre>sleep()</code> từ <code v-pre>Animal.java</code> và <code v-pre>coding()</code> từ <code v-pre>Human.java</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FrogDev</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token keyword">implements</span> <span class="token class-name">Human</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Coding with Java..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// thừa hưởng lại sleep() từ Animal.java </span>
<span class="token punctuation">}</span>
</code></pre></div><p>Vậy là ta đã sử dụng được đa kế thừa trong Java bằng cách triển khai (implements) các phương thức của một giao diện (interface).</p>
<h3 id="mot-so-luu-y" tabindex="-1"><a class="header-anchor" href="#mot-so-luu-y" aria-hidden="true">#</a> Một số lưu ý</h3>
<details class="custom-container details"><summary>Khi sử dụng đa kế thừa, ta phải khai báo lớp cha trước rồi mới triển khai các giao diện</summary>
<table>
<thead>
<tr>
<th>True ✅</th>
<th>False ❌</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>class FrogDev extends Animal implements Human</code></td>
<td><code v-pre>class FrogDev implements Human extends Animal</code></td>
</tr>
</tbody>
</table>
</details>
<h2 id="tong-ket" tabindex="-1"><a class="header-anchor" href="#tong-ket" aria-hidden="true">#</a> Tổng kết</h2>
<ol>
<li>Thế nào là kế thừa?</li>
</ol>
<ul>
<li>Kế thừa là cho phép một lớp thừa hưởng đặc trưng và hành động của một lớp khác.</li>
</ul>
<ol start="2">
<li>Lợi ích của kế thừa?</li>
</ol>
<ul>
<li>Kế thừa giúp ta tái sử dụng lại các code đã triển khai nhưng vẫn đảm bảo duy trì một hệ thống phân cấp.</li>
</ul>
<ol start="3">
<li>Có những loại kế thừa nào?</li>
</ol>
<ul>
<li>Có hai loại kế thừa là:
<ul>
<li>Đơn kế thừa: nhận biết thông qua từ khóa <code v-pre>extends</code></li>
<li>Đa kế thừa: nhận biết thông qua từ khóa <code v-pre>implements</code></li>
</ul>
</li>
</ul>
<ol start="4">
<li>Các thành phần?</li>
</ol>
<ul>
<li>Lớp cha có trước đơn giản và tổng quát</li>
<li>Lớp con có sau (thừa hưởng từ lớp cha) cụ thể và đa dạng hơn lớp cha</li>
</ul>
</div></template>
