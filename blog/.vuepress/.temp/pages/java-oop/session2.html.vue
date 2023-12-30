<template><div><h1 id="bai-2-tinh-đa-hinh" tabindex="-1"><a class="header-anchor" href="#bai-2-tinh-đa-hinh" aria-hidden="true">#</a> Bài 2. Tính đa hình</h1>
<p><strong>Đa hình <em>(Poly morphism)</em></strong> là một trong 4 tính chất của lập trình hướng đối tượng. <a href="">Tính đóng gói</a>, <a href="">Tính đa hình</a>, <a href="">Tính kế thừa</a>, <a href="">Tính trừu tượng</a>.</p>
<p>Tính đa hình cho phép các đối tượng khác nhau sử dụng chung một <code v-pre>interface</code> (giao diện).</p>
<p><strong>Poly morphism</strong> (tính đa hình) được hiểu như sau:</p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">THÔNG TIN</p>
<ul>
<li>Một đối tượng có nhiều hình dạng khác nhau tùy vào từng ngữ cảnh</li>
<li>Biểu hiện thông qua: <strong>nạp chồng</strong> và <strong>ghi đè</strong></li>
</ul>
</div>
<h2 id="nap-chong-phuong-thuc" tabindex="-1"><a class="header-anchor" href="#nap-chong-phuong-thuc" aria-hidden="true">#</a> Nạp chồng phương thức</h2>
<p><strong>Nạp chồng <em>(Overloading)</em></strong> là một cách biểu hiện của tính đa hình</p>
<blockquote>
<p>Hiểu một cách đơn giản nhất thì mỗi <strong>class</strong> sẽ có nhiều phương thức <mark>cùng tên nhưng khác nhau về các tham số!</mark></p>
</blockquote>
<p>Nạp chồng thể hiện tính đa hình tại thời điểm biên <a href="">dịch chương trình</a> (compile time polymorphism).</p>
<p>Ví dụ: Mình sẽ xây dựng lớp <code v-pre>Cat.java</code> và xây dựng hai phương thức cùng tên là <code v-pre>speak()</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token comment">// phương thức không có tham số</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Meow meow !!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// phương thức có 1 tham số "Human"</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token class-name">String</span> human<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>human<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Bạn có thể thêm các phương thức "speak(...)"</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Như bạn thấy các phương thức <code v-pre>speak()</code> là cùng tên nhưng lại khác nhau về tham số truyền vào. Điều này thể hiện <strong>tính đa hình</strong> trong <strong>Lập trình hướng đối tượng</strong></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Meow meow !!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token class-name">String</span> voice<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>voice<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PolyMorphism</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cat<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cat<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token string">"Mèo méo meo mèo meooo !!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Output: 
**
** Meow meow !!!
** Mèo méo meo mèo meooo !!!
*/</span>
</code></pre></div><p>Nếu ta xây dựng thêm các phương thức <code v-pre>speak()</code> khác nhưng truyền vào các kiểu dữ liệu khác <code v-pre>String</code> thì có được xem là nạp chồng không?</p>
<details class="custom-container details"><summary>Trả lời ...</summary>
<p>Đó vẫn là nạp chồng</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Meow meow !!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token class-name">String</span> voice<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>voice<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token keyword">float</span> old<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>old<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token keyword">int</span> old<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> old<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div></details>
<h2 id="ghi-đe-phuong-thuc" tabindex="-1"><a class="header-anchor" href="#ghi-đe-phuong-thuc" aria-hidden="true">#</a> Ghi đè phương thức</h2>
<p><strong>Ghi đè <em>(Overriding)</em></strong> là một cách biểu hiện của tính đa hình</p>
<blockquote>
<p>Hiểu một cách đơn giản nhất thì một lớp con có thể định nghĩa lại một phương thức của lớp cha</p>
</blockquote>
<p>Ghi đè thể hiện tính đa hình tại thời điểm <a href="">chạy chương trình</a> (runtime polymorphism).</p>
<p>Với ví dụ trên mình sẽ thêm một lớp mới có tên <code v-pre>Animal.java</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Eating candy !!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Và cho lớp <code v-pre>Cat.java</code> <a href="">kế thừa</a> lại lớp <code v-pre>Animal.java</code>.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>

    <span class="token comment">// các phương thức speak()</span>
    
