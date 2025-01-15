import { auto } from "openai/_shims/registry.mjs";
import "../styles/style.css";

// responsive navbar
const menuBtn = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelector(".nav__links");
const body = document.querySelector("body");
const closeBtn = document.querySelector(".close-btn");

function toggleMobileMenu(isopen) {
  if (isopen) {
    navLinks.classList.add("active");
  } else {
    navLinks.classList.remove("active");
  }
}
menuBtn.addEventListener("click", () => toggleMobileMenu(true));
closeBtn.addEventListener("click", () => toggleMobileMenu(false));
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && navLinks.classList.contains("active")) {
    toggleMobileMenu();
  }
});
document.addEventListener("click", function (e) {
  const isInsideMenu = navLinks.contains(e.target);
  const isMenuBtn = menuBtn.contains(e.target);
  if (!isInsideMenu && !isMenuBtn) {
    toggleMobileMenu(false);
  }
});

// swiper js
const swiper1 = new Swiper(".swiper-section-2", {
  effect: "fade",
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  crossFade: true,
  speed: 2000,
  freeMode: false,
  autoplay: {
    delay: 1000,
  },
});

const swiper2 = new Swiper(".swiper-section-5", {
  spaceBetween: 30,
  slidesPerView: "auto",
  loop: true,
  speed: 4000,
  freeMode: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },
});

// weather forecast section

// const apiKey = "1f2fab42372f52cebce995fe8e6b573c";
const apikey = "60af3ad36678c9dad7916b75b5631202";

// const apiUrl ='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

async function checkWeather(apiKey, city = "Villard-de-Lans") {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}units=metric`
  );
  const data = await response.json();
  console.log(data);
}

checkWeather(apikey);
