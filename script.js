const balls = document.getElementsByClassName('ball');
const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');

function setColors() {
  for (let index = 0; index < balls.length; index += 1) {
    const num1 = Math.round(Math.random() * 255);
    const num2 = Math.round(Math.random() * 255);
    const num3 = Math.round(Math.random() * 255);

    balls[index].style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
  }

  const random = Math.round(Math.random() * 5);
  const colorToGuess = window.getComputedStyle(balls[random]).getPropertyValue('background-color');
  rgbColor.innerText = colorToGuess;

  answer.innerText = 'Escolha uma cor';

  return answer;
}

window.onload = setColors();

function guessColor(event) {
  const ballColor = window.getComputedStyle(event.target).getPropertyValue('background-color');
  const score = document.getElementById('score');
  const currentScore = parseInt(score.innerText, 10);

  if (rgbColor.innerText === ballColor) {
    answer.innerText = 'Acertou!';
    score.innerText = currentScore + 3;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    if (currentScore !== 0) {
      score.innerText = currentScore - 1;
    }
  }
}

for (let index = 0; index < balls.length; index += 1) {
  balls[index].addEventListener('click', guessColor);
}

document.getElementById('reset-game').addEventListener('click', setColors);
