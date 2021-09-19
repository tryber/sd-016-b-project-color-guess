const rgbColor = document.getElementById('rgb-color');
const ball = document.getElementsByClassName('ball');
const answer = document.getElementById('answer');
const resetGame = document.getElementById('reset-game');
const scoreText = document.getElementById('score');
let color = '';
let score = '';

answer.innerText = 'Escolha uma cor';

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgb = `(${red}, ${green}, ${blue})`;
  return rgb;
}

function generateColors() {
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = `rgb${randomColor()}`;
  }
}

generateColors();

function getPositionColor() {
  const min = 0;
  const max = 6;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

color = ball[getPositionColor()].style.backgroundColor;
rgbColor.innerText = color;

if (sessionStorage === null) {
  score = sessionStorage.setItem('score', 0);
} else {
  score = parseInt(sessionStorage.getItem('score'));
}
scoreText.innerText = `Placar: ${score}`;

function selectedColor(event) {
  if (event.target.style.backgroundColor === color) {
    // console.log('Acertou');
    score += 3;
    sessionStorage.setItem('score', score);
    answer.innerText = 'Acertou!';
  } else {
    // console.log('Errou!');
    answer.innerText = 'Errou! Tente novamente!';
  }
}

for (let index = 0; index < ball.length; index += 1) {
  ball[index].addEventListener('click', selectedColor);
}

resetGame.addEventListener('click', () => {
  // sessionStorage.setItem('score', 0);
  // window.location.reload(true);
  answer.innerText = 'Escolha uma cor';
  generateColors();
});
