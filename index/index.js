const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const header = document.querySelector(".header");
const headerlogo = document.querySelector(".header-logo");
const schedule = document.querySelector(".schedule");
const notices = document.querySelector(".notice-menu");
const sd1 = document.querySelector(".sd1");
const sd2 = document.querySelector(".sd2");
const std = document.querySelector(".schedule-text-div");

hamMenu.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
  header.classList.toggle("active");
  hamMenu.classList.toggle("active");
  headerlogo.classList.toggle("active");
  schedule.classList.toggle("active");
  notices.classList.toggle("active");
  sd1.classList.toggle("active");
  sd2.classList.toggle("active");
  std.classList.toggle("active");
  
});