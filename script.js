const rgbColor = document.querySelector('#rgb-color');

const a = parseInt(Math.random() * 255, 10);
const b = parseInt(Math.random() * 255, 10);
const c = parseInt(Math.random() * 255, 10);

// color[i].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

const rgbColorText = `(${a}, ${b}, ${c})`;

rgbColor.innerText = rgbColorText;

console.log(rgbColorText);

let ballColorsContainer = document.querySelector('#ball-colors-container');

console.log(ballColorsContainer.children.length);

for (let i = 0; i < ballColorsContainer.children.length; i++) {
  
  const a = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  const c = parseInt(Math.random() * 255, 10);

  ballColorsContainer.children[i].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;  
}

