document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("2024-10-17T21:51:00+05:00"); // Учитываем часовой пояс UTC+5
    const durationElement = document.getElementById("loveDuration");

    function getWordForm(number, one, few, many) {
        if (number % 10 === 1 && number % 100 !== 11) return one;
        if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) return few;
        return many;
    }

    function calculateDuration() {
        const currentDate = new Date(); // Локальное время браузера
        const timeDiff = currentDate - startDate;
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        durationElement.innerHTML = `${days} ${getWordForm(days, "день", "дня", "дней")}, 
            ${hours} ${getWordForm(hours, "час", "часа", "часов")} и 
            ${minutes} ${getWordForm(minutes, "минута", "минуты", "минут")} <span class="heart-icon">❤️‍🔥</span>`;
    }

    calculateDuration();
    setInterval(calculateDuration, 60000); // Обновляем каждую минуту

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        document.body.appendChild(heart);

        const leftPosition = Math.random() * window.innerWidth * 0.9;
        heart.style.left = `${leftPosition}px`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 700);
});
