const rgbColor = document.querySelector('#rgb-color');
const ballColorsContainer = document.querySelector('#ball-colors-container');
const resetGame = document.querySelector('#reset-game');
let score = document.querySelector('#score');
let answer = document.querySelector('#answer');

const a = parseInt(Math.random() * 255, 10);
const b = parseInt(Math.random() * 255, 10);
const c = parseInt(Math.random() * 255, 10);
const rgbColorText = `(${a}, ${b}, ${c})`;

rgbColor.innerText = rgbColorText;

function play() {
  score.innerText = 'VQV!';
  answer.innerText = 'Escolha uma cor';
  for (let i = 0; i < ballColorsContainer.children.length; i += 1) {
    const d = parseInt(Math.random() * 255, 10);
    const e = parseInt(Math.random() * 255, 10);
    const f = parseInt(Math.random() * 255, 10);
    ballColorsContainer.children[i].style.backgroundColor = `rgb(${d}, ${e}, ${f})`;
  }
  let x = parseInt(Math.random() * 6, 10);
  if (x === 6) { x = 5 };
  ballColorsContainer.children[x].style.backgroundColor = `rgb${rgbColorText}`;
}
  
let count = 0;
ballColorsContainer.addEventListener('click', (event) => {
  let yourChoice = event.target;
  if (yourChoice.style.backgroundColor === `rgb${rgbColorText}`) {
    console.log('AeeeeÊ');
    answer.innerText = 'Acertou!';
    count += 3;
    console.log(count);
    score.innerText = `${count} pontos`;
  } else {
    console.log('Oh no!!!');
    answer.innerText = 'Errou! Tente novamente!';
    score.innerText = 'Quase !!!';
    count = 0;
  }
})

window.onload = play;
resetGame.addEventListener('click', play);
