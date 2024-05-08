let currentInput = '';

function calculate(value) {
    if(value === '=') {
        currentInput = eval(currentInput);
    } else if(value === 'C') {
        currentInput = '';
    } else {
        currentInput += value;
    }
    document.getElementById('display').innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').innerText = 0;
}
