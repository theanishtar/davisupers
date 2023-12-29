<template><div><p>Là một lập trình viên Java, chắc hẳn bạn đã học rất nhiều kiến thức vô cùng quan trọng để có thể thực hiện các dự án của mình và chuẩn bị cho công việc sau này. Tuy nhiên, liệu những câu hỏi phỏng vấn tại các công ty có giống với những gì bạn đã học.</p>
<p>Hãy cùng đọc bài viết sau của Frog và tìm hiểu <strong>các câu hỏi phỏng vấn Java thường gặp</strong> để chuẩn bị tốt nhất cho buổi phỏng vấn trong tương lai nhé!</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/interview/main.png?raw=true" alt=""></p>
<h2 id="i-cac-cau-hoi-java-core" tabindex="-1"><a class="header-anchor" href="#i-cac-cau-hoi-java-core" aria-hidden="true">#</a> I. Các câu hỏi Java core</h2>
<h3 id="jdk-jre-va-jvm-la-gi" tabindex="-1"><a class="header-anchor" href="#jdk-jre-va-jvm-la-gi" aria-hidden="true">#</a> JDK, JRE và JVM là gì?</h3>
<p><code v-pre>JDK</code> là viết tắt của <mark>Java Development Kit</mark> – Bộ công cụ phát triển Java. <code v-pre>JDK</code> là một bộ công cụ phát triển phần mềm được dùng để phát triển ứng dụng trong Java.</p>
<p><code v-pre>JRE</code> là viết tắt của <mark>Java Runtime Environment</mark> – Môi trường thực thi Java.</p>
<p><code v-pre>JRE</code> bao gồm <code v-pre>JVM</code>, thư viện và các thành phần bổ sung để chạy các ứng dụng viết bằng ngôn ngữ Java.</p>
<p><code v-pre>JVM</code> là viết tắt của <mark>Java Virtual Machine</mark> – <em>Máy ảo Java</em>.</p>
<p><code v-pre>JVM</code> là máy ảo được sử dụng để chạy các chương trình Java.</p>
<p><strong>Cách hoạt động của JVM</strong>: Khi chương trình Java được chạy, trình biên dịch sẽ dịch Java code thành bytecode và sau đó <code v-pre>JVM</code> sẽ thực hiện nhiệm vụ của mình: thông dịch bytecode thành mã máy cho máy tính thực hiện lệnh.</p>
<h3 id="đac-điem-noi-bat-cua-java-8" tabindex="-1"><a class="header-anchor" href="#đac-điem-noi-bat-cua-java-8" aria-hidden="true">#</a> Đặc điểm nổi bật của Java 8</h3>
<p><img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/interview/java-8-new-feature.png?raw=true" alt=""></p>
<h4 id="_1-lambda-expression" tabindex="-1"><a class="header-anchor" href="#_1-lambda-expression" aria-hidden="true">#</a> 1. Lambda Expression</h4>
<p><code v-pre>Lambda Expression</code> là <a href="">feature</a> nổi bật nhất của <mark>Java 8</mark>, giúp cho cú pháp của Java trở nên đơn giản, rút gọn đi rất nhiều</p>
<details class="custom-container details"><summary><b>Ví dụ không dùng Lambda</b></summary>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">vn<span class="token punctuation">.</span>viettuts<span class="token punctuation">.</span>java8</span><span class="token punctuation">;</span>
 
<span class="token keyword">interface</span> <span class="token class-name">Drawable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LambdaExpressionExample1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> width <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
 
        <span class="token comment">// không sử dụng biểu thức lambda, </span>
        <span class="token comment">// phải sử dụng lớp nặc danh để cài đặt phương thức draw() cho Drawable</span>
        <span class="token class-name">Drawable</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Drawable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Drawing "</span> <span class="token operator">+</span> width<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        d<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Kết quả: Drawing 10</span>
</code></pre></div></details>
<details class="custom-container details"><summary><b>Ví dụ Áp dụng Lambda</b></summary>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">vn<span class="token punctuation">.</span>viettuts<span class="token punctuation">.</span>java8</span><span class="token punctuation">;</span>
 
<span class="token comment">//tùy chọn, nó đánh dấu lớp Drawable chỉ được có 1 method trừu tượng</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">interface</span> <span class="token class-name">Drawable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LambdaExpressionExample2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> width <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
 
        <span class="token comment">// sử dụng biểu thức lambda</span>
        <span class="token class-name">Drawable</span> d2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Drawing "</span> <span class="token operator">+</span> width<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        d2<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Kết quả: Drawing 10</span>
