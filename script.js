const balls = document.getElementsByClassName('ball');

function randomColor() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `rgb(${r}, ${g}, ${b})`;
}

function addBallsColor() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomColor();
  }
}
addBallsColor();

/* Referências:
Gerar cor aleatória:
https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
*/
