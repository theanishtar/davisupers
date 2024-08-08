# Docker 
**Trong bài viết này, chúng ta sẽ tìm hiểu kỹ về Docker – một nền tảng mã nguồn mở cho phép các nhà phát triển xây dựng, triển khai, chạy, cập nhật và quản lý containers—standardized.**   
![](https://github.com/dangtranhuu/images/blob/main/angurvad/docker/2.png?raw=true)

*   Docker làm cho quá trình container hóa nhanh hơn, dễ dàng hơn và an toàn hơn
*   Cho phép tạo các môi trường độc lập và tách biệt để khởi chạy và phát triển ứng dụng và môi trường này được gọi là container. 

### **Cách thức hoạt động của Docker**

*   Docker hoạt động bằng cách cung cấp phương thức tiêu chuẩn để chạy mã của bạn.
*   Docker là hệ điều hành dành cho container.
*   Docker tương tự như cách máy ảo ảo hóa (loại bỏ nhu cầu quản lý trực tiếp) phần cứng máy chủ, các container sẽ ảo hóa hệ điều hành của máy chủ. Docker được cài đặt trên từng máy chủ và cung cấp các lệnh đơn giản mà bạn có thể sử dụng để dựng, khởi động hoặc dừng container.
*   Công nghệ container cung cấp tất cả các chức năng và lợi ích của máy ảo bao gồm cách ly ứng dụng, khả năng mở rộng hiệu quả về chi phí và khả năng dùng một lần, cùng với các lợi thế bổ sung quan trọng:
*   Trọng lượng nhẹ hơn máy ảo
*   Cải thiện năng suất của nhà phát triển
*   Hiệu quả sử dụng tài nguyên cao hơn. 

### **Tại sao nên sử dụng Docker?**

*   Việc setup và deploy application lên một hoặc nhiều server rất vất vả từ việc phải cài đặt các công cụ, môi trường cần cho application đến việc chạy được ứng dụng chưa kể việc không đồng nhất giữa các môi trường trên nhiều server khác nhau.
*   Docker cho phép các nhà phát triển truy cập các khả năng chứa riêng này bằng cách sử dụng các lệnh đơn giản và tự động hóa chúng thông qua giao diện lập trình ứng dụng (API) tiết kiệm công việc. Docker cung cấp:
*   Tính di động của bộ chứa được cải thiện và liền mạch
*   Trọng lượng nhẹ hơn và cập nhật chi tiết
*   Tự động tạo vùng chứa
*   Theo dõi các phiên bản
*   Tái sử dụng vùng chứa
*   Nhà phát triển có thể truy cập sổ đăng ký nguồn mở chứa hàng nghìn vùng chứa do người dùng đóng góp.

### Các công cụ và thuật ngữ Docker

*   **DockerFile:** là một file dạng text không có phần đuôi mở rộng, chứa các đặc tả về một trường thực thi phần mềm, cấu trúc cho Docker Image
*   **Docker Image:** là một file bất biến – không thay đổi, chứa các source code, libraries, dependencies, tools và các files khác cần thiết cho một ứng dụng để chạy
*   **Docker Client:** là cách mà bạn tương tác với docker thông qua command trong terminal. Docker Client sẽ sử dụng API gửi lệnh tới Docker Daemon.
*   **Docker Daemon:** là server Docker cho yêu cầu từ Docker API. Nó quản lý images, containers, networks và volume.
*   **Docker Volumes:** là cách tốt nhất để lưu trữ dữ liệu liên tục cho việc sử dụng và tạo apps.
*   **Docker Registry:** là nơi lưu trữ riêng của Docker Images. Images được push vào registry và client sẽ pull images từ registry. Có thể sử dụng registry của riêng bạn hoặc registry của nhà cung cấp như : AWS, Google Cloud, Microsoft Azure.
*   **Docker Hub:** là Registry lớn nhất của Docker Images ( mặc định). Có thể tìm thấy images và lưu trữ images của riêng bạn trên Docker Hub ( miễn phí).
*   **Docker Repository:** là tập hợp các Docker Images cùng tên nhưng khác tags. VD: golang:1.11-alpine.
*   **Docker Networking:** cho phép kết nối các container lại với nhau. Kết nối này có thể trên 1 host hoặc nhiều host.
*   **Docker Compose:** là công cụ cho phép run app với nhiều Docker containers 1 cách dễ dàng hơn. Docker Compose cho phép bạn config các command trong file docker-compose.yml để sử dụng lại. Có sẵn khi cài Docker.
*   **Docker Swarm:** để phối hợp triển khai container.
*   **Docker Services:** là các containers trong production. 1 service chỉ run 1 image nhưng nó mã hoá cách thức để run image — sử dụng port nào, bao nhiêu bản sao container run để service có hiệu năng cần thiết và ngay lập tức.

### **Thiết lập Docker trên máy tính**

*   Trên Windows, cài Docker Desktop Installer theo link này: https://desktop.docker.com/win/stable/Docker Desktop Installer.exe, có nhiều options nhưng tôi khuyến khích chọn theo recommendation.
*   Bạn có thể xem chi tiết cách cài đặt cho [Mac](https://docs.docker.com/desktop/install/mac-install/) , [Linux](https://docs.docker.com/engine/install/ubuntu/) và [Windows](https://docs.docker.com/desktop/install/windows-install/).

### Các câu lệnh thông dụng trong Docker

*   **docker ps:** Dùng để liệt kê ra các container đang chạy. Khi sử dụng với các tham số 

\-a/-all: Liệt kê tất cả các container, kể cả đang chạy hay đã kể thúc -q/-quiet: chỉ liệt kê ra id của các container. 
```bash
$ docker ps
```
![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-7.png)

   

*   **docker pull:** Docker Hub chứa rất nhiều các image được dựng sẵn, mà ta có thể pull về và dùng mà không cần phải định nghĩa và cấu hình lại từ đầu.

```bash
$ docker pull
```
![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-4.png)

 

*   **docker images:** sử dụng lệnh để xem danh sách tất cả các image trên hệ thống của mình
```bash
$ docker images
```

![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-16.png)

*   **docker run:** Lệnh này dùng để chạy một container dựa trên một image mà ta có sẵn. Ta có thể thêm vào sau lệnh này một vài câu lệnh khác như -it bash để chạy bash từ container này.
```bash
$ docker run
```
![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-1.png)

*   **docker ps**: hiển thị cho bạn tất cả các vùng chứa hiện đang chạy.
```bash
$ docker ps -a
```
![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-6.png)

*   **docker stop:** Lệnh này dùng để stop một hoặc nhiều container. Ngoài ra ta có thể dung docker kill để bắt buộc container dừng lại.
```bash
$ docker stop
```
![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-10.png)

*   **docker build:** Lệnh này dùng để build một image từ Dockerfile và context. Context ở đây là một tập file được xác đinh bởi đường dẫn hoặc url cụ thể. Ta có thể sử dụng thêm tham số -t để gắn nhãn cho image.
```bash
$ docker build
```
![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-2.png)

*   **docker rm:** Lệnh này dùng để xóa một hoặc nhiều container.
```bash
$ docker rm
```
![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-14.png)

 

### Dockerfile

*   Dockerfile là một tệp văn bản đơn giản chứa danh sách các lệnh mà ứng dụng khách Docker gọi trong khi tạo một image.
*   Để bắt đầu, hãy tạo một tệp trống mới trong trình soạn thảo văn bản yêu thích của chúng tôi và lưu tệp đó vào cùng thư mục với ứng dụng bình có tên là Dockerfile.
*   Các config :

    |Lệnh|Ý nghĩa|
    |-----|-------|
    |FROM | chỉ định image gốc: python, unbutu, alpine…|
    |LABEL | cung cấp metadata cho image. Có thể sử dụng để add thông tin maintainer. Để xem các label của images, dùng lệnh docker inspect.|
    |ENV | thiết lập một biến môi trường.|
    |RUN | Có thể tạo một lệnh khi build image. Được sử dụng để cài đặt các package vào container.|
    |COPY | Sao chép các file và thư mục vào container|
    |ADD | Sao chép các file và thư mục vào container|
    |CMD | Cung cấp một lệnh và đối số cho container thực thi. Các tham số có thể được ghi đè và chỉ có một CMD.|
    |WORKDIR | Thiết lập thư mục đang làm việc cho các chỉ thị khác như: RUN, CMD, ENTRYPOINT, COPY, ADD,…|
    |ARG |Định nghĩa giá trị biến được dùng trong lúc build image|
    |ENTRYPOINT | cung cấp lệnh và đối số cho một container thực thi.|
    |EXPOSE |khai báo port lắng nghe của image.|
    |VOLUME | tạo một điểm gắn thư mục để truy cập và lưu trữ data.|

*   Ví dụ:
Chúng tôi bắt đầu với việc chỉ định hình ảnh cơ sở của chúng tôi. Sử dụng từ khóa FROM.   ![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-9.png)

Bước tiếp theo thường là viết các lệnh sao chép tệp và cài đặt các phụ thuộc. Đầu tiên, chúng tôi thiết lập một thư mục làm việc và sau đó sao chép tất cả các tệp cho ứng dụng của chúng tôi. ![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-13.png)

Bây giờ, chúng tôi có các tệp, chúng tôi có thể cài đặt các phụ thuộc. ![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-8.png)

Điều tiếp theo chúng ta cần chỉ định là số cổng cần được hiển thị. Vì ứng dụng bình của chúng tôi đang chạy trên cổng 5000, đó là những gì chúng tôi sẽ chỉ ra.   ![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-15.png)

Bước cuối cùng là viết lệnh để chạy ứng dụng, đơn giản là – python ./app.py. Chúng tôi sử dụng lệnh CMD. ![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-12.png)

Mục đích chính của CMD là báo cho vùng chứa lệnh nào nó sẽ chạy khi nó được khởi động. Với điều đó, chúng tôi Dockerfile đã sẵn sàng. ![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-11.png)

Bây giờ chúng ta đã có Dockerfile, chúng ta có thể xây dựng hình ảnh của mình. Lệnh docker buildthực hiện công việc nặng nhọc là tạo hình ảnh Docker từ tệp Dockerfile. ![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-3.png)

Bạn có thể chạy thử image của mình như sau: ![](https://caodang.fpt.edu.vn/wp-content/uploads/2024/03/FPT-Polytechnic-HN-docker-5.png)

Trên đây là bài viết về Docker vô cùng chi tiết và dễ dàng thực hành. Mong rằng các bạn sẽ sử dụng Docker một cách thành thạo để giúp cho công việc trở nên thuận tiện hơn.