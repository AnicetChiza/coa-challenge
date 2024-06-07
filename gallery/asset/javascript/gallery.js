// Next and previous buttons moving
document.addEventListener('DOMContentLoaded', () => {
    const previousButton = document.querySelector('.previous');
    const nextButton = document.querySelector('.next');

    if (previousButton) {
        previousButton.addEventListener('click', () => {
            window.location.href = 'gallery.html';
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            window.location.href = 'gallerytwo.html';
        });
    }
});