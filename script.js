const balls = document.getElementsByClassName('ball');
const colorToGuess = document.getElementById('rgb-color');
const answerText = document.getElementById('answer');

function randomColor() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `rgb(${r}, ${g}, ${b})`;
}

function addBallsColor() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomColor();
  }
}
addBallsColor();

function sortColor() {
  const randomIndex = parseInt(Math.random() * 6, 10);
  const getStyle = window.getComputedStyle(balls[randomIndex]).getPropertyValue('background-color');
  colorToGuess.innerText = getStyle;
}
sortColor();

function checkCorrectBall(e) {
  const bgColor = 'background-color';
  const checkClickedElement = window.getComputedStyle(e.target).getPropertyValue(bgColor);
  const checkRightColor = colorToGuess.innerText;
  if (checkClickedElement === checkRightColor) {
    answerText.innerText = 'Acertou!';
  } else if (checkClickedElement !== checkRightColor) {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

function addEventToBalls() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', checkCorrectBall);
  }
}
addEventToBalls();

/* Referências:
Gerar cor aleatória:
https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
*/
