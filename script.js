// Slider functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Auto slide every 5 seconds
function autoSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(autoSlide, 5000);

// Initial slide
showSlide(currentSlide);
