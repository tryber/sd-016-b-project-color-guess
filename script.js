const colorCircle = document.getElementsByClassName('ball');
const colorCircleContainer = document.getElementById('colors-option-container');
const resetGameButton = document.getElementById('reset-game');
const rgbQuestion = document.getElementById('rgb-color');
const answerParagraph = document.getElementById('answer');
const score = document.getElementById('score');
let contador = 0

resetGameButton.addEventListener('click', resetGame);
colorCircleContainer.addEventListener('click', compareteAnswer);
answerParagraph.addEventListener('change', resetGame )


function resetText() {
  answerParagraph.innerHTML = 'Escolha uma cor'
}

function randomRGB() {
  let numero = Math.ceil(Math.random() * 255);
  return numero;
}

function generateColors() {
  for (let i = 0; i < colorCircle.length; i += 1) {
    let red = randomRGB();
    let green = randomRGB();
    let blue = randomRGB();
    colorCircle[i].style.backgroundColor = `rgb(${red},${green},${blue} )`;
  }
}

function generateAnswer() {
  let = rgbArray = [];
  for (let i = 0; i < colorCircle.length; i += 1) {
    let rgb = window.getComputedStyle(colorCircle[i]).backgroundColor;
    let rgbSlipted = rgb.replace(/[^\d,]/g, '').split(',');
    rgbArray.push(rgbSlipted);
  }
  let answer = [];
  answer = rgbArray[Math.ceil(Math.random()* rgbArray.length - 1)];;
  let r = answer[0];
  let g = answer[1];
  let b = answer[2];
  rgbQuestion.innerHTML = `(${r}, ${g}, ${b})`;
}

function compareteAnswer(event) {
  const eventTarget = event.target;
  let question = rgbQuestion.innerHTML;
  let rgb = window.getComputedStyle(eventTarget).backgroundColor;
  let rgbSlipted = rgb.replace(/[^\d,]/g, '').split(',');
  let rgbCircle = `(${rgbSlipted[0]}, ${rgbSlipted[1]}, ${rgbSlipted[2]})`;
  if(rgbCircle === question) {
    contador += 3
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
}
