---
layout: Post
title: Tìm hiểu về LocalStorage, SessionStorage và Cookie
subtitle: API Front-end
author: Trần Hữu Đang
date: 2024-03-23
useHeaderImage: false
headerImage: img/in-post/interview/api-banner.png
headerMask: rgba(70, 112, 80, 0)
permalinkPattern: /post/interview/:slug/
tags:
  - interview
  - Web
  - FrontEnd
---

Trong công nghệ xây dựng web-app hiện nay, có thể nói mô hình SCR (Client Side Rendering) đang được phát triển một cách vượt bật. 

Cùng với sự ưa chuộng ấy, ==Rest API== đóng vai trò rất quan trọng trong việc kết nối ***Back-end*** và ***Front-end***...

Hôm nay hãy cùng mình phân biệt hai khái niệm API gồm `Restful` và `Non-Restful` nha ^^

![](https://github.com/dangtranhuu/images/blob/main/frogcyber/post/interview/api/banner.png?raw=true)

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

