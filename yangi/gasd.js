function plus() {
    let num1 = document.getElementById('num1') .value
    let num2 = document.getElementById('num2') .value
    let result = document.getElementById('result')
    result.innerText = parseInt(num1) + parseInt(num2)
}
function minus() {
    let num1 = document.getElementById('num1') .value
    let num2 = document.getElementById('num2') .value
    let result = document.getElementById('result')
    result.innerText=parseInt(num1)- parseInt(num2)
}
function share() {
    let num1 = document.getElementById('num1') .value
    let num2 = document.getElementById('num2') .value
    let result = document.getElementById('result')
    result.innerText=parseInt(num1) / parseInt(num2)
}
function culture() {
    let num1 = document.getElementById('num1') .value
    let num2 = document.getElementById('num2') .value
    let result = document.getElementById('result')
    result.innerText=parseInt(num1) * parseInt(num2)
}