const guessColor = document.querySelector('#rgb-color');

const randomRGB = () => Math.trunc(Math.random() * 255) + 1;

const makeRGBColor = () =>
  `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;

guessColor.textContent = makeRGBColor();
