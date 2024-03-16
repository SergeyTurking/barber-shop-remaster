let btn_header=document.getElementById('btn_header')
let btn_header_a=document.getElementById('btn_header_a')

btn_header.onmouseenter=function(){
    btn_header.style.borderColor = 'red'
    btn_header_a.style.color = 'red'
}
btn_header.onmouseleave=function(){
    btn_header.style.borderColor = '#fff'
    btn_header_a.style.color = '#fff'
}


// бургер
const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".navbar");
const menuLinks = document.querySelectorAll(".navbar a");

burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("open");
    overlay.classList.toggle("open");
});



menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
        overlay.classList.remove("open");
    });
});