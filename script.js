let sortedColor;
let countScore = 0;
const createContainers = () => {
  const colorContainer = document.getElementById('colors-container');
  for (let index = 0; index < 6; index += 1) {
    const createCircle = document.createElement('div');
    createCircle.className = 'ball';
    colorContainer.insertBefore(createCircle, colorContainer[0]);
  }
};

const rgbText = () => {
  const circles = document.getElementsByClassName('ball');
  const text = document.getElementById('rgb-color');
  let arr = [];
  let arrPosition = 0;

  for (let index = 0; index < circles.length; index += 1) {
    arr.push(index);
  }
  arrPosition = arr[(Math.floor(Math.random() * 6))];
  const teste = circles[arrPosition].style.backgroundColor;
  sortedColor = teste;
  arr = [];

  for (let index = 3; index < 18; index += 1) {
    arr.push(teste[index]);
  }
  text.innerText = arr.join('');
};

const createColors = () => {
  const circles = document.getElementsByClassName('ball');
  let arr = [];
  for (let index1 = 0; index1 < 6; index1 += 1) {
    for (let index = 0; index < 3; index += 1) {
      arr.push(Math.floor(Math.random() * 256));
    }
    circles[index1].style.backgroundColor = `rgb(${arr.join(', ')})`;
    arr = [];
  }
  rgbText();
};

const createBeginMessage = () => {
  const body = document.getElementsByTagName('body');
  const beginMessage = document.createElement('h2');
  beginMessage.className = 'message';
  beginMessage.id = 'answer';
  beginMessage.innerText = 'Escolha uma cor';
  body[0].insertBefore(beginMessage, body[0].children[3]);
};

const createScore = () => {
  const score = document.getElementById('score');
  score.className = 'score';
  score.innerText = 'Placar: 0';
};

const createEventListener = () => {
  const colorContainer = document.getElementById('colors-container');
  const winnerMessage = document.getElementsByClassName('message');
  const score = document.getElementById('score');
  for (let index = 0; index < 6; index += 1) {
    colorContainer.children[index].addEventListener('click', () => {
      if (colorContainer.children[index].style.backgroundColor === sortedColor) {
        winnerMessage[0].innerText = 'Acertou!';
        countScore += 3;
        score.innerText = `Placar: ${countScore}`;
      } else {
        winnerMessage[0].innerText = 'Errou! Tente novamente!';
      }
    });
  }
};

const resetButton = () => {
  const newColorsBtn = document.getElementById('reset-game');
  const winnerMessage = document.getElementsByClassName('message');
  newColorsBtn.addEventListener('click', () => {
    winnerMessage[0].innerText = 'Escolha uma cor';
    createColors();
  });
};

window.onload = () => {
  createContainers();
  createColors();
  createBeginMessage();
  createScore();
  createEventListener();
  resetButton();
};
