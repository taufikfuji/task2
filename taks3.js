let a = 1;
let b =2 ;

function tambah(a, b) {
    return a + b;
  }
  
  function kurang(a, b) {
    return a - b;
  }
  
  function kali(a, b) {
    return a * b;
  }
  
  function bagi(a, b) {
    return a / b;
  }
  
  console.log("Penjumlahan:", tambah(a,b));
  console.log("Pengurangan:", kurang(a,b));
  console.log("Perkalian:", kali(a,b));
  console.log("Pembagian:", bagi(a,b));
  

/*=============Function Declaration========*/
let myName = "fuji taufik";

function strToLength(inputName) {
  let nameLength = inputName.length;
  return nameLength;
}

const nameDeclaration = strToLength(myName);
console.log(nameDeclaration); 

/*=============Function Expression========*/
let myName = "fuji taufik";
const strToLengthExpression = function(inputName) {
  let nameLength = inputName.length;
  return nameLength;
};

const lengthExpression = strToLengthExpression(myName);
console.log(lengthExpression); 
