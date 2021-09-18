const colorsContainer = document.getElementById('colors-container');
function createBall() {
  for (let index = 0; index < 6; index += 1) {
    const colors = document.createElement('div');
    colors.className = 'ball';
    colorsContainer.appendChild(colors);
  }
}
createBall();

function creatColors() {
  const r = parseInt(Math.random() * 256, 10);
  const g = parseInt(Math.random() * 256, 10);
  const b = parseInt(Math.random() * 256, 10);
  return `rgb(${r},${g},${b})`;
}


function newColors() {
  const ball = document.querySelectorAll('.ball');
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = creatColors();
  }
}
newColors();
