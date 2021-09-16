const colorCircle = document.getElementsByClassName('ball');
const colorCircleContainer = document.getElementById('colors-option-container');
const resetGameButton = document.getElementById('reset-game');
const rgbQuestion = document.getElementById('rgb-color');
const answerParagraph = document.getElementById('answer');
const score = document.getElementById('score');
let contador = 0;

function resetText() {
  answerParagraph.innerHTML = 'Escolha uma cor';
}

function randomRGB() {
  const numero = Math.ceil(Math.random() * 255);
  return numero;
}

function generateColors() {
  for (let i = 0; i < colorCircle.length; i += 1) {
    const red = randomRGB();
    const green = randomRGB();
    const blue = randomRGB();
    colorCircle[i].style.backgroundColor = `rgb(${red},${green},${blue} )`;
  }
}

function generateAnswer() {
  const rgbArray = [];
  for (let i = 0; i < colorCircle.length; i += 1) {
    const rgb = window.getComputedStyle(colorCircle[i]).backgroundColor;
    const rgbSlipted = rgb.replace(/[^\d,]/g, '').split(',');
    rgbArray.push(rgbSlipted);
  }
  let answer = [];
  answer = rgbArray[Math.ceil(Math.random() * rgbArray.length - 1)];
  const r = answer[0];
  const g = answer[1];
  const b = answer[2];
  rgbQuestion.innerHTML = `(${r}, ${g}, ${b})`;
}

function compareteAnswer(event) {
  const eventTarget = event.target;
  const question = rgbQuestion.innerHTML;
  const rgb = window.getComputedStyle(eventTarget).backgroundColor;
  const rgbSlipted = rgb.replace(/[^\d,]/g, '').split(',');
  const rgbCircle = `(${rgbSlipted[0]}, ${rgbSlipted[1]}, ${rgbSlipted[2]})`;
  if (rgbCircle === question) {
    contador += 3;
    answerParagraph.innerHTML = 'Acertou!';
    score.innerText = `Placar: ${contador}`;
    generateColors();
    generateAnswer();
  } else {
    answerParagraph.innerHTML = 'Errou! Tente novamente!!';
    generateColors();
    generateAnswer();
  }
}

function resetGame() {
  resetText();
  generateColors();
  generateAnswer();
}

window.onload = () => {
  generateColors();
  generateAnswer();
  resetGameButton.addEventListener('click', resetGame);
  colorCircleContainer.addEventListener('click', compareteAnswer);
};
