<template><div><p><a href="">JWT</a> là một hình thức xác thực người dùng rất bảo mật, hiệu quả và phổ biến trong mô hình<a href="">CSR</a></p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtspringboot/main.png?raw=true" alt=""></p>
<p>Trong lúc tự học RestfulAPI với <a href="">SpringBoot</a> mình đã xây dựng một Web app (SpringBoot, SQL, Angular). Bạn có thể xem mã nguồn tại <a href="https://github.com/Theanishtar/Davitickets" target="_blank" rel="noopener noreferrer">đây</a></p>
<p>Trong đó có chức năng Xác thực bằng <strong>JWT</strong> <em>(Json Web Token)</em>, mình sẽ cùng tìm hiểu trong bài viết hôm nay nhé!!!</p>
<p>Mình có một số lưu ý sau đây:</p>
<ul>
<li>Bài viết hôm nay chỉ đề cập đến JWT trong SpringBoot nên phải có kiến thức về cả <a href="">JWT</a> và <RouterLink to="/spring-boot/">SpringBoot</RouterLink> nhé</li>
<li>Bài viết này được mình lấy trực tiếp từ dự án đã xây dựng nên có gì chưa hiểu bạn hãy xem mã nguồn của dự án nhé</li>
</ul>
<p>Okay bắt đầu thoy !!!</p>
<details class="custom-container details"><summary><b>Nội dung chính</b></summary>
<p>Sẽ cập nhật sau ^^</p>
<!-- ![Nguyên lý](https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/2.png?raw=true)
![Thành phần](https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/3.png?raw=true)
![Tính chất lựa ](https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/4.png?raw=truee)
![Ưu điểm](https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/5.png?raw=true)
![Nhược điểm](https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/6.png?raw=true)
![Bài tập](https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/7.png?raw=true)
![Bài giải](https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/cont/8.png?raw=true) -->
</details>
<h2 id="xay-dung-csdl" tabindex="-1"><a class="header-anchor" href="#xay-dung-csdl" aria-hidden="true">#</a> Xây dựng CSDL</h2>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/backend/jwt/diagram.png?raw=true" alt="Diagram DB"></p>
<p>Như bạn thấy ở hình trên ta cần 3 Table chính liên quan đến người dùng gồm: <strong>Users</strong>, <strong>Roles</strong> và <strong>UserRole</strong>.</p>
<details class="custom-container details"><summary><b>Chi tiết:</b></summary>
<p><strong>Users</strong>: chứa danh sách người dùng</p>
<p><strong>Roles</strong>: chứa tất cả các quyền trong hệ thống</p>
<p><strong>UserRole</strong>: bảng trung gian liên kết N-N trong hệ thống</p>
</details>
<h3 id="ma-nguon-my-sql" tabindex="-1"><a class="header-anchor" href="#ma-nguon-my-sql" aria-hidden="true">#</a> Mã nguồn My-SQL</h3>
<h4 id="tao-bang" tabindex="-1"><a class="header-anchor" href="#tao-bang" aria-hidden="true">#</a> Tạo bảng</h4>
<details class="custom-container details"><summary><b>Code SQL</b></summary>
<div class="language-sql ext-sql"><pre v-pre class="language-sql"><code><span class="token comment">--Quyền</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> roles<span class="token punctuation">(</span>
    role_id <span class="token keyword">INT</span> <span class="token keyword">IDENTITY</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span>name<span class="token punctuation">]</span> NVARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	role_des NVARCHAR<span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span>

