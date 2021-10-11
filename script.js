function sorteiaByte() {
  return Math.ceil(255 * Math.random()) - 1;
}

function sorteiaCor() {
  return [sorteiaByte(), sorteiaByte(), sorteiaByte()];
}

function sorteia() {
  document.querySelector('#rgb-color').innerText = `(${168}, ${34}, ${1})`;
}

function reset() {
  console.log(sorteiaCor());
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
