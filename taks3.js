/*===================================Declaration==============================*/
let input1 = 9
let input2 = 10
let operation = "+"

function calculator(input1, input2, operation){
    // console.log(input1,input2,operation);
    if(typeof input1 !== "number" || typeof input2 !=="number"){
        return "Invalid input, please input number";
    }
    else if(operation == "+"){
        return input1+input2

    } else if (operation == "-"){
        return input1-input2
        
    }else if (operation=="*"){
        return input1*input2

    }else if (operation=="/"){
        return input1/input2
    }else {
        return "error";
    }
}

let result = calculator(input1,input2,operation)
console.log(result);


/*===================================Ekpresion==============================*/
let input1 = 9
let input2 = 10
let operation = "+"

let calculator = function (input1, input2, operation){
    // console.log(input1,input2,operation);
    if(typeof input1 !== "number" || typeof input2 !=="number"){
        return "Invalid input, please input number";
    }
    else if(operation == "+"){
        return input1+input2

    } else if (operation == "-"){
        return input1-input2
        
    }else if (operation=="*"){
        return input1*input2

    }else if (operation=="/"){
        return input1/input2
    }else {
        return "error";
    }
}

let result = calculator(input1,input2,operation)
console.log(result);

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