<span class="token comment">--Người dùng</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> users <span class="token punctuation">(</span>
	userid <span class="token keyword">INT</span> <span class="token keyword">IDENTITY</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	full_name NVARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span>user_name<span class="token punctuation">]</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	gender NVARCHAR<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	user_password <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span>MAX<span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	phone <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	profile_picture <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span>MAX<span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	account_status <span class="token keyword">BIT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token comment">--trạng thái hoạt động</span>
	processed_by <span class="token keyword">BIT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token comment">--xác thực</span>
	user_birtday <span class="token keyword">DATE</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	user_dayjoin <span class="token keyword">DATE</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	gg_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span>MAX<span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">-- Liên kết Người dùng với Quyền</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> user_role<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">IDENTITY</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	userid <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token keyword">REFERENCES</span> users<span class="token punctuation">(</span>userid<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">--id ng dung</span>
	role_id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token keyword">REFERENCES</span> roles<span class="token punctuation">(</span>role_id<span class="token punctuation">)</span><span class="token comment">--Vai trò người dùng</span>
<span class="token punctuation">)</span>
</code></pre></div></details>
<h4 id="them-du-lieu" tabindex="-1"><a class="header-anchor" href="#them-du-lieu" aria-hidden="true">#</a> Thêm dữ liệu</h4>
<details class="custom-container details"><summary><b>Mã SQL</b></summary>
<div class="language-sql ext-sql"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> roles <span class="token keyword">VALUES</span>
	<span class="token punctuation">(</span><span class="token string">'ROLE_ADMIN'</span><span class="token punctuation">,</span>N<span class="token string">'Quản trị web'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token string">'ROLE_USER'</span><span class="token punctuation">,</span>N<span class="token string">'Người dùng'</span><span class="token punctuation">)</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> users <span class="token keyword">VALUES</span> 
	<span class="token punctuation">(</span>N<span class="token string">'Trần Hữu Đang'</span><span class="token punctuation">,</span>N<span class="token string">'dangth'</span><span class="token punctuation">,</span> <span class="token string">'Nam'</span><span class="token punctuation">,</span> <span class="token string">'$2a$10$AR78OxmWNlFMnmFlv.XWFe2TECixCdfV.2K9G4yrmQ1irWXvxcL72'</span><span class="token punctuation">,</span> N<span class="token string">'0917288723'</span><span class="token punctuation">,</span> N<span class="token string">'dangthpc04349@fpt.edu.vn'</span><span class="token punctuation">,</span> <span class="token string">'https://firebasestorage.googleapis.com/v0/b/davitickets-2e627.appspot.com/o/dangth.jpg?alt=media&amp;token=e223770c-06cb-448e-9025-43000f55d764'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'9-7-2003'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'7-22-2023'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span>N<span class="token string">'Lê Bích Vi'</span><span class="token punctuation">,</span> N<span class="token string">'vilb'</span><span class="token punctuation">,</span> <span class="token string">'Nữ'</span><span class="token punctuation">,</span> <span class="token string">'$2a$10$SvchmABRVVZjeLgOW4Dez.q7T1kcybCdiQF70DHKNs.nX30vmYLVi'</span><span class="token punctuation">,</span> N<span class="token string">'0178296424'</span><span class="token punctuation">,</span> N<span class="token string">'vilbpc04354@fpt.edu.vn'</span><span class="token punctuation">,</span> <span class="token string">'https://firebasestorage.googleapis.com/v0/b/davitickets-2e627.appspot.com/o/vilb.jpg?alt=media&amp;token=83641b31-7ea9-432d-bd6b-4dd0f5e9062f'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'6-2-2003'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'7-22-2023'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span>N<span class="token string">'Phùng Quốc Vinh'</span><span class="token punctuation">,</span>N<span class="token string">'vinhpq'</span><span class="token punctuation">,</span>  <span class="token string">'Nam'</span><span class="token punctuation">,</span> <span class="token string">'$2a$10$aF6y9hGg06.We5mXYua13eM/N4o2wq0UZSD2JgC0PVja.1x1chXjS'</span><span class="token punctuation">,</span> N<span class="token string">'0862738927'</span><span class="token punctuation">,</span> N<span class="token string">'vinhpqpc04338@fpt.edu.vn'</span><span class="token punctuation">,</span> <span class="token string">'https://firebasestorage.googleapis.com/v0/b/davitickets-2e627.appspot.com/o/vinhpq.jpg?alt=media&amp;token=635b97b6-bdf4-49b5-ae07-a802c17a979e'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'11-15-2003'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'7-22-2023'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span>N<span class="token string">'Đoàn Hiệp Sỹ'</span><span class="token punctuation">,</span>N<span class="token string">'sydh'</span><span class="token punctuation">,</span> <span class="token string">'Nam'</span><span class="token punctuation">,</span> <span class="token string">'$2a$10$DYKf7ahE.Feac9JEy8exP.hMYXtaI5aayfeYua0ZCGVV0RXvu5.Gy'</span><span class="token punctuation">,</span> N<span class="token string">'0836452473'</span><span class="token punctuation">,</span> N<span class="token string">'sydhpc04388@fpt.edu.vn'</span><span class="token punctuation">,</span> <span class="token string">'https://firebasestorage.googleapis.com/v0/b/davitickets-2e627.appspot.com/o/sydh.jpg?alt=media&amp;token=f907c8e9-4712-4448-b7a9-1d9df8f9b053'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'4-7-2003'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'7-22-2023'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span>N<span class="token string">'Nguyễn Khánh Đan'</span><span class="token punctuation">,</span>N<span class="token string">'dannk'</span><span class="token punctuation">,</span> <span class="token string">'Nữ'</span><span class="token punctuation">,</span> <span class="token string">'$2a$10$CRFxFV1oJiYT0rTa3STe.ubKEz1V59HrdOSCl1OA6uVG2xYretjQ6'</span><span class="token punctuation">,</span> N<span class="token string">'0924637483'</span><span class="token punctuation">,</span> N<span class="token string">'dannkpc04351@fpt.edu.vn'</span><span class="token punctuation">,</span> <span class="token string">'https://firebasestorage.googleapis.com/v0/b/davitickets-2e627.appspot.com/o/dannk.jpg?alt=media&amp;token=2cb34557-c380-4095-8a10-8a211add0940'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'11-7-2003'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'7-22-2023'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span>N<span class="token string">'Châu Hoài Phúc'</span><span class="token punctuation">,</span> N<span class="token string">'phucch'</span><span class="token punctuation">,</span><span class="token string">'Nam'</span><span class="token punctuation">,</span> <span class="token string">'$2a$10$pT5QFvN2Ha5jiOCtZTK.ZOY0dS5MKC/K31S2jyg2Ln978nju1BxCq'</span><span class="token punctuation">,</span> N<span class="token string">'0918093162'</span><span class="token punctuation">,</span> N<span class="token string">'phucchpc04191@fpt.edu.vn'</span><span class="token punctuation">,</span> <span class="token string">'https://firebasestorage.googleapis.com/v0/b/davitickets-2e627.appspot.com/o/phucch.jpg?alt=media&amp;token=8ee61c10-23b1-41a5-97ed-b1e0e6d894ed'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'11-2-2003'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'7-22-2023'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span>N<span class="token string">'Quách Hữu Nghĩa'</span><span class="token punctuation">,</span>N<span class="token string">'nghiahq'</span><span class="token punctuation">,</span> <span class="token string">'Nam'</span><span class="token punctuation">,</span> N<span class="token string">'$2a$10$WzBhlbBVtJxyafSiM1os9.4S0tDkSmoYgWY/om0Ma7dBBz9jlpUUq'</span><span class="token punctuation">,</span> N<span class="token string">'012346789'</span><span class="token punctuation">,</span> N<span class="token string">'nghiaqh@fe.edu.vn'</span><span class="token punctuation">,</span> <span class="token string">'https://firebasestorage.googleapis.com/v0/b/davitickets-2e627.appspot.com/o/thaynghia.jpg?alt=media&amp;token=9fc95aed-1dfe-4b87-8ebe-2903ffd50678'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'1-1-1990'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> CAST<span class="token punctuation">(</span><span class="token string">'7-22-2023'</span> <span class="token keyword">AS</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> user_role <span class="token keyword">VALUES</span>
	<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token number">2</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token number">3</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token number">4</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token number">5</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token number">6</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token number">7</span> <span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token number">7</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre></div></details>
<p>Ta có thể lấy ra các thông tin và quyền của một <strong>User</strong> ứng với <code v-pre>email</code> và <code v-pre>password</code> bằng câu truy vấn sau:</p>
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
<h3 id="tao-du-an-voi-spring-tools-sute" tabindex="-1"><a class="header-anchor" href="#tao-du-an-voi-spring-tools-sute" aria-hidden="true">#</a> Tạo dự án với Spring Tools Sute</h3>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title"><b>MẸO</b></p>
<p>Các bạn có thể tải <RouterLink to="/post/backend/jwt-springboot/#spring">Spring Tools Sute</RouterLink> tại <a href="">đây</a> nhé.</p>
<p>Hoặc cũng có thể sử dụng <RouterLink to="/post/backend/jwt-springboot/#spring">VS Code</RouterLink> thay thế!</p>
</div>
<p>Các bạn tạo dự <code v-pre>Spring Stater Project</code> và thêm các <code v-pre>dependencies</code> sau nhé (mình sẽ bỏ qua các <em>dependencies</em> mặc định và chỉ đề cập đến những <em>dependencies</em> cần thiết cho dự án hôm nay thôi nhé)</p>
<p><em>pom.xml</em></p>
<div class="language-xml ext-xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>		
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.jsonwebtoken<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jjwt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>0.9.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.auth0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>java-jwt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.19.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre></div><h3 id="cau-hinh-cac-bien-moi-truong" tabindex="-1"><a class="header-anchor" href="#cau-hinh-cac-bien-moi-truong" aria-hidden="true">#</a> Cấu hình các biến môi trường</h3>
<ul>
<li>Tùy chỉnh theo yêu cầu của bạn trong tệp <RouterLink to="/post/backend/jwt-springboot/#spring"><code v-pre>application.properties</code></RouterLink></li>
</ul>
<div class="language-properties ext-properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">spring.jpa.properties.hibernate.enable_lazy_load_no_trans</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token comment">#dtb</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:sqlserver://localhost:1433;databaseName=DaviTickets;encrypt=true;trustServerCertificate=true;</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">sa</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">123</span>
<span class="token key attr-name">spring.datasource.driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.microsoft.sqlserver.jdbc.SQLServerDriver</span>

<span class="token comment">#JWT</span>
<span class="token key attr-name">jwt.secret</span><span class="token punctuation">=</span><span class="token value attr-value">davisy@poly@@</span>
<span class="token key attr-name">jwt.header</span><span class="token punctuation">=</span><span class="token value attr-value">Authorization</span>
<span class="token key attr-name">jwt.value</span><span class="token punctuation">=</span><span class="token value attr-value">Bearer</span>
</code></pre></div><h2 id="tao-cac-đoi-tuong-entities" tabindex="-1"><a class="header-anchor" href="#tao-cac-đoi-tuong-entities" aria-hidden="true">#</a> Tạo các đối tượng Entities</h2>
<ul>
<li>Đối tượng <code v-pre>Users</code> implement lớp <code v-pre>UserDetails</code></li>
</ul>
<p><em>User.java</em></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Entity</span>
<span class="token annotation punctuation">@Table</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"users"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Users</span> <span class="token keyword">implements</span> <span class="token class-name">UserDetails</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Id</span>
	<span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span>IDENTITY<span class="token punctuation">)</span>
	<span class="token keyword">int</span> userid<span class="token punctuation">;</span>
	<span class="token class-name">String</span> full_name<span class="token punctuation">;</span>
	<span class="token class-name">String</span> user_name<span class="token punctuation">;</span>
	<span class="token class-name">String</span> gender<span class="token punctuation">;</span>
	<span class="token class-name">String</span> user_password<span class="token punctuation">;</span>
	<span class="token class-name">String</span> phone<span class="token punctuation">;</span>
	<span class="token class-name">String</span> email<span class="token punctuation">;</span>
	<span class="token class-name">String</span> profile_picture<span class="token punctuation">;</span>
	<span class="token keyword">boolean</span> account_status<span class="token punctuation">;</span>
	<span class="token class-name">Boolean</span> processed_by<span class="token punctuation">;</span>
	<span class="token annotation punctuation">@Temporal</span><span class="token punctuation">(</span><span class="token class-name">TemporalType</span><span class="token punctuation">.</span>DATE<span class="token punctuation">)</span>
	<span class="token class-name">Date</span> user_birtday <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token annotation punctuation">@Temporal</span><span class="token punctuation">(</span><span class="token class-name">TemporalType</span><span class="token punctuation">.</span>DATE<span class="token punctuation">)</span>
	<span class="token class-name">Date</span> user_dayjoin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> gg_id<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@JsonIgnore</span>
	<span class="token annotation punctuation">@OneToMany</span><span class="token punctuation">(</span>cascade <span class="token operator">=</span> <span class="token class-name">CascadeType</span><span class="token punctuation">.</span>ALL<span class="token punctuation">,</span> fetch <span class="token operator">=</span> <span class="token class-name">FetchType</span><span class="token punctuation">.</span>LAZY<span class="token punctuation">,</span> mappedBy <span class="token operator">=</span> <span class="token string">"users"</span><span class="token punctuation">)</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Booking</span><span class="token punctuation">></span></span> booking<span class="token punctuation">;</span>


	<span class="token annotation punctuation">@ManyToMany</span><span class="token punctuation">(</span>fetch <span class="token operator">=</span> <span class="token class-name">FetchType</span><span class="token punctuation">.</span>LAZY<span class="token punctuation">,</span> targetEntity <span class="token operator">=</span> <span class="token class-name">Roles</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@JoinTable</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"user_role"</span><span class="token punctuation">,</span> joinColumns <span class="token operator">=</span> <span class="token annotation punctuation">@JoinColumn</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"userid"</span><span class="token punctuation">,</span> referencedColumnName <span class="token operator">=</span> <span class="token string">"userid"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> inverseJoinColumns <span class="token operator">=</span> <span class="token annotation punctuation">@JoinColumn</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"role_id"</span><span class="token punctuation">,</span> referencedColumnName <span class="token operator">=</span> <span class="token string">"role_id"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Roles</span><span class="token punctuation">></span></span> roles <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> roles <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Roles</span> role <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>roles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			roles<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>role<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> roles<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">GrantedAuthority</span><span class="token punctuation">></span></span> <span class="token function">getAuthorities</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SimpleGrantedAuthority</span><span class="token punctuation">></span></span> authorities <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Roles</span> role <span class="token operator">:</span> roles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            authorities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleGrantedAuthority</span><span class="token punctuation">(</span>role<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ROLE: "</span> <span class="token operator">+</span> role<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> authorities<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"USER"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isAdmin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"ADMIN"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul>
<li>Đối tượng <code v-pre>Roles</code></li>
</ul>
<p><em>Roles.java</em></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Entity</span>
<span class="token annotation punctuation">@Table</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"roles"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Roles</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Id</span>
	<span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span>IDENTITY<span class="token punctuation">)</span>
	<span class="token class-name">Integer</span> role_id<span class="token punctuation">;</span>

	<span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token class-name">String</span> role_des<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@ManyToMany</span><span class="token punctuation">(</span> mappedBy <span class="token operator">=</span> <span class="token string">"roles"</span><span class="token punctuation">,</span>targetEntity <span class="token operator">=</span> <span class="token class-name">Users</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Users</span><span class="token punctuation">></span></span>user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="tao-cac-models-tuong-tac-database" tabindex="-1"><a class="header-anchor" href="#tao-cac-models-tuong-tac-database" aria-hidden="true">#</a> Tạo các models tương tác Database</h2>
<h3 id="lop-userdao" tabindex="-1"><a class="header-anchor" href="#lop-userdao" aria-hidden="true">#</a> Lớp UserDAO</h3>
<p><em>UserDAO.java</em></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>davisys<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>jpa<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">JpaRepository</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>jpa<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">Query</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>davisys<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Users</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserDAO</span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Users</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"SELECT * FROM users WHERE email=:email OR phone=:email"</span><span class="token punctuation">,</span> nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">Users</span> <span class="token function">findEmaiAndPhonelUser</span><span class="token punctuation">(</span><span class="token class-name">String</span> email<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"SELECT * FROM users WHERE email=:email "</span><span class="token punctuation">,</span> nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">Users</span> <span class="token function">findEmailUser</span><span class="token punctuation">(</span><span class="token class-name">String</span> email<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"SELECT * FROM users WHERE email=:email OR phone=:phone"</span><span class="token punctuation">,</span> nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">Users</span> <span class="token function">findPhoneAndEmailUser</span><span class="token punctuation">(</span><span class="token class-name">String</span> email<span class="token punctuation">,</span> <span class="token class-name">String</span> phone<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>RoleDAO.java</em></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>davisys<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>jpa<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">JpaRepository</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>davisys<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Roles</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">RoleDAO</span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Roles</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="repositories" tabindex="-1"><a class="header-anchor" href="#repositories" aria-hidden="true">#</a> Repositories</h3>
<p><em>RoleCustomRepo.java</em></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RoleCustomRepo</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@PersistenceContext</span>
	<span class="token keyword">private</span> <span class="token class-name">EntityManager</span> entityManager<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Roles</span><span class="token punctuation">></span></span> <span class="token function">getRole</span><span class="token punctuation">(</span><span class="token class-name">Users</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">StringBuilder</span> sql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"SELECT r.name, r.role_des as name FROM users u INNER JOIN user_role ur ON u.userid = ur.userid \r\n"</span>
						<span class="token operator">+</span> <span class="token string">"INNER JOIN roles r ON r.role_id =ur.role_id "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		sql<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"WHERE 1=1 "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sql<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">" and email=:email"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">NativeQuery</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Roles</span><span class="token punctuation">></span></span> query <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Session</span><span class="token punctuation">)</span> entityManager<span class="token punctuation">.</span><span class="token function">getDelegate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createNativeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			query<span class="token punctuation">.</span><span class="token function">setParameter</span><span class="token punctuation">(</span><span class="token string">"email"</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		query<span class="token punctuation">.</span><span class="token function">addScalar</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token class-name">StandardBasicTypes</span><span class="token punctuation">.</span>STRING<span class="token punctuation">)</span><span class="token punctuation">;</span>
		query<span class="token punctuation">.</span><span class="token function">setResultTransformer</span><span class="token punctuation">(</span><span class="token class-name">Transformers</span><span class="token punctuation">.</span><span class="token function">aliasToBean</span><span class="token punctuation">(</span><span class="token class-name">Roles</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> query<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>UserRepo.java</em></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UsersReponsitory</span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Users</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
	<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Users</span><span class="token punctuation">></span></span><span class="token function">findByEmail</span><span class="token punctuation">(</span><span class="token class-name">String</span> email<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="tao-cac-object-authentication" tabindex="-1"><a class="header-anchor" href="#tao-cac-object-authentication" aria-hidden="true">#</a> Tạo các Object Authentication</h2>
<ul>
<li>Lớp <code v-pre>AuthenticationRequest</code> để nhận data từ request đăng nhập.</li>
</ul>
<p><em>AuthenticationRequest.java</em></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>davisys<span class="token punctuation">.</span>auth</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuthenticationRequest</span> <span class="token punctuation">{</span>
	<span class="token class-name">String</span> email<span class="token punctuation">;</span>
	<span class="token class-name">String</span> password<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul>
<li>Lớp <code v-pre>AutenticationResponse</code> để trả về <mark>Token</mark> khi đăng nhập.</li>
</ul>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>davisys<span class="token punctuation">.</span>auth</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collection</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>core<span class="token punctuation">.</span>authority<span class="token punctuation">.</span></span><span class="token class-name">SimpleGrantedAuthority</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Builder</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuthenticationResponse</span> <span class="token punctuation">{</span>
	<span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SimpleGrantedAuthority</span><span class="token punctuation">></span></span> roles <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> token<span class="token punctuation">;</span>
	<span class="token class-name">String</span> refreshToken<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="tao-cac-services" tabindex="-1"><a class="header-anchor" href="#tao-cac-services" aria-hidden="true">#</a> Tạo các services</h2>
<h3 id="lop-jwtservice" tabindex="-1"><a class="header-anchor" href="#lop-jwtservice" aria-hidden="true">#</a> Lớp JwtService</h3>
<p>Tạo lớp <code v-pre>JwtService.java</code> và thêm hai phương thức sau:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JwtService</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${jwt.secret}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> secret<span class="token punctuation">;</span>
	
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span>    JWT_TOKEN_VALIDITY  <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span> 
	
	<span class="token comment">// phương thức khởi tạo access token</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">generateToken</span><span class="token punctuation">(</span><span class="token class-name">Users</span> user<span class="token punctuation">,</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SimpleGrantedAuthority</span><span class="token punctuation">></span></span> authorities<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Algorithm</span> algorithm <span class="token operator">=</span> <span class="token class-name">Algorithm</span><span class="token punctuation">.</span><span class="token function">HMAC256</span><span class="token punctuation">(</span>secret<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">return</span> JWT<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">withSubject</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">withExpiresAt</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span> JWT_TOKEN_VALIDITY<span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">withClaim</span><span class="token punctuation">(</span><span class="token string">"roles"</span><span class="token punctuation">,</span> authorities<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">GrantedAuthority</span><span class="token operator">::</span> <span class="token function">getAuthority</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>algorithm<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// phương thức khởi tạo refresh token</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">generateRefreshToken</span><span class="token punctuation">(</span><span class="token class-name">Users</span> user<span class="token punctuation">,</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SimpleGrantedAuthority</span><span class="token punctuation">></span></span> authorities<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Algorithm</span> algorithm <span class="token operator">=</span> <span class="token class-name">Algorithm</span><span class="token punctuation">.</span><span class="token function">HMAC256</span><span class="token punctuation">(</span>secret<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">return</span> JWT<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">withSubject</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">withExpiresAt</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>JWT_TOKEN_VALIDITY<span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>algorithm<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="lop-authenticationservice" tabindex="-1"><a class="header-anchor" href="#lop-authenticationservice" aria-hidden="true">#</a> Lớp Authenticationservice</h3>
<p>Bên trong lớp <code v-pre>AuthenticationService.java</code> tạo phương thức <code v-pre>LoginAuth</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebSecurity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuthenticationService</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">UsersReponsitory</span> usersReponsitory<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">AuthenticationManager</span> authenticationManager<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">RoleCustomRepo</span> roleCustomRepo<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">JwtService</span> jwtService<span class="token punctuation">;</span>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">PasswordEncoder</span> passwordEncoder<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">AuthenticationResponse</span> <span class="token function">loginAuth</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationRequest</span> authenticationRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token comment">// tìm kiếm user với email nhận từ Request</span>
			<span class="token class-name">Users</span> user <span class="token operator">=</span> usersReponsitory<span class="token punctuation">.</span><span class="token function">findByEmail</span><span class="token punctuation">(</span>authenticationRequest<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">orElseThrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">.</span><span class="token function">isAccount_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

			<span class="token comment">// Nếu tồn tại và không bị khóa thì tạo ra token</span>
			<span class="token class-name">UsernamePasswordAuthenticationToken</span> token <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UsernamePasswordAuthenticationToken</span><span class="token punctuation">(</span>
				authenticationRequest<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> authenticationRequest<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// lấy ra các quyền của User và truyền vào token</span>
			<span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SimpleGrantedAuthority</span><span class="token punctuation">></span></span> authorities <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Roles</span><span class="token punctuation">></span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			role<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">-></span> set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Roles</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			user<span class="token punctuation">.</span><span class="token function">setRoles</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span>
			set<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>i <span class="token operator">-></span> authorities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleGrantedAuthority</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			authenticationManager<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">var</span> jwtToken <span class="token operator">=</span> jwtService<span class="token punctuation">.</span><span class="token function">generateToken</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> authorities<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">var</span> jwtRefreshToken <span class="token operator">=</span> jwtService<span class="token punctuation">.</span><span class="token function">generateRefreshToken</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> authorities<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// Trả về thông tin cần thiết</span>
			<span class="token keyword">return</span> <span class="token class-name">AuthenticationResponse</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">token</span><span class="token punctuation">(</span>jwtToken<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">refreshToken</span><span class="token punctuation">(</span>jwtRefreshToken<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getFull_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span>authorities<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="viet-api" tabindex="-1"><a class="header-anchor" href="#viet-api" aria-hidden="true">#</a> Viết API</h2>
<h3 id="viet-api-đang-nhap" tabindex="-1"><a class="header-anchor" href="#viet-api-đang-nhap" aria-hidden="true">#</a> Viết api đăng nhập</h3>
<p>Tạo lớp <code v-pre>LoginCtrl.java</code> bên trong package Controller</p>
<p>Mình chỉ viết <code v-pre>controller</code> để trả về <code v-pre>token</code> nếu <code v-pre>Request</code> hợp lệ, còn phần kiểm tra các thông tin khác và trả về thế nào các bạn có thể custom code lại nhá.</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/oauth/login"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AuthenticationResponse</span><span class="token punctuation">></span></span> <span class="token function">authLog</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">AuthenticationRequest</span> authenticationRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span>authenticationService<span class="token punctuation">.</span><span class="token function">authenticationResponse</span><span class="token punctuation">(</span>authenticationRequest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="loi-ket" tabindex="-1"><a class="header-anchor" href="#loi-ket" aria-hidden="true">#</a> Lời kết</h2>
<p>Trên là toàn bộ về <a href="">JWT</a> trong <RouterLink to="/post/backend/jwt-springboot/#spring">SpringBoot</RouterLink>.</p>
<p>Kì sau chúng ta sẽ cùng tìm hiểu về <a href="">Security</a> trong <RouterLink to="/post/backend/jwt-springboot/#spring">SpringBoot</RouterLink> nhé...</p>
<p>Chúc các bạn học tập vui vẻ.</p>
<h2 id="chu-thich" tabindex="-1"><a class="header-anchor" href="#chu-thich" aria-hidden="true">#</a> Chú thích</h2>
<h4 id="spring" tabindex="-1"><a class="header-anchor" href="#spring" aria-hidden="true">#</a> Spring</h4>
<ul>
<li>
<p><strong>SpringBoot</strong>: Một <strong>Framework</strong> lập trình phía <em>back-end</em> rất phổ biến của Java.</p>
</li>
<li>
<p><strong>Spring Tools Sute</strong>: Công cụ mở rộng của Eclipse. Spring Tool Suite (STS) là một công cụ mở rộng của Eclipse. Sử dụng để phát triển các ứng dụng Web với Spring.</p>
</li>
<li>
<p><strong>VS Code</strong>: Một Code Editor (không phải IDE). Phổ biến cho việc lập trình, hỗ trợ nhiều ngôn ngữ.</p>
</li>
<li>
<p><strong><code v-pre>application.properties</code></strong>: Một file khai báo các biến môi trường trong ứng dụng <strong>SpringBoot</strong> (Tương tự như <code v-pre>.env</code> trong NodeJS).</p>
</li>
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
</div></template>
