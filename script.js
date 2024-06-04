document.addEventListener('DOMContentLoaded', () => {
    let tokenCountElement = document.getElementById('tokenCount');
    let tokenCount = 0;
    const successSound = document.getElementById('successSound');
    let playCount = 0;
    const maxPlays = 100;

    successSound.addEventListener('ended', () => {
        playCount++;
        if (playCount < maxPlays) {
            successSound.play();
        }
    });

    document.getElementById('mainButton').addEventListener('click', () => {
        tokenCount += 1;
        tokenCountElement.textContent = tokenCount;

        if (tokenCount % 100 === 0) {
            tokenCount += 1000;
            tokenCountElement.textContent = tokenCount;
            displayBonusMessage();
        }

        if (tokenCount === 10) {
            playCount = 0;
            successSound.play();
        }
    });

    function displayBonusMessage() {
        const bonusMessage = document.createElement('div');
        bonusMessage.classList.add('bonus-message');
        bonusMessage.textContent = 'Bonus! +1000 Daggers';
        document.body.appendChild(bonusMessage);

        setTimeout(() => {
            bonusMessage.style.display = 'none';
            document.body.removeChild(bonusMessage);
        }, 3000);
    }

    function updateTimer() {
        const timerElement = document.querySelector('.energy-timer');
        let timeLeft = 79255; // Placeholder seconds left
        setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval();
                return;
            }
            timeLeft--;
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }

    updateTimer();
});



document.addEventListener('DOMContentLoaded', () => {
    let tokenCountElement = document.getElementById('tokenCount');
    let tokenCount = 0;

    document.getElementById('mainButton').addEventListener('click', () => {
        tokenCount += 1;
        tokenCountElement.textContent = tokenCount;

        if (tokenCount % 100 === 0) {
            tokenCount += 1000;
            tokenCountElement.textContent = tokenCount;
            displayBonusMessage();
        }
    });

    function displayBonusMessage() {
        const bonusMessage = document.createElement('div');
        bonusMessage.classList.add('bonus-message');
        bonusMessage.textContent = 'Bonus! +1000 Daggers';
        document.body.appendChild(bonusMessage);

        setTimeout(() => {
            bonusMessage.style.display = 'none';
            document.body.removeChild(bonusMessage);
        }, 3000);
    }

    function updateTimer() {
        const timerElement = document.querySelector('.energy-timer');
        let timeLeft = 79255; // Placeholder seconds left
        setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval();
                return;
            }
            timeLeft--;
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }

    updateTimer();
});
