<template><div><h1 id="bai-2-components-autowired-va-bean" tabindex="-1"><a class="header-anchor" href="#bai-2-components-autowired-va-bean" aria-hidden="true">#</a> Bài 2. Components, Autowired và Bean</h1>
<h3 id="gioi-thieu" tabindex="-1"><a class="header-anchor" href="#gioi-thieu" aria-hidden="true">#</a> Giới thiệu</h3>
<p>Đây là bài giới thiệu về 2 Annotation cơ bản trong Spring Boot và <code v-pre>@Component</code> và <code v-pre>@Autowire</code>, để có thể hiểu phần này tốt nhất, bạn nên nắm chắc 2 khái niệm sau:</p>
<h3 id="cach-chay-ung-dung-spring-boot" tabindex="-1"><a class="header-anchor" href="#cach-chay-ung-dung-spring-boot" aria-hidden="true">#</a> Cách chạy ứng dụng Spring Boot</h3>
<p>Nếu trong <code v-pre>Java</code> truyền thống, khi chạy cả một project, chúng ta sẽ phải định nghĩa một hàm <code v-pre>main()</code> và để nó khởi chạy đầu tiên.</p>
<p>Thì <strong>Spring Boot</strong> cũng vậy, chúng ta sẽ phải chỉ cho <strong>Spring Boot</strong> biết nơi nó khởi chạy lần đầu, để nó cài đặt mọi thứ.</p>
<p>Cách thực hiện là thêm annotation <code v-pre>@SpringBootApplication</code> trên class chính và gọi <code v-pre>SpringApplication.run(App.class, args);</code> để chạy project.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContext</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code v-pre>SpringApplication.run(App.class, args)</code> chính là câu lệnh để tạo ra <strong><em>container</em></strong>. Sau đó nó tìm toàn bộ các <strong><em>dependency</em></strong> trong project của bạn và đưa vào đó.</p>
<p>Spring đặt tên cho <strong><em>container</em></strong> là <code v-pre>ApplicationContext</code></p>
<p>và đặt tên cho các <strong><em>dependency</em></strong> là <code v-pre>Bean</code></p>
<p><em>App.java</em></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ApplicationContext chứa toàn bộ dependency trong project.</span>
        <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Vậy làm sao Spring biết đâu là <em>dependency</em>? Chúng ta tới với khái niệm <code v-pre>@Component</code></p>
<h3 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> @Component</h3>
<p><code v-pre>@Component</code> là một <a href="">Annotation</a> (chú thích) đánh dấu trên các <code v-pre>Class</code> để giúp <strong>Spring</strong> biết nó là một <code v-pre>Bean</code>.</p>
<p>Ví dụ:</p>
<p>Cấu trúc thư mục:</p>
<!-- ![spring-component](../../images/loda1557412317602/2.jpg) -->
<p>Chúng ta có một interface <code v-pre>Outfit</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>implement nó là Class <code v-pre>Bikini</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token comment">/*
 Đánh dấu class bằng @Component
 Class này sẽ được Spring Boot hiểu là một Bean (hoặc dependency)
 Và sẽ được Spring Boot quản lý
*/</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bikini</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Mặc bikini"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Chạy chương trình, và xem kết quả:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ApplicationContext chính là container, chứa toàn bộ các Bean</span>
        <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Khi chạy xong, lúc này context sẽ chứa các Bean có đánh</span>
        <span class="token comment">// dấu @Component.</span>

        <span class="token comment">// Lấy Bean ra bằng cách</span>
        <span class="token class-name">Outfit</span> outfit <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// In ra để xem thử nó là gì</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Instance: "</span> <span class="token operator">+</span> outfit<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// xài hàm wear()</span>
        outfit<span class="token punctuation">.</span><span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Output:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[1] Instance: me.loda.spring.helloworld.Bikini@1e1f6d9d
[2] Mặc bikini
</code></pre></div><p>Bạn sẽ thấy <code v-pre>Outfit</code> lúc này chính là <code v-pre>Bikini</code>. Class đã được đánh dấu là <code v-pre>@Component</code>.</p>
<p><strong>Spring Boot</strong> khi chạy sẽ dò tìm toàn bộ các <em>Class cùng cấp</em> hoặc ở trong các <em>package thấp hơn</em> (Chúng ta có thể cấu hình việc tìm kiếm này, sẽ đề cập sau). Trong quá trình dò tìm này, khi gặp một class được đánh dấu <code v-pre>@Component</code> thì nó sẽ tạo ra một instance và đưa vào <code v-pre>ApplicationContext</code> để quản lý.</p>
<p>Quá trình chạy sẽ như sau:</p>
<!-- 
![spring-component](../../images/loda1557412317602/3.png)

