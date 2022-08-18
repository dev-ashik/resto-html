const menuBars = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");

menuBars.onclick = () => {
    menuBars.classList.toggle("fa-xmark");
    navbar.classList.toggle("active")
}

window.addEventListener("scroll", function(){
    menuBars.classList.remove("fa-xmark");
    navbar.classList.remove("active")
});

const searchIcon = document.querySelector("#search-icon");
const closeBtn = document.querySelector("#close");
const searchForm = document.querySelector("#search-form");

searchIcon.onclick = () => {
    searchForm.classList.toggle("active");
}

closeBtn.onclick = () => {
    searchForm.classList.remove("active");
}