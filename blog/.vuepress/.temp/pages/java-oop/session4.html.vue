<template><div><h1 id="bai-4-tinh-đong-goi" tabindex="-1"><a class="header-anchor" href="#bai-4-tinh-đong-goi" aria-hidden="true">#</a> Bài 4. Tính đóng gói</h1>
<p><strong>Đóng gói <em>(encapsulation)</em></strong> là một trong 4 tính chất của lập trình hướng đối tượng. <a href="">Tính đóng gói</a>, <RouterLink to="/java-oop/session2.html">Tính đa hình</RouterLink>, <RouterLink to="/java-oop/session3.html">Tính kế thừa</RouterLink>, <a href="">Tính trừu tượng</a>.</p>
<h2 id="khai-niem" tabindex="-1"><a class="header-anchor" href="#khai-niem" aria-hidden="true">#</a> Khái niệm</h2>
<p><strong>Encapsulation</strong> (tính đóng gói) được hiểu như sau:</p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">Định nghĩa</p>
<p>Các dữ liệu (biến) và hành động (phương thức) liên quan đến dữ liệu của lớp nào thì gói gọn bên trong lớp đó</p>
</div>
<blockquote>
<p>Làm sao nhận biết được trong code có sử dụng tính đóng gói hay không?</p>
</blockquote>
<p>Ta sẽ tìm hiểu qua biểu hiện của Tính đóng gói nhé!</p>
<h2 id="bieu-hien" tabindex="-1"><a class="header-anchor" href="#bieu-hien" aria-hidden="true">#</a> Biểu hiện</h2>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">Biểu hiện</p>
<p>Khi các thuộc tính của lớp được đặt là <mark>private</mark></p>
</div>
<h2 id="pham-vi-truy-cap" tabindex="-1"><a class="header-anchor" href="#pham-vi-truy-cap" aria-hidden="true">#</a> Phạm vi truy cập</h2>
<p>Như ở bài viết <RouterLink to="/post/interview/java-core-interview/#cac-loai-pham-vi-truy-cap-trong-java">Các Câu Hỏi Phỏng Vấn Java Thường Gặp P.1</RouterLink>
mình đã trình bày về 4 phạm vi truy cập dữ liệu</p>
<p>Hôm nay mình sẽ nói cụ thể hơn nhé</p>
<p>Trong tất cả mọi bài trước, bạn đã rất quen thuộc với <code v-pre>public</code> trong ví dụ sau :</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span>
</code></pre></div><blockquote>
<p>🔥 Là một từ khoá <code v-pre>access modifier</code> (<em>Phạm vi truy cập</em>), sử dụng để đặt các mức độ sử dụng cho <code v-pre>classes</code>, <code v-pre>attributes</code>, <code v-pre>methods</code> và <code v-pre>constructors</code>...</p>
</blockquote>
<p>Có 2 loại <code v-pre>Modifiers</code> :</p>
<ul>
<li><code v-pre>Access Modifiers</code> : <em>kiểm soát mức độ truy cập</em></li>
<li><code v-pre>Non-Access Modifiers</code> : <em>không kiểm soát nhưng cung cấp các chức năng khác</em></li>
</ul>
<hr>
<h3 id="_1-access-modifiers" tabindex="-1"><a class="header-anchor" href="#_1-access-modifiers" aria-hidden="true">#</a> 1. Access Modifiers</h3>
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
 <br>
