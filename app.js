let btnClose = document.querySelector(".btn-close");
let modalWindow = document.querySelector(".modal");
let btnSend = document.querySelector(".modal-btn")
let pageScroll = document.querySelector("body").scrollHeight;
let halfPage = pageScroll / 2;
let navigationScroll = document.querySelector(".mobile-menu")

window.addEventListener("scroll", scrollPage)

function scrollPage() {
  if (window.pageYOffset >= halfPage) {
    modalWindow.classList.add("show")
  }
}
btnClose.addEventListener("click", function () {
  modalWindow.classList.remove("show")
  window.removeEventListener("scroll", scrollPage)
})
window.addEventListener("scroll", function scrollFixedNavigation() {
  if (window.pageYOffset > 0) {
    navigationScroll.classList.add("nav-scroll")
  } else if (window.pageYOffset <= 0) {
    navigationScroll.classList.remove("nav-scroll")
  }
})
let navMobileMenuBtn = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation")

navMobileMenuBtn.addEventListener("click", function () {
  navMobileMenuBtn.classList.toggle("active-menu")
  if (navMobileMenuBtn.classList.toggle("active-menu")) {
    mainMenu.classList.remove("active-menu")
  }
  if (navMobileMenuBtn.classList.toggle("active-menu")) {
    mainMenu.classList.add("active-menu")
  }
})