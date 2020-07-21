
var display = document.querySelector('.display')

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('btn-num')) {
        btnForDisplay(el.innerText)
    }
    if (el.classList.contains('btn-clear')) {
        clearDisplay()
    }
    if (el.classList.contains('btn-del')) {
        clearOne()
    }
    if (el.classList.contains ('btn-eq')){
        result()
    }
});

function btnForDisplay(valor) {
    display.value += valor
}

function clearDisplay() {
    display.value = ' '
}
function clearOne() {
    display.value = display.value.slice(0, -1)
}

function result(){
    let conta = display.value;
    conta = eval(conta)
    display.value = conta;
    
}