// Add scroll animations
const animatedElements = document.querySelectorAll('.animate-content, .animate-img, .animate-art');

window.addEventListener('scroll', () => {
  animatedElements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'none';
    }
  });
});

// Initial state for animations
animatedElements.forEach((element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'all 0.6s ease-out';
});
