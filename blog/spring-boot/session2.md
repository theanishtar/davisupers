# Bài 2. Components, Autowired và Bean 

### Giới thiệu

Đây là bài giới thiệu về 2 Annotation cơ bản trong Spring Boot và `@Component` và `@Autowire`, để có thể hiểu phần này tốt nhất, bạn nên nắm chắc 2 khái niệm sau:

### Cách chạy ứng dụng Spring Boot

Nếu trong `Java` truyền thống, khi chạy cả một project, chúng ta sẽ phải định nghĩa một hàm `main()` và để nó khởi chạy đầu tiên.

Thì **Spring Boot** cũng vậy, chúng ta sẽ phải chỉ cho **Spring Boot** biết nơi nó khởi chạy lần đầu, để nó cài đặt mọi thứ.

Cách thực hiện là thêm annotation `@SpringBootApplication` trên class chính và gọi `SpringApplication.run(App.class, args);` để chạy project.

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
```


`SpringApplication.run(App.class, args)` chính là câu lệnh để tạo ra **_container_**. Sau đó nó tìm toàn bộ các **_dependency_** trong project của bạn và đưa vào đó. 

Spring đặt tên cho **_container_** là `ApplicationContext` 

và đặt tên cho các **_dependency_** là `Bean`

_App.java_
```java
@SpringBootApplication
public class App {
    public static void main(String[] args) {
        // ApplicationContext chứa toàn bộ dependency trong project.
        ApplicationContext context = SpringApplication.run(App.class, args);
    }
}
```

Vậy làm sao Spring biết đâu là _dependency_? Chúng ta tới với khái niệm `@Component`

### @Component

`@Component` là một [Annotation]() (chú thích) đánh dấu trên các `Class` để giúp **Spring** biết nó là một `Bean`.

Ví dụ: 

Cấu trúc thư mục:

<!-- ![spring-component](../../images/loda1557412317602/2.jpg) -->


Chúng ta có một interface `Outfit`

```java
public interface Outfit {
    public void wear();
}
```

implement nó là Class `Bikini`

```java
/*
 Đánh dấu class bằng @Component
 Class này sẽ được Spring Boot hiểu là một Bean (hoặc dependency)
 Và sẽ được Spring Boot quản lý
*/
@Component
public class Bikini implements Outfit {
    @Override
    public void wear() {
        System.out.println("Mặc bikini");
    }
}
```

Chạy chương trình, và xem kết quả:

```java
@SpringBootApplication
public class App {
    public static void main(String[] args) {
        // ApplicationContext chính là container, chứa toàn bộ các Bean
        ApplicationContext context = SpringApplication.run(App.class, args);

        // Khi chạy xong, lúc này context sẽ chứa các Bean có đánh
        // dấu @Component.

        // Lấy Bean ra bằng cách
        Outfit outfit = context.getBean(Outfit.class);

        // In ra để xem thử nó là gì
        System.out.println("Instance: " + outfit);
        // xài hàm wear()
        outfit.wear();
    }
}
```

Output:

```
[1] Instance: me.loda.spring.helloworld.Bikini@1e1f6d9d
[2] Mặc bikini
```

Bạn sẽ thấy `Outfit` lúc này chính là `Bikini`. Class đã được đánh dấu là `@Component`.

**Spring Boot** khi chạy sẽ dò tìm toàn bộ các _Class cùng cấp_ hoặc ở trong các _package thấp hơn_ (Chúng ta có thể cấu hình việc tìm kiếm này, sẽ đề cập sau). Trong quá trình dò tìm này, khi gặp một class được đánh dấu `@Component` thì nó sẽ tạo ra một instance và đưa vào `ApplicationContext` để quản lý.

Quá trình chạy sẽ như sau:
<!-- 
![spring-component](../../images/loda1557412317602/3.png)

![spring-component](../../images/loda1557412317602/4.png) -->

### @Autowired

Bây giờ mình tạo ra một Class `Girl` và có một thuộc tính là `Outfit`.

Mình cũng đánh dấu `Girl` là một `@Component`. Tức **Spring Boot** cần tạo ra một instance của `Girl` để quản lý.

```java
@Component
public class Girl {

    @Autowired
    Outfit outfit;

    public Girl(Outfit outfit) {
        this.outfit = outfit;
    }
    
    // GET 
    // SET
}

