document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
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
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // 🗂 FLASHCARDS
  const cardContainer = document.getElementById("card-container");
  const form = document.getElementById("card-form");
  let isEnglish = true;

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const spanish = document.getElementById("spanish-word").value.trim();
      const english = document.getElementById("english-word").value.trim();
      if (spanish && english) {
        createCard(spanish, english);
        form.reset();
      }
    });
  }

  function createCard(spanish, english) {
    const card = document.createElement("div");
    card.className = "flashcard";

    const content = document.createElement("div");
    content.innerHTML = `<strong>${spanish}</strong><br/>${english}`;
    card.appendChild(content);

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.innerText = "Edit";
    editBtn.onclick = () => {
      const newSpanish = prompt("Edit Spanish word:", spanish);
      const newEnglish = prompt("Edit English word:", english);
      if (newSpanish && newEnglish) {
        content.innerHTML = `<strong>${newSpanish}</strong><br/>${newEnglish}`;
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => card.remove();

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    card.appendChild(actions);
    cardContainer.appendChild(card);
  }

  // Default cards
  if (cardContainer) {
    createCard("Hola", "Hello");
    createCard("Gracias", "Thank you");
    createCard("Casa", "House");
  }

  // 🌐 LANGUAGE TOGGLE
  window.toggleLanguage = function () {
    isEnglish = !isEnglish;
    document.querySelector(".toggle-btn").innerText = isEnglish ? "Español" : "English";
    document.getElementById("hero-text").innerText = isEnglish
      ? "Learn Spanish with Verbun"
      : "Aprende español con Verbun";
    document.getElementById("flashcard-title").innerText = isEnglish
      ? "Vocabulary Flashcards"
      : "Tarjetas de Vocabulario";
  };
});
