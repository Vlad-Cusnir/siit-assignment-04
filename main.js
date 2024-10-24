let counter = 0;
let lastAction = 'reset';

function updateDisplay() {
    document.getElementById('click-value').innerText = counter;
    document.getElementById('last-action').innerText = lastAction;
}

function changeValue(amount) {
    counter += amount;
    lastAction = amount > 0 ? `+${amount}` : `${amount}`;
    updateDisplay();
}

function resetValue() {
    counter = 0;
    lastAction = 'reset';
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', updateDisplay);
