let soma = 0;

function pushColor(colorRGB) {
  const pegaCor = document.getElementById('rgb-color');
  pegaCor.innerText = colorRGB;
}

function createColors(array) {
  for (let index = 0; index < array.length; index += 1) {
    const localizaDivs = document.querySelector('#colors-random');
    const createDivsColor = document.createElement('div');
    createDivsColor.className = 'ball';
    createDivsColor.style.backgroundColor = array[index];
    localizaDivs.appendChild(createDivsColor);
  }
}

function randomColor() {
  const arrayColor = [];
  let colorSort = '';
  for (let index = 0; index < 6; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    arrayColor.push(`rgb(${r}, ${g}, ${b})`);
    colorSort = arrayColor[Math.floor(Math.random() * arrayColor.length)];
  }
  pushColor(colorSort);
  createColors(arrayColor);
}
randomColor();

function advinhaColor(event) {
  const pegaCor = document.getElementById('rgb-color');
  const trocaText = document.getElementById('answer');
  const addPoints = document.getElementById('score');
  if (event.target.style.backgroundColor === pegaCor.innerText) {
    trocaText.innerText = 'Acertou!';
    soma += 3;
    addPoints.innerText = soma;
  } else {
    trocaText.innerText = 'Errou! Tente novamente!';
  }
}

const clickColor = document.getElementById('colors-random');
clickColor.addEventListener('click', advinhaColor);

function resetGame() {
  const pegaQuadro = document.querySelector('#colors-random');
  pegaQuadro.innerHTML = '';
  randomColor();
}

function resetTextIni() {
  const mudaText = document.getElementById('answer');
  mudaText.innerText = 'Escolha uma cor';
}

const resetar = document.getElementById('reset-game');
resetar.addEventListener('click', resetTextIni);

const resetarGame = document.getElementById('reset-game');
resetarGame.addEventListener('click', resetGame);
