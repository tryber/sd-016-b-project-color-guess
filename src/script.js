const score = {placar : 0};

function criaCor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb( ${r}, ${g}, ${b} )`;
}

function displayScore() {
  const placarPlac = document.querySelector('.placarAtual');
  const placar = document.createElement('p')
  placar.id = 'score';
  placar.classList.add('placarStyle')
  placar.innerText = `Placar: ${ score.placar }` ;
  placarPlac.appendChild(placar);
}

function colorPlate() {
  const locat = document.querySelector('ul');
  for (let ind = 0; ind < 6; ind += 1) {
    const rgb = criaCor();
    const colorCirc = document.createElement('li');
    colorCirc.className = 'ball';
    colorCirc.style.backgroundColor = `${rgb}`
    locat.appendChild(colorCirc);
  };
}

function colorWin() {
  const options = document.querySelectorAll('li');
  const sort = Math.floor(Math.random() * 6);
  return options[sort].style.backgroundColor;
}

function rgbAlvo() {
  const corTmp = colorWin();
  const locateColor = document.querySelector('.display');
  const newColor = document.createElement('p')
  newColor.id = 'rgb-color';
  newColor.classList.add('placarStyle')
  newColor.innerHTML = `${ corTmp }` ;
  locateColor.appendChild(newColor);
}

function resultado() {
  const locatX = document.querySelector('.result');
  const results = document.createElement('h1');
  results.id = 'answer';
  results.innerText = 'Escolha uma cor'
  locatX.appendChild(results);
}

function newGamer() {
  colorPlate(); rgbAlvo();
  displayScore(); resultado();
}

newGamer()

function resetRGB() {
  const div = document.querySelector('.display');
  div.innerHTML = ''; rgbAlvo();
}

function newScore() {
  const old = document.querySelector('.placarAtual');
  old.innerHTML = '';
  score.placar = score.placar + 3;
  return displayScore();
}

function clerAll() {
  const old = document.querySelector('.placarAtual');
  old.innerHTML = '';
  const locUL = document.querySelector('ul');
  locUL.innerHTML = '';
  const rgbAtual = document.querySelector('.display');
  rgbAtual.innerHTML = '';
  const result = document.querySelector('.result');
  result.innerHTML = '';
}

function resetColor() {
  const locUL = document.querySelector('ul');
  locUL.innerHTML = '';
  colorPlate(); resetRGB()
}

function reserGamer() {
  clerAll();
  newGamer();
}

function nice() {
  const atual = document.querySelector('.result');
  atual.innerHTML = '';
  const results = document.createElement('h1');
  results.id = 'answer';
  results.innerText = 'Acertou!'
  atual.appendChild(results);
}

function deined() {
  const atual = document.querySelector('.result');
  atual.innerHTML = '';
  const results = document.createElement('h1');
  results.id = 'answer';
  results.innerText = 'Errou! Tente novamente!'
  atual.appendChild(results);
}

const btnColorReset = document.querySelector('#reset-colors');
btnColorReset.addEventListener('click', resetColor);

const btnResetGamer = document.querySelector('#reset-game');
btnResetGamer.addEventListener('click', reserGamer);