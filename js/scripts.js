// Отримуємо елемент з класом main-image
const mainImage = document.querySelector('.main-image');

// Функція для обробки скролінгу
function handleScroll() {
    const scrollTop = window.scrollY;
    const maxScroll = window.innerHeight;
    const opacity = 1 - (scrollTop / maxScroll);
    const windowHeight = window.innerHeight;

    // Зміна прозорості основного зображення
    mainImage.style.opacity = Math.max(0, Math.min(1, opacity));

    // Елемент ракети
    const rocket = document.querySelector('.blastoff');
    const rocketHeight = rocket.offsetHeight;

    // Змінюємо положення ракети в залежності від скролу
    const rocketTranslateY = Math.min(scrollTop * 1, windowHeight - rocketHeight);
    rocket.style.transform = `translate(-50%, ${-rocketTranslateY}px)`; // Рух ракети вгору

    // Паралакс для хмар і зміна їх прозорості
    const clouds = document.querySelectorAll('.clouds');
    clouds.forEach((cloud) => {
        const speed = parseFloat(cloud.getAttribute('data-rellax-speed'));
        const translateY = scrollTop * (speed / 32);
        cloud.style.transform = `translate3d(0, ${translateY}px, 0)`; // Рух хмар

        // Обчислюємо нову прозорість для хмар
        // const cloudOpacity = 1 - (scrollTop / maxScroll);
        // cloud.style.opacity = Math.max(0, Math.min(1, cloudOpacity));
    });

    // Масштабування plummage
    const plummage = document.querySelector('.plummage');
    const maxScale = 10; // Максимальний масштаб plummage
    const scale = 1 + (scrollTop / maxScroll) * (maxScale - 1);
    plummage.style.transform = `translateX(-50%) scale(${Math.min(scale, maxScale)})`;
}

// Оптимізація за допомогою requestAnimationFrame
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});
