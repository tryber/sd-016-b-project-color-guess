const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');
const color5 = document.querySelector('#color5');
const color6 = document.querySelector('#color6');

function gerateColor() { // retirado a base da informação para gerar a cor aleatória do site https://www.codegrepper.com/code-examples/javascript/generate+random+rgb+color+javascript; usado no projeto pixels art também;
  function n() {
    const random = Math.random() * 255;
    return random;
  }
  const color = `rgb(${n()}, ${n()}, ${n()})`;
  return color;
}
function addColor1 (){
  color1.style.backgroundColor = gerateColor();
};
addColor1();
function addColor2 (){
  color2.style.backgroundColor = gerateColor();
};
addColor2();
function addColor3 (){
  color3.style.backgroundColor = gerateColor();
};
addColor3();
function addColor4 (){
  color4.style.backgroundColor = gerateColor();
};
addColor4();
function addColor5 (){
  color5.style.backgroundColor = gerateColor();
};
addColor5();
function addColor6 (){
  color6.style.backgroundColor = gerateColor();
};
addColor6();