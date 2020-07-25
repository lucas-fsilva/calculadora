var display = document.querySelector('.display')
var n1 = ''
var n2 = ''
var operator = null
document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('btn-num')) {
        n2 += el.innerText
        addToDisplay(n2)
    }
    if (el.classList.contains('btn-clear')) {
        clearDisplay()
    }
    if (el.classList.contains('btn-del')) {
        clearOne()
    }
    if (el.classList.contains('btn-eq')) {
        result()
    }
    if (el.classList.contains('btn-operator')) {
        addOperator(el.innerText)
    }
});

function addToDisplay(value) {
    display.value = value
}

function clearDisplay() {
    display.value = ' '
    n1 =''
    n2= ''
}
function clearOne() {
    display.value = display.value.slice(0, -1)
}

function result() {
    n1 = parseInt(n1)
    n2 = parseInt(n2)
    var result
    if (operator === '+') {
        result = n1 + n2
    }
    if (operator === '-') {
        result = n1 - n2
    }
    if (operator === '/') {
        result = n1 / n2
    }
    if (operator === '*') {
        result = n1 * n2
    }
    addToDisplay(result)
}

function addOperator(op) {
    operator = op
    n1 = n2
    n2 = ''
    addToDisplay(operator)
}