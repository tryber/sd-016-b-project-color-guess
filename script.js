const colorBalls = document.querySelectorAll('.ball');

function generateColorBallRandom() {
  for (let index = 0; index < colorBalls.length; index += 1) {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);
    colorBalls[index].style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
  }
}

generateColorBallRandom();
