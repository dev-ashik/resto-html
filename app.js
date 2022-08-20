const menuBars = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");

menuBars.onclick = () => {
  menuBars.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.addEventListener("scroll", function () {
  menuBars.classList.remove("fa-xmark");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    // console.log(sec);
    const sTop = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (sTop >= offset && sTop < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});

const searchIcon = document.querySelector("#search-icon");
const closeBtn = document.querySelector("#close");
const searchForm = document.querySelector("#search-form");

searchIcon.onclick = () => {
  searchForm.classList.toggle("active");
};

closeBtn.onclick = () => {
  searchForm.classList.remove("active");
};

// home swiper
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// reveiw swiper
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// loader
const loader = () => {
  const loaderContainer = document.querySelector(".loader-container");
  loaderContainer.classList.add("fade-out");
};

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;
