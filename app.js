let btnClose = document.querySelector(".btn-close");
let modalWindow = document.querySelector(".modal");
let btnSend = document.querySelector(".modal-btn")
let pageSize = document.querySelector("body").scrollHeight;
let halfPage = pageSize / 2 ;

window.addEventListener("scroll",scr)
function scr() {
    if (window.pageYOffset >= halfPage) {
        modalWindow.classList.add("show")
    }
}
btnClose.addEventListener("click",function() {
    modalWindow.classList.remove("show")
    window.removeEventListener("scroll",scr)
})








