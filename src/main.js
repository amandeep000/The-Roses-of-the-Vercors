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

const swiper = new Swiper(".swiper-section-5", {
  loop: true, // Enable continuous loop mode
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  slidesPerView: 1, // Number of slides to show at once
  spaceBetween: 10, // Space between slides
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// weather forecast section
// const apikey = "6e856ad753f04e079d0100743251501";
// const city = "Villard-de-Lans";
// const days = 5;

// async function checkWeather(apiKey, city) {
//   try {
//     const response = await fetch(
//       `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}`
//     );
//     if (!response.ok) {
//       throw new Error("Https error:", response.status);
//     }
//   }
//   const data = await response.json();
//   console.log(data);
//   return data;
// }
// catch (error) {
//   console.error("Error fetching weather data:", error);
//     return null;
// }

// function getWeekday(dateString) {
//   const date = new Date(dateString);
//   const options = { weekday: "long" };
//   return date.toLocaleString("en-US", options);
// }

// function addWeatherData(data) {
//   if (!data || !data.forecast) {
//     console.log("Structural error", data);
//     return;
//   }
//   const forecastdays = data.forecast.forecastday;
//   console.log(forecastdays);
//   let forecasthtml;
//   forecastdays.forEach((day) => {
//     const {
//       date,
//       day: { avgtemp_c, condition },
//     } = day;

//     // const presDate = new Date().toLocaleDateString("en-US",{day:"2-digit"});
//     const weekday = getWeekday(date);
//     forecasthtml += `
//    <div class="forecast_item">
//             <h3 class="forecast_item-title">${weekday}</h3>
//             <img
//               src="${condition.icon}"
//               alt="weather image"
//               class="weather_image"
//             />
//             <h3 class="forecast_item-temp">${avgtemp_c} </h3>
//   `;
//   });
//   document.querySelector(".forecast").innerHTML = forecasthtml;
// }
// addWeatherData(checkWeather);

// checkWeather(apikey, city, days)
//   .then((data) => addWeatherData(data))
//   .catch((error) => console.log("error fetching weather data", error));

const apikey = "6e856ad753f04e079d0100743251501";
const city = "Villard-de-Lans";
const days = 5;

async function fetchWeatherData(apiKey, city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null; // Return null on error
  }
}

function getWeekday(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", { weekday: "long" });
}

function addWeatherData(data) {
  if (!data || !data.forecast) {
    console.error("Invalid data structure:", data);
    return;
  }

  const forecastdays = data.forecast.forecastday;
  let forecasthtml = ""; // Initialize as an empty string

  forecastdays.forEach((day) => {
    const {
      date,
      day: { avgtemp_c, condition },
    } = day;

    const weekday = getWeekday(date);
    const iconUrl = condition ? condition.icon : ""; // Check if condition exists

    forecasthtml += `
      <div class="forecast_item">
        <h3 class="forecast_item-title">${weekday}</h3>
        <img src="${iconUrl}" alt="weather image" class="weather_image" />
        <h3 class="forecast_item-temp">${avgtemp_c} °C</h3>
      </div>
    `;
  });

  document.querySelector(".forecast").innerHTML = forecasthtml;
}

// Fetch and display weather data
fetchWeatherData(apikey, city)
  .then((data) => {
    if (data) {
      addWeatherData(data);
    }
  })
  .catch((error) => console.error("Error in promise chain:", error));
