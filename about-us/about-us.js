const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const header = document.querySelector(".header");
const headerlogo = document.querySelector(".header-logo");
const aboutUs = document.querySelector(".about-us-content");

hamMenu.addEventListener("click", () => {
    offScreenMenu.classList.toggle("active");
    header.classList.toggle("active");
    hamMenu.classList.toggle("active");
    headerlogo.classList.toggle("active");
    aboutUs.classList.toggle("active");
    });