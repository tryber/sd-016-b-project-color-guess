const guessColor = document.querySelector('#rgb-color');
const createBall = document.querySelectorAll('.ball');

const randomRGB = () => Math.trunc(Math.random() * 255) + 1;

const makeRGBColor = () =>
  `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;

guessColor.textContent = makeRGBColor();

for (let i = 0; i < createBall.length; i += 1) {
  document.querySelectorAll('.ball')[i].style.backgroundColor = makeRGBColor();
}
