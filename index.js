// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
slide();

function slide() {
  var i;
  var x = document.getElementsByClassName("my-slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slide, 4000);    
}

// Open Close mobile menu
var mobileMenu = document.getElementById('mobile-menu');
var header = document.getElementById('header');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = '46px'; // header.style.height = null;
    }
}

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        // this: menuItem
        if (isParentMenu) {
            event.preventDefault(); //bỏ qua mặc định (mặc định là điều hướng tới link(#) trong href - lên lại đầu trang)
        } else {
            header.style.height = null;
        }


        // console.log(this);
    }
}

// Buy Tickets
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalCloses = document.querySelectorAll('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

// Hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open')
}

// Hàm ẩn modal mua vé (gỡ bỏ class open của modal)
function hideBuyTickets() {
    modal.classList.remove('open')
}

// Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

for (const modalClose of modalCloses) {
    modalClose.addEventListener('click', hideBuyTickets)
}

// Lắng nghe click vào vùng bên ngoài modal mua vé để ẩn modal mua vé
modal.addEventListener('click', hideBuyTickets)

// ngăn chặn nổi bọt modal-container ra ngoài modal vì dòng 76
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})