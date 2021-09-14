function generateColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgbColor = `rgb(${red},${green},${blue})`;
  return rgbColor;
}

const ballClass = document.getElementsByClassName('ball');
function colorizeTheDivs() {
  for (let index = 0; index < ballClass.length; index += 1) {
    ballClass[index].style.backgroundColor = generateColor();
  }
}

function pGenerate() {
  const divS = Math.round(Math.random() * (ballClass.length - 1));
  const p = document.getElementById('rgb-color');
  const chooseARandomDiv = ballClass[divS];
  console.log(divS);
  p.innerHTML = chooseARandomDiv.style.backgroundColor;
}

function onLoad() {
  colorizeTheDivs();
  pGenerate();
  document.getElementById('answer').innerHTML = 'Escolha uma cor';
}
window.onload = onLoad;

function match(event) {
  const p = document.getElementById('rgb-color').innerText;
  const eventTarget = event.target;
  const h2 = document.getElementById('answer');
  if (eventTarget.style.backgroundColor === p) {
    h2.innerHTML = 'Acertou!';
  } else {
    h2.innerHTML = 'Errou! Tente novamente!';
  }
}

for (let index = 0; index < ballClass.length; index += 1) {
  ballClass[index].addEventListener('click', match);
}

const resetButton = document.getElementById('reset-game')
resetButton.addEventListener('click', onLoad);
