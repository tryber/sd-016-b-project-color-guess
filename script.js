function sorteiaByte() {
  return Math.ceil(255 * Math.random()) - 1;
}

function sorteiaCor() {
  return `rgb(${sorteiaByte()}, ${sorteiaByte()}, ${sorteiaByte()}`;
}

function atualizaDica() {
  const [r, g, b] = [sorteiaByte(), sorteiaByte(), sorteiaByte()];
  document.querySelector('#rgb-color').innerText = `(${r}, ${g}, ${b})`;
  document.querySelector('.r').style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
}

function criaBola(n = 0) {
  const bola = document.createElement('div');
  bola.classList.add('ball');
  if (n) bola.classList.add('r');
  bola.style.backgroundColor = sorteiaCor();
  document.querySelector('#bolas').appendChild(bola);
}

function apresentaBolas() {
  document.querySelector('#bolas').innerHTML = '';
  const r = Math.ceil(6 * Math.random()) - 1;
  for (let i = 0; i < 6; i += 1) {
    if (i === r) criaBola(1);
    else criaBola();
  }
  atualizaDica();
}

function reset() {
  apresentaBolas();
  document.querySelector('#answer').innerText = 'Escolha uma Cor';
}

function guess(e) {
  const alvo = e.target;
  const resp = document.querySelector('#answer');
  if (alvo.classList.contains('ball')) {
    if (alvo.classList.contains('r')) {
      resp.innerText = 'Acertou!';
      const pont = document.querySelector('#score');
      pont.innerText = +pont.innerText + 3;
      reset();
    } else {
      resp.innerText = 'Errou! Tente novamente!';
      document.querySelector('#score').innerText = 0;
    }
  }
}

function configurar() {
  document.querySelector('#score').innerText = 0;
  document.querySelector('#bolas').addEventListener('click', guess);
  document.querySelector('#reset-game').addEventListener('click', reset);
  reset();
}

window.onload = configurar;
// linha em branco pro linter ficar ok
