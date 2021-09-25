const rgbText = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const ballContainer = document.querySelector('#ball-container');
const message = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
const score = document.querySelector('#score');

function generateRandomColor() {
  const colorR = Math.round(Math.random() * 255);
  const colorG = Math.round(Math.random() * 255);
  const colorB = Math.round(Math.random() * 255);
  const fullColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
  return fullColor;
}

generateRandomColor();

rgbText.innerText = `${generateRandomColor()}`;

function putColor() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = generateRandomColor()
  }
}

putColor();

function rightAnswer() {
  const optionChoose = Math.round(Math.random() * 5);
  if (optionChoose === 0) {
    balls[0].style.backgroundColor = rgbText.textContent;
  } else if (optionChoose === 1) {
    balls[1].style.backgroundColor = rgbText.textContent;
  } else if (optionChoose === 2) {
    balls[2].style.backgroundColor = rgbText.textContent;
  } else if (optionChoose === 3) {
    balls[3].style.backgroundColor = rgbText.textContent;
  } else if (optionChoose === 4) {
    balls[4].style.backgroundColor = rgbText.textContent;
  } else {
    balls[5].style.backgroundColor = rgbText.textContent;
  }
}

rightAnswer();

ballContainer.addEventListener('click', (evt) => {
  const realScore = (parseInt(score.innerText));
  if (evt.target.style.backgroundColor === rgbText.textContent) {
    message.innerText = "Acertou!"
    score.innerHTML = realScore + 3
  } else {
    message.innerText = "Errou! Tente novamente!"
  }

});

resetBtn.addEventListener ('click', () => {
  rightAnswer();
  generateRandomColor();
  putColor();
  const optionChoose = Math.round(Math.random() * 5);
  if (optionChoose === 0) {
    rgbText.textContent = balls[0].style.backgroundColor ;
  } else if (optionChoose === 1) {
    rgbText.textContent = balls[1].style.backgroundColor ;
  } else if (optionChoose === 2) {
    rgbText.textContent = balls[2].style.backgroundColor ;
  } else if (optionChoose === 3) {
    rgbText.textContent = balls[3].style.backgroundColor ;
  } else if (optionChoose === 4) {
    rgbText.textContent = balls[4].style.backgroundColor ;
  } else {
    rgbText.textContent = balls[5].style.backgroundColor ;
  }

  message.innerText = 'Escolha uma cor'

})