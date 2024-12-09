document.addEventListener("DOMContentLoaded", function () {
    const contents = document.querySelectorAll('.contents-3');
    const totalItems = contents.length;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const counterDots = document.querySelectorAll('.counter-content-3 svg');

    let currentIndex = 0;

    function updateCarousel() {
        // Скрываем всех участников и сбрасываем счётчик
        contents.forEach((content, index) => {
            content.classList.remove('active');
            counterDots[index].classList.remove('counter-content-3-active');
            counterDots[index].classList.add('counter-content-3-non-active');
        });

        // Показываем один или два элемента в зависимости от индекса
        if (currentIndex === 0 || currentIndex === 1) {
            contents[0].classList.add('active');
            contents[1].classList.add('active');
            counterDots[0].classList.add('counter-content-3-active');
            counterDots[1].classList.add('counter-content-3-active');
        } else if (currentIndex === 2) {
            contents[2].classList.add('active');
            counterDots[2].classList.add('counter-content-3-active');
        } else if (currentIndex === 3 || currentIndex === 4) {
            contents[3].classList.add('active');
            contents[4].classList.add('active');
            counterDots[3].classList.add('counter-content-3-active');
            counterDots[4].classList.add('counter-content-3-active');
        } else if (currentIndex === 5) {
            contents[5].classList.add('active');
            counterDots[5].classList.add('counter-content-3-active');
        } else if (currentIndex === 6) {
            contents[6].classList.add('active');
            counterDots[6].classList.add('counter-content-3-active');
        }

        // Обновление состояния кнопок
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= 6; // 6 - последний возможный индекс
    }

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentIndex < 6) {
            currentIndex++;
            updateCarousel();
        }
    });

    updateCarousel(); // Инициализация карусели
});