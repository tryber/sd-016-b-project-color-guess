function gerarCor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}
// Cor de referencia para acertar.
function colorRefRandom() {
  const textRandomDiv = document.getElementById('text-random');
  const textColor = document.createElement('p');
  textColor.id = 'text-color-ref';
  textColor.innerText = gerarCor();
  textRandomDiv.appendChild(textColor);
}
colorRefRandom();

//
function createColorsTable(quantidade) {
  const containerColors = document.getElementById('colors-random');
  const colorRefItem = document.getElementById('text-color-ref');
  const colorRefText = colorRefItem.innerText;
  console.log(colorRefText);
  const colorRefBlock = document.createElement('div');
  colorRefBlock.classList.add('colors');
  colorRefBlock.id = 'color-ref';
  colorRefBlock.style.backgroundColor = colorRefText;
  containerColors.appendChild(colorRefBlock);
  for (let index = 1; index < quantidade; index += 1) {
    const color = document.createElement('div');
    color.classList.add('colors');
    color.style.backgroundColor = gerarCor();
    containerColors.appendChild(color);
  }
}
createColorsTable(10);

function randomizeColors() {
  const containerColors = document.getElementById('colors-random');
  const colorRefItem = document.getElementById('color-ref');
  const arrayPosition = document.getElementsByClassName('colors');
  const arraySize = arrayPosition.length;
  const randomNumberArray = Math.floor(Math.random() * arraySize);
  containerColors.insertBefore(colorRefItem, arrayPosition[randomNumberArray]);
}

randomizeColors();

const containerColors = document.getElementById('colors-random');
const resultado = document.createElement('p');
containerColors.addEventListener('click', (event) => {
  resultado.innerText = '';  
  const alvo = event.target;
  const correctColor = document.querySelector('#color-ref');
  console.log();
  const containerText = document.querySelector('#textos');
  if (alvo === correctColor) {
    resultado.innerText = 'Você acertou!';
    containerText.appendChild(resultado);
  } else {
    resultado.innerText = 'Você errou!';
    containerText.appendChild(resultado);
  }
});
