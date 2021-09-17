function gerar_cor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

function colorGen() {
  const ballClass = document.getElementsByClassName('ball');
  for (let i = 0; i < ballClass.length; i += 1) {
    ballClass[i].style.backgroundColor = gerar_cor();
  }
}

window.onload = colorGen;
