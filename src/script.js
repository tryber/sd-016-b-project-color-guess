const score = {placar : 0};

function criaCor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb( ${r}, ${g}, ${b} )`;
}

function rgbAlvo() {
  const corTmp = criaCor();
  const locateColor = document.querySelector('.display');
  const newColor = document.createElement('p')
  newColor.id = 'rgb-color';
  newColor.classList.add('placarStyle')
  newColor.innerHTML = `${ corTmp }` ;
  locateColor.appendChild(newColor);
}
rgbAlvo();

function displayScore() {
  const placarPlac = document.querySelector('.display');
  const placar = document.createElement('p')
  placar.id = 'scoreID';
  placar.classList.add('placarStyle')
  placar.innerText = `Placar: ${ score.placar }` ;
  placarPlac.appendChild(placar);
}
displayScore();

function colorPlate() {
  const locat = document.querySelector('ul');
  for (let ind = 0; ind < 6; ind += 1) {
    const rgb = criaCor();
    const colorCirc = document.createElement('li');
    colorCirc.classList.add = 'ball';
    colorCirc.style.backgroundColor = `${rgb}`
    locat.appendChild(colorCirc);
  };
}
colorPlate();