function gerarCor() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);

  return `(${r}, ${g}, ${b})`;
}

function colorGen() {
  const ballClass = document.getElementsByClassName('ball');
  const rgbNum = document.querySelector('#rgb-color');

  const ansSel = document.querySelector('#answer');
  const ballArr = [];
  for (let i = 0; i < ballClass.length; i += 1) {
    ballArr.push(gerarCor());
  }
  const numAle = Math.floor(Math.random() * 6);
  const numGer = ballArr[numAle];
  rgbNum.innerText = numGer;
  for (let i = 0; i < ballArr.length; i += 1) {
    ballClass[i].style.backgroundColor = `rgb${ballArr[i]}`;
  }
  ansSel.innerText = 'Escolha uma cor';
}
let count = 0;
const scoreStorage = localStorage;
scoreStorage.setItem('score', `${count}`);

function verCor(event) {
  const ansSel = document.querySelector('#answer');
  const eTar = event.target;
  const corTar = eTar.style.backgroundColor;
  const rgbN = document.querySelector('#rgb-color').innerText;
  const scoreH = document.querySelector('#score');
  if (corTar !== `rgb${rgbN}`) {
    ansSel.innerText = 'Errou! Tente novamente!';
    if (count > 0) {
      count -= 1;
      scoreStorage.setItem('score', `${count}`);
    }
    scoreH.innerText = scoreStorage.getItem('score');
  } else {
    ansSel.innerText = 'Acertou!';
    count += 3;
    scoreStorage.setItem('score', `${count}`);
    scoreH.innerText = count;
  }
}

const ballCor = document.querySelector('.balls_content');
ballCor.addEventListener('click', verCor);
const btnRes = document.querySelector('#reset-game');
btnRes.addEventListener('click', colorGen);
window.onload = colorGen;
