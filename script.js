document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("2024-10-17"); // Дата начала отношений
    const timerElement = document.getElementById("loveTimer");

    function updateTimer() {
        const currentDate = new Date();
        const timeDiff = currentDate - startDate;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        function getWordForm(number, one, few, many) {
            if (number % 10 === 1 && number % 100 !== 11) return one;
            if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) return few;
            return many;
        }

        // Обновляем только цифры, без дерганий
        timerElement.innerHTML = `
            <span class="number">${days}</span> ${getWordForm(days, "день", "дня", "дней")}, 
            <span class="number">${hours}</span> ${getWordForm(hours, "час", "часа", "часов")}, 
            <span class="number">${minutes}</span> ${getWordForm(minutes, "минута", "минуты", "минут")}, 
            <span class="number">${seconds}</span> ${getWordForm(seconds, "секунда", "секунды", "секунд")}
            <span class="heart-icon">❤️‍🔥</span>`;

        timerElement.classList.add("pulse");
        setTimeout(() => timerElement.classList.remove("pulse"), 800);
    }

    setInterval(updateTimer, 1000);
    updateTimer();

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        document.body.appendChild(heart);

        const leftPosition = Math.random() * window.innerWidth;
        heart.style.left = `${leftPosition}px`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});
