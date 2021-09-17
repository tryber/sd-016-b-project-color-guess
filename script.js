const rgbColor = document.querySelector('#rgb-color');

const answerButton = document.querySelector('#answer');

function play(){
  const a = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  const c = parseInt(Math.random() * 255, 10);
  
  const rgbColorText = `(${a}, ${b}, ${c})`;
  
  rgbColor.innerText = rgbColorText;
  
  let ballColorsContainer = document.querySelector('#ball-colors-container');
  
  for (let i = 0; i < ballColorsContainer.children.length; i++) {
    const a = parseInt(Math.random() * 255, 10);
    const b = parseInt(Math.random() * 255, 10);
    const c = parseInt(Math.random() * 255, 10);
    
    ballColorsContainer.children[i].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;  
  }

  const x = parseInt(Math.random() * 6, 10);
  if (x === 6) {x = 5}
  ballColorsContainer.children[x].style.backgroundColor = `rgb${rgbColorText}`;
  
  console.log(ballColorsContainer.children[x].style.backgroundColor);
  console.log(x);
  
};

window.onload = play;
answerButton.addEventListener('click', play);