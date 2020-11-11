let btnClose = document.querySelector(".btn-close");
let modalWindow = document.querySelector(".modal");
let btnSend = document.querySelector(".modal-btn")
let pageScroll = document.querySelector("body").scrollHeight;
let halfPage = pageScroll / 2 ;

window.addEventListener("scroll",scrollPage)
function scrollPage() {
    if (window.pageYOffset >= halfPage) {
        modalWindow.classList.add("show")
    }
}
btnClose.addEventListener("click",function() {
    modalWindow.classList.remove("show")
    window.removeEventListener("scroll",scrollPage)
})

let navMobileMenuBtn = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation")

navMobileMenuBtn.addEventListener("click",function () {

    navMobileMenuBtn.classList.toggle("active-menu")
  if (navMobileMenuBtn.classList.toggle("active-menu")) {
    mainMenu.classList.remove("active-menu")
  } if (navMobileMenuBtn.classList.toggle("active-menu")) {
    mainMenu.classList.add("active-menu")
  } 
})






