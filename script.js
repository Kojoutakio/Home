// Slider Logic
const slides = document.querySelectorAll('.slide');
const body = document.body;
let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  body.style.background = slides[index].style.getPropertyValue('--bg-color');
}

// Event Listeners for Next and Previous
document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Initialize the first slide
showSlide(currentIndex);
