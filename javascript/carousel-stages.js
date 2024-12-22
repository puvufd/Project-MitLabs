document.addEventListener("DOMContentLoaded", function () {
    const contents = document.querySelectorAll('.contents-3');
    const totalGroups = 5; 
    const prevButton = document.getElementById('prev-content-3');
    const nextButton = document.getElementById('next-content-3');
    const counterDots = document.querySelectorAll('.counter-content-3 span');

    let currentIndex = 0;

    function updateCarousel() {
        contents.forEach(content => content.classList.remove('active'));
        counterDots.forEach(dot => dot.classList.remove('active'));

        switch (currentIndex) {
            case 0:
                contents[0].classList.add('active');
                contents[1].classList.add('active');
                break;
            case 1:
                contents[2].classList.add('active');
                break;
            case 2:
                contents[3].classList.add('active');
                contents[4].classList.add('active');
                break;
            case 3:
                contents[5].classList.add('active');
                break;
            case 4:
                contents[6].classList.add('active');
                break;
        }

        counterDots[currentIndex].classList.add('active');

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === totalGroups - 1;
    }

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentIndex < totalGroups - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    updateCarousel();
});