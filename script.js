//initialize all buttons
const oneB = document.getElementById('one');
const twoB = document.getElementById('two');
const threeB = document.getElementById('three');
const fourB = document.getElementById('four');
const fiveB = document.getElementById('five');
const sixB = document.getElementById('six');
const sevenB = document.getElementById('seven');
const eightB = document.getElementById('eight');
const nineB = document.getElementById('nine');
const zeroB = document.getElementById('zero');
const decimalB = document.getElementById('decimal');
const multiB = document.getElementById('multi');
const divideB = document.getElementById('divide');
const clearB = document.getElementById('clear');
const backB = document.getElementById('back');
const addB = document.getElementById('add');
const subB = document.getElementById('subtract');
const negB = document.getElementById('negative');
const sumB = document.getElementById('sum');

///TO-DO-LIST 
// 
// create functions: a function to append this.value to the above variables, a function called from the sum
// button that calls another function based on the operator that was selected, 
// 
// first i need to make the pseudo-code for this.
// Everytime a number button is pressed, it should be added to a firstNum variable, and the setDisp function should be ran
// then when an operator button is pressed, it should reset the display to just the operator, and reset again when typing 
// the next nums which are also added to a secondNum variable. 
// the operator button that was pressed should be passed to a opNum variable to be used in the sum function. 
// after the sum button is pressed, a function specific to the operator that was pressed should be ran, resetting 
// the display and setting the display as the sum. 
// the result should be set as the new firstNum variable, so the result can be used in another calc///



//initialize buttons
oneB.addEventListener('click', addendNum)
twoB.addEventListener('click', addendNum)
threeB.addEventListener('click', addendNum)
fourB.addEventListener('click', addendNum)
fiveB.addEventListener('click', addendNum)
sixB.addEventListener('click', addendNum)
sevenB.addEventListener('click', addendNum)
eightB.addEventListener('click', addendNum)
nineB.addEventListener('click', addendNum)
zeroB.addEventListener('click', addendNum)
decimalB.addEventListener('click', addendNum)

//operator buttons
multiB.addEventListener('click', setOperator)
divideB.addEventListener('click', setOperator)
addB.addEventListener('click', setOperator)
subB.addEventListener('click', setOperator)
negB.addEventListener('click', setNegative)
sumB.addEventListener('click', sum)

//display buttons
clearB.addEventListener('click', clearDisplay)
backB.addEventListener('click', backNum)

 //initialize display
const display = document.getElementById('displayNum');

var displayText = '';

const operators = {

    '+': function(firstNum, secondNum){return sumNum = firstNum + secondNum},
    '-': function(firstNum, secondNum){return sumNum = firstNum - secondNum},
    '*': function(firstNum, secondNum){return sumNum = firstNum * secondNum},
    '/': function(firstNum, secondNum){return sumNum = firstNum / secondNum},

};

function setDisp(){
    display.innerText = displayText;
}
var sumNum = '';
var operator = '';
var firstStr = '';
var firstNum = Number(firstStr);

var secondStr = '';
var secondNum = Number(secondStr);
//if an operator has been selected, add the selected value to first num, opposite for secondNum
function addendNum(){
    if(sumNum){clearDisplay()}

    if (! operator){
        firstStr += this.value;
        displayText = firstStr;
        setDisp();
        console.log(firstStr);
    }

    if(operator){
        secondStr += this.value;
        displayText = secondStr;
        setDisp();
        console.log(secondStr);
    
    }
}
function setOperator(){
    if(operator){return console.log('operator already selected')}

    if(! firstStr) 

        {console.log('Operator selected without an initial value!')

    } else{

        operator = this.value;
        displayText = operator;
        setDisp();
        console.log(operator);

    };

}
function setNegative(){

    if(! operator){
        firstStr = -Math.abs(Number(firstStr))
        displayText = firstStr;
    }
    else if(operator){
        secondStr = -Math.abs(Number(secondStr))
        displayText = secondStr;
    }
    setDisp();
    console.log('changed to negative');

}

function clearDisplay(){
    sumNum = ''
    displayText = '';
    operator = '';
    firstStr = '';
    secondStr = '';
    setDisp();
    console.log('display cleared');
}

function backNum(){
 if(! secondStr && ! operator){
    firstStr = firstStr.slice(0, -1);
    displayText = firstStr;
    setDisp();
 }
 else if(! secondStr && operator){
    operator = '';
    displayText = operator;
    setDisp();
 }
 else if (secondStr){
    secondStr = secondStr.slice(0, -1);
    displayText = secondStr;
    setDisp();
 }
 else{
    displayText = 'ERROR'
    setDisp();
 }
 console.log('backspace');
}

function sum(){
    firstNum = Number(firstStr);
    secondNum = Number(secondStr);

    if(operator == '/' && secondNum == 0){
        displayText = 'Nice try';
        setDisp();
        console.log('divided by zero');
    }
    else{
        sumNum = operators[operator](firstNum, secondNum);
        displayText = sumNum;
        setDisp();
        console.log('Sum:' + displayText);
       };

}




