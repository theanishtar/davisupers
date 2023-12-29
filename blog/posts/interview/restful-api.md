---
layout: Post
title: Tìm hiểu về RestAPI và Restful API
subtitle: Ôn tập phỏng vấn cùng Ếch
author: Trần Hữu Đang
date: 2023-11-13
useHeaderImage: false
headerImage: img/in-post/interview/api-banner.png
headerMask: rgba(70, 112, 80, 0)
permalinkPattern: /post/interview/:slug/
tags:
  - interview
  - Web
  - Junior
  - BackEnd
---

Trong công nghệ xây dựng web-app hiện nay, có thể nói mô hình SCR (Client Side Rendering) đang được phát triển một cách vượt bật. 

Cùng với sự ưa chuộng ấy, ==Rest API== đóng vai trò rất quan trọng trong việc kết nối ***Back-end*** và ***Front-end***...

Hôm nay hãy cùng mình phân biệt hai khái niệm API gồm `Restful` và `Non-Restful` nha ^^

![](https://github.com/dangtranhuu/images/blob/main/frogcyber/post/interview/api/banner.png?raw=true)

## Khái niệm

### RestAPI 

Rest API là một ứng dụng được dùng để chuyển đổi cấu trúc của dữ liệu có những phương thức giúp kết nối với các thư viện và ứng dụng khác nhau. 

Rest Api thường không được xem là công nghệ, mà nó là giải pháp giúp tạo ra những ứng dụng web services chuyên dụng để thay thế cho nhiều kiểu khác như: [SOAP](), [WSDL](),...

![](https://github.com/dangtranhuu/images/blob/main/frogcyber/post/interview/api/restapi.png?raw=true)

### Restful API

Restful API là một trong những tiêu chuẩn được sử dụng để thiết kế API cho các ứng dụng web, để tiện hơn cho việc quản lý các `resource`. 

Rest API thường chú trọng vào các tài nguyên của hệ thống bao gồm: ảnh, văn bản, âm thanh, video hoặc các dữ liệu di động,... 

Nó thường bao gồm các trạng thái tài nguyên đã được định dạng sẵn và được truyền tải thông qua HTTP.

- Một chức năng quan trọng nhất của REST là: 
    - Quy định các cách sử dụng `HTTP` method chẳng hạn như: `POST`, `GET`, `DELETE`, `PUT`,... và cách có thể định dạng các `URL` cho ứng dụng web để có thể quản lý được các `resource`. 
    - Restful không quy định logic code ứng dụng và không được giới hạn bởi những ngôn ngữ lập trình ứng dụng. 
    - Bất kỳ framework hoặc ngôn ngữ nào cũng có thể được dùng để thiết kế được một Restful API.

#### API

[API]() là từ viết tắt của cụm từ ==Application Programming Interface==

Đây là tập hợp những quy tắc và cơ chế mà theo đó thì: Một ứng dụng hoặc một thành phần nào đó sẽ tương tác với một ứng dụng hoặc một số thành phần khác. 

[API]() có thể sẽ được trả về dữ liệu mà người dùng cần cho chính ứng dụng của bạn với những kiểu dữ liệu được dùng phổ biến như `JSON` hoặc `XML`. 

#### REST

Rest là từ viết tắt của ==Representational State Transfer==

Nó là một trong những dạng chuyển đổi cấu trúc, với kiểu kiến trúc thường được viết API. Rest thường sử dụng dụng phương thức `HTTP` đơn giản để có thể tạo ra giao tiếp giữa các máy. 

Bởi vì thế, thay vì phải sử dụng một `URL` cho việc xử lý một số thông tin của người dùng thì Rest sẽ yêu cầu `HTTP` như: `GET`, `POST`, `DELETE`,... đến với bất kỳ một `URL` để được xử lý dữ liệu. 


## Ví dụ thực tế

Đặt thuộc tính hợp anh dev trẻ tuổi tên `Đ` đang làm một website xem video tương tự như [YouTube]() chẳng hạn

Các thao tác cơ bản gồm:
- Thêm, sửa, xóa [video]()
- like, share, comment [video]()


#### Non-Restful

RestAPI thông thường được chia ra hai thao tác chính là: `POST` và `GET`

- Trong đó:
    - `GET`: lấy một (`getOne`) hoặc tất cả (`getAll`) dữ liệu của **`resources`**
    - `POST`: đại diện cho thao tác `CREATE`, `UPDATE`, `DELETE`

Như ta có thể thấy với cấu trúc này hầu hết các thao tác đều được xây dựng bằng `POST API` và không hề có quy tắc nào.

Ta sẽ tiến hành xây dựng các `API` theo cấu trúc `URL` như sau:

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

::: info <b>Nhận xét</b> 
Như ta thấy các động từ mô tả nhiệm vụ của api có ngay sau `/api/` như *delete, create, update,...*

Điểm chung dễ nhận biết nhất là các API này thiết kế theo tùy ý người xât dựng hoặc do yêu cầu khách hàng, doanh nghiệp mà không tuân theo một duy tắc nhất quán nào
:::

#### Restful

Vẫn với bài toán trên ta sẽ xây dựng bằng Restful API như sau:

|Thao tác | Phương thức | URL    | Thành công     | Thất bại  | Dư liệu trả về|
|---------|------------|---------|--------------|-----------|-------------|
|Read One | GET       | `/api/v1/videos/1`|   200  | 201-500| video|
|Read All | GET       | `/api/v1/videos`|  200  |  201-500| videos|
|Create   | POST       | `/api/v1/videos`  | 201| 202-500| new video|
|Update   | PUT/PATCH   | `/api/videos/1`|  200| 201-500|updated video|
|Delete   | DELETE       | `/api/v1/videos/1`|    204| 201-500| *NULL*|

#### Bonus

Một số cách viết API theo quy tắc Restful thường được áp dụng để mô tả hành động cụ thể.

Giả sử `Đ` đang xây dựng một mạng xã hội. Với chức năng `search`, `comment` hay `like` thì sẽ viết api thế nào ?

- Tìm kiếm: ==GET== `/api/search?q=key+word`

- Thích:  ==POST== `/api/comments/1/like` || `/api/comments/1?action=like`

- Không thích:  ==POST== `/api/comments/1/unlike` || `/api/comments/1?action=unlike`

## Những câu hỏi phỏng vấn

#### Phân biệt PUT và PATCH

- PUT
    - Dùng để cập nhật cả đối tượng, thường sẽ truyền toàn bộ thuộc tính muốn cập nhật. 
    - Những thuộc tính không được truyền sẽ được cập nhật là *NULL*...
- PATCH
    - Dùng để cập nhật một vài thuộc tính trong một đối tượng.
    - Ta có thể truyền một vài thuộc tính muốn cập nhật mà không ảnh hưởng dữ liệu gốc

Ví dụ:

Ta có user như sau:
```java
class User {
    String username;
    String password;
    String fullname;
    String email;
}
```

Và api để cập nhật user:

==PUT==   `/api/v1/users/1` <br/>
==PATCH== `/api/v1/users/1`

```js
PUT `/api/v1/users/1`
Content-Type: application/json
{
    "user": {
        fullname: "Trần Hữu Đang",
        email: "dangdepzai@frog.vn"
    }
}
```

User ban đầu có giá trị:

```java
User {
    username: "frogdev", 
    password: "frog@123",
    fullname: "Frog Dev",
    email: "frogdev@frog.vn"    
}
```

Sau khi gọi API User sẽ có giá trị:

```java
User {
    username: null, 
    password: null,
    fullname: "Trần Hữu Đang",
    email: "dangdepzai@frog.vn"  
}
```

--- 

Ta có thể thấy `username` và `password` đã được cập nhật thành *NULL*. 

Điều này xảy ra bởi vì `PUT` sẽ cập nhật toàn bộ đối tượng với data truyền vào, nếu thiếu thuộc tính nào, thuộc tính đó sẽ biến thành *NULL*.


---

Còn với `PATCH`. Giả sử dữ liệu được trả lại ban đầu và ta gọi `PATCH`.

```js
PATCH `/api/v1/users/1`
Content-Type: application/json
{
    "user": {
        fullname: "Trần Hữu Đang",
        email: "dangdepzai@frog.vn"
    }
}
```

Sau khi gọi API User sẽ có giá trị:

```java
User {
    username: "frogdev", 
    password: "frog@123",
    fullname: "Trần Hữu Đang",
    email: "dangdepzai@frog.vn"  
}
```

Dữ liệu được cập nhật chỉ khi nó có tồn tại trong phần `body` của `request` mà thôi !!!