// Menambahkan efek animasi pada tombol
document.querySelectorAll('.cta-btn, .follow-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Button clicked!');
  });
});
