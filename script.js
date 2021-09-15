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

  let colorToGuess = window.getComputedStyle(balls[ballIndex]).getPropertyValue('background-color');
  rgbColor.innerText = colorToGuess;

  answer.innerText = 'Escolha uma cor';

  return answer;
}

window.onload = setColors();

function guessColor(event) {
  let ballColor = window.getComputedStyle(event.target).getPropertyValue('background-color');

  if (rgbColor.innerText === ballColor) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

for (let index = 0; index < balls.length; index += 1) {
  balls[index].addEventListener('click', guessColor);
}

document.getElementById('reset-game').addEventListener('click', setColors)