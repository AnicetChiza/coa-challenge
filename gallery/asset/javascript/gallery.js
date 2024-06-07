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
    const showImages = document.querySelectorAll('.show-image');
    const viewImages = document.querySelectorAll('.vieuw-img');

    viewImages.forEach(viewImage => {
        viewImage.addEventListener('click', function() {
            const imageSrc = this.src;
            showImages.forEach(showImage => {
                const imgElement = showImage.querySelector('img');
                imgElement.src = imageSrc;
                showImage.style.display = 'flex';
            });
        });
    });

    // Add event listener to close the show-image when the exit icon is clicked
    showImages.forEach(showImage => {
        const exitIcon = showImage.querySelector('.exit-icon');
        exitIcon.addEventListener('click', function() {
            showImage.style.display = 'none';
        });
    });
});