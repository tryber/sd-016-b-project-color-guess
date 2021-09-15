const gameColor = document.getElementById('rgb-color');
const reset = document.getElementById('reset-game');
const text = document.querySelector('p');
const colors = document.getElementsByClassName('ball');
let points = 0;

function showPoints() {
  const getPoints = document.getElementById('score');
  getPoints.innerHTML = `Pontos : ${points}`;
}
showPoints();

function randomColor() {
  return Math.round(Math.random() * 255);
}

function rgb() {
  const r = randomColor();
  const g = randomColor();
  const b = randomColor();
  return `rgb(${r}, ${g}, ${b})`;
}

function rgbColor() {
  gameColor.innerText = rgb();
}
rgbColor();

function getRandomIntInclusive() {
  const array = document.getElementsByClassName('ball');
  const min = Math.ceil(0);
  const max = Math.floor(array.length - 1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive();

function paintColors() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = rgb();
  }
  const mainColor = document.getElementById('rgb-color').innerText;
  colors[getRandomIntInclusive()].style.backgroundColor = mainColor;
}

paintColors();

function checkAnswer() {
  if (document.getElementById('rgb-color').innerText
  === document.getElementById('selected').style.backgroundColor) {
    text.innerText = ' Acertou!';
    points += 3;
  } else {
    text.innerText = 'Errou! Tente novamente!';
  }
}

function selectColor(event) {
  if (document.getElementById('selected') === null) {
    event.target.id = 'selected';
    checkAnswer();
    showPoints();
  }
}

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', selectColor);
}

function resetAnswer() {
  if (document.querySelector('#selected') !== null) {
    document.querySelector('#selected').removeAttribute('id');
  }
}

function resetGame() {
  rgbColor();
  paintColors();
  resetAnswer();
  text.innerText = 'Escolha uma cor';
}
reset.addEventListener('click', resetGame);
