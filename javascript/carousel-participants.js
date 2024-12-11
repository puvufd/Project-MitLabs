document.addEventListener("DOMContentLoaded", function () {
    const participants = document.querySelectorAll('.participants');
    const totalItems = participants.length;
    const counterElement = document.querySelector('.counter span');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;
    let itemsPerView = 3;
    let autoSlideInterval;

    function updateCarousel() {
        if (window.innerWidth <= 1284.36) {
            itemsPerView = 1;
        } else {
            itemsPerView = 3;
        }

        participants.forEach((participant, index) => {
            participant.classList.remove('active');
            if (index >= currentIndex && index < currentIndex + itemsPerView) {
                participant.classList.add('active');
            }
        });

        const start = currentIndex + 1;
        const end = Math.min(currentIndex + itemsPerView, totalItems);
        counterElement.textContent = `${end}/${totalItems}`;

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex + itemsPerView >= totalItems;
    }

    function nextSlide() {
        if (currentIndex + itemsPerView < totalItems) {
            currentIndex += itemsPerView;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex -= itemsPerView;
            if (currentIndex < 0) currentIndex = 0; 
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function () {
        nextSlide();
    });

    window.addEventListener('resize', updateCarousel);

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    startAutoSlide();

    document.querySelector('.carousel-participants').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.carousel-participants').addEventListener('mouseleave', startAutoSlide);

    updateCarousel();
});
