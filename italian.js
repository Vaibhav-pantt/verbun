const langBtn = document.querySelector('.lang-toggle');
langBtn.addEventListener('click', () => {
  langBtn.textContent = langBtn.textContent === 'EN | DE' ? 'DE | EN' : 'EN | DE';
});

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });

// Function to navigate to the specified HTML page
function navigateTo(page) {
    window.location.href = page;
  }
  
  // Function to toggle languages (for now just log a message)
  function toggleLanguage() {
    // You can replace this with actual logic to toggle between languages
    alert("Language toggled between English and German!");
  }
  