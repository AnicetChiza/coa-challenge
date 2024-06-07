document.addEventListener('DOMContentLoaded', () => {
    const previousButtons = document.querySelectorAll('.previous');
    const nextButtons = document.querySelectorAll('.next');

    if (previousButtons.length > 0) {
        previousButtons.forEach(button => {
            button.addEventListener('click', () => {
                window.location.href = 'gallery.html';
            });
        });
    }

    if (nextButtons.length > 0) {
        nextButtons.forEach(button => {
            button.addEventListener('click', () => {
                window.location.href = 'gallerytwo.html';
            });
        });
    }
});