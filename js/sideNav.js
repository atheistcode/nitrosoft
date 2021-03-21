const sideNav = document.querySelector(".side-navigation");
const menuBtn = document.querySelector(".extras__menu-icon");
const closeBtn = document.querySelector(".close-btn");
const subMenuBtns = document.querySelectorAll(".sidenav-sub-menu-btn");
const body = document.querySelector("body");

const openSideNav = () => {
  sideNav.style.display = "block";
  body.style.overflow = "hidden";
};

const closeSideNav = () => {
  sideNav.style.display = "none";
  body.style.overflow = "auto";
};

const toggleSubMenu = (e) => {
  const subMenu = e.target.closest(".sidenav-list__item").nextElementSibling;
  const btn = e.target.closest(".sidenav-sub-menu-btn");

  subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";

  btn.style.transform = btn.style.transform === "rotate(90deg)" ? "rotate(0)" : "rotate(90deg)";
};

menuBtn.addEventListener("click", openSideNav);
closeBtn.addEventListener("click", closeSideNav);

subMenuBtns.forEach((btn) => btn.addEventListener("click", (e) => toggleSubMenu(e)));
