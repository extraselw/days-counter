document.addEventListener("DOMContentLoaded", function() {
    // Дата начала отношений (17 октября 2024)
    let startDate = new Date(Date.UTC(2024, 9, 17)); // Месяцы начинаются с 0 (Октябрь — 9)

    function updateDaysPassed() {
        let currentDate = new Date();
        let timeDiff = currentDate.getTime() - startDate.getTime();
        let daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        function getDayWord(n) {
            if (n % 10 === 1 && n % 100 !== 11) return "день";
            if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return "дня";
            return "дней";
        }

        document.getElementById("daysPassed").innerText = 
            `Мы любим друг друга уже ${daysPassed} ${getDayWord(daysPassed)}! ❤️`;
    }

    updateDaysPassed(); // Вызываем функцию сразу
    setInterval(updateDaysPassed, 1000 * 60 * 60); // Обновляем каждый час
});