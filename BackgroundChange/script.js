const colorBtn = document.querySelector('.bg-change');
// const bgBody = document.body;
const bgBody = document.querySelector('body');
const color = document.querySelector('.hex');

const basicColors = ['red', 'blue','yellow', 'pink','green','orange','purple','indigo','violet','white','brown','gray']
const hexNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

colorBtn.addEventListener('click', () => {
changeBgColor();
});

function changeBgColor(){

 // Change color form given basicColors
  let random = Math.floor(Math.random()*basicColors.length);
  bgBody.style.backgroundColor = basicColors[random];
  color.innerText = `Background color is : ${basicColors[random]}`;

  //Change color in Hex form
  let hexColor = '#';

  for(let i=0; i<6; i++){
    let hexValue = getHexCode();
    hexColor +=  hexNumber[hexValue];
  }
  bgBody.style.backgroundColor = hexColor;
  color.innerText = `hexColor code is : ${hexColor}`;


  //Change color in RGB form

  const firstCol = getRandomRGB();
  const secondCol = getRandomRGB();
  const thirdCol = getRandomRGB();

  const colorString = `rgb(${firstCol}, ${secondCol}, ${thirdCol})`;

  bgBody.style.backgroundColor = colorString;
  color.innerHTML= `RGB color is : ${colorString}`; 
}

function getRandomRGB(){
  return Math.floor(Math.random()*256);
}

function getHexCode(){
  return Math.floor(Math.random()*hexNumber.length);
}