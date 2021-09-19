const rgbColor = document.getElementById('rgb-color');
const ball = document.getElementsByClassName('ball');
let color = '';

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgb = `(${red}, ${green}, ${blue})`;
  return rgb;
}

for (let index = 0; index < ball.length; index += 1) {
  ball[index].style.backgroundColor = `rgb${randomColor()}`;
}

function getPositionColor() {
  const min = 0;
  const max = 6;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

color = ball[getPositionColor()].style.backgroundColor;

rgbColor.innerText = color;

function selectedColor(event) {
  if (event.target.style.backgroundColor === color) {
    console.log('Acertou');
  } else {
    console.log('Errou!');
  }
}

for (let index = 0; index < ball.length; index += 1) {
  ball[index].addEventListener('click', selectedColor);
}