<span class="token punctuation">}</span>
</code></pre></div><p><code v-pre>Cat.java</code> là lớp con của <code v-pre>Animal.java</code>. Lúc này <code v-pre>Cat.java</code> sẽ được thừa hưởng phương thức <code v-pre>eat()</code> của <code v-pre>Animal.java</code>.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PolyMorphism</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cat<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Output: 
**
** Eating candy !!!
*/</span>
</code></pre></div><div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">CÓ VẤN ĐỀ !!!</p>
<p>Ta thấy có một vấn đề là <strong>Mèo nhưng lại ăn Kẹo 😰</strong></p>
<p>Và đây chính là lúc ta dùng đến <strong>Ghi đè</strong></p>
</div>
<p>Chúng ta có thể định nghĩa lại phương thức <code v-pre>eat()</code> trong lớp <code v-pre>Cat.java</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>

    <span class="token comment">// các phương thức speak()</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Eating fish !!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PolyMorphism</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cat<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Output: 
**
** Eating fish !!!
*/</span>

</code></pre></div><p>Như ta thấy chương trình xuất ra dòng chữ <code v-pre>Eadting fish !!!</code> thay vì <code v-pre>Eadting candy !!!</code> như lúc đầu.</p>
<p>Điều này có nghĩa <code v-pre>public class Cat extends Animal{ eat() }</code> đã ghi đè lên <code v-pre>public class Animal{ eat() }</code>.</p>
<h2 id="tong-ket" tabindex="-1"><a class="header-anchor" href="#tong-ket" aria-hidden="true">#</a> Tổng kết</h2>
<p>Vậy là chúng ta đã cùng nhau tìm hiểu về tính chất Đa hình trong lập trình hướng đối tượng.</p>
<p>Có những nội dung sau mà mình muốn các bạn note lại để sau này phỏng vấn còn cần đến:</p>
<h4 id="tinh-ke-thua-la-gi" tabindex="-1"><a class="header-anchor" href="#tinh-ke-thua-la-gi" aria-hidden="true">#</a> Tính kế thừa là gì ?</h4>
<p>Trả lời: Là một trong 4 tính chất của <strong>OOP <em>(lập trình hướng đối tượng)</em></strong> được hiểu là đối tượng có nhiều hình dạng tùy thuộc vào vai trò và ngữ cảnh khác nhau.</p>
<h4 id="đac-điem-cua-tinh-đa-hinh-la-gi" tabindex="-1"><a class="header-anchor" href="#đac-điem-cua-tinh-đa-hinh-la-gi" aria-hidden="true">#</a> Đặc điểm của tính đa hình là gì?</h4>
<p>Trả lời: Tính đa hình cho phép các đối tượng khác nhau sử dụng chung một <code v-pre>interface</code> (giao diện).</p>
<h4 id="tinh-ke-thua-đuoc-bieu-hien-nhu-the-nao" tabindex="-1"><a class="header-anchor" href="#tinh-ke-thua-đuoc-bieu-hien-nhu-the-nao" aria-hidden="true">#</a> Tính kế thừa được biểu hiện như thế nào?</h4>
<p>Trả lời: Được biểu hiện thông qua <strong>Nạp chồng <em>(Overloading)</em></strong> và <strong>Ghi đè <em>(Overriding)</em></strong></p>
<h4 id="tinh-nap-chong-la-gi" tabindex="-1"><a class="header-anchor" href="#tinh-nap-chong-la-gi" aria-hidden="true">#</a> Tính nạp chồng là gì?</h4>
<p>Trả lời:</p>
<ul>
<li>Một đối tượng có thể có những phương thức trùng tên nhau, nhưng khác nhau về số lượng tham số, kiểu tham số</li>
<li>Nạp chồng thể hiện tính đa hình tại thời điểm biên <a href="">dịch chương trình</a> (compile time polymorphism).</li>
</ul>
<h4 id="tinh-ghi-đe-la-gi" tabindex="-1"><a class="header-anchor" href="#tinh-ghi-đe-la-gi" aria-hidden="true">#</a> Tính ghi đè là gì?</h4>
<p>Trả lời:</p>
<ul>
<li>Một đối tượng được kế thừa từ đối tượng khác có thể định nghĩa lại các phương thức kế thừa nếu cần thiết</li>
<li>Ghi đè thể hiện tính đa hình tại thời điểm <a href="">chạy chương trình</a> (runtime polymorphism).</li>
</ul>
</div></template>