<details class="custom-container details"><summary>Cách hiểu đơn giản như sau:</summary>
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
<hr>
<h3 id="_2-non-access-modifiers" tabindex="-1"><a class="header-anchor" href="#_2-non-access-modifiers" aria-hidden="true">#</a> 2. Non-Access Modifiers</h3>
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
<h3 id="giai-thich-cu-the-tung-modifier" tabindex="-1"><a class="header-anchor" href="#giai-thich-cu-the-tung-modifier" aria-hidden="true">#</a> Giải thích cụ thể từng modifier</h3>
<details class="custom-container details"><summary>Final</summary>
<p>Nếu bạn không muốn bất kỳ chỉnh sửa nào thì khai báo <code v-pre>final</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-33-28-Ảnh chụp Màn hình 2021-02-02 lúc 14.33.22.png" alt="Ảnh chụp Màn hình 2021-02-02 lúc 14.33.22.png"></p>
<blockquote>
<p>💡 Sẽ gặp lỗi ngay nếu bạn cố thay đổi nó.</p>
</blockquote>
</details>
<details class="custom-container details"><summary>Static</summary>
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
<details class="custom-container details"><summary>Abstract</summary>
<p>Một phương thức trừu tượng (<code v-pre>abstract</code>) của một lớp trừu tượng và nó không có phần body, body được cung cấp từ <code v-pre>subclasses</code> như sau:</p>
</details>
<h2 id="tai-sao-lai-su-dung-tinh-đong-goi" tabindex="-1"><a class="header-anchor" href="#tai-sao-lai-su-dung-tinh-đong-goi" aria-hidden="true">#</a> Tại sao lại sử dụng tính đóng gói</h2>
<p>Tính đóng gói giúp chương trình:</p>
<ul>
<li>Kiểm soát tốt hơn <code v-pre>Attributes</code> và <code v-pre>Methods</code> của <code v-pre>Class</code></li>
<li><code v-pre>Attributes</code> của <code v-pre>Class</code> có thể đặt ở chế độ <code v-pre>read-only</code> hay <code v-pre>write-only</code> (nếu bạn sử dụng set &amp; get)</li>
<li>Linh hoạt hơn, có thể thay đổi thành phần mã mà không ảnh hưởng các phần khác.</li>
<li>Tăng độ bảo mật</li>
</ul>
<p>Như trình bày ở trên, những dữ liệu <code v-pre>private</code> sẽ không thể truy cập và sửa đổi trực tiếp từ lớp khác, vậy làm sao để thay đổi nó?</p>
<p>Chúng ta sẽ cần phải dùng <code v-pre>Getter</code> &amp; <code v-pre>Setter</code> hay còn được gọi là Mutator và Accessor</p>
<h2 id="mutator-accessor" tabindex="-1"><a class="header-anchor" href="#mutator-accessor" aria-hidden="true">#</a> Mutator &amp; Accessor</h2>
<p>Các Getter(Mutator) và Setter(Accessor) giúp người truy cập vào các dữ liệu <code v-pre>private</code> của lớp từ bên ngoài mà vẫn đảm bảo được Tính đóng gói</p>
<h3 id="getter" tabindex="-1"><a class="header-anchor" href="#getter" aria-hidden="true">#</a> Getter</h3>
<p><code v-pre>Getter</code> (Phương thức đọc): Là một phương thức được sử dụng để trả về giá trị của một thuộc tính từ đối tượng. Thường được đặt tên theo quy ước &quot;getPropertyName&quot;.</p>
<h3 id="setter" tabindex="-1"><a class="header-anchor" href="#setter" aria-hidden="true">#</a> Setter</h3>
<p><code v-pre>Setter</code> (Phương thức ghi): Là một phương thức được sử dụng để thiết lập giá trị của một thuộc tính cho đối tượng. Thường được đặt tên theo quy ước &quot;setPropertyName&quot;.</p>
<h3 id="vi-du" tabindex="-1"><a class="header-anchor" href="#vi-du" aria-hidden="true">#</a> Ví dụ</h3>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">// Getter</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Setter</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> newName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> newName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="tong-ket" tabindex="-1"><a class="header-anchor" href="#tong-ket" aria-hidden="true">#</a> Tổng kết</h2>
<ul>
<li>
<p>Tính đóng gói là gì?</p>
<ul>
<li>Các dữ liệu (biến) và hành động (phương thức) liên quan đến dữ liệu của lớp nào thì gói gọn bên trong lớp đó</li>
</ul>
</li>
<li>
<p>Biểu hiện của tính đóng gói là gì?</p>
<ul>
<li>Các thuộc tính trong lớp được để là <code v-pre>private</code></li>
</ul>
</li>
<li>
<p>Tác dụng của Tính đóng gói?</p>
<ul>
<li>Bảo mật, Bảo vệ dữ liệu không bị truy cập trái phép</li>
</ul>
</li>
<li>
<p>Thuộc tính <code v-pre>private</code> được truy cập khi nào?</p>
<ul>
<li>Thuộc tính <code v-pre>private</code> được truy cập từ bên trong lớp chứa nó</li>
</ul>
</li>
<li>
<p>Có thể truy cập tới thuộc tính <code v-pre>private</code> không và truy cập thế nào?</p>
<ul>
<li>Có thể truy cập trung gian thông qua <code v-pre>Setter</code> và <code v-pre>Getter</code></li>
</ul>
</li>
</ul>
<p>Hãy để lại bình luận bên dưới</p>
</div></template>
