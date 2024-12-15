// Placeholder for interactivity
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.search-list button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You clicked: ${button.innerText}`);
        });
    });
});
