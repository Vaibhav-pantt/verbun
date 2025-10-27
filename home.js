 const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const links = document.getElementById('primary-navigation');

  if (hamburger && nav && links) {
    function openMenu() {
      nav.classList.add('expanded');
      hamburger.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
      nav.classList.remove('expanded');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.contains('expanded') ? closeMenu() : openMenu();
    });

    document.addEventListener('click', (e) => {
      if (nav.classList.contains('expanded') && !nav.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('expanded')) closeMenu();
    });

    links.addEventListener('click', (e) => {
      if (e.target.closest('a')) closeMenu();
    });
  }


const loginBtn = document.getElementById('loginBtn');

// Redirect to login.html when clicked
loginBtn.addEventListener('click', () => {
  window.location.href = 'login.html';
});