```

Tôi đánh dấu thuộc tính `Outfit` của `Girl` bởi Annotation `@Autowired`. Điều này nói với **Spring Boot** hãy tự _inject_ (tiêm) một instance của `Outfit` vào thuộc tính này khi khởi tạo `Girl`.

Lúc này, chạy thử chương trình.

```java
@SpringBootApplication
public class App {
    public static void main(String[] args) {
        // ApplicationContext chính là container, chứa toàn bộ các Bean
        ApplicationContext context = SpringApplication.run(App.class, args);

        // Khi chạy xong, lúc này context sẽ chứa các Bean có đánh
        // dấu @Component.

        // Lấy Bean ra bằng cách
        Outfit outfit = context.getBean(Outfit.class);

        // In ra để xem thử nó là gì
        System.out.println("Output Instance: " + outfit);
        // xài hàm wear()
        outfit.wear();

        Girl girl = context.getBean(Girl.class);

        System.out.println("Girl Instance: " + girl);

        System.out.println("Girl Outfit: " + girl.outfit);

        girl.outfit.wear();
    }
}
```

Output: 


```
[1] Output Instance: me.loda.spring.helloworld.Bikini@2e16f13a
[2] Mặc bikini
[3] Girl Instance: me.loda.spring.helloworld.Girl@353cb1cb
[4] Girl Outfit: me.loda.spring.helloworld.Bikini@2e16f13a
[5] Mặc bikini
```

**Spring Boot** đã tự tạo ra một `Girl` và trong quá trình tạo ra đó, nó truyền `Outfit` vào làm thuộc tính.

### Singleton

Điều đặc biệt là các `Bean` được quản lý bên trong `ApplicationContext` đều là singleton. Bạn chắc đã để ý điều này từ các Output ở phía trên.

```
[1] Output Instance: me.loda.spring.helloworld.Bikini@2e16f13a

[4] Girl Outfit: me.loda.spring.helloworld.Bikini@2e16f13a
```

`Outfit` ở 2 đối tượng trên là một. 

Tất cả những `Bean` được quản lý trong `ApplicationContext` đều chỉ được tạo ra **một lần duy nhất** và khi có `Class` yêu cầu `@Autowired` thì nó sẽ lấy đối tượng có sẵn trong `ApplicationContext` để _inject_ vào.

Trong trường hợp bạn muốn mỗi lần sử dụng là một instance hoàn toàn mới. Thì hãy đánh dấu `@Component` đó bằng `@Scope("prototype")`

```java
@Component
@Scope("prototype")
public class Bikini implements Outfit {
    @Override
    public void wear() {
        System.out.println("Mặc bikini");
    }
}
```

### Kết


Tới đây bạn đã tiếp cận với hai khái niệm cơ bản nhất trong **Spring Boot** và cũng là nền tảng cốt lõi của nó. Việc nắm được cách vận hành của `@Component` và `@Autowired` là bạn đã đi được nửa chặng đường rồi.

----

### Cách @Autowired vận hành

`@Autowired` đánh dấu cho Spring biết rằng sẽ tự động inject bean tương ứng vào vị trí được đánh dấu.

```java
@Component
public class Girl {
    // Đánh dấu để Spring inject một đối tượng Outfit vào đây
    @Autowired
    Outfit outfit;

    public Girl(Outfit outfit) {
        this.outfit = outfit;
    }

    // GET
    // SET
}
```

Tuy nhiên, quá trình `@Autowired` này đòi hỏi một điều kiện là Class đó phải có `Constructor` hoặc `Setter` cho thuộc tính cần inject.

Như ví dụ ở trên tôi đã sử dụng một Constructor là `public Girl(Outfit outfit)` để **Spring** có thể truyền giá trị `Outfit` vào bên trong `Girl`. Nếu bỏ Constructor này đí, bạn bắt buộc phải cung cấp cho class Girl một hàm `Setter` thay thế.

```java
@Component
public class Girl {

    // Đánh dấu để Spring inject một đối tượng Outfit vào đây
    @Autowired
    Outfit outfit;

    // Spring sẽ inject outfit thông qua Constructor trước
    public Girl() { }


    // Nếu không tìm thấy Constructor thoả mãn, nó sẽ thông qua setter
    public void setOutfit(Outfit outfit) {
        this.outfit = outfit;
    }

    // GET
    // SET
}

```

Bạn cũng có thể gắn `@Autowired` lên trên method, thay vì thuộc tính, chức năng cũng vẫn tương tự, nó sẽ tìm Bean phù hợp với method đó và truyền vào.

```java
@Component
public class Girl {

    // Đánh dấu để Spring inject một đối tượng Outfit vào đây
    Outfit outfit;

    // Spring sẽ inject outfit thông qua Constructor trước
    public Girl() { }


    @Autowired
    // Nếu không tìm thấy Constructor thoả mãn, nó sẽ thông qua setter
    public void setOutfit(Outfit outfit) {
        this.outfit = outfit;
    }

    // GET
    // SET
}

