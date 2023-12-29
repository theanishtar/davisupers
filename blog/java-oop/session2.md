<!-- ---
layout: Post
title: Giới thiệu về lập trình hướng đối tượng trong Java
subtitle: Lập trình hướng đối tượng với Java
author: Theanishtar
date: 2023-06-09
useHeaderImage: false
headerImage: /img/in-post/2020-10-07/header.jpg
headerMask: rgba(30, 69, 110, 0.61)
permalinkPattern: /ebook/java/java-oop/:slug/
tags:
  - Java OOP
---

Hướng đối tượng là phương pháp lập trình phổ biến nhất hiện nay!!! Cùng mình tìm hiểu về OOP trog bài viết này nhé  -->
<!-- more -->

# Bài 2. Tính đóng gói

Lập trình hướng đối tượng gồm 4 tính chất chính: [Tính đóng gói](), [Tính đa hình](), [Tính kế thừa](), [Tính trừu tượng]().

**Tính đóng gói** (encapsulation) là một trong những nguyên tắc chính của lập trình hướng đối tượng (OOP) trong Java và các ngôn ngữ lập trình khác. Nó là một kỹ thuật để bảo vệ dữ liệu và hành động của một đối tượng hoặc một class từ việc truy cập và thay đổi bởi các đối tượng hoặc class khác.


Trong tất cả mọi bài trước, bạn đã rất quen thuộc với `public` trong ví dụ sau : 

```java
public class Main {
  // code...
}
```

> 🔥 Là một từ khoá `access modifier` (*Phạm vi truy cập*), sử dụng để đặt các mức độ sử dụng cho `classes`, `attributes`, `methods` và `constructors`...

Có 2 loại `Modifiers` : 

- `Access Modifiers` : *kiểm soát mức độ truy cập*
- `Non-Access Modifiers` : *không kiểm soát nhưng cung cấp các chức năng khác*

---

## 1. Access Modifiers

🧚‍♂️ **Đối với** `classes`, bạn có thể sử dụng `public` và `default`

