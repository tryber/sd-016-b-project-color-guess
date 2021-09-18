const colorsContainer = document.getElementById('colors-container');
const rgb = document.querySelector('#rgb-color');
function createBall() {
  for (let index = 0; index < 6; index += 1) {
    const colors = document.createElement('div');
    colors.className = 'ball';
    colorsContainer.appendChild(colors);
  }
}
createBall();

function creatColors() {
  const r = parseInt(Math.random() * 256, 10);
  const g = parseInt(Math.random() * 256, 10);
  const b = parseInt(Math.random() * 256, 10);
  return `rgb(${r},${g},${b})`;
}
const ball = document.querySelectorAll('.ball');
function newColors() {
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = creatColors();
  }
}
newColors();

function rgbText() {
  rgb.innerText = ball[parseInt(Math.random() * 5)].style.backgroundColor;
}
rgbText();

colorsContainer.addEventListener('click', (event) => {
  const ballColors = document.getElementsByClassName('ball');
  for (let index = 0; index < ballColors.length; index += 1) {
    ballColors[index].classList.remove('answer');
  }
  event.target.classList.add('answer');
});

const result = document.getElementById('answer');
function resultGame(event) {
  if (event.target.style.backgroundColor === rgb.innerText) {
    result.innerText = 'Acertou!';
  } else {
    result.innerText = 'Errou! Tente novamente!';
  }
}
colorsContainer.addEventListener('click', resultGame);

const buttonReset = document.getElementById('reset-game');

buttonReset.addEventListener('click', (event) => {
  const evento = event.target;
  const resetColor = newColors();
  const resetText = rgbText();
  evento.target = resetColor;
  evento.target = resetText;
  result.innerText = 'Escolha uma cor';
});
let count = 0;
function score(event) {
  const point = document.getElementById('score');
  if (event.target.style.backgroundColor === rgb.innerText) {
    count += 3;
  } else if (result.innerText === 'Errou! Tente novamente!' && count > 0) {
    count -= 1;
  }
  console.log(count);
  point.innerText = count;
}

colorsContainer.addEventListener('click', score);
