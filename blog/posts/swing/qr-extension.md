<!-- ---
layout: Post
title: Xây dựng phần mềm tạo và quét mã QR với Java Swing
subtitle: Lập trình GUI với Java Swing
author: Trần Hữu Đang
date: 2023-10-24
useHeaderImage: false
headerImage: https://github.com/dangtranhuu/images/blob/main/frogcyber/post/jwtnodejs/1.png?raw=true
headerMask: rgba(70, 112, 80, 0)
permalinkPattern: /post/swing/:slug/
tags:
  - Java
  - Swing
  - Desktop App
---

Trong các dự án học tập tại trường với đề tài là xây dựng các phần mềm chạy trên window mình đã có nâng cấp một số tính năng liên quan đến tích hợp mã QR vào thanh toán, đăng nhập hay quản lí sản phẩm.

Hôm nay mình sẽ chia sẽ toàn bộ những kiến thức mình đã áp dụng trong bài viết hôm nay nhé !!!

## Các dự án cũ

Đầu tiên mình sẽ cùng điểm qua các dự án mình đã xây dựng để chúng ta có cái nhìn trực quan hơn nha

Đầu tiên là ứng dụng [Quản lí bán hàng của cửa hàng thiết bị di động]() mình đã áp dụng việc sử dụng mã QR vào để quản lí sản phẩm, giúp việc thanh toán tiện lợi hơn. Thay vì phải nhập từng dữ liệu, người dùng có thể quét [mã vạch]() và hệ thống sẽ tự tính toán đơn giá.



[![Repo_DAVISY](https://github-readme-stats.vercel.app/api/pin/?username=Theanishtar&langs_count=8&repo=DAVISY-PRO1041&cache_seconds=2000&how_icons=true&theme=dracula&align=right)](https://github.com/Theanishtar/DAVISY) 

::: details <b>Bonus</b>
Dự án của nhóm mình còn được điểm tuyệt đối trog quá trình học tập và được post lên chính webstite của trường [FPT Polytehnic]() nữa. Các bạn có thể tham khảo tại [đây.](https://caodang.fpt.edu.vn/tin-tuc-poly/can-tho-tin-sinh-vien/du-an-phan-mem-quan-ly-ban-phu-kien-thiet-bi-di-dong-cua-sinh-vien-fpoly-can-tho-lot-mat-xanh-cua-giang-vien.html)
:::
----
Tiếp theo là phần mềm quản lí sản phẩm, người dùng cho cửa hàng bán máy tính

[![Repo_PCInforManager_Javaswing](https://github-readme-stats.vercel.app/api/pin/?username=Theanishtar&langs_count=8&repo=PCInforManager_Javaswing&cache_seconds=2000&how_icons=true&theme=dracula&align=right)](https://github.com/Theanishtar/PCInforManager_Javaswing) 

Phần mềm được mình ứng dụng mã QR vào tính năng đăng nhập. thay vì phải nhập thông tin như username, password vào ứng dụng thì ta có thể quét mã vạch có trên thẻ nhân viên để đăng nhập vào hệ thống.

Hoặc tính năng quét mã QR khi quên mật khẩu, việc này đảm bào rằng ứng dụng sẽ được bảo mật hơn.

::: details <b>Chi tiết</b>

- Đăng nhập bằng mã QR có trên thẻ nhân viên

	1. Chọn `Login with QR Code` và quét mã bằng 

![infor](https://raw.githubusercontent.com/Theanishtar/Images/master/PcInforManager/loginWithQRCode.png)

	2. Hệ thống sẽ tự đăng nhập vào trang chủ khi quét đũng mã 

![infor](https://raw.githubusercontent.com/Theanishtar/Images/master/PcInforManager/loginWithQRCode_step2.png)

- Quên mật khẩu
	1. Gõ địa chỉ email được cấp và chọn `Quên mật khẩu...` dưới nút đăng nnhập

![infor](https://raw.githubusercontent.com/Theanishtar/Images/master/PcInforManager/changePassword.png)

	2. Mã QR sẽ được gửi vào mail

![infor](https://raw.githubusercontent.com/Theanishtar/Images/master/PcInforManager/changePassword_step2.png)

	3. Quét Mã QR bằng camera 

![infor](https://raw.githubusercontent.com/Theanishtar/Images/master/PcInforManager/changePassword_step3.png)

	4. Hệ thống định dạng mã QR

![infor](https://raw.githubusercontent.com/Theanishtar/Images/master/PcInforManager/changePassword_step4.png)

	5. Tiến hành thay đổi mật khẩu

![infor](https://raw.githubusercontent.com/Theanishtar/Images/master/PcInforManager/changePassword_step5.png)

:::

## Bắt đầu

### Các thư viện cần thiết

Đầu tiên ta sẽ cài đặt một số thư viện sau, mình sử dụng `Ant` nên sẽ cài file `jar` bạn có thể cài đặt các `depedency` nếu dùng `Maven` nhé.



### Đọc mã vạch

Đầu tiên ta nói về ==quét mã QR== trước nhá, để quét được mã, ta cần phải thiết lập một kết nối giữa `webcame` và phần mềm.

- Đầu tiên ta viết một phương thức để đọc từng `pixel` trên màn hình thành thông tin `bit`. Ta sẽ tiếp tục chạy phương thức đó một cách tuần tự sau một khoảng thời gian nhất định, ta có định nghĩa về ==Đa luồng== hay `Mutil Thread` trong Java.

- Tiếp tục để người dùng thấy được hình ảnh ta sẽ chuyển đổi toàn bộ thông tin ở dạng `bit` sang hình ảnh và đưa lên một `panel`.


Ta sẽ xây dựng phương thức như sau:

```java
private void initWebcam() {
	Dimension size = WebcamResolution.QVGA.getSize();
	webcam = Webcam.getWebcams().get(0); //0 is default webcam
	webcam.setViewSize(size);

	panel = new WebcamPanel(webcam);
	panel.setPreferredSize(size);
	panel.setFPSDisplayed(true);

	pnImage.add(panel, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 470, 300));

	executor.execute(this);
}

@Override
public void run() {
	do {
		try {
				Thread.sleep(100);
		} catch (InterruptedException e) {
				e.printStackTrace();
		}

		Result result = null;
		BufferedImage image = null;
		if (!webcam.isOpen()) {
				return;
		}
		if (webcam.isOpen()) {
				if ((image = webcam.getImage()) == null) {
					continue;
				}
		}

		LuminanceSource source = new BufferedImageLuminanceSource(image);
		BinaryBitmap bitmap = new BinaryBitmap(new HybridBinarizer(source));

		try {
				result = new MultiFormatReader().decode(bitmap);
		} catch (NotFoundException e) {
				//System.out.println("");
		}

		if (result != null) {
				if (!data.contains(result.getText())) {
					data.add(result.getText());
					System.out.println(result.getText());
					txtData.append(result.getText() + "\n");
				}
		}
	} while (true);
}

@Override
public Thread newThread(Runnable r) {
	Thread t = new Thread(r, "Scan Thread");
	t.setDaemon(true);
	return t;
}
```
 -->
