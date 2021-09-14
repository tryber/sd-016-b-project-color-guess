let rightColor = '';

function getRandomNumberUpTo(max) {
  return Math.ceil(Math.random() * max);
}

function generateNewColorCode() {
  return `(
    ${getRandomNumberUpTo(255)},
    ${getRandomNumberUpTo(255)},
    ${getRandomNumberUpTo(255)}
    )`.replace(/\s/g, '');
}

function getNewColor() {
  const rgbColor = document.getElementById('rgb-color');
  const rightColorCode = generateNewColorCode();
  rightColor = `rgb${rightColorCode}`;
  console.log(rightColor);
  rgbColor.innerText = rightColorCode;
}

window.onload = () => {
  getNewColor();
};
