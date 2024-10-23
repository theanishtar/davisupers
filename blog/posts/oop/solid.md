---
layout: Post
title: SOLID trong lập trình OOP
subtitle: SOLID – Nguyên tắc quan trọng trong lập trình hướng đối tượng (OOP)
author: Trần Hữu Đang
date: 2024-10-23
useHeaderImage: false
headerImage: img/in-post/oop/solid-section1.png
headerMask: rgba(70, 112, 80, 0)
permalinkPattern: /post/oop/:slug/
tags:
  - interview
  - OOP
  - Junior
  - BackEnd
---

# SOLID – Nguyên tắc quan trọng trong lập trình hướng đối tượng (OOP)

---

## 1. SOLID là gì?

**SOLID** là một tập hợp các nguyên tắc thiết kế phần mềm quan trọng trong lập trình hướng đối tượng (OOP) giúp xây dựng các hệ thống phần mềm dễ bảo trì, mở rộng và tránh lỗi. Các nguyên tắc này được đặt ra bởi **Robert C. Martin** (hay còn gọi là "Uncle Bob") và được trình bày rộng rãi trong cuốn sách nổi tiếng của ông: *"Clean Code: A Handbook of Agile Software Craftsmanship"*. Việc áp dụng đúng các nguyên tắc này giúp hệ thống phần mềm trở nên linh hoạt, dễ quản lý và tránh sự phụ thuộc không cần thiết.

---

## 2. Các nguyên tắc trong SOLID

### 2.1. Single Responsibility Principle (SRP) - Nguyên tắc đơn nhiệm

Mỗi lớp (class) chỉ nên có một lý do duy nhất để thay đổi, tức là mỗi lớp chỉ chịu trách nhiệm cho một chức năng duy nhất trong hệ thống. Việc giới hạn trách nhiệm của mỗi lớp sẽ giúp chúng ta dễ dàng quản lý và bảo trì mã nguồn hơn.

**Ví dụ**: Trong mô hình MVC (Model-View-Controller), các thành phần như `Service`, `Repository`, và `Controller` đều có trách nhiệm riêng. `Service` chịu trách nhiệm xử lý logic nghiệp vụ, `Repository` quản lý truy vấn cơ sở dữ liệu, còn `Controller` chỉ đảm nhiệm việc điều hướng và xử lý yêu cầu từ người dùng. Việc phân chia này giúp hệ thống dễ bảo trì và tránh sự rối rắm trong mã nguồn.

### 2.2. Open/Closed Principle (OCP) - Nguyên tắc mở/đóng

Các lớp nên **mở** để mở rộng nhưng **đóng** để chỉnh sửa. Điều này có nghĩa là khi có yêu cầu thêm tính năng mới, bạn nên mở rộng chức năng của hệ thống bằng cách thêm các lớp mới (thông qua kế thừa hoặc implement interface), thay vì chỉnh sửa các lớp đã có. Điều này giúp bảo đảm tính ổn định và tránh rủi ro phát sinh lỗi khi phải sửa đổi mã nguồn cũ.

**Ví dụ**: Khi cần thêm một loại thanh toán mới trong một hệ thống, bạn nên tạo một lớp mới để kế thừa từ lớp `Payment` chứ không nên sửa đổi lớp `Payment` hiện có. Điều này giúp việc mở rộng trở nên dễ dàng mà không làm ảnh hưởng đến các tính năng khác.

### 2.3. Liskov Substitution Principle (LSP) - Nguyên tắc thay thế Liskov

Lớp con phải có khả năng thay thế lớp cha mà không làm thay đổi tính đúng đắn của chương trình. Nghĩa là các đối tượng của lớp con nên có thể sử dụng thay thế cho các đối tượng của lớp cha mà không gây lỗi.

**Ví dụ**: Nếu `class Bird` có phương thức `fly()` và bạn kế thừa `class Penguin` từ `Bird`, thì `Penguin` không nên override `fly()` thành một thứ gì đó không hợp lý vì chim cánh cụt không bay. Để tuân thủ LSP, nên tách `Bird` thành hai lớp con là `FlyingBird` và `NonFlyingBird`.

### 2.4. Interface Segregation Principle (ISP) - Nguyên tắc phân tách giao diện

Không nên sử dụng một interface quá lớn. Thay vào đó, hãy tách nó thành nhiều interface nhỏ, mỗi cái phục vụ một mục đích cụ thể. Điều này giúp các lớp chỉ cần implement những phương thức cần thiết, tránh việc phải implement các phương thức không sử dụng.

**Ví dụ**: Nếu có một interface `Animal` chứa nhiều phương thức như `walk()`, `swim()`, `fly()`, thì thay vì tạo một interface lớn như vậy, bạn nên tách thành các interface nhỏ hơn như `Walkable`, `Swimmable`, và `Flyable`. Điều này giúp các lớp chỉ cần thực thi các phương thức mà chúng thực sự sử dụng.

### 2.5. Dependency Inversion Principle (DIP) - Nguyên tắc đảo ngược phụ thuộc

Các module cấp cao không nên phụ thuộc vào các module cấp thấp. Cả hai nên phụ thuộc vào abstraction (giao diện hoặc lớp trừu tượng). Điều này có nghĩa là thay vì việc các module phụ thuộc trực tiếp vào nhau, chúng nên phụ thuộc vào các lớp hoặc giao diện trừu tượng, những thành phần này thường ít thay đổi hơn.

**Ví dụ**: Thay vì lớp `CustomerService` phụ thuộc trực tiếp vào lớp `SQLDatabase`, hãy để `CustomerService` phụ thuộc vào một interface `Database`, rồi `SQLDatabase` sẽ implement interface này. Nhờ đó, nếu muốn thay thế bằng `MongoDatabase`, chỉ cần implement lại `Database` mà không cần sửa đổi `CustomerService`.

---

## 3. Tổng kết

Các nguyên tắc trong **SOLID** giúp xây dựng các hệ thống phần mềm có cấu trúc rõ ràng, dễ mở rộng, dễ bảo trì và ít lỗi. Khi áp dụng đúng các nguyên tắc này, bạn sẽ có một mã nguồn chất lượng cao, có thể dễ dàng mở rộng tính năng, thử nghiệm, tái cấu trúc và bảo trì. Việc hiểu và thực hành SOLID sẽ giúp bạn trở thành một lập trình viên có khả năng xây dựng những hệ thống phần mềm linh hoạt và bền vững.
