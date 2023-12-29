<template><div><p>Trong công nghệ xây dựng web-app hiện nay, có thể nói mô hình SCR (Client Side Rendering) đang được phát triển một cách vượt bật.</p>
<p>Cùng với sự ưa chuộng ấy, <mark>Rest API</mark> đóng vai trò rất quan trọng trong việc kết nối <em><strong>Back-end</strong></em> và <em><strong>Front-end</strong></em>...</p>
<p>Hôm nay hãy cùng mình phân biệt hai khái niệm API gồm <code v-pre>Restful</code> và <code v-pre>Non-Restful</code> nha ^^</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/interview/api/banner.png?raw=true" alt=""></p>
<h2 id="khai-niem" tabindex="-1"><a class="header-anchor" href="#khai-niem" aria-hidden="true">#</a> Khái niệm</h2>
<h3 id="restapi" tabindex="-1"><a class="header-anchor" href="#restapi" aria-hidden="true">#</a> RestAPI</h3>
<p>Rest API là một ứng dụng được dùng để chuyển đổi cấu trúc của dữ liệu có những phương thức giúp kết nối với các thư viện và ứng dụng khác nhau.</p>
<p>Rest Api thường không được xem là công nghệ, mà nó là giải pháp giúp tạo ra những ứng dụng web services chuyên dụng để thay thế cho nhiều kiểu khác như: <a href="">SOAP</a>, <a href="">WSDL</a>,...</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/interview/api/restapi.png?raw=true" alt=""></p>
<h3 id="restful-api" tabindex="-1"><a class="header-anchor" href="#restful-api" aria-hidden="true">#</a> Restful API</h3>
<p>Restful API là một trong những tiêu chuẩn được sử dụng để thiết kế API cho các ứng dụng web, để tiện hơn cho việc quản lý các <code v-pre>resource</code>.</p>
<p>Rest API thường chú trọng vào các tài nguyên của hệ thống bao gồm: ảnh, văn bản, âm thanh, video hoặc các dữ liệu di động,...</p>
<p>Nó thường bao gồm các trạng thái tài nguyên đã được định dạng sẵn và được truyền tải thông qua HTTP.</p>
<ul>
<li>Một chức năng quan trọng nhất của REST là:
<ul>
<li>Quy định các cách sử dụng <code v-pre>HTTP</code> method chẳng hạn như: <code v-pre>POST</code>, <code v-pre>GET</code>, <code v-pre>DELETE</code>, <code v-pre>PUT</code>,... và cách có thể định dạng các <code v-pre>URL</code> cho ứng dụng web để có thể quản lý được các <code v-pre>resource</code>.</li>
<li>Restful không quy định logic code ứng dụng và không được giới hạn bởi những ngôn ngữ lập trình ứng dụng.</li>
<li>Bất kỳ framework hoặc ngôn ngữ nào cũng có thể được dùng để thiết kế được một Restful API.</li>
</ul>
</li>
</ul>
<h4 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h4>
<p><a href="">API</a> là từ viết tắt của cụm từ <mark>Application Programming Interface</mark></p>
<p>Đây là tập hợp những quy tắc và cơ chế mà theo đó thì: Một ứng dụng hoặc một thành phần nào đó sẽ tương tác với một ứng dụng hoặc một số thành phần khác.</p>
<p><a href="">API</a> có thể sẽ được trả về dữ liệu mà người dùng cần cho chính ứng dụng của bạn với những kiểu dữ liệu được dùng phổ biến như <code v-pre>JSON</code> hoặc <code v-pre>XML</code>.</p>
<h4 id="rest" tabindex="-1"><a class="header-anchor" href="#rest" aria-hidden="true">#</a> REST</h4>
<p>Rest là từ viết tắt của <mark>Representational State Transfer</mark></p>
<p>Nó là một trong những dạng chuyển đổi cấu trúc, với kiểu kiến trúc thường được viết API. Rest thường sử dụng dụng phương thức <code v-pre>HTTP</code> đơn giản để có thể tạo ra giao tiếp giữa các máy.</p>
<p>Bởi vì thế, thay vì phải sử dụng một <code v-pre>URL</code> cho việc xử lý một số thông tin của người dùng thì Rest sẽ yêu cầu <code v-pre>HTTP</code> như: <code v-pre>GET</code>, <code v-pre>POST</code>, <code v-pre>DELETE</code>,... đến với bất kỳ một <code v-pre>URL</code> để được xử lý dữ liệu.</p>
<h2 id="vi-du-thuc-te" tabindex="-1"><a class="header-anchor" href="#vi-du-thuc-te" aria-hidden="true">#</a> Ví dụ thực tế</h2>
<p>Đặt thuộc tính hợp anh dev trẻ tuổi tên <code v-pre>Đ</code> đang làm một website xem video tương tự như <a href="">YouTube</a> chẳng hạn</p>
<p>Các thao tác cơ bản gồm:</p>
<ul>
<li>Thêm, sửa, xóa <a href="">video</a></li>
<li>like, share, comment <a href="">video</a></li>
</ul>
<h4 id="non-restful" tabindex="-1"><a class="header-anchor" href="#non-restful" aria-hidden="true">#</a> Non-Restful</h4>
<p>RestAPI thông thường được chia ra hai thao tác chính là: <code v-pre>POST</code> và <code v-pre>GET</code></p>
<ul>
<li>Trong đó:
<ul>
<li><code v-pre>GET</code>: lấy một (<code v-pre>getOne</code>) hoặc tất cả (<code v-pre>getAll</code>) dữ liệu của <strong><code v-pre>resources</code></strong></li>
<li><code v-pre>POST</code>: đại diện cho thao tác <code v-pre>CREATE</code>, <code v-pre>UPDATE</code>, <code v-pre>DELETE</code></li>
</ul>
</li>
</ul>
<p>Như ta có thể thấy với cấu trúc này hầu hết các thao tác đều được xây dựng bằng <code v-pre>POST API</code> và không hề có quy tắc nào.</p>
<p>Ta sẽ tiến hành xây dựng các <code v-pre>API</code> theo cấu trúc <code v-pre>URL</code> như sau:</p>
<table>
<thead>
  <tr>
   <th>Thao tác</th>
    <th>Phương thức</th>
    <th>URL</th>
    <th>Chú thích</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Read One</td>
    <td rowspan="2">GET</td>
    <td><code>/api/get-video/1</code></td>
    <td rowspan="2">1 thể hiện id của video</td>
  </tr>
  <tr>
    <td><code>/api/get-video?id=1</code></td>
  </tr>
  <tr>
    <td>Read All</td>
    <td>GET</td>
    <td><code>/api/get-all-videos</code></td>
    <td><a>videos</a> là số nhiều</td>
  </tr>
  <tr>
    <td>Create</td>
    <td>POST</td>
    <td><code>/api/create-video</code></td>
    <td>dữ liệu của video sẽ được thêm ở body</td>
  </tr>
  <tr>
    <td rowspan="2">Update</td>
    <td rowspan="2">POST</td>
    <td><code>/api/update-video/1</code></td>
    <td rowspan="2">1 thể hiện id của video</td>
  </tr>
  <tr>
    <td><code>/api/delete-video?id=1</code></td>
  </tr>
  <tr>
    <td rowspan="2">Delete</td>
    <td rowspan="2">POST</td>
    <td><code>/api/delete-video?id=1</code></td>
    <td rowspan="2">1 thể hiện id của video</td>
  </tr>
  <tr>
    <td><code>/api/delete-video/1</code></td>
  </tr>
