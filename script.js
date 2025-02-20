document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("2024-10-17");
    const durationElement = document.getElementById("loveDuration");

    function getWordForm(number, one, few, many) {
        if (number % 10 === 1 && number % 100 !== 11) return one;
        if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) return few;
        return many;
    }

    function calculateDuration() {
        const currentDate = new Date();
        const timeDiff = currentDate - startDate;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        durationElement.innerHTML = `${days} ${getWordForm(days, "день", "дня", "дней")} и 
            ${hours} ${getWordForm(hours, "час", "часа", "часов")} <span class="heart-icon">❤️</span>`;
    }

    calculateDuration();

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        document.body.appendChild(heart);

        const leftPosition = Math.random() * window.innerWidth * 0.9; // Ограничил диапазон
        heart.style.left = `${leftPosition}px`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 700);
});