![spring-component](../../images/loda1557412317602/4.png) -->
<h3 id="autowired" tabindex="-1"><a class="header-anchor" href="#autowired" aria-hidden="true">#</a> @Autowired</h3>
<p>Bây giờ mình tạo ra một Class <code v-pre>Girl</code> và có một thuộc tính là <code v-pre>Outfit</code>.</p>
<p>Mình cũng đánh dấu <code v-pre>Girl</code> là một <code v-pre>@Component</code>. Tức <strong>Spring Boot</strong> cần tạo ra một instance của <code v-pre>Girl</code> để quản lý.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">Outfit</span> outfit<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span> outfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>outfit <span class="token operator">=</span> outfit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// GET </span>
    <span class="token comment">// SET</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Tôi đánh dấu thuộc tính <code v-pre>Outfit</code> của <code v-pre>Girl</code> bởi Annotation <code v-pre>@Autowired</code>. Điều này nói với <strong>Spring Boot</strong> hãy tự <em>inject</em> (tiêm) một instance của <code v-pre>Outfit</code> vào thuộc tính này khi khởi tạo <code v-pre>Girl</code>.</p>
<p>Lúc này, chạy thử chương trình.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ApplicationContext chính là container, chứa toàn bộ các Bean</span>
        <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Khi chạy xong, lúc này context sẽ chứa các Bean có đánh</span>
        <span class="token comment">// dấu @Component.</span>

        <span class="token comment">// Lấy Bean ra bằng cách</span>
        <span class="token class-name">Outfit</span> outfit <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// In ra để xem thử nó là gì</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Output Instance: "</span> <span class="token operator">+</span> outfit<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// xài hàm wear()</span>
        outfit<span class="token punctuation">.</span><span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Girl</span> girl <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Girl</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Girl Instance: "</span> <span class="token operator">+</span> girl<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Girl Outfit: "</span> <span class="token operator">+</span> girl<span class="token punctuation">.</span>outfit<span class="token punctuation">)</span><span class="token punctuation">;</span>

        girl<span class="token punctuation">.</span>outfit<span class="token punctuation">.</span><span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Output:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[1] Output Instance: me.loda.spring.helloworld.Bikini@2e16f13a
[2] Mặc bikini
[3] Girl Instance: me.loda.spring.helloworld.Girl@353cb1cb
[4] Girl Outfit: me.loda.spring.helloworld.Bikini@2e16f13a
[5] Mặc bikini
</code></pre></div><p><strong>Spring Boot</strong> đã tự tạo ra một <code v-pre>Girl</code> và trong quá trình tạo ra đó, nó truyền <code v-pre>Outfit</code> vào làm thuộc tính.</p>
<h3 id="singleton" tabindex="-1"><a class="header-anchor" href="#singleton" aria-hidden="true">#</a> Singleton</h3>
<p>Điều đặc biệt là các <code v-pre>Bean</code> được quản lý bên trong <code v-pre>ApplicationContext</code> đều là singleton. Bạn chắc đã để ý điều này từ các Output ở phía trên.</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[1] Output Instance: me.loda.spring.helloworld.Bikini@2e16f13a