```

### Vấn đề của @Autowired

Trong thực tế, sẽ có trường hợp chúng ta sử dụng `@Autowired` khi **Spring Boot** có chứa 2 Bean cùng loại trong Context.

Lúc này thì **Spring** sẽ bối rối và không biết sử dụng Bean nào để inject vào đối tượng.

Ví dụ:

Class `Outfit` có 2 kế thừa là `Bikini` và `Naked`

```java
import org.springframework.stereotype.Component;

public interface Outfit {
    public void wear();
}

/*
 Đánh dấu class bằng @Component
 Class này sẽ được Spring Boot hiểu là một Bean (hoặc dependency)
 Và sẽ được Spring Boot quản lý
  */
@Component
public class Bikini implements Outfit {
    @Override
    public void wear() {
        System.out.println("Mặc bikini");
    }
}


@Component
public class Naked implements Outfit {
    @Override
    public void wear() {
        System.out.println("Đang không mặc gì");
    }
}
```

Class `Girl` yêu cầu inject một `Outfit` vào cho mình.

```java

@Component
public class Girl {

    @Autowired
    Outfit outfit;

    public Girl(Outfit outfit) {
        this.outfit = outfit;
    }

    // GET
    // SET
}
```

Lúc này khi chạy chương trình. **Spring Boot** sẽ báo lỗi như sau.

Output:

```
***************************
APPLICATION FAILED TO START
***************************

Description:

Parameter 0 of constructor in me.loda.spring.helloprimaryqualifier.Girl required a single bean, but 2 were found:
	- bikini: defined in file [/Users/lv00141/Documents/WORKING_SPACE/GITHUB/spring-boot-learning/spring-boot-helloworld-@Primary - @Qualifier/target/classes/me/loda/spring/helloprimaryqualifier/Bikini.class]
	- naked: defined in file [/Users/lv00141/Documents/WORKING_SPACE/GITHUB/spring-boot-learning/spring-boot-helloworld-@Primary - @Qualifier/target/classes/me/loda/spring/helloprimaryqualifier/Naked.class]
```

Đại khái là, trong quá trình cài đặt, nó tìm thấy tới 2 đối tượng thoả mãn `Outfit`. Giờ nó không biết sử dụng cái nào để inject vào trong `Girl`

### @Primary

Cách giải quyết thứ nhất là sử dụng Annotation `@Primary`.

`@Primary` là annotation đánh dấu trên một Bean, giúp nó **luôn được ưu tiên lựa** chọn trong trường hợp có nhiều Bean cùng loại trong Context.

Trong ví dụ ở trên, nếu chúng ta để `Naked` là primary. Thì chương trình sẽ chạy bình thường.

Và hiển nhiên `Outfit` bên trong `Girl` sẽ là `Naked`.

```java

@Component
@Primary
public class Naked implements Outfit {
    @Override
    public void wear() {
        System.out.println("Đang không mặc gì");
    }
}
```

Chạy thử chương trình:

```java
@SpringBootApplication
public class App {
    public static void main(String[] args) {
        // ApplicationContext chính là container, chứa toàn bộ các Bean
        ApplicationContext context = SpringApplication.run(App.class, args);

        // Khi chạy xong, lúc này context sẽ chứa các Bean có đánh
        // dấu @Component.

        Girl girl = context.getBean(Girl.class);

        System.out.println("Girl Instance: " + girl);

        System.out.println("Girl Outfit: " + girl.outfit);

        girl.outfit.wear();
    }
}
```

Output:

```
Girl Instance: me.loda.spring.helloprimaryqualifier.Girl@eb9a089
Girl Outfit: me.loda.spring.helloprimaryqualifier.Naked@1688653c
Đang không mặc gì
```

**Spring Boot** đã ưu tiên `Naked` và inject nó vào `Girl`.

### @Qualifier

Cách thứ hai, là sử dụng Annotation `@Qualifier`.

`@Qualifier` xác định tên của một Bean mà bạn muốn chỉ định inject.

Ví dụ:

```java
@Component("bikini")
public class Bikini implements Outfit {
    @Override
    public void wear() {
        System.out.println("Mặc bikini");
    }
}

@Component("naked")
public class Naked implements Outfit {
    @Override
    public void wear() {
        System.out.println("Đang không mặc gì");
    }
}

@Component
public class Girl {

    Outfit outfit;

    // Đánh dấu để Spring inject một đối tượng Outfit vào đây
    @Autowired
    public Girl(@Qualifier("naked") Outfit outfit) {
        // Spring sẽ inject outfit thông qua Constructor đầu tiên
        // Ngoài ra, nó sẽ tìm Bean có @Qualifier("naked") trong context để ịnject
        this.outfit = outfit;
    }

    // GET
    // SET
}
```

### Kết

`@Primary` và `@Qualifier` là một trong những tính năng bạn nên biết trong Spring để có thể xử lý vấn đề nhiều Bean cùng loại trong một Project.
