document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const searchInput = document.querySelector(".search-input");
  const intro = document.querySelector(".intro-section");

  // 🌙 THEME TOGGLE
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (intro) intro.classList.toggle("flag-bg");

    // Switch icon/text
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // 🍔 HAMBURGER MENU
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

    // 🔹 Hide search bar when hamburger menu is active
    if (hamburger.classList.contains("active")) {
      searchInput.style.display = "none";
      document.querySelector("nav").classList.add("expanded-nav");
    } else {
      searchInput.style.display = "block";
      document.querySelector("nav").classList.remove("expanded-nav");
    }
  });

  // Close menu when link clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
      searchInput.style.display = "block";
      document.querySelector("nav").classList.remove("expanded-nav");
    });
  });
});
