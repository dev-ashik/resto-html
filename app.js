const menuBars = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");

menuBars.onclick = () => {
    menuBars.classList.toggle("fa-xmark");
    navbar.classList.toggle("active")
}