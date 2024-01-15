// -------------------------dino jump---------------------------------------
const dino = document.querySelector(".dino");

function jump() {
    dino.style.top = '265px'; 

    setTimeout(() => { dino.style.top = '400px';}, 800);
}


document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowUp') {
        jump();
    }
});

// -------------------------cactus moving---------------------------------------

const cactus = document.querySelector(".cactus");

function moveCactus() {
    cactus.classList.add("moveAnimation"); 
}

moveCactus();

// -------------------------game over---------------------------------------

function checkTouch() {
        const dinoRect = dino.getBoundingClientRect();
        const cactusRect = cactus.getBoundingClientRect();

        if (
            dinoRect.left < cactusRect.right &&
            dinoRect.right > cactusRect.left &&
            dinoRect.top < cactusRect.bottom &&
            dinoRect.bottom > cactusRect.top
        ) {

            const response = confirm('Game Over! Do you want to play again?');
            if (response) {
                moveCactus();
            } else {
                alert('Thanks for playing!');
            }
    }
};
    
setInterval(checkTouch, 20);