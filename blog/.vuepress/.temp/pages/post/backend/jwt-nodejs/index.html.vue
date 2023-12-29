<template><div><p><a href="">JWT</a> là một hình thức xác thực người dùng rất bảo mật, hiệu quả và phổ biến trong mô hình<a href="">CSR</a></p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/1.png?raw=true" alt=""></p>
<p>Trong lúc tự học NodeJS mình đã xây dựng một <RouterLink to="/post/backend/jwt-nodejs/#sean-app">SEAN app</RouterLink>. Bạn có thể xem mã nguồn tại <a href="https://github.com/Theanishtar/Rainbow-Flix" target="_blank" rel="noopener noreferrer">đây</a></p>
<p>Trong đó có chức năng Xác thực bằng <strong>JWT</strong> <em>(Json Web Token)</em>, mình sẽ cùng tìm hiểu trong bài viết hôm nay nhé!!!</p>
<p>Mình có một số lưu ý sau đây:</p>
<ul>
<li>Bài viết hôm nay chỉ đề cập đến JWT trong NodeJS nên phải có kiến thức về cả <a href="">JWT</a> và <RouterLink to="/nodejs/">NodeJS</RouterLink> nhé</li>
<li>Bài viết này được mình lấy trực tiếp từ dự án đã xây dựng nên có gì chưa hiểu bạn hãy xem mã nguồn của dự án nhé</li>
</ul>
<p>Okay bắt đầu thoy !!!</p>
<details class="custom-container details"><summary><b>Nội dung chính</b></summary>
<p><img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/2.png?raw=true" alt="Nguyên lý">
<img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/3.png?raw=true" alt="Thành phần">
<img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/4.png?raw=truee" alt="Tính chất lựa ">
<img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/5.png?raw=true" alt="Ưu điểm">
<img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/6.png?raw=true" alt="Nhược điểm">
<img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/7.png?raw=true" alt="Bài tập">
<img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/8.png?raw=true" alt="Bài giải"></p>
</details>
<h2 id="xay-dung-csdl" tabindex="-1"><a class="header-anchor" href="#xay-dung-csdl" aria-hidden="true">#</a> Xây dựng CSDL</h2>
<p><img src="https://github.com/dangtranhuu/images/raw/main/rainbow-flix/djagram-rolesuser.png?raw=true" alt="Diagram DB"></p>
<p>Như bạn thấy ở hình trên ta cần 3 Table chính liên quan đến người dùng gồm: <strong>User</strong> hay <strong>Account</strong>, <strong>Roles</strong> và <strong>UserRole</strong>.</p>
<details class="custom-container details"><summary><b>Chi tiết:</b></summary>
<p><strong>User</strong>: chứa danh sách người dùng</p>
<p><strong>Roles</strong>: chứa tất cả các quyền trong hệ thống</p>
<p><strong>UserRole</strong>: bảng trung gian liên kết N-N trong hệ thống</p>
</details>
<h3 id="ma-nguon-my-sql" tabindex="-1"><a class="header-anchor" href="#ma-nguon-my-sql" aria-hidden="true">#</a> Mã nguồn My-SQL</h3>
<h4 id="account" tabindex="-1"><a class="header-anchor" href="#account" aria-hidden="true">#</a> Account</h4>
<div class="language-sql ext-sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>account<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>username<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>fullname<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>password<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>email<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>image<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>role<span class="token punctuation">`</span></span> <span class="token keyword">bit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>liked<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>shares<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>isActive<span class="token punctuation">`</span></span> <span class="token keyword">bit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8mb4_general_ci<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>account<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>username<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>fullname<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>password<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>email<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>image<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>role<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>liked<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>shares<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>isActive<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span>
<span class="token punctuation">(</span><span class="token string">'dangth'</span><span class="token punctuation">,</span> <span class="token string">'Trần Hữu Đang'</span><span class="token punctuation">,</span> <span class="token string">'9999'</span><span class="token punctuation">,</span> <span class="token string">'dangtt135@gmail.com'</span><span class="token punctuation">,</span> <span class="token string">'dangth.png'</span><span class="token punctuation">,</span> b<span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> b<span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'datnt'</span><span class="token punctuation">,</span> <span class="token string">'Nguyễn Tiến Đạt'</span><span class="token punctuation">,</span> <span class="token string">'datnt'</span><span class="token punctuation">,</span> <span class="token string">'datnt@gmail.com'</span><span class="token punctuation">,</span> <span class="token string">'datnt.png'</span><span class="token punctuation">,</span> b<span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> b<span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'duyenttm'</span><span class="token punctuation">,</span> <span class="token string">'Trần Thị Mỹ Duyên'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">,</span> <span class="token string">'duyenttm@gmail.com'</span><span class="token punctuation">,</span> <span class="token string">'duyenttm.png'</span><span class="token punctuation">,</span> b<span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> b<span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'hanltn'</span><span class="token punctuation">,</span> <span class="token string">'Lê Thị Ngọc Hân'</span><span class="token punctuation">,</span> <span class="token string">'hanltn'</span><span class="token punctuation">,</span> <span class="token string">'hanltn@gmail.com'</span><span class="token punctuation">,</span> <span class="token string">'hanlth.png'</span><span class="token punctuation">,</span> b<span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> b<span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'nganntd'</span><span class="token punctuation">,</span> <span class="token string">'Nguyễn Thị Diễm Ngân'</span><span class="token punctuation">,</span> <span class="token string">'ngan'</span><span class="token punctuation">,</span> <span class="token string">'nganntd@gmail.com'</span><span class="token punctuation">,</span> <span class="token string">'nganntd.png'</span><span class="token punctuation">,</span> b<span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">'phuocnhh'</span><span class="token punctuation">,</span> <span class="token string">'Nguyễn Hoàng Hữu Phước'</span><span class="token punctuation">,</span> <span class="token string">'phuoc'</span><span class="token punctuation">,</span> <span class="token string">'phuoclhh@gmail.com'</span><span class="token punctuation">,</span> <span class="token string">'Phuocnhh.png'</span><span class="token punctuation">,</span> b<span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> b<span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="roles" tabindex="-1"><a class="header-anchor" href="#roles" aria-hidden="true">#</a> Roles</h4>
<div class="language-sql ext-sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>roles<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>description<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8mb4_general_ci<span class="token punctuation">;</span>
<span class="token comment">--------------------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>roles<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>description<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'ROLE_ADMIN'</span><span class="token punctuation">,</span> <span class="token string">'Quyền quản trị. Xem thống kê và tất cả quyền'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'ROLE_MANAGER'</span><span class="token punctuation">,</span> <span class="token string">'Quyền quản lý. CRUD Video'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'ROLE_USER'</span><span class="token punctuation">,</span> <span class="token string">'Quyền người dùng. Xem, thích, comment video'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="userrole" tabindex="-1"><a class="header-anchor" href="#userrole" aria-hidden="true">#</a> UserRole</h4>
<div class="language-sql ext-sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>userrole<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>username<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>roleid<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8mb4_general_ci<span class="token punctuation">;</span>
<span class="token comment">---------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>userrole<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>username<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>roleid<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'dangth'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'datnt'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'duyenttm'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'hanltn'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">'nganntd'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">'phuocnhh'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Ta có thể lấy ra các thông tin và quyền của một <strong>User</strong> ứng với <code v-pre>email</code> và <code v-pre>password</code> bằng câu truy vấn sau:</p>
<div class="language-sql ext-sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 
	u<span class="token punctuation">.</span>fullname<span class="token punctuation">,</span> u<span class="token punctuation">.</span>email<span class="token punctuation">,</span> GROUP_CONCAT<span class="token punctuation">(</span>r<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token keyword">AS</span> roles
<span class="token keyword">FROM</span> roles r
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> 
	userrole ur <span class="token keyword">ON</span> r<span class="token punctuation">.</span>id <span class="token operator">=</span> ur<span class="token punctuation">.</span>roleid
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> 
	account u <span class="token keyword">ON</span> ur<span class="token punctuation">.</span>username <span class="token operator">like</span> u<span class="token punctuation">.</span>username
<span class="token keyword">WHERE</span> 
	u<span class="token punctuation">.</span>email <span class="token operator">like</span> <span class="token string">'${email}'</span> <span class="token operator">and</span> u<span class="token punctuation">.</span>password <span class="token operator">like</span> <span class="token string">'${password}'</span> 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> u<span class="token punctuation">.</span>email<span class="token punctuation">;</span>
</code></pre></div><p>Kết quả:</p>
<table>
<thead>
<tr>
<th>Fullname</th>
<th>Email</th>
<th>Roles</th>
</tr>
</thead>
<tbody>
<tr>
<td>Trần Hữu Đang</td>
<td>dangtt135@gmail.com</td>
<td>ROLE_ADMIN, ROLE_MANAGER</td>
</tr>
<tr>
<td>Frog Dev</td>
<td>frogdev@gmail.com</td>
<td>ROLE_USER</td>
</tr>
<tr>
<td>Nguyễn Nhân Viên</td>
<td>viennn@gmail.com</td>
<td>ROLE_STAFF</td>
</tr>
</tbody>
</table>
<h2 id="tao-du-an" tabindex="-1"><a class="header-anchor" href="#tao-du-an" aria-hidden="true">#</a> Tạo dự án</h2>
<h3 id="tao-du-an-voi-express" tabindex="-1"><a class="header-anchor" href="#tao-du-an-voi-express" aria-hidden="true">#</a> Tạo dự án với Express</h3>
<div class="language-cmd ext-cmd"><pre v-pre class="language-cmd"><code>npm install express --save
npm install express
npm install express-generator -g
cd /var/www/
express expressjs
cd expressjs
npm install
</code></pre></div><h3 id="cai-đat-thu-vien-can-thiet" tabindex="-1"><a class="header-anchor" href="#cai-đat-thu-vien-can-thiet" aria-hidden="true">#</a> Cài đặt thư viện cần thiết</h3>
<div class="language-cmd ext-cmd"><pre v-pre class="language-cmd"><code>npm i -save mysql	
npm i -save jsonwebtoken
npm i -save dotenv
</code></pre></div><details class="custom-container details"><summary>Chú thích</summary>
<p><strong>mysql</strong>: kết nối và truy vấn CSDL</p>
<p><strong>jsonwebtoken</strong>: làm việc với Json Web Token</p>
<p><strong>dotenv</strong>: khởi tạo biến môi trường cho phần <RouterLink to="/post/backend/jwt-nodejs/#token">SECRET KEY</RouterLink> cho Token</p>
</details>
<h2 id="lap-trinh-back-end" tabindex="-1"><a class="header-anchor" href="#lap-trinh-back-end" aria-hidden="true">#</a> Lập trình back-end</h2>
<h3 id="khoi-tao-secret-key" tabindex="-1"><a class="header-anchor" href="#khoi-tao-secret-key" aria-hidden="true">#</a> Khởi tạo SECRET KEY</h3>
<p>Tạo file <mark>.env</mark> trong package <code v-pre>server/.env</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token constant">ACCESS_TOKEN_SECRET</span> <span class="token operator">=</span> froggydev1210
</code></pre></div><h3 id="xay-dung-jwt-model" tabindex="-1"><a class="header-anchor" href="#xay-dung-jwt-model" aria-hidden="true">#</a> Xây dựng JWT Model</h3>
<p>Xây dựng lớp <mark>JwtModel</mark> trong package <code v-pre>server/models/JwtModel.js</code></p>
<p>Viết 2 hàm là <strong>generateToken</strong> để tạo ra <RouterLink to="/post/backend/jwt-nodejs/#token">AccessToken</RouterLink> và <strong>generateRefreshToken</strong> để tạo <RouterLink to="/post/backend/jwt-nodejs/#token">RefreshToken</RouterLink>.</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'jsonwebtoken'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> dotent <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'dotenv'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dotent<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">JwtModel</span> <span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token function">generateToken</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ACCESS_TOKEN_SECRET</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">expiresIn</span><span class="token operator">:</span> time <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">static</span> <span class="token function">generateRefreshToken</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ACCESS_TOKEN_SECRET</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">expiresIn</span><span class="token operator">:</span> time <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> JwtModel<span class="token punctuation">;</span>
</code></pre></div><ul>
<li>
<p><strong>data</strong>: là đối tượng muốn khởi tạo JWT</p>
</li>
<li>
<p><strong>process.env.ACCESS_TOKEN_SECRET</strong>: là <code v-pre>SECRET KEY</code> của JWT</p>
</li>
<li>
<p><strong>expiresIn</strong>: là thời gian tồn tại của JWT</p>
</li>
</ul>
<h3 id="xay-dung-user-model" tabindex="-1"><a class="header-anchor" href="#xay-dung-user-model" aria-hidden="true">#</a> Xây dựng User Model</h3>
<p>Xây dựng lớp <mark>UserModel</mark> trong package <code v-pre>server/models/UserModel.js</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> db <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./database'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> queryLogin <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">email<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token operator">=></span>
	<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">SELECT u.fullname, u.email, GROUP_CONCAT(r.name) AS roles
	FROM roles r
	INNER JOIN userrole ur ON r.id = ur.roleid
	INNER JOIN account u ON ur.username like u.username
	WHERE u.email like '</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>email<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">' and u.password like '</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>password<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">' 
	GROUP BY u.email;</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">UserModel</span> <span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"getdatabase: "</span> <span class="token operator">+</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token function">queryLogin</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>email<span class="token punctuation">,</span> user<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
			db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> UserModel<span class="token punctuation">;</span>
</code></pre></div><p>Model gồm có:</p>
<ul>
<li>Một câu lệnh <a href="">T-SQL</a> để truy vấn với MySQL
<ul>
<li>Tham số nhận vào: <code v-pre>email</code> và <code v-pre>password</code>.</li>
<li>Dữ liệu trả về: <code v-pre>fullname</code>, <code v-pre>email</code> của <mark>User</mark> và một mảng tập hợp các <code v-pre>role</code> của <mark>User</mark> đó.</li>
</ul>
</li>
<li>Một hàm <code v-pre>login</code> để đăng nhập, hàm sẽ gọi tới câu truy vấn ở trên và trả về cả đối tượng <mark>User</mark> nếu có tồn tại trong Database.</li>
</ul>
<h3 id="xay-dung-user-controller" tabindex="-1"><a class="header-anchor" href="#xay-dung-user-controller" aria-hidden="true">#</a> Xây dựng User Controller</h3>
<p>Tạo lớp <mark>UserController</mark> trong pakage <code v-pre>server/controllers/UserController.js</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> UserModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../models/userModel'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> jwtModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../models/jwtModel'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> UserModel<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'User not found'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">let</span> userRes <span class="token operator">=</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">email</span><span class="token operator">:</span> user<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>email<span class="token punctuation">,</span>
				<span class="token literal-property property">roles</span><span class="token operator">:</span> user<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>roles<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span> 
				<span class="token comment">// "ROLE_ADMIN,ROLE_USER" -> ["ROLE_ADMIN", "ROLE_USER"]</span>
			<span class="token punctuation">}</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>userRes<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> accessToken <span class="token operator">=</span> jwtModel<span class="token punctuation">.</span><span class="token function">generateToken</span><span class="token punctuation">(</span>userRes<span class="token punctuation">,</span> <span class="token string">'5h'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> refreshToken <span class="token operator">=</span> jwtModel<span class="token punctuation">.</span><span class="token function">generateRefreshToken</span><span class="token punctuation">(</span>userRes<span class="token punctuation">,</span> <span class="token string">'10h'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> resp <span class="token operator">=</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">fullname</span><span class="token operator">:</span> user<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fullname<span class="token punctuation">,</span>
				<span class="token literal-property property">token</span><span class="token operator">:</span> accessToken<span class="token punctuation">,</span>
				<span class="token literal-property property">refreshToken</span><span class="token operator">:</span> refreshToken
			<span class="token punctuation">}</span>
			res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
			res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Internal server error'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> UserController<span class="token punctuation">;</span>
</code></pre></div><p>Viết hàm <code v-pre>login</code> để thực hiện login khi có Request đưa tới</p>
<h3 id="xay-dung-router-login" tabindex="-1"><a class="header-anchor" href="#xay-dung-router-login" aria-hidden="true">#</a> Xây dựng Router Login</h3>
<p>Tạo lớp login trong package <code v-pre>server/routes/login.js</code> để bắt Request có url là <a href="http://localhost:8080/login/token" target="_blank" rel="noopener noreferrer">http://localhost:8080/login/token</a></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> loginCtrl <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../controllers/UserController'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* GET users listing. */</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> loginCtrl<span class="token punctuation">.</span>getUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* 
	RETURN: Token when login success
	{
		fullname: Tran Huu Dang
		token: eyhsujbjsv...nsje
		refreshToken: eyvkdnrks...jujee
	}
*/</span>
router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	loginCtrl<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>
</code></pre></div><h2 id="lap-trinh-front-end" tabindex="-1"><a class="header-anchor" href="#lap-trinh-front-end" aria-hidden="true">#</a> Lập trình Front-end</h2>
<p>Trong ứng dụng gốc mình đã sử dụng <a href=""><strong>Angular</strong></a> để xây dựng <em>(nếu bạn thấy nó được viết bằng <a href=""><strong>AngularJS</strong></a> thì nghĩa là bản cũ nhé)</em></p>
<p>Mình sẽ hướng dẫn đơn giản nhất bằng <RouterLink to="/post/backend/jwt-nodejs/#front-end">JQuery</RouterLink> <RouterLink to="/post/backend/jwt-nodejs/#front-end">ajax</RouterLink> và <RouterLink to="/post/backend/jwt-nodejs/#front-end">html</RouterLink> thuần nhé!</p>
<h3 id="xay-dung-form-đang-nhap" tabindex="-1"><a class="header-anchor" href="#xay-dung-form-đang-nhap" aria-hidden="true">#</a> Xây dựng form đăng nhập</h3>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loginForm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	ĐĂNG NHẬP

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Mật khẩu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login100-form-btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		Đăng nhập
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre></div><h3 id="xay-dung-ham-call-api-bang-jquery" tabindex="-1"><a class="header-anchor" href="#xay-dung-ham-call-api-bang-jquery" aria-hidden="true">#</a> Xây dựng hàm call API bằng JQuery</h3>
<p>Mình đã xây dựng server chạy tại localhost và port 3000, bạn có thể tùy chỉnh cho phù hợp nhé</p>
<p>Ta sẽ lưu <mark>Token</mark> vào localstorage để truyền vào header của các <mark>Request</mark> sau nhé</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">function</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token parameter">ms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#loginForm"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Ngăn chuyển hướng mặc định của form</span>

		<span class="token keyword">var</span> formData <span class="token operator">=</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"input[name='email']"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"input[name='password']"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>

		$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://localhost:3000/login'</span><span class="token punctuation">,</span>
			<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
			<span class="token literal-property property">data</span><span class="token operator">:</span> formData<span class="token punctuation">,</span>
			<span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span>
			<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
				<span class="token comment">//Này là thông báo với data nữa cần lưu data thì lây xài</span>
				<span class="token comment">// xuất thhong báo</span>
				<span class="token keyword">let</span> lastname <span class="token operator">=</span> response<span class="token punctuation">.</span>fullname<span class="token punctuation">;</span>
				<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Chào '</span> <span class="token operator">+</span> lastname<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token function">saveCookie</span><span class="token punctuation">(</span><span class="token string">'fullname'</span><span class="token punctuation">,</span> lastname<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>lastname<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
				localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'refreshToken'</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span>refreshToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token comment">//Cho 2s</span>
				<span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
					<span class="token comment">// chuyển trang sau 2s</span>
					window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">"#/main"</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>

			<span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">xhr<span class="token punctuation">,</span> status<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// Xử lý lỗi</span>
				console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="chay-ung-dung" tabindex="-1"><a class="header-anchor" href="#chay-ung-dung" aria-hidden="true">#</a> Chạy ứng dụng</h2>
<h3 id="chay-ung-dung-phia-back-end" tabindex="-1"><a class="header-anchor" href="#chay-ung-dung-phia-back-end" aria-hidden="true">#</a> Chạy ứng dụng phía back-end</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>npm start
</code></pre></div><p>Truy cập: <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">http://localhost:3000/</a></p>
<p>Có thể test trên Postman
<img src="https://github.com/dangtranhuu/images/raw/main/rainbow-flix/loginapi.png?raw=true" alt=""></p>
<h2 id="chu-thich" tabindex="-1"><a class="header-anchor" href="#chu-thich" aria-hidden="true">#</a> Chú thích</h2>
<h4 id="sean-app" tabindex="-1"><a class="header-anchor" href="#sean-app" aria-hidden="true">#</a> SEAN APP</h4>
<ul>
<li><strong>SEAN</strong>: Ý nói các ứng dụng web được xây dựng bằng <b style="color: green" >S</b>ql, <b style="color: green" >E</b>xpressJS, <b style="color: green" >A</b>ngular, <b style="color: green" >N</b>odejs</li>
</ul>
<h4 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> Token</h4>
<ul>
<li><strong>AccessToken</strong>: <em>Token</em> đã được xác minh</li>
<li><strong>RefreshToken</strong>: <em>Token</em> dự bị khi nào <em>AccessToken</em> hết hạn thì <em>RefreshToken</em> sẽ được thay thế cho <em>Token</em> cũ</li>
<li><strong>SECRET KEY</strong>: Một thành phần quan trọng để <em>server</em> <strong>kiểm tra tính hợp lệ</strong> của <em>Token</em></li>
</ul>
<h4 id="t-sql" tabindex="-1"><a class="header-anchor" href="#t-sql" aria-hidden="true">#</a> T-SQL</h4>
<ul>
<li><strong>T-SQL</strong>: một <a href="">ngôn ngữ lập trình</a> phía <em>database</em> sử dụng các câu lệnh <strong>SQL</strong></li>
</ul>
<h4 id="front-end" tabindex="-1"><a class="header-anchor" href="#front-end" aria-hidden="true">#</a> Front-end</h4>
<ul>
<li><strong>Angular</strong>: Một <em>Framework</em> phía Front-end được xây dựng bằng <a href="">TypeScript</a></li>
<li><strong>JQuery</strong>: thư viện của <strong>JavaScript</strong></li>
<li><strong>Ajax</strong>: là phương thức trao đổi dữ liệu với máy chủ và cập nhật một hay nhiều phần của trang web, hoàn toàn <em>không reload lại toàn bộ trang</em>.</li>
<li><strong>HTML</strong>: ngôn ngữ đánh dấu, xây dựng website</li>
</ul>
<hr>
<p>Xin cảm ơn vì đã đọc bài viết, các bạn có thể để lại bình luận bên dưới nhé</p>
<p>Chúc các bạn một ngày học tập và làm việc vui vẻ, tốt lành</p>
</div></template>
