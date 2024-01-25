const header = document.querySelector('header');

// Tạo một thẻ <span>
var spanElement = document.createElement("span");

// Thêm nội dung vào thẻ <span>
spanElement.textContent = "|||";

// Appen thẻ <span> vào thẻ cha
header.appendChild(spanElement);
