// Функция для плавного перехода между страницами
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a'); // Все ссылки на сайте

    links.forEach(link => {
        if (link.href && !link.href.startsWith('mailto:')) { // Исключаем почтовые ссылки
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Отменяем стандартное поведение ссылки
                const targetUrl = link.href; // Получаем URL целевой страницы

                // Добавляем класс для анимации исчезновения
                document.body.classList.add('fade-out');

                // Ждём завершения анимации и переходим на новую страницу
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 500); // 500ms = длительность анимации
            });
        }
    });
});