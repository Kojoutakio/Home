// Animasi saat halaman dimuat
window.addEventListener('load', () => {
  document.body.style.transition = 'opacity 1.5s ease-in-out';
  document.body.style.opacity = '1';
});

// Tambahan interaksi pada gambar karakter
const characterImg = document.querySelector('.character-img');
characterImg.addEventListener('mouseover', () => {
  characterImg.style.transform = 'scale(1.05)';
  characterImg.style.transition = 'transform 0.5s ease';
});

characterImg.addEventListener('mouseout', () => {
  characterImg.style.transform = 'scale(1)';
});
