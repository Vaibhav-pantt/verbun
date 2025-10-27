
// Handle scroll effect for navbar
window.onscroll = function() {
    let header = document.querySelector('.classic-header');
    
    // Check if user has scrolled past 50px
    if (window.scrollY > 50) {
      header.classList.add('glassmorph'); // Adds glassmorphism effect when scrolled
      header.classList.add('shrink'); // Adds shrink effect if necessary
    } else {
      header.classList.remove('glassmorph'); // Removes glassmorphism effect when at top
      header.classList.remove('shrink'); // Removes shrink effect when back to top
    }
  };
  
  // Toggle hamburger menu visibility
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
    