function sum() {
    if (!historyzeroed) {
        let displayHistory = document.querySelector('.calc-history');
        let displayCurrent = document.querySelector('.calc-current-number');
        result = result + Number(displayCurrent.textContent);
        displayHistory.textContent = result + ' +';
        numEnteredBefore = 0;
        displayCurrent.textContent = '0'
    }
    else {
        result = 0;
        let displayHistory = document.querySelector('.calc-history');
        let displayCurrent = document.querySelector('.calc-current-number');
        result = result + Number(displayCurrent.textContent);
        displayHistory.textContent = result + ' +';
        numEnteredBefore = 0;
        displayCurrent.textContent = '0'
        historyzeroed = 0;
    }
}

function subtract() {
    if (!historyzeroed) {
        let displayHistory = document.querySelector('.calc-history');
        let displayCurrent = document.querySelector('.calc-current-number');
        result = result - Number(displayCurrent.textContent);
        displayHistory.textContent = result + ' -';
        numEnteredBefore = 0;
        displayCurrent.textContent = '0'
    }
    else {
        result = 0;
        let displayHistory = document.querySelector('.calc-history');
        let displayCurrent = document.querySelector('.calc-current-number');
        result = result - Number(displayCurrent.textContent);
        displayHistory.textContent = result + ' -';
        numEnteredBefore = 0;
        displayCurrent.textContent = '0'
        historyzeroed = 0;
    }
}

function multiply() {
    if (!historyzeroed) {
        let displayHistory = document.querySelector('.calc-history');
        let displayCurrent = document.querySelector('.calc-current-number');
        result = result * Number(displayCurrent.textContent);
        displayHistory.textContent = result + ' *';
        numEnteredBefore = 0;
        displayCurrent.textContent = '0'
    }
    else {
        result = 1;
        let displayHistory = document.querySelector('.calc-history');
        let displayCurrent = document.querySelector('.calc-current-number');
        result = result * Number(displayCurrent.textContent);
        displayHistory.textContent = result + ' *';
        numEnteredBefore = 0;
        displayCurrent.textContent = '0'
        historyzeroed = 0;
    }
}

function divide() {
    let displayHistory = document.querySelector('.calc-history');
    let displayCurrent = document.querySelector('.calc-current-number');
    if (displayHistory.textContent !== '0') {
        console.log(result)
        console.log(Number(displayCurrent.textContent))
        result = result / Number(displayCurrent.textContent);
        displayHistory.textContent = result + ' /';
        numEnteredBefore = 0;
        displayCurrent.textContent = '0'
    }
    else if (displayHistory.textContent === '0') {
        console.log('2')
        result = Number(displayCurrent.textContent);
        displayHistory.textContent = displayCurrent.textContent + ' /';
        numEnteredBefore = 0;
        displayCurrent.textContent = '0'
        historyzeroed = 0;


    }
}

let result = 0;

window.addEventListener('keydown',(e)=>console.log(e))

const calcBody = document.querySelector('.calc-body');
let displayHistory = document.querySelector('.calc-history');
let displayCurrent = document.querySelector('.calc-current-number');

displayCurrent.textContent='0';
displayHistory.textContent='0';
historyzeroed = 1;

numEnteredBefore = 0;
function keyClick(e) {
    displayCurrent = document.querySelector('.calc-current-number');
    if (displayCurrent.textContent.length < 16) {
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
}}

window.addEventListener('keydown',(e)=> {
    displayCurrent = document.querySelector('.calc-current-number');
    if (displayCurrent.textContent.length < 16) {
        let IncludeFkeys = e.key.includes('F');
        if (/\d/.test(e.code) && !IncludeFkeys ) {
            let changeNumKeyColor = document.querySelector(`.num${e.key}`);
            changeNumKeyColor.style.backgroundColor = '#6b6b6b';
            if (!numEnteredBefore && e.key !== '0') {
                displayCurrent = document.querySelector('.calc-current-number');
                displayCurrent.textContent = ''
                numEnteredBefore = 1;
                displayCurrent.textContent += e.key;
            }
            else if (!numEnteredBefore && e.key === '0') {
                displayCurrent = document.querySelector('.calc-current-number');
                displayCurrent.textContent = '0';
            }
            else {
                displayCurrent = document.querySelector('.calc-current-number');
                displayCurrent.textContent += e.key;
            }
            window.addEventListener('keyup', ()=> changeNumKeyColor.style.backgroundColor = '#eeeeee' )
        }
    }
})

window.addEventListener('keydown',(e)=>{
    if (e.key==='Backspace') {
        deleteLastNum();
    }
})

window.addEventListener('keydown',(e)=>{
    if (e.key==='Delete') {
        clearDisplay();
    }
})

window.addEventListener('keyup', ()=> {
    let deleteButton = document.querySelector('.delete-button');
    deleteButton.style.backgroundColor = '#B0C4DEFF';
    let clearButton = document.querySelector('.clear-button');
    clearButton.style.backgroundColor = '#faa';
    let operatorKeys = document.querySelectorAll('.operator-keys');
    operatorKeys.forEach((operator) => {
        operator.style.backgroundColor = '#f8a951';
    })
})

function NumkeyIn(e) {
    e.target.style.backgroundColor = '#6b6b6b';
}
function NumkeyOut(e) {
    e.target.style.backgroundColor = '#eeeeee';
}

for (let i=0;i<10;i++) {
    let iterkey = document.querySelector(`.num${i}`);
    iterkey.addEventListener('click',keyClick);
    iterkey.addEventListener('mouseup',NumkeyOut);
    iterkey.addEventListener('mousedown',NumkeyIn);
    iterkey.addEventListener('keyup',NumkeyOut);
    iterkey.addEventListener('keydown',NumkeyIn);
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
    result = 0;
    historyzeroed = 1;
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

window.addEventListener('keydown',(e)=>{
    if (e.key==='+') {
        sum();
}})

window.addEventListener('keydown',(e)=>{
    if (e.key==='-') {
        subtract();
    }})

window.addEventListener('keydown',(e)=>{
    if (e.key==='*') {
        multiply();
    }})

window.addEventListener('keydown',(e)=>{
    if (e.key==='/') {
        divide();
        }
        })

window.addEventListener('keydown',(e)=>{
    if (e.key ==='.') {
        addpoint();
    }
})

function addpoint() {
    let displayCurrent = document.querySelector('.calc-current-number');
    if (!displayCurrent.textContent.includes('.')) {
        displayCurrent.textContent+='.';
        numEnteredBefore = 1;
    }
}

function equal() {
    displayHistory = document.querySelector('.calc-history');
    displayCurrent = document.querySelector('.calc-current-number');
    if (displayHistory.textContent.includes('+')) {
        sum()
    }
    if (displayHistory.textContent.includes('-')) {
        subtract()
    }
    if (displayHistory.textContent.includes('*')) {
        multiply()
    }
    if (displayHistory.textContent.includes('/')) {
        divide()
    }
}

window.addEventListener('keydown',(e)=> {
    if (e.key === 'Enter') {
        equal()
    }
})