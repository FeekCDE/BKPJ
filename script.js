document.addEventListener('DOMContentLoaded', function() {
// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.getElementById("navbarMenu");

menuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".navbar-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navbarMenu.classList.remove("active");
  });
});

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.zen-feature-card').forEach((card) => {
    observer.observe(card);
  });

      // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-item, .phase, .widget-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.feature-item, .phase, .widget-container');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});