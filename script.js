const dino = document.querySelector('.dino');
const background = document.querySelector('.fundo');
let isJumping = false

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping){
            jump();
        }
    }
}

function jump() {
    let position = 0;

    isJumping = true

    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval);
            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0){
                clearInterval(downInterval);
                isJumping = false
                } else {
                position -= 20;
                dino.style.bottom = position + 'px';
            }
            }, 20);
        } else {
        //subindo :)
        position += 20;

        dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cacPos = 1000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);
}
createCactus();
document.addEventListener('keyup', handleKeyUp);