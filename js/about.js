const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transition = 'transform 0.3s ease'; // плавный переход
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

    // Обновляем активный индикатор
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
}

function updateIndex(newIndex) {
    if (newIndex < 0) {
        newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
        newIndex = 0;
    }
    return newIndex;
}

// Автоматический переход
let autoSlideInterval = setInterval(() => {
    const currentSlide = track.querySelector('.current-slide');
    currentIndex = updateIndex(currentIndex + 1);
    const nextSlide = slides[currentIndex];
    moveToSlide(track, currentSlide, nextSlide);
}, 3000);

// Сброс интервала при ручном переключении
function resetInterval() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        const currentSlide = track.querySelector('.current-slide');
        currentIndex = updateIndex(currentIndex + 1);
        const nextSlide = slides[currentIndex];
        moveToSlide(track, currentSlide, nextSlide);
    }, 3000);
}

// Обработка кликов по индикаторам
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        const targetSlide = slides[index];
        moveToSlide(track, currentSlide, targetSlide);
        currentIndex = index;
        resetInterval();
    });
});

// --- Добавляем drag прокрутку мышкой ---

let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

track.addEventListener('mousedown', dragStart);
track.addEventListener('mousemove', dragMove);
track.addEventListener('mouseup', dragEnd);
track.addEventListener('mouseleave', dragEnd);

function dragStart(event) {
    isDragging = true;
    startX = event.pageX;
    prevTranslate = getTranslateX(track);
    track.style.transition = 'none'; // отключаем плавный переход на время drag
    clearInterval(autoSlideInterval); // останавливаем автопрокрутку
    event.preventDefault();
}

function dragMove(event) {
    if (!isDragging) return;
    const currentX = event.pageX;
    const deltaX = currentX - startX;
    currentTranslate = prevTranslate + deltaX;
    track.style.transform = `translateX(${currentTranslate}px)`;
}

function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = 'transform 0.3s ease'; // возвращаем плавность

    // Определяем на какой слайд переключить
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -slideWidth / 4) {
        // свайп влево — следующий слайд
        currentIndex = updateIndex(currentIndex + 1);
    } else if (movedBy > slideWidth / 4) {
        // свайп вправо — предыдущий слайд
        currentIndex = updateIndex(currentIndex - 1);
    }
    const currentSlide = track.querySelector('.current-slide');
    const targetSlide = slides[currentIndex];
    moveToSlide(track, currentSlide, targetSlide);

    resetInterval(); // возобновляем автопрокрутку
}

// Функция для получения текущего значения translateX у track
function getTranslateX(element) {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41; // значение translateX
}