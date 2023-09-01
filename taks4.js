
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

let result = calculator (2,5,"+");
console.log(result);


let konversiCelsiusKeFahrenheit = (celcius) => fahrenhiet = (celcius * 9/5) + 32;
console.log(konversiCelsiusKeFahrenheit(25));
