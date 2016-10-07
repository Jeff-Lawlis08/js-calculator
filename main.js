
console.dir(document);

document.querySelector('.button').onclick=function() {
  var input1=Number(document.querySelector('.input1').value);
  var input2=Number(document.querySelector('.input2').value);
  var output=input1+input2;
document.querySelector('.output').value=output;
};
