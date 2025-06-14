document.addEventListener('DOMContentLoaded', () => {
    // Находим кнопку "По тегам"
    const tagSortButton = document.querySelector('.sort-options .sort-button:last-child');
    // Находим контейнер с общими тегами
    const globalTagsContainer = document.querySelector('.filters .tags');

    // Обработчик кликов на кнопку "По тегам"
    tagSortButton.addEventListener('click', () => {
        // Переключаем видимость тегов
        if (globalTagsContainer.style.display === 'none' || globalTagsContainer.style.display === '') {
            globalTagsContainer.style.display = 'flex'; // Показываем теги
            tagSortButton.textContent = 'По тегам ▼'; // Меняем текст кнопки
        } else {
            globalTagsContainer.style.display = 'none'; // Скрываем теги
            tagSortButton.textContent = 'По тегам ▲'; // Меняем текст кнопки
        }
    });

    // По умолчанию скрываем теги
    globalTagsContainer.style.display = 'none';
});