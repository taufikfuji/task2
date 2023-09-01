let input1 = 9
let input2 = 10
let operation = "+"

let calculator = (input1,input2,operator)=> {
    if (typeof input1 !== "number" || typeof input2 !=="number"){
        return "invalid input, please input number";
    }else if (operation=="+"){
        return input1+input2;
    }else if (operation=="-"){
        return input1-input2;
    }else if(operation=="*"){
        return input1*input2;
    }else if (operation=="/"){
        return input1/input2;
    }else{
        return "error";
    }
}

let result = calculator (input1,input2,operation);
console.log(result);