</tbody>
</table>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title"><b>Nhận xét</b></p>
<p>Như ta thấy các động từ mô tả nhiệm vụ của api có ngay sau <code v-pre>/api/</code> như <em>delete, create, update,...</em></p>
<p>Điểm chung dễ nhận biết nhất là các API này thiết kế theo tùy ý người xât dựng hoặc do yêu cầu khách hàng, doanh nghiệp mà không tuân theo một duy tắc nhất quán nào</p>
</div>
<h4 id="restful" tabindex="-1"><a class="header-anchor" href="#restful" aria-hidden="true">#</a> Restful</h4>
<p>Vẫn với bài toán trên ta sẽ xây dựng bằng Restful API như sau:</p>
<table>
<thead>
<tr>
<th>Thao tác</th>
<th>Phương thức</th>
<th>URL</th>
<th>Thành công</th>
<th>Thất bại</th>
<th>Dư liệu trả về</th>
</tr>
</thead>
<tbody>
<tr>
<td>Read One</td>
<td>GET</td>
<td><code v-pre>/api/v1/videos/1</code></td>
<td>200</td>
<td>201-500</td>
<td>video</td>
</tr>
<tr>
<td>Read All</td>
<td>GET</td>
<td><code v-pre>/api/v1/videos</code></td>
<td>200</td>
<td>201-500</td>
<td>videos</td>
</tr>
<tr>
<td>Create</td>
<td>POST</td>
<td><code v-pre>/api/v1/videos</code></td>
<td>201</td>
<td>202-500</td>
<td>new video</td>
</tr>
<tr>
<td>Update</td>
<td>PUT/PATCH</td>
<td><code v-pre>/api/videos/1</code></td>
<td>200</td>
<td>201-500</td>
<td>updated video</td>
</tr>
<tr>
<td>Delete</td>
<td>DELETE</td>
<td><code v-pre>/api/v1/videos/1</code></td>
<td>204</td>
<td>201-500</td>
<td><em>NULL</em></td>
</tr>
</tbody>
</table>
<h4 id="bonus" tabindex="-1"><a class="header-anchor" href="#bonus" aria-hidden="true">#</a> Bonus</h4>
<p>Một số cách viết API theo quy tắc Restful thường được áp dụng để mô tả hành động cụ thể.</p>
<p>Giả sử <code v-pre>Đ</code> đang xây dựng một mạng xã hội. Với chức năng <code v-pre>search</code>, <code v-pre>comment</code> hay <code v-pre>like</code> thì sẽ viết api thế nào ?</p>
<ul>
<li>
<p>Tìm kiếm: <mark>GET</mark> <code v-pre>/api/search?q=key+word</code></p>
</li>
<li>
<p>Thích:  <mark>POST</mark> <code v-pre>/api/comments/1/like</code> || <code v-pre>/api/comments/1?action=like</code></p>
</li>
<li>
<p>Không thích:  <mark>POST</mark> <code v-pre>/api/comments/1/unlike</code> || <code v-pre>/api/comments/1?action=unlike</code></p>
</li>
</ul>
<h2 id="nhung-cau-hoi-phong-van" tabindex="-1"><a class="header-anchor" href="#nhung-cau-hoi-phong-van" aria-hidden="true">#</a> Những câu hỏi phỏng vấn</h2>
<h4 id="phan-biet-put-va-patch" tabindex="-1"><a class="header-anchor" href="#phan-biet-put-va-patch" aria-hidden="true">#</a> Phân biệt PUT và PATCH</h4>
<ul>
<li>PUT
<ul>
<li>Dùng để cập nhật cả đối tượng, thường sẽ truyền toàn bộ thuộc tính muốn cập nhật.</li>
<li>Những thuộc tính không được truyền sẽ được cập nhật là <em>NULL</em>...</li>
</ul>
</li>
<li>PATCH
<ul>
<li>Dùng để cập nhật một vài thuộc tính trong một đối tượng.</li>
<li>Ta có thể truyền một vài thuộc tính muốn cập nhật mà không ảnh hưởng dữ liệu gốc</li>
</ul>
</li>
</ul>
<p>Ví dụ:</p>
<p>Ta có user như sau:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token class-name">String</span> fullname<span class="token punctuation">;</span>
    <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Và api để cập nhật user:</p>
