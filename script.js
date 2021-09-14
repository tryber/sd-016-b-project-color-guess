function generateRandomColor() {
    //https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    var randomColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return randomColor;
}



function createPalette() {
    let array = [];
    for (let i = 0; i < 6; i += 1) {
      const palette = document.querySelector('#color-palette');
      const color = document.createElement('div');
      randomColor = generateRandomColor();
      color.classList.add('ball');
      array.push(randomColor)
      color.style.backgroundColor = randomColor;
      palette.appendChild(color);
    }
    console.log(array);
  } createPalette();

  function addColor() {
    let aleatorio = Math.floor(Math.random()*6)
    let palette = document.querySelectorAll('.ball');
    let color = document.querySelector('#rgb-color');
    const secret = palette[aleatorio].style.backgroundColor;
    color.innerText = secret.substring(3);




  } addColor();