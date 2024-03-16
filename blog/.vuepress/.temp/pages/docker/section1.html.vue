<template><div><h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1>
<p><strong>Trong bài viết này, chúng ta sẽ tìm hiểu kỹ về Docker – một nền tảng mã nguồn mở cho phép các nhà phát triển xây dựng, triển khai, chạy, cập nhật và quản lý containers—standardized.</strong> <br>
<img src="https://github.com/dangtranhuu/images/blob/main/angurvad/docker/2.png?raw=true" alt=""></p>
<ul>
<li>Docker làm cho quá trình container hóa nhanh hơn, dễ dàng hơn và an toàn hơn</li>
<li>Cho phép tạo các môi trường độc lập và tách biệt để khởi chạy và phát triển ứng dụng và môi trường này được gọi là container.</li>
</ul>
<h3 id="cach-thuc-hoat-đong-cua-docker" tabindex="-1"><a class="header-anchor" href="#cach-thuc-hoat-đong-cua-docker" aria-hidden="true">#</a> <strong>Cách thức hoạt động của Docker</strong></h3>
<ul>
<li>Docker hoạt động bằng cách cung cấp phương thức tiêu chuẩn để chạy mã của bạn.</li>
<li>Docker là hệ điều hành dành cho container.</li>
<li>Docker tương tự như cách máy ảo ảo hóa (loại bỏ nhu cầu quản lý trực tiếp) phần cứng máy chủ, các container sẽ ảo hóa hệ điều hành của máy chủ. Docker được cài đặt trên từng máy chủ và cung cấp các lệnh đơn giản mà bạn có thể sử dụng để dựng, khởi động hoặc dừng container.</li>
<li>Công nghệ container cung cấp tất cả các chức năng và lợi ích của máy ảo bao gồm cách ly ứng dụng, khả năng mở rộng hiệu quả về chi phí và khả năng dùng một lần, cùng với các lợi thế bổ sung quan trọng:</li>
<li>Trọng lượng nhẹ hơn máy ảo</li>
<li>Cải thiện năng suất của nhà phát triển</li>
<li>Hiệu quả sử dụng tài nguyên cao hơn.</li>
</ul>
<h3 id="tai-sao-nen-su-dung-docker" tabindex="-1"><a class="header-anchor" href="#tai-sao-nen-su-dung-docker" aria-hidden="true">#</a> <strong>Tại sao nên sử dụng Docker?</strong></h3>
<ul>
<li>Việc setup và deploy application lên một hoặc nhiều server rất vất vả từ việc phải cài đặt các công cụ, môi trường cần cho application đến việc chạy được ứng dụng chưa kể việc không đồng nhất giữa các môi trường trên nhiều server khác nhau.</li>
<li>Docker cho phép các nhà phát triển truy cập các khả năng chứa riêng này bằng cách sử dụng các lệnh đơn giản và tự động hóa chúng thông qua giao diện lập trình ứng dụng (API) tiết kiệm công việc. Docker cung cấp:</li>
<li>Tính di động của bộ chứa được cải thiện và liền mạch</li>
<li>Trọng lượng nhẹ hơn và cập nhật chi tiết</li>
<li>Tự động tạo vùng chứa</li>
<li>Theo dõi các phiên bản</li>
<li>Tái sử dụng vùng chứa</li>
<li>Nhà phát triển có thể truy cập sổ đăng ký nguồn mở chứa hàng nghìn vùng chứa do người dùng đóng góp.</li>
</ul>
<h3 id="cac-cong-cu-va-thuat-ngu-docker" tabindex="-1"><a class="header-anchor" href="#cac-cong-cu-va-thuat-ngu-docker" aria-hidden="true">#</a> Các công cụ và thuật ngữ Docker</h3>
<ul>
<li><strong>DockerFile:</strong> là một file dạng text không có phần đuôi mở rộng, chứa các đặc tả về một trường thực thi phần mềm, cấu trúc cho Docker Image</li>
<li><strong>Docker Image:</strong> là một file bất biến – không thay đổi, chứa các source code, libraries, dependencies, tools và các files khác cần thiết cho một ứng dụng để chạy</li>
<li><strong>Docker Client:</strong> là cách mà bạn tương tác với docker thông qua command trong terminal. Docker Client sẽ sử dụng API gửi lệnh tới Docker Daemon.</li>
<li><strong>Docker Daemon:</strong> là server Docker cho yêu cầu từ Docker API. Nó quản lý images, containers, networks và volume.</li>
<li><strong>Docker Volumes:</strong> là cách tốt nhất để lưu trữ dữ liệu liên tục cho việc sử dụng và tạo apps.</li>
<li><strong>Docker Registry:</strong> là nơi lưu trữ riêng của Docker Images. Images được push vào registry và client sẽ pull images từ registry. Có thể sử dụng registry của riêng bạn hoặc registry của nhà cung cấp như : AWS, Google Cloud, Microsoft Azure.</li>
<li><strong>Docker Hub:</strong> là Registry lớn nhất của Docker Images ( mặc định). Có thể tìm thấy images và lưu trữ images của riêng bạn trên Docker Hub ( miễn phí).</li>
<li><strong>Docker Repository:</strong> là tập hợp các Docker Images cùng tên nhưng khác tags. VD: golang:1.11-alpine.</li>
<li><strong>Docker Networking:</strong> cho phép kết nối các container lại với nhau. Kết nối này có thể trên 1 host hoặc nhiều host.</li>
<li><strong>Docker Compose:</strong> là công cụ cho phép run app với nhiều Docker containers 1 cách dễ dàng hơn. Docker Compose cho phép bạn config các command trong file docker-compose.yml để sử dụng lại. Có sẵn khi cài Docker.</li>
<li><strong>Docker Swarm:</strong> để phối hợp triển khai container.</li>
<li><strong>Docker Services:</strong> là các containers trong production. 1 service chỉ run 1 image nhưng nó mã hoá cách thức để run image — sử dụng port nào, bao nhiêu bản sao container run để service có hiệu năng cần thiết và ngay lập tức.</li>
</ul>
<h3 id="thiet-lap-docker-tren-may-tinh" tabindex="-1"><a class="header-anchor" href="#thiet-lap-docker-tren-may-tinh" aria-hidden="true">#</a> <strong>Thiết lập Docker trên máy tính</strong></h3>
<ul>
<li>Trên Windows, cài Docker Desktop Installer theo link này: https://desktop.docker.com/win/stable/Docker Desktop Installer.exe, có nhiều options nhưng tôi khuyến khích chọn theo recommendation.</li>
<li>Bạn có thể xem chi tiết cách cài đặt cho <a href="https://docs.docker.com/desktop/install/mac-install/" target="_blank" rel="noopener noreferrer">Mac</a> , <a href="https://docs.docker.com/engine/install/ubuntu/" target="_blank" rel="noopener noreferrer">Linux</a> và <a href="https://docs.docker.com/desktop/install/windows-install/" target="_blank" rel="noopener noreferrer">Windows</a>.</li>
</ul>
<h3 id="cac-cau-lenh-thong-dung-trong-docker" tabindex="-1"><a class="header-anchor" href="#cac-cau-lenh-thong-dung-trong-docker" aria-hidden="true">#</a> Các câu lệnh thông dụng trong Docker</h3>
<ul>
<li><strong>docker ps:</strong> Dùng để liệt kê ra các container đang chạy. Khi sử dụng với các tham số</li>
</ul>
<p>-a/-all: Liệt kê tất cả các container, kể cả đang chạy hay đã kể thúc -q/-quiet: chỉ liệt kê ra id của các container.</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">ps</span>
</code></pre></div><p><img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-7.png" alt=""></p>
<p></p>
<ul>
<li><strong>docker pull:</strong> Docker Hub chứa rất nhiều các image được dựng sẵn, mà ta có thể pull về và dùng mà không cần phải định nghĩa và cấu hình lại từ đầu.</li>
</ul>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> pull
</code></pre></div><p><img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-4.png" alt=""></p>
<p></p>
<ul>
<li><strong>docker images:</strong> sử dụng lệnh để xem danh sách tất cả các image trên hệ thống của mình</li>
</ul>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> images
</code></pre></div><p><img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-16.png" alt=""></p>
<ul>
<li><strong>docker run:</strong> Lệnh này dùng để chạy một container dựa trên một image mà ta có sẵn. Ta có thể thêm vào sau lệnh này một vài câu lệnh khác như -it bash để chạy bash từ container này.</li>
</ul>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run
</code></pre></div><p><img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-1.png" alt=""></p>
<ul>
<li><strong>docker ps</strong>: hiển thị cho bạn tất cả các vùng chứa hiện đang chạy.</li>
</ul>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">ps</span> -a
</code></pre></div><p><img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-6.png" alt=""></p>
<ul>
<li><strong>docker stop:</strong> Lệnh này dùng để stop một hoặc nhiều container. Ngoài ra ta có thể dung docker kill để bắt buộc container dừng lại.</li>
</ul>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> stop
</code></pre></div><p><img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-10.png" alt=""></p>
<ul>
<li><strong>docker build:</strong> Lệnh này dùng để build một image từ Dockerfile và context. Context ở đây là một tập file được xác đinh bởi đường dẫn hoặc url cụ thể. Ta có thể sử dụng thêm tham số -t để gắn nhãn cho image.</li>
</ul>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> build
</code></pre></div><p><img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-2.png" alt=""></p>
<ul>
<li><strong>docker rm:</strong> Lệnh này dùng để xóa một hoặc nhiều container.</li>
</ul>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">rm</span>
</code></pre></div><p><img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-14.png" alt=""></p>
<p></p>
<h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h3>
<ul>
<li>
<p>Dockerfile là một tệp văn bản đơn giản chứa danh sách các lệnh mà ứng dụng khách Docker gọi trong khi tạo một image.</p>
</li>
<li>
<p>Để bắt đầu, hãy tạo một tệp trống mới trong trình soạn thảo văn bản yêu thích của chúng tôi và lưu tệp đó vào cùng thư mục với ứng dụng bình có tên là Dockerfile.</p>
</li>
<li>
<p>Các config :</p>
<table>
<thead>
<tr>
<th>Lệnh</th>
<th>Ý nghĩa</th>
</tr>
</thead>
<tbody>
<tr>
<td>FROM</td>
<td>chỉ định image gốc: python, unbutu, alpine…</td>
</tr>
<tr>
<td>LABEL</td>
<td>cung cấp metadata cho image. Có thể sử dụng để add thông tin maintainer. Để xem các label của images, dùng lệnh docker inspect.</td>
</tr>
<tr>
<td>ENV</td>
<td>thiết lập một biến môi trường.</td>
</tr>
<tr>
<td>RUN</td>
<td>Có thể tạo một lệnh khi build image. Được sử dụng để cài đặt các package vào container.</td>
</tr>
<tr>
<td>COPY</td>
<td>Sao chép các file và thư mục vào container</td>
</tr>
<tr>
<td>ADD</td>
<td>Sao chép các file và thư mục vào container</td>
</tr>
<tr>
<td>CMD</td>
<td>Cung cấp một lệnh và đối số cho container thực thi. Các tham số có thể được ghi đè và chỉ có một CMD.</td>
</tr>
<tr>
<td>WORKDIR</td>
<td>Thiết lập thư mục đang làm việc cho các chỉ thị khác như: RUN, CMD, ENTRYPOINT, COPY, ADD,…</td>
</tr>
<tr>
<td>ARG</td>
<td>Định nghĩa giá trị biến được dùng trong lúc build image</td>
</tr>
<tr>
<td>ENTRYPOINT</td>
<td>cung cấp lệnh và đối số cho một container thực thi.</td>
</tr>
<tr>
<td>EXPOSE</td>
<td>khai báo port lắng nghe của image.</td>
</tr>
<tr>
<td>VOLUME</td>
<td>tạo một điểm gắn thư mục để truy cập và lưu trữ data.</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>Ví dụ:
Chúng tôi bắt đầu với việc chỉ định hình ảnh cơ sở của chúng tôi. Sử dụng từ khóa FROM.   <img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-9.png" alt=""></p>
</li>
</ul>
<p>Bước tiếp theo thường là viết các lệnh sao chép tệp và cài đặt các phụ thuộc. Đầu tiên, chúng tôi thiết lập một thư mục làm việc và sau đó sao chép tất cả các tệp cho ứng dụng của chúng tôi. <img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-13.png" alt=""></p>
<p>Bây giờ, chúng tôi có các tệp, chúng tôi có thể cài đặt các phụ thuộc. <img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-8.png" alt=""></p>
<p>Điều tiếp theo chúng ta cần chỉ định là số cổng cần được hiển thị. Vì ứng dụng bình của chúng tôi đang chạy trên cổng 5000, đó là những gì chúng tôi sẽ chỉ ra.   <img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-15.png" alt=""></p>
<p>Bước cuối cùng là viết lệnh để chạy ứng dụng, đơn giản là – python ./app.py. Chúng tôi sử dụng lệnh CMD. <img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-12.png" alt=""></p>
<p>Mục đích chính của CMD là báo cho vùng chứa lệnh nào nó sẽ chạy khi nó được khởi động. Với điều đó, chúng tôi Dockerfile đã sẵn sàng. <img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-11.png" alt=""></p>
<p>Bây giờ chúng ta đã có Dockerfile, chúng ta có thể xây dựng hình ảnh của mình. Lệnh docker buildthực hiện công việc nặng nhọc là tạo hình ảnh Docker từ tệp Dockerfile. <img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-3.png" alt=""></p>
<p>Bạn có thể chạy thử image của mình như sau: <img src="https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-5.png" alt=""></p>
<p>Trên đây là bài viết về Docker vô cùng chi tiết và dễ dàng thực hành. Mong rằng các bạn sẽ sử dụng Docker một cách thành thạo để giúp cho công việc trở nên thuận tiện hơn.</p>
</div></template>
