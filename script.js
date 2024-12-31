document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery img').forEach((img) => {
        img.addEventListener('click', () => {
            img.classList.toggle('grayscale-off'); // Toggle the grayscale-off class
        });
    });
});
