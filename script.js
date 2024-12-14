// Animation for button hover
document.querySelectorAll('.info-card').forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = "0 10px 20px rgba(229, 57, 53, 0.5)";
  });

  card.addEventListener('mouseout', () => {
    card.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.3)";
  });
});
