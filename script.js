const getBallsColor = document.getElementsByClassName('ball');
const getResult = document.getElementById('rgb-color');

// https://www.w3schools.com/js/js_random.asp
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < getBallsColor.length; i += 1) {
  getBallsColor[i].style.backgroundColor = randomColor();
}

function chooseColorAnswer() {
  getResult.innerText = getBallsColor[Math.floor(Math.random() * 5)].style.backgroundColor;
}

chooseColorAnswer();

function answer(event) {
  const getAnswer = document.getElementById('answer');
  const colorSelected = event.target.style.backgroundColor;
  if (colorSelected === getResult.innerText) {
    getAnswer.innerText = 'Acertou!';
  } else {
    getAnswer.innerText = 'Errou! Tente novamente!';
  }
}

for (let i = 0; i < getBallsColor.length; i += 1) {
  getBallsColor[i].addEventListener('click', answer);
}
