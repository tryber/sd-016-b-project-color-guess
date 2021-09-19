let balls = document.getElementsByClassName('ball');
let rgbColor = document.getElementById('rgb-color');
let ballIndex = Math.round(Math.random() * 5);
let answer = document.getElementById('answer');

function setColors() {
  for (let index = 0; index < balls.length; index += 1) {
    let num1 = Math.round(Math.random() * 255);
    let num2 = Math.round(Math.random() * 255);
    let num3 = Math.round(Math.random() * 255);

    balls[index].style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
  }

  let random = Math.round(Math.random() * 5);
  let colorToGuess = window.getComputedStyle(balls[random]).getPropertyValue('background-color');
  rgbColor.innerText = colorToGuess;

  answer.innerText = 'Escolha uma cor';

  return answer;
}

window.onload = setColors();

function guessColor(event) {
  let ballColor = window.getComputedStyle(event.target).getPropertyValue('background-color');
  let score = document.getElementById('score');
  let currentScore = parseInt(score.innerText);

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
