const guessColor = document.querySelector('#rgb-color');
const createBall = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');

const randomRGB = () => Math.trunc(Math.random() * 255) + 1;

const makeRGBColor = () =>
  `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;

guessColor.textContent = makeRGBColor();

const arr = [
  guessColor.textContent,
  makeRGBColor(),
  makeRGBColor(),
  makeRGBColor(),
  makeRGBColor(),
  makeRGBColor(),
];

// https://stackoverflow.com/questions/19351759/javascript-random-number-out-of-5-no-repeat-until-all-have-been-used
const uniqueRandoms = [];
const numRandoms = 6;
function makeArr() {
  if (!uniqueRandoms.length) {
    for (let i = 0; i < numRandoms; i += 1) {
      uniqueRandoms.push(i);
    }
  }
  const index = Math.floor(Math.random() * uniqueRandoms.length);
  const val = uniqueRandoms[index];
  uniqueRandoms.splice(index, 1);
  return val;
}

for (let i = 0; i < createBall.length; i += 1) {
  createBall[i].style.backgroundColor = arr[makeArr()];
  createBall[i].addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === guessColor.textContent) {
      answer.textContent = 'Acertou!';
    } else {
      answer.textContent = 'Errou! Tente novamente!';
    }
  });
}
