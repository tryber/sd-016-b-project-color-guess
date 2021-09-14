const colorCircle = document.getElementsByClassName('ball')
const randomizeColorButton = document.getElementById('randomizeColor')

randomizeColorButton.addEventListener('click', generateColors)

function randomRGB() {
  let numero = Math.ceil(Math.random() * 255)
  return numero
}

function generateColors() {
  
  for (let i = 0; i < colorCircle.length; i += 1) {
    let red = randomRGB()
    let green = randomRGB()
    let blue = randomRGB()
    colorCircle[i].style.backgroundColor = `rgb(${red},${green},${blue} )`
  }

}

window.onload = () => {
  generateColors()
}