[4] Girl Outfit: me.loda.spring.helloworld.Bikini@2e16f13a
</code></pre></div><p><code v-pre>Outfit</code> ở 2 đối tượng trên là một.</p>
<p>Tất cả những <code v-pre>Bean</code> được quản lý trong <code v-pre>ApplicationContext</code> đều chỉ được tạo ra <strong>một lần duy nhất</strong> và khi có <code v-pre>Class</code> yêu cầu <code v-pre>@Autowired</code> thì nó sẽ lấy đối tượng có sẵn trong <code v-pre>ApplicationContext</code> để <em>inject</em> vào.</p>
<p>Trong trường hợp bạn muốn mỗi lần sử dụng là một instance hoàn toàn mới. Thì hãy đánh dấu <code v-pre>@Component</code> đó bằng <code v-pre>@Scope(&quot;prototype&quot;)</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span><span class="token string">"prototype"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bikini</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Mặc bikini"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="ket" tabindex="-1"><a class="header-anchor" href="#ket" aria-hidden="true">#</a> Kết</h3>
<p>Tới đây bạn đã tiếp cận với hai khái niệm cơ bản nhất trong <strong>Spring Boot</strong> và cũng là nền tảng cốt lõi của nó. Việc nắm được cách vận hành của <code v-pre>@Component</code> và <code v-pre>@Autowired</code> là bạn đã đi được nửa chặng đường rồi.</p>
<hr>
<h3 id="cach-autowired-van-hanh" tabindex="-1"><a class="header-anchor" href="#cach-autowired-van-hanh" aria-hidden="true">#</a> Cách @Autowired vận hành</h3>
<p><code v-pre>@Autowired</code> đánh dấu cho Spring biết rằng sẽ tự động inject bean tương ứng vào vị trí được đánh dấu.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>
    <span class="token comment">// Đánh dấu để Spring inject một đối tượng Outfit vào đây</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">Outfit</span> outfit<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span> outfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>outfit <span class="token operator">=</span> outfit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// GET</span>
    <span class="token comment">// SET</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Tuy nhiên, quá trình <code v-pre>@Autowired</code> này đòi hỏi một điều kiện là Class đó phải có <code v-pre>Constructor</code> hoặc <code v-pre>Setter</code> cho thuộc tính cần inject.</p>
<p>Như ví dụ ở trên tôi đã sử dụng một Constructor là <code v-pre>public Girl(Outfit outfit)</code> để <strong>Spring</strong> có thể truyền giá trị <code v-pre>Outfit</code> vào bên trong <code v-pre>Girl</code>. Nếu bỏ Constructor này đí, bạn bắt buộc phải cung cấp cho class Girl một hàm <code v-pre>Setter</code> thay thế.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>

    <span class="token comment">// Đánh dấu để Spring inject một đối tượng Outfit vào đây</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">Outfit</span> outfit<span class="token punctuation">;</span>

    <span class="token comment">// Spring sẽ inject outfit thông qua Constructor trước</span>
    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>


    <span class="token comment">// Nếu không tìm thấy Constructor thoả mãn, nó sẽ thông qua setter</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOutfit</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span> outfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>outfit <span class="token operator">=</span> outfit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// GET</span>
    <span class="token comment">// SET</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Bạn cũng có thể gắn <code v-pre>@Autowired</code> lên trên method, thay vì thuộc tính, chức năng cũng vẫn tương tự, nó sẽ tìm Bean phù hợp với method đó và truyền vào.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>

    <span class="token comment">// Đánh dấu để Spring inject một đối tượng Outfit vào đây</span>
    <span class="token class-name">Outfit</span> outfit<span class="token punctuation">;</span>

    <span class="token comment">// Spring sẽ inject outfit thông qua Constructor trước</span>
    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Autowired</span>
    <span class="token comment">// Nếu không tìm thấy Constructor thoả mãn, nó sẽ thông qua setter</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOutfit</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span> outfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>outfit <span class="token operator">=</span> outfit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// GET</span>
    <span class="token comment">// SET</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="van-đe-cua-autowired" tabindex="-1"><a class="header-anchor" href="#van-đe-cua-autowired" aria-hidden="true">#</a> Vấn đề của @Autowired</h3>
<p>Trong thực tế, sẽ có trường hợp chúng ta sử dụng <code v-pre>@Autowired</code> khi <strong>Spring Boot</strong> có chứa 2 Bean cùng loại trong Context.</p>
<p>Lúc này thì <strong>Spring</strong> sẽ bối rối và không biết sử dụng Bean nào để inject vào đối tượng.</p>
<p>Ví dụ:</p>
<p>Class <code v-pre>Outfit</code> có 2 kế thừa là <code v-pre>Bikini</code> và <code v-pre>Naked</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 Đánh dấu class bằng @Component
 Class này sẽ được Spring Boot hiểu là một Bean (hoặc dependency)
 Và sẽ được Spring Boot quản lý
  */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bikini</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Mặc bikini"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Naked</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Đang không mặc gì"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Class <code v-pre>Girl</code> yêu cầu inject một <code v-pre>Outfit</code> vào cho mình.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">Outfit</span> outfit<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token class-name">Outfit</span> outfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>outfit <span class="token operator">=</span> outfit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// GET</span>
    <span class="token comment">// SET</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Lúc này khi chạy chương trình. <strong>Spring Boot</strong> sẽ báo lỗi như sau.</p>
<p>Output:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>***************************
APPLICATION FAILED TO START
***************************

