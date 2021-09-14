let balls = document.querySelector('.balls');
let rgb = document.getElementById('rgb-color')
let feedback = document.getElementById('answer');
let botaoReset = document.getElementById('reset-game');
let score = document.getElementById('score');

function generateColor() {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  return (`(${r}, ${g}, ${b})`);
}

rgb.innerText = generateColor();

function generateBalls() {

  for (let index = 0; index < 6; index++) {
    let ball = document.createElement('div');
    ball.className = 'ball';
    balls.appendChild(ball);
  }
}

function putColors() {
  let selected = parseInt(Math.random() * 6);
  for (let index = 0; index < 6; index++) {
    if (index == selected) {
      balls.children[index].style.backgroundColor = 'rgb' + rgb.innerText;
      balls.children[index].id = 'correct';

    } else balls.children[index].style.backgroundColor = 'rgb' + generateColor();
  }
}

let circles = document.querySelector('.balls');

circles.addEventListener('click', function(event) {
  if (event.target.id == 'correct') {
    feedback.innerText = 'Acertou!';
    score.innerText = (parseInt(score.innerText) + 3);
  } else feedback.innerText = 'Errou! Tente novamente!';
})

botaoReset.addEventListener('click', function() {
  rgb.innerText = generateColor();
  putColors();
  feedback.innerText = 'Escolha uma cor'
})

window.onload = function() {
  generateColor();
  generateBalls();
  putColors();
}