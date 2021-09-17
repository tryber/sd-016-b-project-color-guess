const rgbColor = document.querySelector('#rgb-color');
const ballColorsContainer = document.querySelector('#ball-colors-container');
const answerButton = document.querySelector('#answer-button');

const a = parseInt(Math.random() * 255, 10);
const b = parseInt(Math.random() * 255, 10);
const c = parseInt(Math.random() * 255, 10);
const rgbColorText = `(${a}, ${b}, ${c})`;

rgbColor.innerText = rgbColorText;

function play() {
  for (let i = 0; i < ballColorsContainer.children.length; i += 1) {
    const d = parseInt(Math.random() * 255, 10);
    const e = parseInt(Math.random() * 255, 10);
    const f = parseInt(Math.random() * 255, 10);
    ballColorsContainer.children[i].style.backgroundColor = `rgb(${d}, ${e}, ${f})`;
  }
  
  let x = parseInt(Math.random() * 6, 10);
  if (x === 6) { x = 5 };
  ballColorsContainer.children[x].style.backgroundColor = `rgb${rgbColorText}`;
  
  console.log(ballColorsContainer.children[x].style.backgroundColor);
  console.log(x);
}
  
let answer = document.querySelector('#answer');
  
ballColorsContainer.addEventListener('click', (event) => {
  let yourChoice = event.target;

  if (yourChoice.style.backgroundColor === `rgb${rgbColorText}`) {
    console.log('AeeeeÊ');
    answer.innerText = 'Acertou!';
  } else {
    console.log('Oh no!!!');
    answer.innerText = 'Errou! Tente novamente!';
  }
})

window.onload = play;
answerButton.addEventListener('click', play);
