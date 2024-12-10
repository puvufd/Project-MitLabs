document.addEventListener("DOMContentLoaded", function () {
    const contents = document.querySelectorAll('.contents-3');
    const totalGroups = 5; // 5 групп: [1,2], [3], [4,5], [6], [7]
    const prevButton = document.getElementById('prev-content-3');
    const nextButton = document.getElementById('next-content-3');
    const counterDots = document.querySelectorAll('.counter-content-3 svg');

    let currentIndex = 0;

    function updateCarousel() {
        // Скрываем всех участников и сбрасываем счётчик
        contents.forEach(content => content.classList.remove('active'));
        counterDots.forEach(dot => dot.classList.remove('active'));

        // Определяем текущую группу и показываем соответствующие элементы
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

        // Обновление состояния счётчика
        counterDots[currentIndex].classList.add('active');

        // Обновление состояния кнопок
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

    updateCarousel(); // Инициализация карусели
});