document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const container = carousel.querySelector('.carousel-container');
    const items = carousel.querySelectorAll('.carousel-img');
    const indicators = carousel.querySelectorAll('.indicators');
    const prevButton = carousel.querySelector('.prevs');
    const nextButton = carousel.querySelector('.Nexts');

    let currentIndex = 0;
    let itemsPerSlide = 2.5; // Default for desktop

    function updateItemsPerSlide() {
        if (window.innerWidth <= 768) {
            itemsPerSlide = 1; // Show only one image on mobile
        } else {
            itemsPerSlide = 2.5; // Show 2.5 images on desktop
        }
    }

    function updateCarousel() {
        updateItemsPerSlide();
        const totalSlides = items.length - Math.floor(itemsPerSlide) + 1;
        const offset = currentIndex * (100 / itemsPerSlide);
        container.style.transform = `translateX(calc(-${offset}% - ${currentIndex * (window.innerWidth <= 768 ? 0 : 1)}rem))`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        updateItemsPerSlide();
        const totalSlides = items.length - Math.floor(itemsPerSlide) + 1;
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        updateItemsPerSlide();
        const totalSlides = items.length - Math.floor(itemsPerSlide) + 1;
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Initial setup
    updateCarousel();

    // Update layout on window resize
    window.addEventListener('resize', updateCarousel);
});

document.addEventListener('DOMContentLoaded', function() {
    const blogSections = document.querySelector('.blog-sections');
    const links = blogSections.querySelectorAll('div[class$="-link"]');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            links.forEach(l => {
                l.querySelector('.all').style.display = 'block';
                l.querySelector('.all-clicked').style.display = 'none';
            });
            
            // Add active class to clicked link
            this.querySelector('.all').style.display = 'none';
            this.querySelector('.all-clicked').style.display = 'block';
        });
    });

    // Set "New" as active by default
    const newLink = document.querySelector('.New-link');
    if (newLink) {
        newLink.querySelector('.all').style.display = 'none';
        newLink.querySelector('.all-clicked').style.display = 'block';
    }
});