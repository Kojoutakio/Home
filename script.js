// Simple scroll animation for smooth effects
const scrollItems = document.querySelectorAll('.character-image img, .character-description');

window.addEventListener('scroll', () => {
  scrollItems.forEach((item) => {
    const rect = item.getBoundingClientRect().top;
    const viewHeight = window.innerHeight / 1.2;

    if (rect < viewHeight) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
});

// Set initial opacity and transform for animation
scrollItems.forEach((item) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'all 0.6s ease-out';
});
