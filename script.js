document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    let currentIndex = 0;

    // Create indicators
    images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => showImage(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    function showImage(index) {
        carousel.style.transform = `translateX(-${index * (100 / 3)}%)`;
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function showNext() {
        showImage((currentIndex + 1) % (images.length - 2));
    }

    function showPrev() {
        showImage((currentIndex - 1 + (images.length - 2)) % (images.length - 2));
    }

    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

    // Show initial image
    showImage(0);
});