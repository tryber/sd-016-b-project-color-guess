
let gameColor = document.getElementById('rgb-color');
let allColors = document.getElementById('all-colors');
const reset = document.getElementById('reset-game');
const text = document.querySelector('p')
let points = 0;

function showPoints(){
  let getPoints = document.getElementById('score')
  getPoints.innerHTML = 'Pontos : ' + points
}
showPoints()

function randomColor() {
  return Math.round(Math.random() * 255);
}

function rgb() {
  const r = randomColor();
  const g = randomColor();
  const b = randomColor();
  return `rgb(${r}, ${g}, ${b})`;
}

function rgbColor() {
    gameColor.innerText = rgb();
}
rgbColor();

function getRandomIntInclusive() {
  array = document.getElementsByClassName('ball')
  min = Math.ceil(0);
  max = Math.floor(array.length - 1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive()



function paintColors (){
  
  colors = document.getElementsByClassName('ball');
  for (let i = 0; i < colors.length; i++) {
    colors[i].style.backgroundColor = rgb()
  }
  let mainColor = document.getElementById('rgb-color').innerText;  
  colors[getRandomIntInclusive()].style.backgroundColor = mainColor;  
}

paintColors()

function selectColor (event){

    if(document.getElementById('selected') === null){
      colors = document.getElementsByClassName('ball');
      event.target.id = 'selected';
      checkAnswer();
      showPoints()
    }
}
allColors.addEventListener('click',selectColor);

function resetGame(){
  rgbColor()
  paintColors()
  resetAnswer()
  text.innerText = 'Escolha uma cor'
}
reset.addEventListener('click',resetGame)

function resetAnswer(){
  if(document.querySelector('#selected') !== null)
  document.querySelector('#selected').removeAttribute('id');
  }


function checkAnswer(){
  if(document.getElementById('rgb-color').innerText == document.getElementById('selected').style.backgroundColor ){
    text.innerText = " Acertou!"
    points += 3;
  }
  else{
    text.innerText ='Errou! Tente novamente!'
  }
}
