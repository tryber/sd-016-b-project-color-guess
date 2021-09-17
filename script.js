function gerar_cor() {
  let r = parseInt(Math.random() * 255, 10);
  let g = parseInt(Math.random() * 255, 10);
  let b = parseInt(Math.random() * 255, 10);

  return `(${r}, ${g}, ${b})`;
}

function colorGen() {
  const ballClass = document.getElementsByClassName('ball');
  const rgbNum = document.querySelector('#rgb-color');

  const ansSel = document.querySelector('#answer');
  const ballArr = [];
  for (let i = 0; i < ballClass.length; i += 1) {
    ballArr.push(gerar_cor());
  }
  const numAle = Math.floor(Math.random() * 6);
  const numGer = ballArr[numAle];
  rgbNum.innerText = numGer;
  for (let i = 0; i < ballArr.length; i += 1) {
    ballClass[i].style.backgroundColor = `rgb${ballArr[i]}`;
  }
  ansSel.innerText = 'Escolha uma cor';
}

function verCor(event) {
  const ansSel = document.querySelector('#answer');
  const eTar = event.target;
  const corTar = eTar.style.backgroundColor;
  const rgbN = document.querySelector('#rgb-color').innerText;
  if (corTar !== `rgb${rgbN}`) {
    ansSel.innerText = 'Errou! Tente novamente!';
  } else {
    ansSel.innerText = 'Acertou!';
  }

  console.log(`${corTar}`, typeof corTar);
  console.log(`rgb${rgbN}`, typeof rgbN);
}

const ballCor = document.querySelector('.balls_content');
ballCor.addEventListener('click', verCor);

window.onload = colorGen;
