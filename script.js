// Lazy animation on scroll
const animatedElements = document.querySelectorAll(
  '.animate-title, .animate-subtitle, .animate-description, .animate-link, .animate-signature, .animate-buttons, .animate-img'
);

window.addEventListener('scroll', () => {
  animatedElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 50) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    }
  });
});

// Initial state
animatedElements.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.5s ease';
});
