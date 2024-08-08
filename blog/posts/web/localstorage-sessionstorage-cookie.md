---
layout: Post
title: Tìm hiểu về LocalStorage, SessionStorage và Cookie
subtitle: API Front-end
author: Trần Hữu Đang
date: 2024-03-23
useHeaderImage: false
headerImage: img/in-post/front-end/ssckls.png
headerMask: rgba(70, 112, 80, 0)
permalinkPattern: /post/front-end/:slug/
tags:
  - interview
  - Web
  - FrontEnd
---

![](https://github.com/dangtranhuu/images/blob/main/angurvad/front-end/localstorage-sessionstorage-cookie/storage_hu7d5b380cd71d86288c030610f2b7077c_125084_1400x0_resize_box_3.png?raw=true)

## Khái niệm

## Tổng quan

|     |   Cookie   |   Local Storage    | Session Storage |
|-----|------------|--------------------|-----------------|
|Capacity|4kb|10mb|5mb|
|Browsers|  HTML4/HTML5|HTML5|HTML5|
|Acccessible from|Any window | Anywindow|Same tab|
|Expries |Manually set|Never|On tab close|
|Storage Location|Browser and server|Browser only|Browser only|
|Sent with request|Yes|No|No|

```cpp
+----------------+--------+---------+-----------+--------+
|                | Chrome | Firefox | Safari    |  IE    |
+----------------+--------+---------+-----------+--------+
| LocalStorage   | 10MB   | 10MB    | 5MB       | 10MB   |
+----------------+--------+---------+-----------+--------+
| SessionStorage | 10MB   | 10MB    | Unlimited | 10MB   |
+----------------+--------+---------+-----------+--------+
```

Sự khác nhau và cách sử dụng Local Storage, Session Storage và Cookie

Bạn bị lẫn lộn giữa **session storage**,  **local storage** và **cookies**?
Bài viết dưới đây sẽ giúp bạn hiểu rõ được sự khác nhau giữa 3 cách lưu trữ này.
Các kiểu không gian lưu trữ khác nhau có sẵn cho các dữ liệu có thể trên máy chủ hoặc máy khách, cho phép chúng ta chọn lựa theo nhu cầu.

## 1. Local storage

### Giới thiệu:


Khả năng lưu trữ vô thời hạn:
Có nghĩa là chỉ bị xóa bằng JavaScript, hoặc xóa bộ nhớ trình duyệt, hoặc xóa bằng localStorage API.
Lưu trữ được 5MB:
Local Storage cho phép bạn lưu trữ thông tin tương đối lớn lên đến 5MB, lưu được lượng thông tin lớn nhất trong 3 loại.
Không gửi thông tin lên server như Cookie nên bảo mật tốt hơn.

### Trình duyệt hỗ trợ:




Trình duyệt
Phiên bản




Chrome
&gt;= 4.0


Internet Explorer / Edge
&gt;= 8.0


Firefox
&gt;= 3.5


Safari
&gt;= 4.0


Chrome
&gt;= 11.5



Để kiểm tra xem trình duyệt có hỗ trợ localStorage hay không thì chúng ta dùng `typeof` như sau:

```
if (typeof(Storage) !== 'undefined') {
    //Nếu có hỗ trợ
    //Thực hiện thao tác với Storage
    alert('Trình duyệt của bạn hỗ trợ Storage');
} else {
    //Nếu không hỗ trợ
    alert('Trình duyệt của bạn không hỗ trợ Storage');
}

```


Xem localStorage bằng trình duyệt

Để xem localstorage bằng trình duyệt các bạn vào trang web cần xem (ở đây mình ví dụ với trang web [http://book.framgia.vn/](http://book.framgia.vn/)) và sau đó các bạn ấn F12 (hoặc Ctrl + shift + i) sau đó làm theo như hình sau:

Chọn tab Application, di chuyển đến Storage để thấy các Storage của trình duyệt. Để xem các local Storage đang được lưu trữ, mở rộng phần Local Storage như hình. Ở đây ta có thể thấy có 2 biến Local Storage đang được lưu là *pusherTransportEncrypted* và *lang* với giá trị của 2 biến được hiển thị bên cạnh (cột Value).
Như vậy, cột Key chính là danh sách các biến local Storage đang được lưu và cột Value là các giá trị tương ứng.
Để xóa hết các giá trị local Storage này đi, bạn có thể chọn biểu tượng cấm (Clear All) hoặc chọn bên cạnh là biểu tượng dấu X (Delete Selected).

Sử dụng


Khởi tạo localStorage

```
localStorage.setItem('key', 'value');
// hoặc
localStorage.key = 'value';
// hoặc
localStorage['key'] = 'value';

```


Trong đó:
key là tên biến, value là giá trị của biến muốn gán vào.



Để lấy giá trị localStorage và sử dụng, ta dùng `getItem`

```
localStorage.getItem('key');
// hoặc
localStorage.key;
```

**Ví dụ** cụ thể như sau:



Để lấy số lượng localStorage đã có trong trình duyệt, sử dụng length như sau:

```
localStorage.length();
```

Ví dụ

```
if (typeof(Storage) !== "undefined") {
    //Nếu hỗ trợ
    var data = localStorage.length;
    console.log(data);
} else {
    // Nếu không hỗ trợ
    alert('Trình duyệt của bạn không hỗ trợ');
}
```


Để xóa 1 biến trong localStorage, sử dụng removeItem(tên_key)

```
localStorage.removeItem(key);
```



```
localStorage.clear();
```


2. Session Storage

Giới thiệu:


Lưu trên Client: Cũng giống như localStorage thì sessionStorage cũng dùng để lưu trữ dữ liệu trên trình duyệt của khách truy cập (client).
Mất dữ liệu khi đóng tab: Dữ liệu của sessionStorage sẽ mất khi bạn đóng trình duyệt.
Dữ liệu không được gửi lên Server
Thông tin lưu trữ nhiều hơn cookie (ít nhất 5MB)

Trình duyệt hỗ trợ




Trình duyệt
Phiên bản




Chrome
&gt;= 5.0


Internet Explorer / Edge
&gt;= 8.0


Firefox
&gt;= 2


Safari
&gt;= 4.0


Opera
&gt;= 10.5



Vì sessionStorage cũng nằm trong gói Storage nên các bạn cũng có thể sử dụng lại đoạn code kiểm tra trình duyệt có hỗ trợ Storage hay không ở phía trên.

Xem Session Storage bằng trình duyệt

Tương tự như localStorage, có thể chọn mở rộng mục Session Storage để xem các giá trị được lưu trữ.

Sử dụng

sessionStorage cũng có cú pháp và cách sử dụn các thuộc tính, phương thức như localStorage:

```
if ( typeof(Storage) !== 'undefined') {
    // Khởi tạo sesionStorage
    sessionStorage.setItem('name', 'Ted Mosby');
    // get sessionStorage
    sessionStorage.getItem('name');
    // lấy ra số lượng session đã lưu trữ
    sessionStorage.length;
    // xóa 1 item localStorage
    sessionStorage.removeItem('name');
    // xóa tất cả item trong sessionStorage
    sessionStorage.clear();
} else {
    alert('Trình duyệt của bạn không hỗ trợ!');
}
```

Xem thêm

3. Cookie

Giới thiệu:


Thông tin được gửi lên server: Cookie sẽ được truyền từ server tới browser và được lưu trữ trên máy tính của bạn khi bạn truy cập vào ứng dụng, mỗi khi người dùng tải ứng dụng, trình duyệt sẽ gửi cookie để thông báo cho ứng dụng về hoạt động trước đó của bạn. Vì vậy đừng bao giờ lưu trữ những thông tin quan trọng, yêu cầu tính bảo mật cao vào cookie vì nó hoàn toàn có thể bị sửa đổi và đánh cắp, thấp chí có thể lợi dụng điều này để tấn công website của bạn.
Cookie chủ yếu là để đọc phía máy chủ (cũng có thể được đọc ở phía máy khách), localStorage và sessionStorage chỉ có thể được đọc ở phía máy khách.
Có thời gian sống: Mỗi cookie thường có khoảng thời gian timeout nhất định do lập trình viên xác định trước.
Lưu trữ: cho phép lưu trữ tối đa 4KB và vài chục cookie cho một domain.

Xem cookie bằng trình duyệt

Tương tự như localStorage, có thể chọn mở rộng mục Cookies để xem các giá trị cookie được lưu trữ


Sử dụng

Cookie có thể được tạo bằng nhiều cách, bài viết này sẽ trình bày về sử dụng cookie trong javascript.
JavaScript có thể tạo, đọc, và xóa cookies với document.cookie.


Tạo cookie: Javascript có thể tạo cookie như sau:

```
document.cookie = 'username=Ted Mosby';
```


Chúng ta cũng có thể thêm vào ngày hết hạn cho cookie

```
document.cookie = 'username=Ted Mosby; expires=Thu, 18 Dec 2018 8:00:00 UTC';
```

Hoặc đặt hẹn giờ sau bao lâu cookie sẽ hết hạn với max-age (tính bằng giây)

```
document.cookie = 'username=Ted Mosby; max-age=9000';
```

Đọc  cookie:

```
var x = document.cookie;
```

document.cookie sẽ trả lại tất cả cookie trong một chuỗi tring kiểu như: cookie1 = giá trị; cookie2 = giá trị; cookie3 = giá trị;

Hoặc để lấy giá trị của 1 cookie, có thể viết một hàm như sau:

```
function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i &lt;ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}
```

Xem thêm

Tham số truyền vào là cname - tên cookie muốn lấy giá trị.



Tạo một biến name và thêm vào "=" để tìm kiếm trong chuỗi document.cookie



Chia document.cookie dựa trên dấu ; thành một mảng nhiều phần tử và gán mảng đấy cho biến ca



Vòng lặp (i=0; i&lt;ca.length; i++) để đọc mỗi giá trị c = ca[i]



Nếu cookie được tìm thấy (c.indexOf(name)==0), trả về giá trị của cookie (c.substring(name.length,c.length). Nếu cookie không được tìm thấy, trả về ''


Ví dụ muốn lấy giá trị của cookie tên là language thì ta có thể gọi getcookie('language') và kêt quả trả về là giá trị của cookie có tên đó.

```
var lang = getCookie('language');
console.log(lang);
```

Kết quả:




Thay đổi giá trị cookie: Trong javascript, bạn có thể thay đổi một cookie giống như cách mà bạn tạo ra cookie, tức là ghi đè giá trị mới lên cookie đã có:

```
document.cookie = "username=Barney Stinson; expires=Wed, 26 Dec 2018 8:00:00 UTC";
```

Kiểm tra cookie: Để kiểm tra coookie, có thể xây dựng hàm như sau:

```
function checkCookie() {
    var username = getCookie('username');
    if (username != '') {
        alert('Welcome again ' + username);
    } else {
        username = prompt('Please enter your name: ',  '');
        if (username != '' &amp;&amp; username != null) {
            setCookie('username', username, 365);
        }
    }
}
```

Nếu cookie được thiết lập, nó sẽ hiển thị một lời chào



Nếu cookie không được thiết lập, nó sẽ hiển thị một prompt box, hỏi tên của người dùng, lưu trữ tên của người dùng ở cookie trong 365 ngày, bằng việc gọi function setCookie đã được viết ở trên



Xóa cookie:
Để xóa một cookie chỉ cần xét lại giá trị ngày hết hạn expires về một thời điểm đã qua

```
document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
```

Tham khảo tại [https://www.w3schools.com/js/js_cookies.asp](https://www.w3schools.com/js/js_cookies.asp)

4. Thông tin thêm


Vì localStorage và sessionStorage được lưu trữ trên trình duyệt của người dùng, nên các bạn cần phải xem xét nội dung lưu trữ có liên quan đến vấn đề bảo mật hay không.
Và cũng chính vì localStorage và sessionStorage được lưu trữ trên trình duyệt nên việc sử dụng nó sẽ không ảnh hưởng đến hiệu xuất của trang web nhưng nó sẽ làm nặng trình duyệt của người dùng (không đáng kể).
Về phạm vi:
**sessionStorage**: giới hạn trong một cửa sổ hoăc thẻ của trình duyệt. Một trang web được mở trong hai thẻ của cùng một trình duyệt cũng không thể truy xuất dữ liệu lẫn nhau. Như vậy, khi bạn đóng trang web thì dữ liệu lưu trong sessionStorage hiện tại cũng bị xóa. Còn **localStorage**: có thể truy xuất lẫn nhau giữa các cửa sổ trình duyệt. Dữ liệu sẽ được lưu trữ không giới hạn thời gian.

 