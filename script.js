let rgbColor = document.querySelector('#rgb-color')

const a = parseInt(Math.random() * 255);
const b = parseInt(Math.random() * 255);
const c = parseInt(Math.random() * 255);

// color[i].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

let rgbColorText = `(${a}, ${b}, ${c})`;

rgbColor.innerText = rgbColorText;

console.log(rgbColorText);
