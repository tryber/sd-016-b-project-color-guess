const getBallsColor = document.getElementsByClassName('ball');

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

for (let i = 0; i < getBallsColor.length; i += 1) {
  getBallsColor[i].style.backgroundColor = randomColor();
}
