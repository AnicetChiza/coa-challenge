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

// Vieuw images

document.addEventListener('DOMContentLoaded', () => {
    const bigImage = document.querySelectorAll('.show-image');
    const allImages = document.querySelectorAll('.vieuw-img');

    allImages.forEach(allImages => {
        allImages.addEventListener('click', function() {
            const imageSrc = this.src;
            bigImage.forEach(bigImage => {
                const imgElement = bigImage.querySelector('img');
                imgElement.src = imageSrc;
                bigImage.style.display = 'flex';
            });
        });
    });

    // Add event listener to close the show-image when the exit icon is clicked
    bigImage.forEach(bigImage => {
        const exitIcon = bigImage.querySelector('.exit-icon');
        exitIcon.addEventListener('click', function() {
            bigImage.style.display = 'none';
        });
    });
});