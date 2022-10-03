const result = document.getElementById("result");
var firstNumber, secondNumber, mathAction, mathResult;
let isActive = false;
let isCalculated = false;

function numberClick(value) {
    isCalculated = false;
    if(isActive == true) {
        result.innerHTML = "";
        isActive = false;
    }
    if(result.innerHTML == 0) {
        result.innerHTML = value;
    } else {
        result.innerHTML += value;
    }
    console.log("I got clicked" + value);
    
}

function allClear() {
    mathResult = 0;
    firstNumber = 0;
    secondNumber = 0;
    result.innerHTML = 0;
}

function activeFactor(value) {
    firstNumber = result.innerHTML;
    isActive = true;
    mathAction = value;
}

function equalsWith() {
    if(isCalculated == false) {
        secondNumber = result.innerHTML;
    }
    let one = parseFloat(firstNumber);
    let two = parseFloat(secondNumber);
    if(mathAction == 'add') {
        mathResult = one + two;
    } else if(mathAction == 'subtract') {
        mathResult = one - two;
    } else if(mathAction == 'divide') {
        mathResult = one / two;
    } else {
        mathResult = one * two;
    }
    isActive = true;
    isCalculated = true;
    result.innerHTML = mathResult;
    console.log("Esimene number " + one);
    console.log("Teine number " + two);

}

function posNeg() {
    let number = parseInt(result.innerHTML);
    result.innerHTML = -number;
}

function percentage() {
    let number = parseInt(result.innerHTML);
    result.innerHTML = number / 100;
}