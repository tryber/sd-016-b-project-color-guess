const getBallsColor = document.getElementsByClassName('ball');
const getResult = document.getElementById('rgb-color');
const getButtonReset = document.getElementById('reset-game');
const getAnswer = document.getElementById('answer');
const getScore = document.getElementById('score');
const getResetPontuation = document.getElementById('reset-score');

// https://www.w3schools.com/js/js_random.asp
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < getBallsColor.length; i += 1) {
  getBallsColor[i].style.backgroundColor = randomColor();
}

function chooseColorAnswer() {
  getResult.innerText = getBallsColor[Math.floor(Math.random() * 5)].style.backgroundColor;
}

chooseColorAnswer();

function recoverScore() {
  if (localStorage.getItem('score') === null) {
    getScore.innerText = 0;
  } else {
    getScore.innerText = localStorage.getItem('score');
  }
  return getScore.innerText;
}

function score() {
  let scoreGame = Number(recoverScore());
  if (getAnswer.innerText === 'Acertou!') {
    scoreGame += 3;
  }
  getScore.innerText = scoreGame;
}
function saveScore() {
  localStorage.setItem('score', getScore.innerText);
}

function answer(event) {
  const colorSelected = event.target.style.backgroundColor;
  if (colorSelected === getResult.innerText) {
    getAnswer.innerText = 'Acertou!';
  } else {
    getAnswer.innerText = 'Errou! Tente novamente!';
  }
  score();
  saveScore();
}

for (let i = 0; i < getBallsColor.length; i += 1) {
  getBallsColor[i].addEventListener('click', answer);
}

// ref: https://stackoverflow.com/questions/55127650/location-reloadtrue-is-deprecated
function restartGame() {
  window.location.reload();
}

getButtonReset.addEventListener('click', restartGame);

function restartScore() {
  localStorage.setItem('score', 0);
}

getResetPontuation.addEventListener('click', restartScore);

window.onload = function onload() {
  recoverScore();
};
