function getOne(element) {
  return document.querySelector(element);
}

function getAll(element) {
  return document.querySelectorAll(element);
}

function addMultiplesListeners(arr, eventName, listener) {
  arr.forEach((element) => {
    element.addEventListener(eventName, listener, false);
  });
}

const user = {
  randomColor: [],
  rightColor: '',
  choseColor: '',
  starting: true,
  score: 0,
};

const aswer = getOne('#answer');
const rightColor = getOne('#rgb-color');
const score = getOne('#score');
const reset = getOne('#reset-game');

function randomizeColors() {
  return Math.floor(Math.random() * 255);
}

function generateRandomColors() {
  user.randomColor.splice(0, user.randomColor.length);
  for (let i = 0; i < 6; i += 1) {
    user.randomColor.push(`rgb(${randomizeColors()}, ${randomizeColors()}, ${randomizeColors()})`);
  }
}

function getAllBalls() {
  return getAll('.ball');
}

function coloringBalls() {
  const balls = getAllBalls();

  balls.forEach((ball, i) => {
    const elementBall = ball.style;
    elementBall.backgroundColor = user.randomColor[i];
  });
}

function selectRightColor() {
  const randomIndex = Math.floor(Math.random() * 6);

  user.rightColor = user.randomColor[randomIndex];
}

function getAswer() {
  const startAnswer = 'Escolha uma cor';
  const rightAnswer = 'Acertou!';
  const wrongAnswer = 'Errou! Tente novamente';

  if (user.starting) {
    aswer.innerText = startAnswer;
    user.starting = false;
  } else if (user.rightColor === user.choseColor) {
    aswer.innerText = rightAnswer;
  } else {
    aswer.innerText = wrongAnswer;
  }
}

function getRightColor() {
  rightColor.innerText = user.rightColor;
}

function saveChoseColor(event) {
  user.choseColor = event.target.style.backgroundColor;
}

function checkAnswer() {
  if (user.rightColor === user.choseColor) {
    user.score += 3;
  } else if (user.score > 0) {
    user.score -= 1;
  }
}

function setScore() {
  if (user.score < 0) {
    score.innerText = 0;
  } else {
    score.innerText = user.score;
  }
}

function bubbleBalls(event) {
  saveChoseColor(event);
  checkAnswer();
  setScore();
  getAswer();
}

function interactColors() {
  const balls = getAllBalls();
  addMultiplesListeners(balls, 'click', bubbleBalls);
}

function resetGame() {
  user.starting = true;
  generateRandomColors();
  coloringBalls();
  selectRightColor();
  getAswer();
  getRightColor();
}

function buttonReset() {
  reset.addEventListener('click', resetGame);
}

window.onload = () => {
  generateRandomColors();
  coloringBalls();
  selectRightColor();
  getAswer();
  getRightColor();
  interactColors();
  buttonReset();
};
