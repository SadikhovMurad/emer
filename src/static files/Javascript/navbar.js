// Инициализация элементов
const navbar = document.getElementById("navbar");
const signUpButton = document.querySelector(".signUpButton");
const brandLinks = document.querySelectorAll(".brand li a");
const languageBtn = document.querySelector(".language-btn");
const linkA = document.querySelectorAll(".linkA");
const arrow = document.querySelector(".arrow");
const links = document.querySelector(".links");
let lastScrollY = window.scrollY;
const menuBtn = document.getElementById("menuBtn");
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

// Создание overlay сразу при загрузке страницы
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// Функция для изменения стилей элементов
const transitionStyles = (element, styles) => {
  Object.entries(styles).forEach(([property, value]) => {
    element.style[property] = value;
  });
};

const updateNavbarStyles = (scrollDirection) => {
  const currentScrollY = window.scrollY;

  if (scrollDirection > lastScrollY) {
    transitionStyles(navbar, {
      transform: "translateY(-100%)",
      transition: "transform 0.5s ease",
    });

    links.style.transform = "translateY(-100%)";
    links.style.transition = "all 0.3s ease";

    overlay.classList.remove("show");
  } else {
    transitionStyles(navbar, {
      transform: "translateY(0)",
      transition: "all 0.4s ease",
    });

    links.style.transform = "translateY(0)";
    links.style.transition = "all 0.3s ease";

    if (navLinks.classList.contains("show")) {
      overlay.classList.add("show");
    }
  }

  lastScrollY = currentScrollY;
};

window.addEventListener("scroll", () => {
  updateNavbarStyles(window.scrollY);
});

// Логика для открытия/закрытия языкового меню
const toggleLanguageMenu = () => {
  const menu = document.querySelector(".language-menu");
  menu.classList.toggle("show");
  const isMenuVisible = menu.classList.contains("show");
  arrow.innerHTML = isMenuVisible ? "&#9652;" : "&#9662;";
  languageBtn.classList.toggle("active", isMenuVisible);
};

const handleLanguageOptionClick = (event) => {
  const selectedLanguage = event.target.closest(".language-option");
  const languageCode = selectedLanguage.querySelector("span").textContent;
  const languageFlag = selectedLanguage.querySelector("img").src;

  document.querySelector("#currentLanguage").textContent = languageCode;
  document.querySelector(".flag-icon").src = languageFlag;

  const menu = document.querySelector(".language-menu");
  menu.classList.remove("show");
  arrow.innerHTML = "&#9662;";
  languageBtn.classList.remove("active");
};

const closeLanguageMenuOnClickOutside = (event) => {
  const languageBtn = document.querySelector(".language-btn");
  const menu = document.querySelector(".language-menu");
  if (!languageBtn.contains(event.target)) {
    menu.classList.remove("show");
    arrow.innerHTML = "&#9662;";
    languageBtn.classList.remove("active");
  }
};

document.querySelectorAll(".language-option").forEach((option) => {
  option.addEventListener("click", handleLanguageOptionClick);
});

document.addEventListener("click", closeLanguageMenuOnClickOutside);

// Логика для открытия/закрытия меню при клике на кнопку

menuBtn.addEventListener("click", () => {
  const isActive = menuBtn.classList.toggle("active");
  navLinks.classList.toggle("show", isActive);
  navbar.classList.toggle("menu-open", isActive);
  overlay.classList.toggle("show", isActive);
  menuIcon.innerHTML = isActive ? "&#9652;" : "&#9662;"; // Меняем стрелку
});

// Закрытие меню при клике на overlay
overlay.addEventListener("click", () => {
  navLinks.classList.remove("show");
  menuBtn.classList.remove("active");
  navbar.classList.remove("menu-open");
  overlay.classList.remove("show");
  menuIcon.innerHTML = "&#9662;"; // Возвращаем стрелку вниз
});
