const user = {
  randomColor: '',
  hit: false,
  points: 0,
}

function randomizeColors() {
  return Math.floor(Math.random() * 255);
}

function generateRandomColors() {
  for (let i = 0; i < 6; i += 1) {
    user.randomColor += `rgb(${randomizeColors()}, ${randomizeColors()}, ${randomizeColors()})`
  }
}
