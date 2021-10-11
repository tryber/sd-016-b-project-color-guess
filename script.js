function sorteiaByte() {
  return Math.ceil(255 * Math.random()) - 1;
}

function sorteiaCor() {
  return `rgb(${sorteiaByte()}, ${sorteiaByte()}, ${sorteiaByte()}`;
}

function sorteia() {
  document.querySelector('#rgb-color').innerText = `(${168}, ${34}, ${1})`;
}

function criaBola() {
  const bola = document.createElement('div');
  bola.classList.add('ball');
  bola.style.backgroundColor = sorteiaCor();
  document.querySelector('#bolas').appendChild(bola);
}

function apresentaBolas() {
  document.querySelector('#bolas').innerHTML = '';
  for (let i = 0; i < 6; i += 1) criaBola();
}

function reset() {
  apresentaBolas();
  document.querySelector('#score').innerText = 0;
  document.querySelector('#answer').innerText = 'Escolha uma Cor';
  sorteia();
}

function configurar() {
  document.querySelector('#reset-game').addEventListener('click', reset);
  reset();
}

window.onload = configurar;
// linha em branco pro linter ficar ok
