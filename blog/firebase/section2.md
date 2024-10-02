

# Bài 2. Sử dụng các APIs

## Root URL

Với mỗi một firebase database ta sẽ có một URL gốc để truy cập toàn bộ dữ liệu bên trong CSDL

<img src="/firebase/6.png" alt="Image 1" >

Như ví dụ **Demo1** ở bài 1 thì *RootURL* là [https://demo1-b513e-default-rtdb.firebaseio.com](https://demo1-b513e-default-rtdb.firebaseio.com)

Từ URL này ta có thể thao tác với các đối tượng với Firebase theo công thức sau:

$$
<RootURL>/<Objects>.json
$$

Objects sẽ được xem như một bảng trong Database


::: tip Ví dụ
Muốn làm việc với danh sách người dùng trong hệ thống: 
- [https://demo1-b513e-default-rtdb.firebaseio.com/users.json](https://demo1-b513e-default-rtdb.firebaseio.com/users.json)

Muốn làm việc với danh sách sinh viên trong hệ thống
- [https://demo1-b513e-default-rtdb.firebaseio.com/students.json](https://demo1-b513e-default-rtdb.firebaseio.com/students.json)
:::

## Các phương thức APIs

### POST

- **POST** là phương thức để đưa dữ liệu lên Firebase thông qua URL và đối tượng cụ thể

Sau khi POST thành công **Firebase** sẽ trả về KEY đối tượng trong **Objects** (KEY này sẽ có thể truy xuất dữ liệu của đối tượng cụ thể)


<img src="/firebase/post.gif" alt="Image 1" >


### GET

- **GET** là phương thức để lấy dữ liệu từ Firebase thông qua URL và đối tượng cụ thể

#### Lấy cả List Objects

Sau khi GET thành công **Firebase** sẽ trả về thông tin toàn bộ đối tượng trong **Objects**

<img src="/firebase/get.gif" alt="Image 1" >

#### Lấy một Object cụ thể

Sau khi GET thành công **Firebase** sẽ trả về thông tin một đối tượng thông qua KEY theo công thức sau:

$$
<RootURL>/<Objects>/<ID>.json
$$

<img src="/firebase/getbykey.gif" alt="Image 1" >



### PUT

- **PUT** là phương thức để thay đổi dữ liệu của đối tượng thông qua KEY

Sau khi PUT thành công **Firebase** sẽ trả về dữ liệu đối tượng sau khi được cập nhật


<img src="/firebase/put.gif" alt="Image 1" >

### DELETE

- **DELETE** là phương thức để xoá dữ liệu của đối tượng thông qua KEY hoặc Objects nếu muốn xóa cả table

Sau khi DELETE thành công **Firebase** sẽ trả về dữ liệu đối tượng sau khi được xóa (NULL)


<img src="/firebase/delete.gif" alt="Image 1" >