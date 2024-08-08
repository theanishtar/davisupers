var slideMask = document.querySelector('.sidebar-mask');
var headerNav = document.querySelector('.navbar');

// Tạo một thẻ <span>
var spanElement = document.createElement("span");
spanElement.className = 'opNav';
spanElement.textContent = "|||";

// Appen thẻ <span> vào thẻ cha
headerNav.appendChild(spanElement);

spanElement.onclick = function () {
  var openNav = document.querySelector('.sidebar-open');
  if (openNav)
    closeNavBar();
  openNavBar();
};

slideMask.onclick = function () {
  var openNav = document.querySelector('.sidebar-open');
  if (openNav)
    closeNavBar();
};

function openNavBar() {
  // no-sidebar sidebar-open
  var noslidbar = document.querySelector('.no-sidebar');
  noslidbar.classList.add('sidebar-open');
}


function closeNavBar() {
  // no-sidebar sidebar-open
  var noslidbar = document.querySelector('.no-sidebar');
  noslidbar.classList.remove('sidebar-open');
}