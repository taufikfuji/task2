const a = 5;
const b = 5;

function calculator(option, a, b) {
  if (option == "add") {
    return a + b;
  } else if (option == "subtract") {
    return a - b;
  } else if (option == "multiply") {
    return a * b;
  } else if (option == "divide") {
    return a / b;
  } else {
    return "error";
  }
}

console.log("Tambah:", calculator("add", a, b));
console.log("Kurang:", calculator("subtract", a, b));
console.log("Kali:", calculator("multiply", a, b));
console.log("Bagi:", calculator("divide", a, b));


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
