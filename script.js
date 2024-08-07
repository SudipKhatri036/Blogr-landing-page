// Changing Arrow Icon src
const arrowIcons = document.querySelectorAll(".arrow-icon");
const section1Img = document.querySelector(".section-1-img");
const section3Img = document.querySelector(".section-3-img");
const navHeader = document.querySelector(".nav-header");
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navLinks = document.querySelector(".nav-container");

// Changing Image Src
if (window.innerWidth <= 768) {
  arrowIcons.forEach((arrIcon) =>
    arrIcon.setAttribute("src", "./images/icon-arrow-dark.svg")
  );
  section1Img.setAttribute("src", "./images/illustration-editor-mobile.svg");
  section3Img.setAttribute("src", "./images/illustration-laptop-mobile.svg");
}

// Navigation Menu Toggling
openMenu.addEventListener("click", () => {
  navHeader.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  navHeader.classList.remove("active");
});

// SubMenu Toggling
navLinks.addEventListener("click", function (e) {
  const btn = e.target.closest(".nav-links");
  btn.classList.toggle("active");
});
