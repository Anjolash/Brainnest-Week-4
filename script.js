const buttons = document.querySelectorAll(".buttons");
const operators = document.querySelectorAll(".operator");
const resetButton = document.querySelectorAll(".resetButton");
const decimalPoint = document.querySelectorAll(".decimalPoint");
const deleteButton = document.querySelectorAll(".deleteButton")

const calculator = {
    displayValue: "0",
    firstVal: null,
    waitingForSecondVal: false,
    operator: null,

}

function inputDig(val){
    const { displayValue, waitingForSecondVal } = calculator;
    if( waitingForSecondVal === true ){
        calculator.displayValue = val;
        calculator.waitingForSecondVal = false;
    }
    else{
        calculator.displayValue = displayValue === "0" ? val : displayValue + val
    }
    console.log(calculator)
    
}

function operate(){
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            let input = e.target.value;
            console.log(input)
            inputDig(input);
            screenDisplay();
        })
        
    })

    operators.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            let operator = e.target.value;
            console.log(operator)
            handleOperator(operator);
            screenDisplay();
        })
        
    })

    resetButton.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            reset();
            screenDisplay();
        })
        
    })

    decimalPoint.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            let input = e.target.value;
            console.log(input)
            dot = ".";
            if(!calculator.displayValue.includes(dot)){
                inputDig(input);
                screenDisplay();
            }
        })
        
    })

    deleteButton.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            deleteButtonOperator();
            screenDisplay();
        })
    })
}

operate()

function handleOperator(nextOperator) {
    const { firstVal, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);
    if(operator && calculator.waitingForSecondVal){
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }
    if(firstVal === null && !isNaN(inputValue)){
        calculator.firstVal = inputValue; 
    } else if(operator){
        const result = calculate(firstVal, displayValue, operator);
        calculator.displayValue = String(result);
        calculator.firstVal = result
    }
    calculator.waitingForSecondVal = true;
    calculator.operator = nextOperator;
    console.log(calculator)
}

function calculate(firstVal, secondVal, operator){
    if (operator === "+"){
        return parseFloat(firstVal) + parseFloat(secondVal);
    }
    else if (operator === "-"){
        return firstVal - secondVal;
    }
    else if(operator === "X"){
        return firstVal * secondVal;
    }
    else if(operator === "/"){
        return firstVal / secondVal;
    }
    return secondVal
}

function reset(){
    calculator.displayValue = "0";
    calculator.firstVal = null;
    calculator.waitingForSecondVal = false;
    calculator.operator = null;
    console.log(calculator);
}

function deleteButtonOperator(){
    valAfterDelete = calculator.displayValue.slice(0, -1)
    calculator.displayValue = valAfterDelete;
}

function screenDisplay(){
    const display = document.getElementById("display");
    display.value = calculator.displayValue
}

screenDisplay();