| Modifier | Mô tả                                                    | Lưu ý                                                                                                                                        |
| -------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| public   | `class` có thể được truy cập bởi bất kỳ `class` nào khác |                                                                                                                                              |
| default  | `class` chỉ được truy cập bởi `class` chung `package`    | 💡 Tìm hiểu `package` tại bài [Package và Tính đóng gói](https://github.com/Zenfection/Java/blob/master/Java%20OOP/3.Pkg%26Encapsulation.md) |

🧚‍♂️ **Đối với** `attributes`, `methods`, `constructors` bạn có thể sử dụng như sau: 

| Modifier  | Mô tả                                                                      | Lưu ý                                                                                                                                               |
| --------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| public    | `code` có thể truy cập cho tất cả `classes`                                |                                                                                                                                                     |
| private   | `code` chỉ có thể truy cập trong `class` đã khai báo (*xem bài*)           |                                                                                                                                                     |
| default   | `code` chỉ có thể truy cập trong cùng `package` (*xem package tại*)        | 💡Tìm hiểu `package` tại bài [Package và Tính đóng gói](https://github.com/Zenfection/Java/blob/master/Java%20OOP/3.Pkg%26Encapsulation.md)         |
| protected | `code` có thể truy cập trong cùng `package` và `subclasses` (*class con*). | 💡 Tìm hiểu về kế thừa tại bài [Tính kế thừa và Đa hình](https://github.com/Zenfection/Java/blob/master/Java%20OOP/4.Inheritance%26Polymorphism.md) |

> <details>
> <summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-05-59-Know%20How.png"> Cách hiểu đơn giản như sau:</b></summary>
> 
> <br>
> 
> - `public` là công khai truy cập được mọi nơi,
> 
> - `private` là riêng tư chỉ truy cập được trong khu vực nó khai báo
> 
> - `default` chỉ truy cập trong `package` 
> 
> - `protected` chỉ truy cập trong `package` và `class` con.
> 
> ==> `public` > `protected` > `default` > `private`
> 
> </details>

---

## 2. Non-Access Modifiers

🧚‍♂️ **Đối với** `classes`, bạn có thể sử dụng `final` và `abstract`

| Modifier | Mô tả                                            | Lưu ý                                                                                                                                               |
| -------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| final    | `class` không thể thừa kế bởi các `classes` khác | 💡 Tìm hiểu về kế thừa tại bài [Tính kế thừa và Đa hình](https://github.com/Zenfection/Java/blob/master/Java%20OOP/4.Inheritance%26Polymorphism.md) |
| abstract | `class` không thể sử dụng để tạo `objects`       | ⚠️ để truy cập một `class` `abstract` , nó phải kế thừa thì `class` khác                                                                            |

🧚‍♂️ **Đối với** `attributes`, `methods`, `constructors` bạn có thể sử dụng như sau:

| Modifier     | Mô tả                                                                                       | Lưu ý                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| final        | `Atrributes` và `methods` không để sửa đổi                                                  |                                                                                                           |
| static       | `Attributes` và `methods` thuộc về `class` chứ không phải `objects`                         |                                                                                                           |
| abstract     | chỉ có thể sử dụng trên một `abstract class` và `methods`.                                  | ⚠️ `methods` không có body, như `abstact void run();`<br>body được cung cấp bởi `subclass` (được kế thừa) |
| transient    | `Attributes` và `Methods` có thể bỏ qua khi tuần tự hoá `object` chứa chúng                 |                                                                                                           |
| synchronized | `Methods` chỉ có thể truy cập mỗi lần một `thread`                                          |                                                                                                           |
| volatile     | Giá trị của `attribute` không được lưu trong `thread-locally`, và luôn đọc từ `main memory` |                                                                                                           |

### ![ithubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png)Giải thích cụ thể từng `modifier`

- <details>
  <summary><b>🤖 Final</b></summary>
  
  <br>
  
  Nếu bạn không muốn bất kỳ chỉnh sửa nào thì khai báo `final` 
  
  ![Ảnh chụp Màn hình 2021-02-02 lúc 14.33.22.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-33-28-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-02-02%20lu%CC%81c%2014.33.22.png)
  
  > 💡 Sẽ gặp lỗi ngay nếu bạn cố thay đổi nó.
  
  </details>

- <details>
  <summary><b>🤖 Static</b></summary>
  
  <br>
  
  Nó có truy cập mà không cần tạo một `Object` của `class`, không như `public`
  
  ```java
  public class Demo {
    static void myStatic(){ // tạo một method static
        System.out.println("Đây là static");
    }
    public void myPublic(){ // tạo một method public
        System.out.println("Đây là Public");
    }
    public static void main(String[] args) {
        myStatic();
        Demo myObj = new Demo();
        myObj.myPublic();
    }
  }
  /*Đây là static
    Đây là Public */
  ```
  
  > 🔥 Như bạn đã thấy thì khi khai báo `static` không cần thông qua `Object`
  
  </details>

- <details>
  <summary><b>🤖 Abstract</b></summary>
  
  <br>
  
  Một phương thức trừu tượng (`abstract`) của một lớp trừu tượng và nó không có phần body, body được cung cấp từ `subclasses` như sau: 
  
  </details>


## 1. Encapsulation

Có nghĩa đơn giản là đảm bảo dữ liệu (*nhạy cảm*) được ẩn khỏi người dùng, Để làm điều đó, bạn phải : 

- Khai báo `class`,`variables`, `attributes` dạng  `private`
- Cung cấp phương thức `get` và `set` truy cập công khai và cập nhật giá trị của biến `private` 

### Tại sao phải sử dụng Encapsulation - đóng gói ?

<details>
<summary>
<b>Trả lời </b>
</summary>

<br>

- Kiểm soát tốt hơn `Attributes` và `Methods` của `Class`
- `Attributes` của `Class` có thể đặt ở chế độ `read-only` hay `write-only` (*nếu bạn sử dụng set & get*)
- Linh hoạt hơn, có thể thay đổi thành phần mã mà không ảnh hưởng các phần khác.
- Tăng độ bảo mật

</details>

### Get và Set

Như bạn đã biết khi đặt biến `private` thì chỉ có thể truy cập trong `class` đó (*các `class` khác không truy cập được*). 

> 🔥 Tuy nhiên có thể truy cập được chúng nếu bạn cung cấp phương thức `set` và `get` công khai
> 
> - `set` là đặt giá trị 
> - `get` là trả về giá trị
> 
> ⚠️ Cú pháp theo sau là tên của biến và chữ cái đầu viết hoa.

```java
public class Person{
     private String name; //khai báo truy cập giới hạn

     public String getName(){ // trả về giá trị của tên biến
         return this.name; //this tượng trưng cho object hiện tại
     }

     public void setName(String newName){ //nhận tham số newName và gán là biến name
         this.name = newName; //this tượng trưng cho object hiện tại
     }
}
```

> 🔥 Như bạn đã thấy thì trong `get` và `set` thì luôn có từ `this` 
> 
> Vậy `this` là gì ? 
> 
> <details>
> <summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions%20And%20Answers.png"> Trả lời </b></summary>
> 
> <br>
> 
> `this` nghĩa là nó, thực chất là một biến tham chiếu tới `object` hiện tại trong một `methods` hoặc `constructor`, có thể sử dụng để : 
> 
> - Gọi `constructor` | `method` | `object` của class hiện tại
> - Truyền một đối số trong lệnh gọi `method` hoặc `constructor`
> 
> </details>

> ⚠️ Không nên khai báo biến là `public` ==> Bởi `đóng gói` mà show ra ngoài thì còn gì là đóng nữa.

```java
public static void main(String[] args) {
     Person myObj = new Person();
     myObj.name = "Zen";
     System.out.println(myObj.name);
}// output : Zen
```

> 👨‍🚒 Bạn có thể `getName()` và `setName()` để cập nhật biến như sau : 

```java
public class Main{
    public static void main(String[] args){
        Person myObj = new Person();
        myObj.setName("Zen");
        System.out.println(myObj.getName());
    }
}// output : Zen
```

---

## 2. Package & API

`Package` được sử dụng để nhóm nhiều `class` lại với nhau.

> 😁 Hiểu đơn giản thì `class` là tệp, còn `Package` là thư mục
> 
> 🧚‍♂️ Sử dụng để :
> 
> - Tránh xung đột tên
> - Bảo trì tốt hơn

Gồm 2 loại : 

- `Built-in Packages` : *các packages từ `Java API`*
- `User-defined Packages` :  *tự tạo các packages của riêng mình*

### ![Knowledge Growth.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-19-23-Knowledge%20Growth.png) Built-in Packages

`Java API` là một thư viện được viết sẵn, bạn chỉ cần dùng thôi

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png"> Giải thích cụ thể:</b>
</summary>

<br>

Thư viện chứa các thành phần quản lí `input`, `database` và nhiều thứ khác, tham khảo tại trang web của [tại đây](https://docs.oracle.com/en/java/javase/15/docs/api/index.html)

![Ảnh chụp Màn hình 2021-02-06 lúc 22.05.04.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-05-10-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-02-06%20lu%CC%81c%2022.05.04.png)

Thư viện được chia thành các `packages` và `classes` (*nghĩa là bạn chỉ cần import `class` thì nó sẽ có sẵn `method` và `attributes` được định sẵn*).

</details>

> 🔥 Để sử dụng `class` hoặc `package` từ thư viện, bạn sử dụng từ khoá `import` như sau : 
> 
> ```java
> import package.name.Class; //import một class đơn
> import package.name.*; // import toàn bộ package
> ```

#### ![ithubusercontent.com/Zenfection/Image/master/2021/02/02-11-21-10-Assignment.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-11-05-59-Know%20How.png) Cụ thể về import :

<details>
<summary><b>☲ Import một class</b></summary>

<br>

Ví dụ có một `class` là `Scanner` (*cho phép người dùng nhập từ bàn phím*) : Ta gõ Scanner và enter để nó tự `import` trong Vscode như sau: 

<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-17-33-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-02-06%20lu%CC%81c%2022.17.24.png" title="" alt="Ảnh chụp Màn hình 2021-02-06 lúc 22.17.24.png" width="500">

> 🔥 Chỉ cần enter là nó sẽ tự `import` vào
> Để sử dụng `class` `Scanner`, ta tạo một `Object` từ nó và sử dụng nó theo docs như sau: 
> 
> ```java
> import java.util.Scanner;
> class MyClass{
>    public static void main(String[] args) {
>        Scanner myObj = new Scanner(System.in);
>        System.out.println("Enter username");
> 
>        String userName = myObj.nextLine();
>        System.out.println("Username is: " + userName);
>    } 
> }//Output : nhập gì ra đó
> ```

</details>

<details>
<summary><b>☲ Import một Package</b></summary>

<br>

Như ví dụ trước, ta sử dụng `Scanner` từ gói `java.util`, vậy ta chỉ cần thêm `*` phía sau đó, có nghĩa là tất cả mọi thứ trong gói `java.util` như sau : 

```java
import java.util.*;
```

</details>

#### ![Language Learningpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/02-14-14-12-Language%20Learning.png)Vậy tôi muốn tự import riêng `package` của tôi thì làm sao ?

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/01-13-25-05-Questions%20And%20Answers.png"> Trả lời </b></summary>

<br>

Thì bạn hãy tự tạo lấy `package` của riêng nhưng phải đặt nó trong thư mục lưu trữ nó, như này :

![Ảnh chụp Màn hình 2021-02-06 lúc 22.34.10.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-34-11-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-02-06%20lu%CC%81c%2022.34.10.png)

> Sử dụng từ khoá `package` tử tạo một gói mới : 
> 
> ```java
> public mypack;
> class MyPackageClass {
>   public static void main(String[] args){
>       System.out.println("Đây là package của tôi!");  
>   }   
> }
> ```

Mở `Terminal` hoặc `CMD` 

```bash
javac -d . MyPackageClass.java
```

> Nó sẽ bắt buộc tạo ra 1 `MyPackageClass.java` nằm trong thư mục `mypack` như hình dưới đây : 

![Ảnh chụp Màn hình 2021-02-06 lúc 22.44.49.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/02/06-22-44-55-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-02-06%20lu%CC%81c%2022.44.49.png)

> ⚠️ Hãy viết tên `Package` bằng chữ thường để tránh xung đột với tên `class`.
> 
> Và bạn chỉ cần gọi `class` trong `package như sau` : 
> 
> ```bash
> java mypack.MyPackageClass.java
> //output : Đây là package của tôi!
> ```

</details>