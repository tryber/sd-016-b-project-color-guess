const guessColor = document.querySelector('#rgb-color');
const createBall = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');
const btnReset = document.querySelector('#reset-game');
const score = document.querySelector('#score');
const uniqueRandoms = [];
const numRandoms = 6;
let count = 0;

// https://stackoverflow.com/questions/19351759/javascript-random-number-out-of-5-no-repeat-until-all-have-been-used
function makeArr() {
  if (!uniqueRandoms.length) {
    for (let i = 0; i < numRandoms; i += 1) {
      uniqueRandoms.push(i);
    }
  }
  const index = Math.floor(Math.random() * uniqueRandoms.length);
  const arr = uniqueRandoms[index];
  uniqueRandoms.splice(index, 1);
  return arr;
}

const randomRGB = () => Math.trunc(Math.random() * 255) + 1;

const makeRGBColor = () =>
  `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;

const makeBalls = () => {
  guessColor.textContent = makeRGBColor();
  const arr = [
    guessColor.textContent,
    makeRGBColor(),
    makeRGBColor(),
    makeRGBColor(),
    makeRGBColor(),
    makeRGBColor(),
  ];
  answer.textContent = '"Escolha uma cor"';
  for (let i = 0; i < createBall.length; i += 1) {
    createBall[i].style.backgroundColor = arr[makeArr()];
  }
};

const countScore = (params) => {
  count += params;
  score.textContent = `Placar: ${count}`;
};

const selectBalls = () => {
  for (let i = 0; i < createBall.length; i += 1) {
    createBall[i].addEventListener('click', (e) => {
      // makeBalls();
      if (e.target.style.backgroundColor === guessColor.textContent) {
        answer.textContent = 'Acertou!';
        countScore(3);
      } else {
        answer.textContent = 'Errou! Tente novamente!';
        // if (score.textContent >= 3) {
        //   countScore(-3);
        // }
      }
    });
  }
};

btnReset.addEventListener('click', makeBalls);

window.onload = () => {
  makeBalls();
  selectBalls();
};
