document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.best-sellers-grid'); // Контейнер для блоків
    const blocks = document.querySelectorAll('.best-sellers-grid div'); // Всі блоки
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    // Функція для переміщення блоків вправо по колу
    function moveRight() {
        container.insertBefore(blocks[blocks.length - 1], blocks[0]); // Переміщуємо останній блок на перше місце
    }

    // Функція для переміщення блоків вліво по колу
    function moveLeft() {
        container.appendChild(blocks[0]); // Переміщуємо перший блок в кінець
    }

    // Додаємо події на кнопки
    rightBtn.addEventListener('click', function () {
        moveRight();
    });

    leftBtn.addEventListener('click', function () {
        moveLeft();
    });
});