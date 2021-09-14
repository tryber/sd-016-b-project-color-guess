let rightColorRGB = '';
const colors = [];

function convertToHex(num) {
  const hex1 = parseInt(Math.trunc(num / 16), 10).toString(16);
  const hex2 = parseInt(((num / 16) - parseInt(hex1, 16)) * 16, 10).toString(16);
  return hex1 + hex2;
}

// https://www.developintelligence.com/blog/2017/02/rgb-to-hex-understanding-the-major-web-color-codes/
// https://reactgo.com/javascript-convert-decimals/
function rgbToHex(r, g, b) {
  const hexR = convertToHex(r);
  const hexG = convertToHex(g);
  const hexB = convertToHex(b);
  return `#${hexR}${hexG}${hexB}`;
}

function getRandomNumberUpTo(max) {
  return Math.ceil(Math.random() * max);
}

function generateNewColorCode() {
  const r = getRandomNumberUpTo(255);
  const g = getRandomNumberUpTo(255);
  const b = getRandomNumberUpTo(255);
  let newColorRGB = `(${r}, ${g}, ${b})`;
  if (newColorRGB === rightColorRGB) newColorRGB = generateNewColorCode();
  const newColorHex = rgbToHex(r, g, b);
  colors.push(newColorHex);
  return newColorRGB;
}

function getNewColor() {
  const rgbColor = document.getElementById('rgb-color');
  rightColorRGB = generateNewColorCode();
  rgbColor.innerText = rightColorRGB;
}

function populateColorsArray(max) {
  for (let i = 1; i <= max; i += 1) {
    generateNewColorCode();
  }
  colors.sort();
}

function checkAnswer(evt) {
  const answer = document.getElementById('answer');
  if (evt.target.style.backgroundColor === `rgb${rightColorRGB}`) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function createNewBalls(max) {
  const ballsContainer = document.getElementById('balls-container');
  populateColorsArray(max - 1);
  for (let i = 0; i < max; i += 1) {
    const newBall = document.createElement('div');
    newBall.classList.add('ball');
    newBall.style.backgroundColor = colors[i];
    newBall.addEventListener('click', checkAnswer);
    ballsContainer.append(newBall);
  }
}

function resetAll() {
  const ballsContainer = document.getElementById('balls-container');
  ballsContainer.innerHTML = '';
  for (let i = colors.length - 1; i >= 0; i -= 1) {
    colors.pop();
  }
  const answer = document.getElementById('answer');
  answer.innerText = 'Escolha uma cor';
}

function init() {
  resetAll();
  getNewColor();
  createNewBalls(6);
}

window.onload = () => {
  init();
  const resetGameButton = document.getElementById('reset-game');
  resetGameButton.addEventListener('click', init);
};
