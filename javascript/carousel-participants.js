document.addEventListener("DOMContentLoaded", function () {
    const participants = document.querySelectorAll('.participants');
    const totalItems = participants.length;
    const counterElement = document.querySelector('.counter span');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;
    let itemsPerView = 3;

    function updateCarousel() {
        if (window.innerWidth <= 768) {
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

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex -= itemsPerView;
            if (currentIndex < 0) currentIndex = 0; // Защита от выхода за границы
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentIndex + itemsPerView < totalItems) {
            currentIndex += itemsPerView;
            updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel();
});