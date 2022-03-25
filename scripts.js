function sum(num1,num2) {
    return(num1+num2);
}

function subtract(num1,num2) {
    return(num1-num2);
}

function multiply(num1,num2) {
    return(num1*num2);
}

function divide(num1,num2) {
    if (num2===0) {
        return('ERROR!')
    }
    else return (num1/num2)
}

///window.addEventListener('keydown',(e)=> console.log(e));

const calcBody = document.querySelector('.calc-body');
var displayHistory = document.querySelector('.calc-history');
var displayCurrent = document.querySelector('.calc-current-number');

displayCurrent.textContent='0';
displayHistory.textContent='0';

numEnteredBefore = 0;
function keyClick(e,displayCurrent) {
    if (!numEnteredBefore && e.target.textContent !== '0') {
        displayCurrent = document.querySelector('.calc-current-number');
        displayCurrent.textContent = ''
        numEnteredBefore = 1;
        displayCurrent.textContent += e.target.textContent;
    }
    else if (!numEnteredBefore && e.target.textContent === '0') {
        displayCurrent = document.querySelector('.calc-current-number');
        displayCurrent.textContent = '0';
    }
    else {
        displayCurrent = document.querySelector('.calc-current-number');
        displayCurrent.textContent += e.target.textContent;

    }
}

function NumkeyIn(e) {
    e.target.style.backgroundColor = '#6b6b6b';
}
function NumkeyOut(e) {
    e.target.style.backgroundColor = '#eeeeee';
}

for (i=0;i<10;i++) {
    let iterkey = document.querySelector(`.num${i}`);
    iterkey.addEventListener('click',keyClick);
    iterkey.addEventListener('mouseup',NumkeyOut);
    iterkey.addEventListener('mousedown',NumkeyIn);
}

let deleteButton = document.querySelector('.delete-button');
deleteButton.addEventListener('click',deleteLastNum);
deleteButton.addEventListener('mouseup',deleteOut);
deleteButton.addEventListener('mousedown',deleteIn);

let clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click',clearDisplay);
clearButton.addEventListener('mouseup',clearOut);
clearButton.addEventListener('mousedown',clearIn);

function clearDisplay() {
    displayHistory = document.querySelector('.calc-history');
    displayCurrent = document.querySelector('.calc-current-number');
    numEnteredBefore = 0;
    displayCurrent.textContent = '0';
    displayHistory.textContent = '0';
}

function deleteLastNum() {
    displayCurrent = document.querySelector('.calc-current-number');
    displayCurrent.textContent=displayCurrent.textContent.slice(0,-1);
    if (displayCurrent.textContent==='') {
        displayCurrent.textContent = '0';
        numEnteredBefore = 0;
    }
}

function deleteIn(e) {
    e.target.style.backgroundColor = '#5a9bf1';
}
function deleteOut(e) {
    e.target.style.backgroundColor = '#B0C4DEFF';
}

function clearIn(e) {
    e.target.style.backgroundColor = '#ec7070';
}
function clearOut(e) {
    e.target.style.backgroundColor = '#faa';
}

let operatorKeys = document.querySelectorAll('.operator-keys');
operatorKeys.forEach((operator) => {
    operator.addEventListener('mousedown',operatorIn);
    operator.addEventListener('mouseup',operatorOut);
})

function operatorIn(e) {
    e.target.style.backgroundColor = '#ff8600'
}
function operatorOut(e) {
    e.target.style.backgroundColor = '#f8a951'
}