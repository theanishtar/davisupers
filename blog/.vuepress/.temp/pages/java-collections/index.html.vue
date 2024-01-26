<template><div><h1 id="_1-tim-hieu-ve-collections-trong-java" tabindex="-1"><a class="header-anchor" href="#_1-tim-hieu-ve-collections-trong-java" aria-hidden="true">#</a> 1. Tìm hiểu về Collections trong Java</h1>
<p>Trong lập trình Java, Collections (Tập hợp) là một khái niệm quan trọng và mạnh mẽ cho việc lưu trữ và quản lý một nhóm các đối tượng. Chúng ta có thể thực hiện nhiều thao tác trên các tập hợp như tìm kiếm, sắp xếp, chèn, xóa và nhiều thao tác khác. Bài viết này sẽ giới thiệu về Collections trong Java, bao gồm các giao diện, lớp cài đặt, và các thuật toán cơ bản.</p>
<h2 id="khai-niem-ve-collections-trong-java" tabindex="-1"><a class="header-anchor" href="#khai-niem-ve-collections-trong-java" aria-hidden="true">#</a> Khái niệm về Collections trong Java</h2>
<p>Trong Java, &quot;Collections&quot; là một khung (framework) cung cấp kiến trúc để lưu trữ và thao tác trên các tập hợp đối tượng.</p>
<p>Java Collections cho phép bạn làm việc với các dữ liệu phức tạp và cung cấp các giao diện và lớp cài đặt cho một loạt các cấu trúc dữ liệu, chẳng hạn như danh sách (<code v-pre>List</code>), tập hợp (<code v-pre>Set</code>), hàng đợi (<code v-pre>Queue</code>), và ánh xạ (<code v-pre>Map</code>).</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-collections/session1/132952801-20345632-c056-4c52-9603-9970fa3988b5.png?raw=true" alt=""></p>
<h2 id="cai-đat-trong-collections" tabindex="-1"><a class="header-anchor" href="#cai-đat-trong-collections" aria-hidden="true">#</a> Cài đặt trong Collections</h2>
<p>Gói <code v-pre>java.util</code> cung cấp tập các lớp cài đặt các giao diện lõi để tạo ra những cấu trúc dữ liệu thường sử dụng như: <code v-pre>Vector</code>, <code v-pre>HashTable</code>, <code v-pre>HashSet</code>, <code v-pre>LinkedList</code>, <code v-pre>TreeSet</code>,.... Những lớp này và giao diện lõi được xây dựng theo cấu trúc phân cấp như sau:</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-collections/session1/132952809-7b363990-dfe2-42aa-800b-456035b1fd26.png?raw=true" alt=""></p>
<h2 id="phan-interface-trong-collections" tabindex="-1"><a class="header-anchor" href="#phan-interface-trong-collections" aria-hidden="true">#</a> Phần interface trong collections</h2>
<p>Giao diện (interface) Collection là cơ sở để phát triển, mở rộng thành các giao diện khác như <code v-pre>Set</code>, <code v-pre>List</code>, <code v-pre>SortedSet</code> và <code v-pre>Map</code> và giao diện cơ sở để mở rộng thành <code v-pre>SortedMap</code>.</p>
<p>Các giao diện lõi của cấu trúc Collection được mô tả trong bảng sau:</p>
<table>
<thead>
<tr>
<th>Interface</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>Collection</code></td>
<td>interface cơ sở định nghĩa tất cả các phép toán cơ bản cho các lớp cần duy trì thực hiện và cài đặt chúng</td>
</tr>
<tr>
<td><code v-pre>Set</code></td>
<td>là một collection không thể chứa 2 giá trị trùng lặp. Set được sử dụng để biểu diễn các bộ, chẳng hạn như bộ tú lu khơ, thời khóa biểu của học sinh, các tiến trình đang chạy trên máy tính...</td>
</tr>
<tr>
<td><code v-pre>SortedSet</code></td>
<td>Mở rộng Set để cài đặt cấu trúc tập hợp được sắp, trong đó không có phần tử được lặp và chúng được sắp xếp theo thứ tự</td>
</tr>
<tr>
<td><code v-pre>List</code></td>
<td>là một collection có thứ tự (đôi khi còn được gọi là một chuỗi). List có thể chứa các phần tử trùng lặp. Thường có quyền kiểm soát chính xác vị trí các phần tử được chèn vào và có thể truy cập chúng bằng chỉ số (vị trí của chúng).</td>
</tr>
<tr>
<td><code v-pre>Map</code></td>
<td>interface cơ sở định nghĩa các phép toán để các lớp sử dụng và cài đặt các ánh xạ từ khoá sang các giá trị</td>
</tr>
<tr>
<td><code v-pre>SortedMap</code></td>
<td>Mở rộng của Map để cài đặt các ánh xạ khoá theo thứ tự</td>
</tr>
<tr>
<td><code v-pre>Queue</code></td>
<td>là một collection được sử dụng để chứa nhiều phần tử trước khi xử lý. Bên cạnh các thao tác cơ bản của collection, Queue cung cấp các thao tác bổ sung như chèn, lấy ra và kiểm tra. Queue có thể được sử dụng như là FIFO (first-in, first-out - vào trước, ra trước)</td>
</tr>
<tr>
<td><code v-pre>Deque</code></td>
<td>là một collection được sử dụng để chứa nhiều phần tử trước khi xử lý. Ngoài các thao tác cơ bản của collection, một Deque cung cấp các thao tác bổ sung như chèn, lấy ra và kiểm tra. Deques có thể được sử dụng như là FIFO (first-in, first-out - vào trước, ra trước) và LIFO (last-in, first-out - vào sau, ra trước). Trong một Deque, tất cả các phần tử mới có thể được chèn vào, lấy ra và lấy ra ở cả hai đầu.</td>
</tr>
</tbody>
</table>
<h2 id="phan-thuat-toan-trong-collections" tabindex="-1"><a class="header-anchor" href="#phan-thuat-toan-trong-collections" aria-hidden="true">#</a> Phần thuật toán trong collections</h2>
<p>Lớp <code v-pre>java.util.Collection</code> (cần phân biệt với giao diện Collection) cung cấp một số hàm static thực hiện những thuật toán đa xạ cho những phép toán khác nhau trên tập hợp, kể cả sắp xếp, tìm kiểm và dịch chuyển các phần tử.</p>
<p>Một số hàm trong số đó là:</p>
<p>Sử dụng thuật toán tìm kiếm nhị phân để xác định chỉ số của phần tử key trong danh sách list.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Object</span> key<span class="token punctuation">)</span>
</code></pre></div><p>Thay thế tất cả các phần tử trong danh sách list bằng obj</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">fill</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Object</span> obj<span class="token punctuation">)</span>
</code></pre></div><p>Hoán vị các phần tử của danh sách list một cách ngẫu nhiên.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">shuffle</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span>
</code></pre></div><p>Sắp xếp các phần tử trong danh sách list theo thứ tự tăng dần.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span>
</code></pre></div><h2 id="collection-trong-java" tabindex="-1"><a class="header-anchor" href="#collection-trong-java" aria-hidden="true">#</a> Collection trong Java</h2>
<p>Giao diện Collection được xây dựng như là mẫu hợp đồng cho tất cả các cấu trúc tập hợp có thể dựa vào đó mà thực thi và cài đặt. Gói java.util cung cấp các lớp tập hợp và cài đặt hầu hết các hàm của Collection.</p>
<p>Các phép toán cơ sở</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Xác định kích thước của tập hợp.</span>
<span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Trả lại true nếu tập hợp rỗng, ngược lại false.</span>
<span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Trả lại true nếu tập hợp chứa obj, ngược lại false. boolean add(Object obj);   // Tùy chọn</span>
<span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Tùy chọn</span>
</code></pre></div><p>Trả lại true nếu tập hợp thực hiện thành công việc bổ sung (loại bỏ) obj, ngược lại false.</p>
<h2 id="thuat-toan-trong-collections" tabindex="-1"><a class="header-anchor" href="#thuat-toan-trong-collections" aria-hidden="true">#</a> Thuật toán trong Collections</h2>
<p>Java Collections cung cấp một loạt các thuật toán mạnh mẽ để thực hiện trên các tập hợp dữ liệu. Dưới đây là một số phương thức thuật toán quan trọng:</p>
<ul>
<li><code v-pre>binarySearch(List list, Object key)</code>: Tìm kiếm một phần tử trong danh sách đã sắp xếp bằng thuật toán tìm kiếm nhị phân.</li>
<li><code v-pre>fill(List list, Object obj)</code>: Thay thế tất cả các phần tử trong danh sách bằng một đối tượng cụ thể.</li>
<li><code v-pre>shuffle(List list)</code>: Hoán vị các phần tử trong danh sách một cách ngẫu nhiên.</li>
<li><code v-pre>sort(List list)</code>: Sắp xếp các phần tử trong danh sách theo thứ tự tăng dần.</li>
</ul>
<p>Các phương thức này giúp bạn thực hiện các thao tác phức tạp trên tập hợp dữ liệu một cách dễ dàng và hiệu quả.</p>
<p>Collections trong Java cung cấp một cơ hội mạnh mẽ để làm việc với các dữ liệu phức tạp và đa dạng.</p>
<p>Bài viết này đã giới thiệu về các giao diện, lớp cài đặt và các thuật toán quan trọng trong Java Collections.</p>
<p>Sử dụng Java Collections có thể giúp bạn quản lý và thao tác dữ liệu một cách hiệu quả trong ứng dụng của bạn.</p>
</div></template>
