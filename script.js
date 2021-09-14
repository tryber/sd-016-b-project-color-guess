const user = {
  randomColor: [],
  rightColor: '',
  choseColor: '',
  starting: true,
  score: 0,
}

const aswer = getOne('#answer'),
      rightColor = getOne('#rgb-color');

function randomizeColors() {
  return Math.floor(Math.random() * 255);
}

function generateRandomColors() {
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
    ball.style.backgroundColor = user.randomColor[i];
  });
}

function selectRightColor() {
  const randomIndex = Math.floor(Math.random() * 6);

  user.rightColor = user.randomColor[randomIndex];
}

function getAswer() {
  const possibleAnswers = ['Escolha uma cor', 'Acertou', 'Errou! Tente novamente'];

  if (user.starting) {
    aswer.innerText = possibleAnswers[0];
    user.starting = false;
  }
}

function getRightColor() {
  rightColor.innerText = user.rightColor;
}

function saveChoseColor(event) {
  user.choseColor = event.target.style.backgroundColor;
}

function checkAnswer() {
  return (user.rightColor === user.choseColor) ? user.score += 3 : user.score -= 1;
}

function bubbleBalls(event) {
  saveChoseColor(event);
  checkAnswer();
}

function interactColors() {
  const balls = getAllBalls();
  addMultiplesListeners(balls, 'click', bubbleBalls);
}

function startingGame() {
  generateRandomColors();
  coloringBalls();
  selectRightColor();
  getAswer();
  getRightColor();
}

window.onload = () => {
  startingGame();
  interactColors();
}
