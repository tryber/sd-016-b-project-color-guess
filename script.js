const colorBalls = document.querySelectorAll('.ball');
const colorGuess = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const reset = document.querySelector('#reset-game');

function generateColorBallRandom() {
  for (let index = 0; index < colorBalls.length; index += 1) {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);
    colorBalls[index].style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
  }
}

generateColorBallRandom();

function generateGuessColor() {
  const randomCircle = Math.floor(Math.random() * 6);
  colorGuess.innerHTML = colorBalls[randomCircle].style.backgroundColor.substr(3);
}

generateGuessColor();
// Substr - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
// Foi utilizado para retirar o rgb do texto e deixar apenas os números.

function changeAnswer(event) {
  if (event.target.style.backgroundColor.substr(3) === colorGuess.innerHTML) {
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

// Tentei utilizar ternary operator, porém o linter reclama no número de caracteres na linha.

document.addEventListener('click', (event) => {
  for (let index = 0; index < colorBalls.length; index += 1) {
    if (event.target === colorBalls[index]) {
      changeAnswer(event);
    }
  }
});

function resetGame() {
  generateColorBallRandom();
  generateGuessColor();
  answer.innerHTML = 'Escolha uma cor';
}

reset.addEventListener('click', resetGame);
