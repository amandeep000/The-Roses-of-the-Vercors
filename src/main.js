"use strict";
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

// swiper js for Accommodation section
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

// gallery section
const swiper = new Swiper(".swiper-section-5", {
  loop: true,
  cssMode: true,
  speed: 8000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 425px
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Weather section
const apikey = "6e856ad753f04e079d0100743251501";
const city = "Villard-de-Lans";
const days = 5;

async function getWeatherData(apikey, city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=${days}`
    );
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    addWeatherData(data);
  } catch (error) {
    console.error(`Error fetching weather data`, error);
  }
}

getWeatherData(apikey, city);

function getWeekdays(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", { weekday: "long" });
}

function addWeatherData(data) {
  const forecastdays = data.forecast.forecastday;
  console.log(forecastdays);
  let foreCastHTML = "";
  forecastdays.forEach((days, i) => {
    const {
      date,
      day: { condition, avgtemp_c },
    } = days;
    const weekday = getWeekdays(date);
    foreCastHTML += `<div class="forecast_item" ${i}>
         <h3 class="forecast_item-title">${weekday}</h3>
         <img src="${condition.icon}" alt="weather image" class="weather_image" />
         <h3 class="forecast_item-temp">${avgtemp_c} °C</h3>
     </div>`;
  });
  document.querySelector(".forecast").innerHTML = foreCastHTML;
}

// html Modal window
const dialog = document.getElementById("dialog");
const closeButton = document.getElementById("dialog-close-btn");

// function to open dialog
function openDialog() {
  dialog.setAttribute("open", "true");
}

// funtion to close dialog window
function closeDialog() {
  dialog.removeAttribute("open");
}
closeButton.addEventListener("click", closeDialog);
setTimeout(openDialog, 6000);

// function to copy the discound code from modal window automatically when clicked

document.getElementById("discount-code").addEventListener("click", function () {
  navigator.clipboard
    .writeText(this.innerText)
    .then(() => `Discount copied to clipboard: ` + this.innerText)
    .catch((err) => console.error("failed to copy: ", err));
});
