const createContainers = () => {
  const colorContainer = document.getElementById('colors-container');
  for (let index = 0; index < 6; index += 1) {
  const createCircle = document.createElement('div');
  createCircle.className = 'ball';
  colorContainer.insertBefore(createCircle, colorContainer[0]);
  }
}

const createColors = () => {
  const circles = document.getElementsByClassName('ball');
  let arr = [];
  for (let index1 = 0; index1 < 6; index1 += 1) {
    for(let index = 0; index < 3; index += 1) {
      arr.push(Math.floor(Math.random() * 256));
    }
    circles[index1].style.backgroundColor = `rgb(${arr.join(', ')})`;
    arr = [];
  }
  rgbText();
};

const rgbText = () => {
  const circles = document.getElementsByClassName('ball');
  const text = document.getElementById('rgb-color');
  let arr = [];
  let arrPosition = 0;
  let teste;
  for (let index = 0; index < circles.length; index += 1) {
    arr.push(index);
  }
  arrPosition = arr[(Math.floor(Math.random() * 6))];
  teste = circles[arrPosition].style.backgroundColor;  
  arr = [];
  for (let index = 3; index < 18; index += 1) {
    arr.push(teste[index])
  }
  text.innerText = arr.join('');
};


window.onload = () => {
  createContainers();
  createColors();  
};