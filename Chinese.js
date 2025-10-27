const btn = document.getElementById('theme-toggle');
const introSection = document.querySelector('.intro-section');
const videoSection = document.querySelector('.video-section');
const novalSection = document.querySelector('.novel-grid');
  const historySection = document.querySelector('.history-section');
 const chinaSection = document.querySelector('.china-section');
  const siteFooter = document.querySelector('.site-footer');

btn.addEventListener('click', () => {
  // Toggle dark mode for both sections
  introSection.classList.toggle('dark-theme');
  videoSection.classList.toggle('dark-theme');
  novalSection.classList.toggle('dark-theme');
      historySection.classList.toggle('dark-theme');
   chinaSection.classList.toggle('dark-theme');
    siteFooter.classList.toggle('dark-theme');

  // Update button icon
  if (introSection.classList.contains('dark-theme')) {
    btn.textContent = '☀️';  // light mode icon
  } else {
    btn.textContent = '🌗';  // dark mode icon
  }
});