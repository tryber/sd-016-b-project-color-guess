let balls = document.getElementsByClassName('ball');

for (let index = 0; index < balls.length; index += 1) {
  let num1 = Math.round(Math.random() * 255);
  let num2 = Math.round(Math.random() * 255);
  let num3 = Math.round(Math.random() * 255);

  balls[index].style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`
}