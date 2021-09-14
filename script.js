var pontuacao = 0;
const score = document.querySelector('#score')


function generateRandomColor() {
    //https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    var randomColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return randomColor;
}

function check() {
    const secret = 'rgb' + document.querySelector('#rgb-color').innerText;
    const answer = document.querySelector('#answer')
    const guess = event.target.style.backgroundColor;
    if(secret == guess) {
        answer.innerText ='Acertou!';
        pontuacao += 3;
        reset();
    } else {
        answer.innerText = 'Errou! Tente novamente!';
    }
}

function createPalette() {
    let array = [];
    for (let i = 0; i < 6; i += 1) {
      const palette = document.querySelector('#color-palette');
      const button = document.querySelector('#reset-game');
      const color = document.createElement('div');
      randomColor = generateRandomColor();
      color.classList.add('ball');
      array.push(randomColor);
      color.style.backgroundColor = randomColor;
      palette.appendChild(color);
      color.addEventListener('click', check);
      button.addEventListener('click', reset);

    }
  } createPalette();

  function addColor() {
    let aleatorio = Math.floor(Math.random()*6)
    let palette = document.querySelectorAll('.ball');
    let color = document.querySelector('#rgb-color');
    const secret = palette[aleatorio].style.backgroundColor;
    color.innerText = secret.substring(3);
  } addColor();
  
  function reset() {
    const balls = document.querySelectorAll('.ball');
    const answer = document.querySelector('#answer')
    if(event.target == document.querySelector('#reset-game')) {
        answer.innerText = 'Escolha uma cor!';
    }

    for( let i = 0; i < balls.length; i += 1) {
        balls[i].remove();
    }
      createPalette();
      addColor();
      refreshScore();
  }

  function refreshScore() {
    document.querySelector('#answer')
    score.innerText = pontuacao;
  }