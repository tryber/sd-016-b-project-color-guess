function sorteia() {
  document.querySelector('#rgb-color').innerText = `(${168}, ${34}, ${1})`;
}

function reset() {
  document.querySelector('#answer').innerText = 'Escolha uma Cor';
  sorteia();
}

function configurar() {
  reset();
}

window.onload = configurar;
// linha em branco pro linter ficar ok
