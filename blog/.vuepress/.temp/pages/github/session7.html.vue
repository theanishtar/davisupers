<template><div><h1 id="bai-7-viet-commits-chuyen-nghiep" tabindex="-1"><a class="header-anchor" href="#bai-7-viet-commits-chuyen-nghiep" aria-hidden="true">#</a> Bài 7 Viết commits chuyên nghiệp</h1>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/1.png?raw=true" alt=""></p>
<details class="custom-container details"><summary><b>Nội dung chính</b></summary>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/2.png?raw=true" alt="Nguyên lý">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/3.png?raw=true" alt="Thành phần">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/4.png?raw=true" alt="Tính chất lựa ">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/5.png?raw=true" alt="Ưu điểm">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/6.png?raw=true" alt="Nhược điểm">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/7.png?raw=true" alt="Bài tập">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/8.png?raw=true" alt="Bài giải">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/9.png?raw=true" alt="Lời cảm ơn"></p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/10.png?raw=true" alt="Ưu điểm">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/11.png?raw=true" alt="Nhược điểm">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/12.png?raw=true" alt="Bài tập">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/13.png?raw=true" alt="Bài giải">
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-oop/session5/abstraction-javaoop/14.png?raw=true" alt="Lời cảm ơn"></p>
</details>
<h2 id="mot-cau-chuyen-tai-cong-ty-no" tabindex="-1"><a class="header-anchor" href="#mot-cau-chuyen-tai-cong-ty-no" aria-hidden="true">#</a> Một câu chuyện tại công ty nọ</h2>
<p>Một anh chàng kỹ sư code 2 tháng trời để cho ra một tính năng cự kì <strong>vip pro</strong>, và rồi anh ta commit nó lên GitHub những mãi 1 tuần vẫn chưa được Leader Merge code.</p>
<p>Anh ta ngay lập tức đến gặp sếp mình thì được biết lí do là commit của anh như <em><strong>shit</strong></em> và được yêu cầu về viết lại commit khác !!!</p>
<p>Và rồi anh ta lên mạng tìm mọi cách để có thể cải thiện được việc đó, nhưng bạn có thấy rằng như vậy có muộn không ?</p>
<p>Chúng ta ở thế hệ đi sau, có rất nhiều người cạnh tranh với bạn... Nếu bạn còn không cải thiện bản thân thì sẽ đánh mất khá nhiều cơ hội đấy !!!</p>
<p>Hãy xem hình sau đây và xem nó có phản ánh đúng về bạn không nhé, nếu là bạn thì bài viết này là dành cho bạn đấy
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/sesstion7/commits-bad.png?raw=true" alt=""></p>
<p>Khi đọc xong bài viết này, đây là kết quả mà bạn đạt được</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/github/sesstion7/commit-good.png?raw=true" alt=""></p>
<p>Hãy cùng cem bài viết sau đây để cải thiện commit của mình, giúp nó Clean và Pro hơn nhé !!!</p>
<h2 id="cau-truc-mot-commit" tabindex="-1"><a class="header-anchor" href="#cau-truc-mot-commit" aria-hidden="true">#</a> Cấu trúc một commit</h2>
<p>Một Commit message sẽ gồm 3 phần</p>
<p><span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal" style="margin-right:0.22222em;">Y</span><span class="mord mathnormal" style="margin-right:0.05764em;">PE</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;:&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord mathnormal" style="margin-right:0.00773em;">ESCR</span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.13889em;">PT</span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.10903em;">ON</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.02778em;">BO</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord mathnormal" style="margin-right:0.22222em;">Y</span><span class="mclose">]</span></span></span></span></span></p>
<ul>
<li>Trong đó:
<ul>
<li>Type thể hiện lý do viết commits</li>
<li>Description là mô tả ngắn gọn về commits</li>
<li>Body và mô tả cụ thể về commits</li>
<li>Type, Description là bắt buộc, còn Body không có cũng được</li>
</ul>
</li>
</ul>
<p align="center"> Ví dụ
<span style="color: red;">feat</span>: <span style="color: green;">add Facebook login feature</span>
</p>
<h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h2>
<p>Type là các kiểu commits phổ biến, bạn có thể tham khảo bảng sau đây:</p>
<table>
<thead>
<tr>
<th>Tên</th>
<th>Cách viết</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td>Fixes/bugs</td>
<td>fix</td>
<td>Sửa các lỗi được phát hiện trong mã nguồn.</td>
</tr>
<tr>
<td>Features</td>
<td>feat</td>
<td>Thêm tính năng mới vào sản phẩm.</td>
</tr>
<tr>
<td>Refactoring</td>
<td>refactor</td>
<td>Cải thiện cấu trúc, sửa đổi mã nguồn mà không làm thay đổi tính năng bên ngoài của sản phẩm.</td>
</tr>
<tr>
<td>Documentation</td>
<td>docs</td>
<td>Cập nhật hoặc thêm mới tài liệu, hướng dẫn sử dụng cho mã nguồn.</td>
</tr>
<tr>
<td>Tests</td>
<td>test</td>
<td>Thêm, sửa đổi hoặc loại bỏ các bài kiểm tra, bài thử nghiệm cho mã nguồn.</td>
</tr>
<tr>
<td>Chore</td>
<td>chore</td>
<td>Cải thiện quy trình phát triển, cập nhật công cụ, thư viện hỗ trợ hoặc các thay đổi nhỏ không liên quan trực tiếp đến mã nguồn.</td>
</tr>
<tr>
<td>Build</td>
<td>build</td>
<td>Những thay đổi ảnh hưởng đến quá trình build</td>
</tr>
<tr>
<td>CI</td>
<td>ci</td>
<td>Thay đổi file cấu hình hoặc Sctipt CI</td>
</tr>
<tr>
<td>Performance</td>
<td>perf</td>
<td>Cải thiện hiệu suất hoặc tối ưu hóa mã nguồn.</td>
</tr>
<tr>
<td>Security</td>
<td>security</td>
<td>Cải thiện bảo mật của mã nguồn.</td>
</tr>
<tr>
<td>Style</td>
<td>style</td>
<td>Cải thiện định dạng, kiểu dáng, chuẩn mã nguồn.</td>
</tr>
<tr>
<td>Reverts</td>
<td>revert</td>
<td>Quay lại một số thay đổi trước đó.</td>
</tr>
</tbody>
</table>
<ul>
<li>Type sẽ được viết bằng chữ in thường, trước dấu hai chấm</li>
</ul>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">Một số ví dụ:</p>
<ul>
<li>feat: .....</li>
<li>fix: ....</li>
<li>refactor: ...</li>
</ul>
</div>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2>
<p>Là phần mô tả ngắn gọn về nội dung của commit</p>
<p>Không dài quá 50 ký tự, để tiện cho việc đọc trên GitHub hoặc các git tools</p>
<p>Sử dụng các câu mệnh lệnh ở thì hiênh tại</p>
<ul>
<li>Ví dụ: <code v-pre>change...</code> thay vì <code v-pre>changed...</code></li>
</ul>
<p>Không viết hoa chữ cái đầu tiên</p>
<p>Không sử dụng dấu chấm ở cuối câu</p>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">Một số ví dụ:</p>
<ul>
<li>feat: add Facebook login feature.</li>
<li>fix: resolve issue with incorrect password preventing login.</li>
<li>refactor: optimize code for login processing.</li>
<li>perf: improve main page loading speed.</li>
</ul>
<hr>
<ul>
<li>feat: Thêm chức năng đăng nhập bằng Facebook.</li>
<li>fix: Sửa lỗi không thể đăng nhập khi mật khẩu sai.</li>
<li>refactor: Tối ưu hóa mã nguồn cho việc xử lý đăng nhập.</li>
<li>perf: Cải thiện tốc độ tải trang chính.</li>
</ul>
</div>
<h2 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> Body</h2>
<p>Là phần TÙY CHỌN, mô tả một cách chi tiết hơn nếu cần</p>
<p>Phần BODY cách <code v-pre>&lt;type&gt;: &lt;description&gt;</code> bởi một ký tự xuống dòng (blank line)</p>
<p>Nên dùng để giair thích câu hỏi <strong>What (để làm gì?)</strong> hoặc <strong>Why (tại sao cần? )</strong>, chứ không phải <strong>How (làm thế nào?)</strong></p>
</div></template>
