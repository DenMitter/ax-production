// Отримуємо елемент з класом main-image
const mainImage = document.querySelector('.main-image');

// Додаємо слухач події scroll для вікна
window.addEventListener('scroll', () => {
    // Отримуємо висоту, на яку прокручено сторінку
    const scrollTop = window.scrollY;

    // Визначаємо максимальну висоту для повної зміни прозорості
    const maxScroll = window.innerHeight;

    // Обчислюємо нову прозорість на основі прокрученої висоти
    const opacity = 1 - (scrollTop / maxScroll);

    // Встановлюємо прозорість з обмеженням між 0 і 1
    mainImage.style.opacity = Math.max(0, Math.min(1, opacity));
});