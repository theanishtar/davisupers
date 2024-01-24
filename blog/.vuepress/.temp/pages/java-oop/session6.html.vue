<template><div><h1 id="bai-6-nhung-cau-hoi-phong-van-java-oop-pho-bien-nhat" tabindex="-1"><a class="header-anchor" href="#bai-6-nhung-cau-hoi-phong-van-java-oop-pho-bien-nhat" aria-hidden="true">#</a> Bài 6. Những câu hỏi phỏng vấn Java OOP phổ biến nhất</h1>
<h2 id="the-nao-la-lap-trinh-huong-đoi-tuong" tabindex="-1"><a class="header-anchor" href="#the-nao-la-lap-trinh-huong-đoi-tuong" aria-hidden="true">#</a> Thế nào là lập trình hướng đối tượng ?</h2>
<p>Lập trình hướng đối tượng là một phương pháp lập trình dựa trên khái niệm về lớp và đối tượng.</p>
<p>Nó tập trung vào các đối tượng thao tác hơn là logic để thao tác chúng, giúp code dễ quản lý, tái sử dụng được và dễ bảo trì.</p>
<h2 id="cac-tinh-chat-cua-huong-đoi-tuong-la-gi" tabindex="-1"><a class="header-anchor" href="#cac-tinh-chat-cua-huong-đoi-tuong-la-gi" aria-hidden="true">#</a> Các tính chất của hướng đối tượng là gì ?</h2>
<p>Lập trình hướng đối tượng bao gồm 4 tính chất</p>
<ul>
<li>
<p>Tính đóng gói</p>
</li>
<li>
<p>TÍnh kế thừa</p>
</li>
<li>
<p>Tính trừu tượng</p>
</li>
<li>
<p>Tính đa hình</p>
</li>
</ul>
<h2 id="the-nao-la-lop" tabindex="-1"><a class="header-anchor" href="#the-nao-la-lop" aria-hidden="true">#</a> Thế nào là lớp?</h2>
<p>Một class đại diện cho 1 loại đối tượng. Nó có thể được hiểu giống như 1 bản định nghĩa của đối tượng.</p>
<h2 id="the-nao-la-đoi-tuong" tabindex="-1"><a class="header-anchor" href="#the-nao-la-đoi-tuong" aria-hidden="true">#</a> Thế nào là đối tượng?</h2>
<p>Đối tượng là một thể hiện của lớp. Nó bao gồm các thuộc tính và phương thức.</p>
<h2 id="the-nao-la-tinh-đong-goi" tabindex="-1"><a class="header-anchor" href="#the-nao-la-tinh-đong-goi" aria-hidden="true">#</a> Thế nào là tính đóng gói?</h2>
<p>Đóng gói là việc che giấu các thông tin quan trọng của 1 lớp. Nó được thể hiển thông qua các access modifier như private, public, default, protected</p>
<h2 id="co-may-loai-access-modifier-phan-biet-su-khac-nhau-giua-chung" tabindex="-1"><a class="header-anchor" href="#co-may-loai-access-modifier-phan-biet-su-khac-nhau-giua-chung" aria-hidden="true">#</a> Có mấy loại access modifier? Phân biệt sự khác nhau giữa chúng?</h2>
<p>Có 4 loại access modifier là: private, protected, default, public.</p>
<ul>
<li>Trong đó:
<ul>
<li>Private: Chỉ có thể truy cập trong cùng class.</li>
<li>Default: Có thể truy cập trong cùng class và cùng package.</li>
<li>Protected: Có thể truy cập trong cùng class, package và ngoài package bởi lớp con.</li>
<li>Public: Có thể truy cập ở bất cứ đâu.</li>
</ul>
</li>
</ul>
<h2 id="the-nao-la-tinh-đa-hinh" tabindex="-1"><a class="header-anchor" href="#the-nao-la-tinh-đa-hinh" aria-hidden="true">#</a> Thế nào là tính đa hình?</h2>
<p>Tính đa hình là khi một hành động có thể được thực hiện theo nhiều cách khác nhau. Nó được thể hiện thông qua override và overload.</p>
<h2 id="phan-biet-override-va-overload" tabindex="-1"><a class="header-anchor" href="#phan-biet-override-va-overload" aria-hidden="true">#</a> Phân biệt override và overload?</h2>
<p>Overide là việc lớp con ghi đè phương thức của lớp cha. Overload là việc một class sử dụng được cùng một phương thức nhưng khác nhau biến truyền vào hàm</p>
<h2 id="co-the-override-1-static-method-khong" tabindex="-1"><a class="header-anchor" href="#co-the-override-1-static-method-khong" aria-hidden="true">#</a> Có thể override 1 static method không?</h2>
<p>Không.</p>
<h2 id="the-nao-la-tinh-truu-tuong" tabindex="-1"><a class="header-anchor" href="#the-nao-la-tinh-truu-tuong" aria-hidden="true">#</a> Thế nào là tính trừu tượng?</h2>
<p>Tính trừu tượng là ẩn các chi tiết triển khai và chỉ hiển thị các tính năng với người dùng. Tính chất này cho phép loại bỏ các tính chất phức tạp của đổi tượng, chỉ cần đưa ra các tính chất cần thiết trong lập trình giúp tập trung vào những cốt lõi của đối tượng. Nó được thể hiện thông qua interface và abstract class.</p>
<h2 id="co-the-su-dung-thuoc-tinh-trong-interface" tabindex="-1"><a class="header-anchor" href="#co-the-su-dung-thuoc-tinh-trong-interface" aria-hidden="true">#</a> Có thể sử dụng thuộc tính trong interface?</h2>
<p>Không thể</p>
<h2 id="interface-co-the-la-final-khong" tabindex="-1"><a class="header-anchor" href="#interface-co-the-la-final-khong" aria-hidden="true">#</a> Interface có thể là final không?</h2>
<p>Không. Vì cần phải có một lớp implement interface thì mới sử dụng được.</p>
<h2 id="co-the-cai-đat-phuong-thuc-trong-interface" tabindex="-1"><a class="header-anchor" href="#co-the-cai-đat-phuong-thuc-trong-interface" aria-hidden="true">#</a> Có thể cài đặt phương thức trong interface?</h2>
<p>Có. Thuộc tính phải là hằng số và được khai báo với từ khóa final.</p>
<h2 id="co-the-cai-đat-phuong-thuc-trong-abstract-class" tabindex="-1"><a class="header-anchor" href="#co-the-cai-đat-phuong-thuc-trong-abstract-class" aria-hidden="true">#</a> Có thể cài đặt phương thức trong abstract class?</h2>
<p>Có. Phương thức không phải là abstract method thì có thể cài đặt.</p>
<h2 id="co-the-cai-đat-nhieu-interface-trong-class-khong" tabindex="-1"><a class="header-anchor" href="#co-the-cai-đat-nhieu-interface-trong-class-khong" aria-hidden="true">#</a> Có thể cài đặt nhiều interface trong class không?</h2>
<p>Có</p>
<h2 id="the-nao-la-tinh-ke-thua" tabindex="-1"><a class="header-anchor" href="#the-nao-la-tinh-ke-thua" aria-hidden="true">#</a> Thế nào là tính kế thừa?</h2>
<p>Là khả năng tái sử dụng lại thuộc tính và phương thức của một lớp. Thể hiện thông qua từ khóa extend.</p>
<h2 id="co-the-su-dung-constructor-cua-lop-cha-đe-tao-đoi-tuong-cho-lop-con-khong" tabindex="-1"><a class="header-anchor" href="#co-the-su-dung-constructor-cua-lop-cha-đe-tao-đoi-tuong-cho-lop-con-khong" aria-hidden="true">#</a> Có thể sử dụng constructor của lớp cha để tạo đối tượng cho lớp con không?</h2>
<p>Không. Phải cài đặt lại constructor trên lớp con. Có thể sử dụng từ khóa super() để gọi lại đối tượng của lớp cha.</p>
<h2 id="the-nao-la-static" tabindex="-1"><a class="header-anchor" href="#the-nao-la-static" aria-hidden="true">#</a> Thế nào là static?</h2>
<p>Những hàm, phương thức có từ khóa static sẽ thuộc về lớp có thể được truy cập trực tiếp từ Class mà không cần phải tạo đối tượng.</p>
<h2 id="the-nao-la-final" tabindex="-1"><a class="header-anchor" href="#the-nao-la-final" aria-hidden="true">#</a> Thế nào là final?</h2>
<p>Những thuộc tính final sẽ không thể thay đổi giá trị của nó Những phương thức final sẽ không thể overide ở lớp con Những class final sẽ không thể kế thừa được</p>
<h2 id="co-bat-buoc-phai-khai-bao-constructor-trong-lop" tabindex="-1"><a class="header-anchor" href="#co-bat-buoc-phai-khai-bao-constructor-trong-lop" aria-hidden="true">#</a> Có bắt buộc phải khai báo constructor trong lớp?</h2>
<p>Không. Nếu không khai báo constructor, class sẽ sử dụng default constructor</p>
</div></template>
