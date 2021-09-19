const rgbColor = document.querySelector('#rgb-color');
const ballColorsContainer = document.querySelector('#ball-colors-container');
const resetGame = document.querySelector('#reset-game');
const score = document.querySelector('#score-up');
const answer = document.querySelector('#answer');

function rgbColorTextFunction() {
  const a = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  const c = parseInt(Math.random() * 255, 10);
  const rgbColorText = `(${a}, ${b}, ${c})`;
  rgbColor.innerText = rgbColorText;
  return rgbColorText;
}

function sortColor() {
  score.innerText = 'VQV!';
  answer.innerText = 'Escolha uma cor';
  for (let i = 0; i < ballColorsContainer.children.length; i += 1) {
    const d = parseInt(Math.random() * 255, 10);
    const e = parseInt(Math.random() * 255, 10);
    const f = parseInt(Math.random() * 255, 10);
    ballColorsContainer.children[i].style.backgroundColor = `rgb(${d}, ${e}, ${f})`;
  }
}

const count = document.querySelector('#score');

function play() {
  sortColor();
  const selectedColor = rgbColorTextFunction();
  let x = parseInt(Math.random() * 6, 10);
  if (x === 6) { x = 5; }
  ballColorsContainer.children[x].style.backgroundColor = `rgb${selectedColor}`;
  console.log(x);
}

function choice() {
  ballColorsContainer.addEventListener('click', (event) => {
    const yourChoice = event.target;
    if (yourChoice.style.backgroundColor === `rgb${rgbColor.innerText}`) {
      answer.innerText = 'Acertou!';
      score.innerText = 'Pontuação';
      count.innerText = +count.innerText + 3;
    } else {
      answer.innerText = 'Errou! Tente novamente!';
      score.innerText = 'Quase !!!';
      count.innerText = 0;
    }
  });
}

window.onload = () => { play(); choice(); };
resetGame.addEventListener('click', play);
