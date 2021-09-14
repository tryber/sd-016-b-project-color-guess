const user = {
  randomColor: [],
  starting: true,
  hit: false,
  points: 0,
}

const aswer = getOne('#answer');

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

function getAswer() {
  const possibleAnswers = ['Escolha uma cor', 'Acertou', 'Errou! Tente novamente'];

  if (user.starting) {
    aswer.innerText = possibleAnswers[0];
    user.starting = false;
  }
}

function startingGame() {
  generateRandomColors();
  coloringBalls();
  getAswer();
}

window.onload = () => {
  // startingGame();
}
