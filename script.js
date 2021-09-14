for (let i = 0; i < 6; i += 1) {
  const ball = document.createElement('div');
  ball.classList.add('ball');

  // gerar cor aleatória
  const rgbValue = [];
  rgbValue.push(Math.floor(Math.random() * 256).toString(10));
  rgbValue.push(Math.floor(Math.random() * 256).toString(10));
  rgbValue.push(Math.floor(Math.random() * 256).toString(10));
  const color = rgbValue.toString();
  ball.style.backgroundColor = 'rgb('.concat(color, ')');

  document.querySelector('#balls-container').appendChild(ball);
}

const balls = document.querySelectorAll('.ball');
const randInt = Math.floor(Math.random() * balls.length);
const randColor = balls[randInt].style.backgroundColor;
document.querySelector('#rgb-color').innerText = randColor.slice(3);
