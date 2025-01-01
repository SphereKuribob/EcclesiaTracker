document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery img').forEach((img) => {
        img.addEventListener('click', () => {
            img.classList.toggle('grayscale-off'); // Toggle the grayscale-off class

            // Add or remove a border based on the grayscale-off class
            if (img.classList.contains('grayscale-off')) {
                img.style.border = '3px solid #FFD700'; // Add border
            } else {
                img.style.border = 'none'; // Remove border
            }
        });
    });
});