</code></pre></div></details>
<h4 id="_2-default-method-in-interface" tabindex="-1"><a class="header-anchor" href="#_2-default-method-in-interface" aria-hidden="true">#</a> 2. Default method in Interface</h4>
<p>Java 8 cho phép thêm các <em>method</em> không trừu tượng bằng cách thêm từ khóa <code v-pre>default</code>:</p>
<p>Ví dụ:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Calculate</span> <span class="token punctuation">{</span>
  <span class="token keyword">default</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token keyword">implements</span> <span class="token class-name">Calculate</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Calculator</span> calculator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    calculator<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return 3</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_3-optional-class" tabindex="-1"><a class="header-anchor" href="#_3-optional-class" aria-hidden="true">#</a> 3. Optional Class</h4>
<p>Tính năng <mark>Optional Class</mark> giúp giải quyết các vấn đề chủ yếu về <code v-pre>nullpointer</code></p>
<ul>
<li><strong>Optional Class</strong> là 1 tính năng mới trong được bổ sung trong <a href="">Java 8</a></li>
<li><strong>Optional</strong> là 1 đối tượng generic, bản chất của <strong>Optional</strong> là một container (bao chứa) chứa đối tượng mà nó reference tới. Nó có thể rỗng hoặc chứa giá trị <code v-pre>NULL</code> (trường hợp đối tượng mà nó reference tới bị <code v-pre>null</code>).</li>
<li>Cấu trúc này đảm bảo các biến được sử dụng thông qua Optional Class sẽ tránh được lỗi <code v-pre>NullPointerException</code>.</li>
</ul>
<table>
<thead>
<tr>
<th  >No.</th>
<th >Phương thức &amp; mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td  >1</td>
<td ><b>static &lt;T&gt; Optional&lt;T&gt; empty()</b><br>
Trả về một Optional instance rỗng.</td>
</tr>
<tr>
<td  >2</td>
<td ><b>Optional&lt;T&gt; filter(Predicate&lt;? super &lt;T&gt; predicate)</b><br>
Nếu như có giá trị hiện diện trong đối tượng Optional này và giá trị của nó khớp với Predicate truyền vào, nó sẽ trả về một Optional chứa giá trị đó, mặc khác sẽ trả về một Optional rỗng.</td>
</tr>
<tr>
<td  >3</td>
<td ><b>T get()</b><br>
Nếu như có giá trị trong Optional này, nó sẽ trả về giá trị đó, ngược lại sẽ ném ra NoSuchElementException nếu như đối tượng rỗng.</td>
</tr>
<tr>
<td  >4</td>
<td ><b>void ifPresent(Consumer&lt;? super T&gt; consumer)&nbsp;</b><br>
Nếu như đối tượng Optional đang chứa giá trị, nó sẽ áp dụng consumer được truyền vào cho giá trị của nó. Ngược lại thì không làm gì cả.</td>
</tr>
<tr>
<td  >5</td>
<td ><b>boolean isPresent()</b><br>
Phương thức này được sử dụng để kiểm tra xem trong đối tượng Optional có đang chứa giá trị hay không. Giá trị trả về là True nếu có giá trị và ngược lại trả về false.</td>
</tr>
<tr>
<td  >8</td>
<td ><b>static &lt;T&gt; Optional&lt;T&gt; of(T value)</b><br>
Trả về đối tượng Optional kiểu T chứa giá trị của value.</td>
</tr>
<tr>
<td  >7</td>
<td ><b>static &lt;T&gt; Optional&lt;T&gt; ofNullable(T value)</b><br>
Trả về một Optional chứa giá trị được truyền vào nếu khác null, ngược lại sẽ trả về một Optional rỗng.</td>
</tr>
<tr>
<td  >8</td>
<td ><b>T orElse(T other)</b><br>
Trả về giá trị của đối tượng Optional nếu có, ngược lại nó sẽ trả về đối tượng&nbsp;<b>other</b>&nbsp;mà bạn đã truyền vào phương thức này.</td>
</tr>
<tr>
<td  >9</td>
<td ><b>T orElseGet(Supplier&lt;? extends T&gt; other)</b><br>
Trả về giá trị nếu tồn tại, ngược lại nó sẽ gọi&nbsp;<b>other</b>&nbsp;mà bạn đã truyền vào sau đó trả về kết quả của Supplier.</td>
</tr>
<tr>
<td  >10</td>
<td ><b>&lt;X extends Throwable&gt; T orElseThrow(Supplier&lt;? extends X&gt; exceptionSupplier)</b><br>
Nếu như đối tượng Optional có giá trị tồn tại thì nó sẽ trả về giá trị đó, ngược lại sẽ ném ra một Exception do chúng ta định nghĩa bởi Supplier đã truyền vào.</td>
</tr>
</tbody>
</table>
<h4 id="_4-java-stream-api" tabindex="-1"><a class="header-anchor" href="#_4-java-stream-api" aria-hidden="true">#</a> 4. Java Stream API</h4>
<p><mark>Stream</mark> là 1 lớp trừu tượng mới được giới thiệu trong Java 8 giúp ta giải quyết các bài toán về <code v-pre>collections</code>, <code v-pre>array</code> 1 cách tự nhiên hơn như thêm, sửa, xóa, lọc object…</p>
<ul>
<li>Stream là 1 lớp trừu tượng mới được giới thiệu trong Java 8. Sử dụng Stream, bạn có thể xử lý dữ liệu 1 cách tự nhiên giống như các câu lệnh SQL. Ví dụ ta có câu SQL sau:</li>
</ul>
<div class="language-sql ext-sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> Employee
</code></pre></div><p>Câu lệnh trên tự động trả về tổng lương của tất cả <code v-pre>Employee</code> mà không cần phải thực hiện bất kì tính toán gì ở phía đầu cuối developer <em>(bình thường thì sẽ SELECT tất cả các Employeesau đó dùng code Java để duyệt và tính tổng của tất cả Employee).</em></p>
<p>Tương tự vấn đề trên, khi sử dụng <code v-pre>Collections</code> trong Java, chúng ta thực hiện các vòng lặp và thực hiện lại các đoạn kiểm tra.</p>
<p>Giả sử muốn tính tổng lương của các employee có <mark>role = ‘Developer’</mark> từ 1 danh sách chúng ta phải thực hiện lặp tất cả các phần tử, kiểm tra phần tử đó có <mark>role = ‘Developer’</mark> rồi cộng lại. Trong khi nếu muốn xử lý chúng song song lại dễ gặp lỗi.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> ROLE_DEVELOPER <span class="token operator">=</span> <span class="token string">"Developer"</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">sumSalaryOfDeveloper</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> listEmployee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">double</span> sumSalary <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Employee</span> emp <span class="token operator">:</span> listEmployee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>emp<span class="token punctuation">.</span><span class="token function">getRole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>ROLE_DEVELOPER<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sumSalary <span class="token operator">+=</span> emp<span class="token punctuation">.</span><span class="token function">getSalary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> sumSalary<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Để giải quyết vấn đề đó, Java 8 giới thiệu Stream API giúp developer xử lý dữ liệu khai báo và tận dụng kiến trúc đa lõi (multicore) mà không cần viết mã cụ thể cho nó.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> ROLE_DEVELOPER <span class="token operator">=</span> <span class="token string">"Developer"</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">sumSalaryOfDeveloper</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> listEmployee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> listEmployee
  			<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>p <span class="token operator">-></span> p<span class="token punctuation">.</span><span class="token function">getRole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>ROLE_DEVELOPER<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">mapToDouble</span><span class="token punctuation">(</span>p <span class="token operator">-></span> p<span class="token punctuation">.</span><span class="token function">getSalary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Như vậy, bạn có thể hiểu stream đại diện cho một <code v-pre>collection</code> được xử lý tuần tự và hỗ trợ rất nhiều loại <code v-pre>operation</code> để tính toán dựa trên những element của <code v-pre>collection</code> đó (tính tổng, convert sang <code v-pre>map</code>, …)</p>
<h4 id="_5-functional-interface" tabindex="-1"><a class="header-anchor" href="#_5-functional-interface" aria-hidden="true">#</a> 5. Functional Interface</h4>
<p>Phần này sẽ giải thích rõ tại sao cú pháp Lambda Expression lại được viết như thế.</p>
<p><em>Sẽ bổ sung sau</em></p>
<!-- Chi tiết: https://stackjava.com/java8/functional-interface-la-gi-functional-interface-trong-java-8.html -->
<h4 id="_6-java-date-time-api" tabindex="-1"><a class="header-anchor" href="#_6-java-date-time-api" aria-hidden="true">#</a> 6. Java Date Time API</h4>
<p><em>Sẽ bổ sung sau</em></p>
<h3 id="giai-thich-phuong-thuc-main-trong-chuong-trinh-java" tabindex="-1"><a class="header-anchor" href="#giai-thich-phuong-thuc-main-trong-chuong-trinh-java" aria-hidden="true">#</a> Giải thích phương thức main() trong chương trình Java</h3>
<p>Phương thức <code v-pre>main()</code> trong chương trình Java chính là điểm thực thi của chương trình, hay còn là điểm vào (entry point) khi thực hiện một xử lý trong chương trình Java.</p>
<p>Phương thức <code v-pre>main()</code> kết thúc là khi chương trình kết thúc và phương thức <code v-pre>main()</code> là điều kiện để cho các phương thức khác có thể thực thi.</p>
<h3 id="tai-sao-khong-su-dung-con-tro-trong-java" tabindex="-1"><a class="header-anchor" href="#tai-sao-khong-su-dung-con-tro-trong-java" aria-hidden="true">#</a> <strong>Tại sao không sử dụng con trỏ trong Java?</strong></h3>
<p><strong>Con trỏ</strong> <code v-pre>pointer</code> không được sử dụng trong Java vì <code v-pre>con trỏ</code> khá phức tạp và không an toàn.</p>
<h3 id="tai-sao-java-lai-đoc-lap-nen-tang" tabindex="-1"><a class="header-anchor" href="#tai-sao-java-lai-đoc-lap-nen-tang" aria-hidden="true">#</a> <strong>Tại sao Java lại độc lập nền tảng?</strong></h3>
<p>Java độc lập nền tảng là do Java sử dụng <code v-pre>JVM</code>, máy ảo Java cung cấp cách thực thi mã Java độc lập với nền tảng.</p>
<h3 id="package-trong-java-la-gi-liet-ke-nhung-uu-điem-cua-cac-package" tabindex="-1"><a class="header-anchor" href="#package-trong-java-la-gi-liet-ke-nhung-uu-điem-cua-cac-package" aria-hidden="true">#</a> <strong>Package trong Java là gì? Liệt kê những ưu điểm của các package</strong></h3>
<p><code v-pre>Package</code> trong Java là một nhóm các lớp (class), giao diện (interface) và các <code v-pre>package</code> con tương tự.</p>
<p><code v-pre>Package</code> thường được chia thành 2 loại:</p>
<ul>
<li>Package được dựng sẵn</li>
<li>Package do người dùng định nghĩa</li>
</ul>
<p>Ưu điểm của các <code v-pre>package</code>:</p>
<ul>
<li>Tổ chức file <em>(class, interface)</em> theo một hệ thống để dễ dàng phân loại file.</li>
<li>Phân quyền truy cập giúp xem các <code v-pre>class</code> thuộc <code v-pre>package</code> nào khi được gọi ở phần <code v-pre>access modifier</code>.</li>
<li>Dễ dàng chọn lọc khi <code v-pre>import</code>.
<ul>
<li>Dùng lệnh <code v-pre>import java.sql</code> khi <em>import</em> tất cả các <strong>class</strong>.</li>
<li>Dùng lệnh <code v-pre>import.util.regex</code> khi sử dụng <strong>class</strong> nằm trong <code v-pre>package regex</code>.</li>
</ul>
</li>
</ul>
<h3 id="khac-biet-giua-bo-nho-stack-va-heap" tabindex="-1"><a class="header-anchor" href="#khac-biet-giua-bo-nho-stack-va-heap" aria-hidden="true">#</a> <strong>Khác biệt giữa bộ nhớ Stack và Heap</strong></h3>
<h4 id="ve-kich-thuoc-vung-nho" tabindex="-1"><a class="header-anchor" href="#ve-kich-thuoc-vung-nho" aria-hidden="true">#</a> Về kích thước vùng nhớ</h4>
<ul>
<li>Bộ nhớ <code v-pre>Stack</code>: có kích thước cố định tùy thuộc vào hệ điều hành</li>
<li>Bộ nhớ <code v-pre>Heap</code>: có kích thước không cố định, có thể <mark>tăng giảm tùy thuộc vào nhu cầu</mark></li>
</ul>
<h4 id="ve-đac-điem-vung-nho" tabindex="-1"><a class="header-anchor" href="#ve-đac-điem-vung-nho" aria-hidden="true">#</a> Về đặc điểm vùng nhớ</h4>
<ul>
<li>Bộ nhớ <code v-pre>Stack</code>: Vùng nhớ được quản lý bằng <strong>hệ điều hành</strong>, dữ liệu được lưu sẽ <mark>tự động hủy</mark> sau khi hàm thực hiện xong nhiệm vụ của mình.</li>
<li>Bộ nhớ <code v-pre>Heap</code>: Vùng nhớ được quản lý bằng <strong>lập trình viên</strong> và các dữ liệu sẽ <mark>không bị hủy</mark> sau khi hàm thực hiện xong và <b style="color:#4D779C;">lập trình viên phải tự hủy vùng nhớ</b>.</li>
</ul>
<h4 id="loi-xay-ra-voi-vung-nho" tabindex="-1"><a class="header-anchor" href="#loi-xay-ra-voi-vung-nho" aria-hidden="true">#</a> Lỗi xảy ra với vùng nhớ</h4>
<ul>
<li>Bộ nhớ <code v-pre>Stack</code>: Có khả năng vượt quá dung lượng lưu trữ vì dung lượng bộ nhớ <code v-pre>Stack</code> chỉ có hạn.</li>
<li>Bộ nhớ <code v-pre>Heap</code>: Cũng có khả năng tràn vùng nhớ nếu bạn liên tục cấp phát vùng nhớ mà <strong>không giải phóng thường xuyên</strong>.</li>
</ul>
<h3 id="hay-neu-su-khac-biet-giua-bien-local-va-bien-instance" tabindex="-1"><a class="header-anchor" href="#hay-neu-su-khac-biet-giua-bien-local-va-bien-instance" aria-hidden="true">#</a> <strong>Hãy nêu sự khác biệt giữa biến local và biến instance</strong></h3>
<h4 id="bien-local" tabindex="-1"><a class="header-anchor" href="#bien-local" aria-hidden="true">#</a> Biến local</h4>
<ul>
<li>Được khai báo trong hàm <code v-pre>contructor</code>, trong <code v-pre>block</code> hoặc trong các phương thức</li>
<li>Được tạo trong các phương thức, <code v-pre>contructor</code> và <code v-pre>block</code>. Bị phá hủy khi kết thúc phương thức, <code v-pre>contructor</code> và <code v-pre>block</code>.</li>
<li>Được lưu trên vùng nhớ stack</li>
<li>Không được sử dụng access modifier khi khai báo</li>
<li>Cần khởi tạo giá trị mặc định trước khi sử dụng</li>
</ul>
<h4 id="bien-instance" tabindex="-1"><a class="header-anchor" href="#bien-instance" aria-hidden="true">#</a> Biến instance</h4>
<ul>
<li>Được khai báo trong một lớp, ngoài phương thức, <code v-pre>contructor</code> và <code v-pre>block</code></li>
<li>Được lưu trong bộ nhớ <code v-pre>heap</code></li>
<li>Được tạo khi tạo đối tượng bằng nút <mark>new</mark> và bị phá hủy khi đối tượng bị phá hủy</li>
<li>Được sử dụng bởi phương thức, <code v-pre>contructor</code>, <code v-pre>block</code>, tuy nhiên phải được sử dụng qua một đối tượng cụ thể</li>
<li>Giá trị mặc định phụ thuộc vào kiểu dữ liệu</li>
<li>Có thể gọi trực tiếp bằng tên khi sử dụng trong <code v-pre>class</code></li>
</ul>
<h3 id="tu-khoa-final-trong-java-la-gi" tabindex="-1"><a class="header-anchor" href="#tu-khoa-final-trong-java-la-gi" aria-hidden="true">#</a> <strong>Từ khóa final trong Java là gì?</strong></h3>
<p>Từ khóa <code v-pre>final</code> trong Java là từ khóa được dùng để hạn chế số lượng người dùng.</p>
<p>Lập trình viên có thể sử dụng ở nhiều ngữ cảnh: phương thức <code v-pre>method</code>, biến <code v-pre>variable</code>, lớp <code v-pre>class</code>.</p>
<p><code v-pre>Final</code> là thuộc tính mà chúng sẽ không thể thay đổi giá trị. Các phương thức <code v-pre>final</code> không thể <code v-pre>overide</code> ở lớp con và các <code v-pre>class final</code> không thể kế thừa.</p>
<h3 id="tu-khoa-static-trong-java-la-gi" tabindex="-1"><a class="header-anchor" href="#tu-khoa-static-trong-java-la-gi" aria-hidden="true">#</a> <strong>Từ khóa static trong Java là gì?</strong></h3>
<p><code v-pre>Static</code> trong Java là từ khóa dùng để quản lý bộ nhớ và truy cập trực tiếp thông qua lớp khi không cần khởi tạo.</p>
<h3 id="tu-khoa-super-trong-java" tabindex="-1"><a class="header-anchor" href="#tu-khoa-super-trong-java" aria-hidden="true">#</a> <strong>Từ khóa super trong Java</strong></h3>
<p><code v-pre>Super</code> trong Java là một biến tham chiếu, dùng để tham chiếu đến đối tượng của lớp cha gần nhất một cách trực tiếp.</p>
<h3 id="mo-ta-su-khac-biet-giua-string-stringbuilder-va-stringbuffer" tabindex="-1"><a class="header-anchor" href="#mo-ta-su-khac-biet-giua-string-stringbuilder-va-stringbuffer" aria-hidden="true">#</a> <strong>Mô tả sự khác biệt giữa String, StringBuilder và StringBuffer</strong></h3>
<ul>
<li><code v-pre>String</code> không thể thay đổi và không thể có class con</li>
<li><code v-pre>StringBuffer</code> và <code v-pre>StringBuilder</code> có thể thay đổi được</li>
<li><code v-pre>StringBuffer</code> và <code v-pre>StringBuilder</code> giống nhau, chỉ có điểm khác biệt khi sử dụng đa luồng</li>
<li>Về tốc độ xử lý: <code v-pre>StringBuilder</code> là tốt nhất sau đó đến <code v-pre>StringBuffer</code> và String.</li>
</ul>
<h3 id="constructors-trong-java-la-gi" tabindex="-1"><a class="header-anchor" href="#constructors-trong-java-la-gi" aria-hidden="true">#</a> <strong>Constructors trong Java là gì?</strong></h3>
<p><code v-pre>Constructors</code> (Hàm ảo) trong Java là một phương thức được sử dụng để khởi tạo, trả về các đối tượng của lớp.</p>
<p>Thông thường, một <code v-pre>Constructors</code> sẽ trùng tên với lớp mà nó được định nghĩa.</p>
<h3 id="cac-lop-wrapper-trong-java-la-gi" tabindex="-1"><a class="header-anchor" href="#cac-lop-wrapper-trong-java-la-gi" aria-hidden="true">#</a> <strong>Các lớp wrapper trong Java là gì?</strong></h3>
<p>Lớp <code v-pre>wrapper</code> trong Java là lớp đóng gói các kiểu, cung cấp cơ chế chuyển đổi dữ liệu nguyên thủy trở thành kiểu đối tượng, và ngược lại. .</p>
<blockquote>
<p><RouterLink to="/java-core/session2.html#_1-cac-kieu-du-lieu-nguyen-thuy">Đọc bài viết sau để rõ hơn về các kiểu dữ liệu</RouterLink></p>
</blockquote>
<h3 id="co-bat-buoc-phai-khai-bao-constructor-trong-lop" tabindex="-1"><a class="header-anchor" href="#co-bat-buoc-phai-khai-bao-constructor-trong-lop" aria-hidden="true">#</a> <strong>Có bắt buộc phải khai báo constructor trong lớp?</strong></h3>
<p>Không bắt buộc phải khai báo <code v-pre>constructor</code> trong lớp. Nếu không khai báo, lớp sẽ dùng <code v-pre>default constructor</code>.</p>
<h3 id="cac-loai-pham-vi-truy-cap-trong-java" tabindex="-1"><a class="header-anchor" href="#cac-loai-pham-vi-truy-cap-trong-java" aria-hidden="true">#</a> <strong>Các loại phạm vi truy cập trong Java</strong></h3>
<p>Có 4 phạm vi truy cập trong Java là public, private, default và protected.</p>
<ul>
<li><code v-pre>Public</code>: Có thể truy cập mọi lúc mọi nơi</li>
<li><code v-pre>Private</code>: Chỉ có thể truy cập bên trong lớp</li>
<li><code v-pre>Default</code>: Có thể truy cập từ trong lớp khai báo, các lớp cùng một gói với lớp khai báo</li>
<li><code v-pre>Protected</code>: Có thể truy cập trong lớp khai báo, các lớp con của lớp khai báo, các lớp cùng một gói với lớp khai báo</li>
</ul>
<h3 id="trinh-bien-dich-jit-trong-java" tabindex="-1"><a class="header-anchor" href="#trinh-bien-dich-jit-trong-java" aria-hidden="true">#</a> <strong>Trình biên dịch JIT trong Java</strong></h3>
<p>Trình biên dịch <code v-pre>JIT</code> trong Java hay còn được biết đến với tên gọi <mark>Just-In-Time</mark> – là một kỹ thuật biên dịch các phần mã byte có các chức năng tương tự trong cùng một thời gian, qua đó giảm thời gian biên dịch cần thiết.</p>
<h3 id="mo-ta-khac-biet-giua-constructor-va-phuong-thuc-trong-java" tabindex="-1"><a class="header-anchor" href="#mo-ta-khac-biet-giua-constructor-va-phuong-thuc-trong-java" aria-hidden="true">#</a> <strong>Mô tả khác biệt giữa constructor và phương thức trong Java</strong></h3>
<table>
<thead>
<tr>
<th><code v-pre>Constructor</code></th>
<th><code v-pre>Method</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>Được sử dụng để khởi tạo trạng thái của đối tượng.</td>
<td>Được sử dụng để thể hiện hành động của đối tượng.</td>
</tr>
<tr>
<td>Không có kiểu trả về.</td>
<td>Có kiểu trả về.</td>
</tr>
<tr>
<td>Constructor được gọi ngầm.</td>
<td>Phương thức được gọi tường minh.</td>
</tr>
<tr>
<td><code v-pre>JIT</code> tạo ra constructor mặc định nếu bạn không có constructor nào.</td>
<td>Phương thức không được tạo ra bởi <code v-pre>JIT</code>.</td>
</tr>
<tr>
<td>Tên của constructor phải giống tên lớp.</td>
<td>Tên phương thức có thể giống hoặc khác tên lớp.</td>
</tr>
</tbody>
</table>
<h3 id="su-khac-biet-giua-tu-khoa-break-va-continue" tabindex="-1"><a class="header-anchor" href="#su-khac-biet-giua-tu-khoa-break-va-continue" aria-hidden="true">#</a> <strong>Sự khác biệt giữa từ khóa break và continue</strong></h3>
<p>Từ khóa <code v-pre>break</code> dùng để thoát ra khỏi vòng lặp ngay lập tức và chuyển sang câu lệnh tiếp theo, ở ngoài vòng lặp vừa kết thúc.</p>
<p>Từ khóa <code v-pre>continue</code> được dùng để chỉ việc vòng lặp kế tiếp sẽ được thực hiện.</p>
<!-- 

### **Lập trình hướng đối tượng là gì?**

Lập trình hướng đối tượng (OOP) là một phương pháp lập trình máy tính tổ chức thiết kế phần mềm xung quanh dữ liệu hoặc đối tượng thao tác, thay vì chức năng và logic để thao tác chúng. 

### **Các nguyên lý cơ bản của lập trình hướng đối tượng**

Lập trình hướng đối tượng dựa trên các nguyên lý sau:

*   Encapsulation – Tính đóng gói: Nguyên lý này nói rằng tất cả các thông tin quan trọng được chứa bên trong một đối tượng và chỉ những thông tin được chọn mới được hiển thị. Việc triển khai và trạng thái của từng đối tượng được giữ riêng bên trong một lớp đã xác định. Các đối tượng khác không có quyền truy cập vào lớp này hoặc quyền thực hiện các thay đổi. Họ chỉ có thể gọi một danh sách các hàm hoặc phương thức công khai. Đặc tính ẩn dữ liệu này giúp bảo mật chương trình tốt hơn và tránh làm hỏng dữ liệu ngoài ý muốn.
*   Abstraction – Tính trừu tượng: Các đối tượng chỉ tiết lộ các cơ chế bên trong có liên quan đến việc sử dụng các đối tượng khác, ẩn mọi mã triển khai không cần thiết. Lớp dẫn xuất có thể mở rộng chức năng của nó. Khái niệm này có thể giúp các nhà phát triển dễ dàng thực hiện các thay đổi hoặc bổ sung bổ sung theo thời gian.
*   Inheritance – Tính kế thừa: Các lớp có thể sử dụng lại mã từ các lớp khác. Mối quan hệ và các lớp con giữa các đối tượng có thể được chỉ định, cho phép các nhà phát triển sử dụng lại logic chung trong khi vẫn duy trì một hệ thống phân cấp duy nhất. Thuộc tính này của OOP buộc phải phân tích dữ liệu kỹ lưỡng hơn, giảm thời gian phát triển và đảm bảo mức độ chính xác cao hơn.
*   Polymorphism – Tính đa hình. Các đối tượng được thiết kế để chia sẻ các hành vi và chúng có thể có nhiều dạng. Chương trình sẽ xác định ý nghĩa hoặc cách sử dụng nào là cần thiết cho mỗi lần thực thi đối tượng đó từ lớp cha, giúp giảm nhu cầu sao chép mã. Sau đó, một lớp con được tạo ra để mở rộng chức năng của lớp cha. Tính đa hình cho phép các loại đối tượng khác nhau đi qua cùng một giao diện.

### **Tại sao Java không phải là hướng đối tượng 100%?**

Java không phải là ngôn ngữ hướng đối tượng hoàn toàn vì Java có sử dụng cả các loại dữ liệu khác như byte, char, float, v.v. 

**Đọc thêm**: [Java Developer Là Gì? Mô Tả Công Việc Java Developer](https://glints.com/vn/blog/java-developer-la-gi/)


![phỏng vấn java
](https://glints.com/vn/blog/wp-content/uploads/2022/11/ca%CC%81c-ca%CC%82u-ho%CC%89i-pho%CC%89ng-va%CC%82%CC%81n-java-1024x576.jpg)

Những câu hỏi phỏng vấn Java thường gặp.


### **So sánh ArrayList và Vector trong Java**

Giống nhau:

*   Đều cài đặt interface list
*   Hashtable và HashMap duy trì theo thứ tự chèn các phần tử

Khác nhau:



* Cơ sở so sánh: Căn bản
  * Vector: Lớp Vector sẽ được đồng bộ hóa.
  * ArrayList: Lớp ArrayList sẽ không được đồng bộ hóa.
* Cơ sở so sánh: Lớp kế thừa
  * Vector: Vector là một lớp kế thừa, được thiết kế lại để hỗ trợ lớp Collection.
  * ArrayList: ArrayList là một lớp Collection tiêu chuẩn.
* Cơ sở so sánh: Tuyên bố lớp
  * Vector: Vector
  * ArrayList: ArrayList
* Cơ sở so sánh: Tái phân bổ
  * Vector: Khi không được chỉ định, Vector tăng lên gấp đôi kích thước
  * ArrayList: Khi không được chỉ định, ArrayList tăng thêm một nửa kích thước
* Cơ sở so sánh: Hiệu suất
  * Vector: Khi Vector được đồng bộ hóa,Vector hoạt động chậm hơn ArrayList.
  * ArrayList: Vì ArrayList không được đồng bộ hóa, ArrayList hoạt động nhanh hơn Vector.
* Cơ sở so sánh: Bảng liệt kê / lặp
  * Vector: Vector sử dụng Enumutions và giao diện Iterator để duyệt qua các đối tượng được lưu trữ trong Vector.
  * ArrayList: ArrayList sử dụng giao diện Iterator để duyệt qua các đối tượng được lưu trữ trong ArrayList.


### **Khác biệt giữa equals() và == trong Java**

*   Equals() là một phương thức so sánh 2 object tuy nhiên chỉ so sánh về mặt giá trị của chúng. Trong phép so sánh equals(), nếu đúng sẽ trả về true, sai sẽ trả về false.
*   \== là phép so sánh 2 object có đang cùng trỏ vào một ô nhớ hay không. Trong phép ==, kết quả đúng sẽ trả về true, sai về false. 

### **Nêu định nghĩa một class**

Class đại diện cho các thuộc tính và phương thức chung cho các đối tượng của lớp. Trong Java, class là kiểu dữ liệu do lập trình viên tự tạo ra. 

![cau hoi phong van java](https://glints.com/vn/blog/wp-content/uploads/2022/11/nhu%CC%9B%CC%83ng-ca%CC%82u-ho%CC%89i-pho%CC%89ng-va%CC%82%CC%81n-java-1024x687.jpg)

Học cách trả lời câu hỏi phỏng vấn Java để phỏng vấn hiệu quả.

### **Sự khác biệt giữa mảng và ArrayList**

Array (Mảng) là cấu trúc dữ liệu có kích thước cố định.

ArrayList là lớp collection có thể thay đổi kích thước.

### **Collection trong Java là gì, liệt kê các interface và class của nó**

Collection trong Java là khuôn khổ cung cấp kiến trúc lưu trữ và thao tác tới nhóm đối tượng. Bạn có thể thực hiện tất cả các hoạt động như tìm kiếm, chèn, phân loại, v.v, trên một dữ liệu nhờ Java Collection. 

Các interface của Java Collection: Set, List, Queue, Deque, v.v.

Các class của Java Collection: ArrayList, Vector, LinkedList, HashSet, PriorityQueue, v.v. 

### **Có mấy loại access modifier? Phân biệt sự khác nhau giữa chúng?**

Có 4 loại access modifier là: private, default, protected, public. Trong đó:

*   Public: Có thể truy cập ở bất cứ đâu.
*   Private: Chỉ có thể truy cập trong cùng class.
*   Default: Có thể truy cập trong cùng class và cùng package.
*   Protected: Có thể truy cập trong cùng class, package và ngoài package bởi lớp con.

### **Tính đa hình là gì?**

Polymorphism – Tính đa hình. Các đối tượng được thiết kế để chia sẻ các hành vi và chúng có thể có nhiều dạng. Chương trình sẽ xác định ý nghĩa hoặc cách sử dụng nào là cần thiết cho mỗi lần thực thi đối tượng đó từ lớp cha, giúp giảm nhu cầu sao chép mã.

Sau đó, một lớp con được tạo ra để mở rộng chức năng của lớp cha. Tính đa hình cho phép các loại đối tượng khác nhau đi qua cùng một giao diện.

![những câu hỏi phỏng vấn java](https://glints.com/vn/blog/wp-content/uploads/2022/10/Java-la-ngon-ngu-lap-trinh-huong-doi-tuong.jpg)

Cách trả lời những câu hỏi phỏng vấn Java.


**Lời kết** 
------------

Trên đây chúng ta đã cùng tìm hiểu về những **câu hỏi phỏng vấn Java** thường gặp trong các buổi phỏng vấn. Bạn hãy tham khảo những câu hỏi này để có thể tự tin hơn khi đối diện với nhà tuyển dụng nhé. 

### Tác Giả

[![](https://secure.gravatar.com/avatar/a1c46e64b2e87694a8384afc261e1cc6?s=150&d=mm&r=g)](https://glints.com/vn/blog/author/glints-writers/)

[![](https://glints.com/vn/blog/wp-content/uploads/2023/10/banner-marketplace-1.png)](https://glints.com/vn/opportunities/jobs/explore?country=VN&locationName=All+Cities%2FProvinces&sortBy=LATEST&utm_source=banner_ad&utm_medium=blog&utm_campaign=blogbanner_Q42023&utm_content=xangtang)

 -->
<h2 id="lien-ket" tabindex="-1"><a class="header-anchor" href="#lien-ket" aria-hidden="true">#</a> Liên kết</h2>
<ul>
<li><a href="https://glints.com/vn/blog/cau-hoi-phong-van-java/?gidzl=mWgb8JygBqZ15ACWD3mcJSmUh24kEYWUX1oj9IixSaw37wqdUpnpI8SVh2KgDdTArXN_Tc7C4BrUF2CXHm#cac_cau_hoi_phong_van_java_core_va_cau_tra_loi" target="_blank" rel="noopener noreferrer">glints.com/vn/blog/cau-hoi-phong-van-java</a></li>
</ul>
</div></template>