<p><mark>PUT</mark>   <code v-pre>/api/v1/users/1</code> <br/>
<mark>PATCH</mark> <code v-pre>/api/v1/users/1</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token constant">PUT</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/v1/users/1</span><span class="token template-punctuation string">`</span></span>
Content<span class="token operator">-</span>Type<span class="token operator">:</span> application<span class="token operator">/</span>json
<span class="token punctuation">{</span>
    <span class="token string-property property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fullname</span><span class="token operator">:</span> <span class="token string">"Trần Hữu Đang"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"dangdepzai@frog.vn"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>User ban đầu có giá trị:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">User</span> <span class="token punctuation">{</span>
    username<span class="token operator">:</span> <span class="token string">"frogdev"</span><span class="token punctuation">,</span> 
    password<span class="token operator">:</span> <span class="token string">"frog@123"</span><span class="token punctuation">,</span>
    fullname<span class="token operator">:</span> <span class="token string">"Frog Dev"</span><span class="token punctuation">,</span>
    email<span class="token operator">:</span> <span class="token string">"frogdev@frog.vn"</span>    
<span class="token punctuation">}</span>
</code></pre></div><p>Sau khi gọi API User sẽ có giá trị:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">User</span> <span class="token punctuation">{</span>
    username<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> 
    password<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    fullname<span class="token operator">:</span> <span class="token string">"Trần Hữu Đang"</span><span class="token punctuation">,</span>
    email<span class="token operator">:</span> <span class="token string">"dangdepzai@frog.vn"</span>  
<span class="token punctuation">}</span>
</code></pre></div><hr>
<p>Ta có thể thấy <code v-pre>username</code> và <code v-pre>password</code> đã được cập nhật thành <em>NULL</em>.</p>
<p>Điều này xảy ra bởi vì <code v-pre>PUT</code> sẽ cập nhật toàn bộ đối tượng với data truyền vào, nếu thiếu thuộc tính nào, thuộc tính đó sẽ biến thành <em>NULL</em>.</p>
<hr>
<p>Còn với <code v-pre>PATCH</code>. Giả sử dữ liệu được trả lại ban đầu và ta gọi <code v-pre>PATCH</code>.</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token constant">PATCH</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/v1/users/1</span><span class="token template-punctuation string">`</span></span>
Content<span class="token operator">-</span>Type<span class="token operator">:</span> application<span class="token operator">/</span>json
<span class="token punctuation">{</span>
    <span class="token string-property property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fullname</span><span class="token operator">:</span> <span class="token string">"Trần Hữu Đang"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"dangdepzai@frog.vn"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Sau khi gọi API User sẽ có giá trị:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token class-name">User</span> <span class="token punctuation">{</span>
    username<span class="token operator">:</span> <span class="token string">"frogdev"</span><span class="token punctuation">,</span> 
    password<span class="token operator">:</span> <span class="token string">"frog@123"</span><span class="token punctuation">,</span>
    fullname<span class="token operator">:</span> <span class="token string">"Trần Hữu Đang"</span><span class="token punctuation">,</span>
    email<span class="token operator">:</span> <span class="token string">"dangdepzai@frog.vn"</span>  
<span class="token punctuation">}</span>
</code></pre></div><p>Dữ liệu được cập nhật chỉ khi nó có tồn tại trong phần <code v-pre>body</code> của <code v-pre>request</code> mà thôi !!!</p>
</div></template>
