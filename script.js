const randomColor = document.getElementById('rgb-color');
const main = document.getElementById('main-screen')
randomColor.innerHTML = '(';
const numbers = [];
for (let i = 0; i < 3; i += 1) {
  numbers.push(Math.round(Math.random() * 255));
  if (i === 2) {
    randomColor.innerHTML += `${numbers[i]}`;
  } else {
    randomColor.innerHTML += `${numbers[i]}, `;
    console.log();
  }
}
randomColor.innerHTML += ')';

// Criando as divs com as cores
for (let i = 0; i < 6; i += 1) {
  const cor = document.createElement('div');
  cor.classList.add('ball')
  main.appendChild(cor);
}

