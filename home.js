document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling effect for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Remove active class from all links & add to clicked one
            document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
  }
  