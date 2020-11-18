const dino = document.querySelector('.dino');
const background = document.querySelector('.fundo');
let isJumping = false
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping){
            jump();
        }
    }
}

function jump() {
    

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
    let randomTime = Math.random() * 6000;
    console.log(randomTime);

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        

        if (cacPos < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus)
        }
        else if (cacPos > 0 && cacPos < 60 && position < 60){  // GAME OVER AQUI
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="GameOver">Fim de Jogo</h1>';
        }
        else {                                   // movimentando para esquerda
            cacPos -= 10
            cactus.style.left = cacPos + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);

}

createCactus();
document.addEventListener('keyup', handleKeyUp);