Description:

Parameter 0 of constructor in me.loda.spring.helloprimaryqualifier.Girl required a single bean, but 2 were found:
	- bikini: defined in file [/Users/lv00141/Documents/WORKING_SPACE/GITHUB/spring-boot-learning/spring-boot-helloworld-@Primary - @Qualifier/target/classes/me/loda/spring/helloprimaryqualifier/Bikini.class]
	- naked: defined in file [/Users/lv00141/Documents/WORKING_SPACE/GITHUB/spring-boot-learning/spring-boot-helloworld-@Primary - @Qualifier/target/classes/me/loda/spring/helloprimaryqualifier/Naked.class]
</code></pre></div><p>Đại khái là, trong quá trình cài đặt, nó tìm thấy tới 2 đối tượng thoả mãn <code v-pre>Outfit</code>. Giờ nó không biết sử dụng cái nào để inject vào trong <code v-pre>Girl</code></p>
<h3 id="primary" tabindex="-1"><a class="header-anchor" href="#primary" aria-hidden="true">#</a> @Primary</h3>
<p>Cách giải quyết thứ nhất là sử dụng Annotation <code v-pre>@Primary</code>.</p>
<p><code v-pre>@Primary</code> là annotation đánh dấu trên một Bean, giúp nó <strong>luôn được ưu tiên lựa</strong> chọn trong trường hợp có nhiều Bean cùng loại trong Context.</p>
<p>Trong ví dụ ở trên, nếu chúng ta để <code v-pre>Naked</code> là primary. Thì chương trình sẽ chạy bình thường.</p>
<p>Và hiển nhiên <code v-pre>Outfit</code> bên trong <code v-pre>Girl</code> sẽ là <code v-pre>Naked</code>.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Primary</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Naked</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Đang không mặc gì"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Chạy thử chương trình:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ApplicationContext chính là container, chứa toàn bộ các Bean</span>
        <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Khi chạy xong, lúc này context sẽ chứa các Bean có đánh</span>
        <span class="token comment">// dấu @Component.</span>

        <span class="token class-name">Girl</span> girl <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Girl</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Girl Instance: "</span> <span class="token operator">+</span> girl<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Girl Outfit: "</span> <span class="token operator">+</span> girl<span class="token punctuation">.</span>outfit<span class="token punctuation">)</span><span class="token punctuation">;</span>

        girl<span class="token punctuation">.</span>outfit<span class="token punctuation">.</span><span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Output:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Girl Instance: me.loda.spring.helloprimaryqualifier.Girl@eb9a089
Girl Outfit: me.loda.spring.helloprimaryqualifier.Naked@1688653c
Đang không mặc gì
</code></pre></div><p><strong>Spring Boot</strong> đã ưu tiên <code v-pre>Naked</code> và inject nó vào <code v-pre>Girl</code>.</p>
<h3 id="qualifier" tabindex="-1"><a class="header-anchor" href="#qualifier" aria-hidden="true">#</a> @Qualifier</h3>
<p>Cách thứ hai, là sử dụng Annotation <code v-pre>@Qualifier</code>.</p>
<p><code v-pre>@Qualifier</code> xác định tên của một Bean mà bạn muốn chỉ định inject.</p>
<p>Ví dụ:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span><span class="token string">"bikini"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bikini</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Mặc bikini"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span><span class="token string">"naked"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Naked</span> <span class="token keyword">implements</span> <span class="token class-name">Outfit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Đang không mặc gì"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>

    <span class="token class-name">Outfit</span> outfit<span class="token punctuation">;</span>

    <span class="token comment">// Đánh dấu để Spring inject một đối tượng Outfit vào đây</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">"naked"</span><span class="token punctuation">)</span> <span class="token class-name">Outfit</span> outfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Spring sẽ inject outfit thông qua Constructor đầu tiên</span>
        <span class="token comment">// Ngoài ra, nó sẽ tìm Bean có @Qualifier("naked") trong context để ịnject</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>outfit <span class="token operator">=</span> outfit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// GET</span>
    <span class="token comment">// SET</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="ket-1" tabindex="-1"><a class="header-anchor" href="#ket-1" aria-hidden="true">#</a> Kết</h3>
<p><code v-pre>@Primary</code> và <code v-pre>@Qualifier</code> là một trong những tính năng bạn nên biết trong Spring để có thể xử lý vấn đề nhiều Bean cùng loại trong một Project.</p>
</div></template>
