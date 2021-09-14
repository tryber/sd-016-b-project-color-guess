const randomColor = document.getElementById('rgb-color');
randomColor.innerHTML = '('
let numbers = [];
for (let i = 0; i < 3; i += 1) {
  numbers.push(Math.round(Math.random() * 255));
  if (i === 2) {
    randomColor.innerHTML += `${numbers[i]}`
  } else {
    randomColor.innerHTML += `${numbers[i]}, `
    console.log();
  }
}
randomColor.innerHTML += ')'

