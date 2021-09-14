function generateColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgbColor = `rgb(${red},${green},${blue})`;
  return rgbColor;
}

function colorizeTheDivs() {
  const ballClass = document.getElementsByClassName('ball');
  for (let index = 0; index < ballClass.length; index += 1) {
    ballClass[index].style.backgroundColor = generateColor();
  }
}

window.onload = colorizeTheDivs;