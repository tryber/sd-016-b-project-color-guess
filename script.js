const title = document.querySelector('#title');
const rgbContainer = document.querySelector('#rgb-container');
const balls = document.querySelectorAll('.ball');
const answerText = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game');
let winnerColor = document.querySelector('#rgb-color')
const ballContainer = document.querySelector('#ball-container');
const gameFeedBack = document.querySelector('#answer')
const scoreBoardContainer = document.querySelector('#scoreboard-container');
const scoreBoard = document.querySelector('#score')

scoreBoard.html = 0;

function colorGenerator () {
    let randomColor1 = Math.floor(Math.random() * 255) + 1;
    let randomColor2 = Math.floor(Math.random() * 255) + 1;
    let randomColor3 = Math.floor(Math.random() * 255) + 1;

    let randomColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;

    return randomColor;
}

function textColorGenerator () {
    let randomColor1 = Math.floor(Math.random() * 255) + 1;
    let randomColor2 = Math.floor(Math.random() * 255) + 1;
    let randomColor3 = Math.floor(Math.random() * 255) + 1;

    let randomRGBText = `(${randomColor1}, ${randomColor2}, ${randomColor3})`;

    return randomRGBText;
}

function setWinnerText () {
    winnerColor.innerHTML = textColorGenerator();
}
setWinnerText();

function setColors() {
    let winner = Math.floor(Math.random() * 6);
    for (let i = 0; i < 6; i++) {
        if (i === winner) {
            ballContainer.children[i].style.backgroundColor = `rgb${winnerColor.innerText}`
            ballContainer.children[i].classList.add('winner')
        } else {
            ballContainer.children[i].style.backgroundColor = colorGenerator()
        }
    }
}
setColors();

function selectBall () {
    gameFeedBack.innerText = 'Escolha uma cor'
    for(let i = 0; i < balls.length; i+=1) {
        balls[i].addEventListener('click', function(event){
            if (event.target.classList.contains('winner')) {
                gameFeedBack.innerText = 'Acertou!';
                
            } else if (event.target.className !== 'winner') {
                gameFeedBack.innerText = 'Errou! Tente novamente!'
            }
        })
    }
}
selectBall();

function resetGame() {
    window.location.reload();
}
resetButton.addEventListener('click', resetGame);

function saveStorage () {
    let savedItem = scoreBoard.innerHTML;
    sessionStorage.setItem('score', savedItem)
}

window.onload = function() {
    scoreBoard.innerHTML = sessionStorage.getItem('score');
}
