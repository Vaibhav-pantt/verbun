const btn = document.getElementById('theme-toggle');
const intro = document.querySelector('.intro-section');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  intro.classList.toggle('flag-bg');
});
