function sorteia() {
  document.querySelector('#rgb-color').innerText = `(${168}, ${34}, ${1})`;
}

function configurar() {
  sorteia();
}

window.onload = configurar;
// linha em branco pro linter ficar ok
