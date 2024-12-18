document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.animate');

    // Menggunakan Intersection Observer untuk memantau elemen
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
