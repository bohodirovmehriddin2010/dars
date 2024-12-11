let usd = 12646
let rub = 142
let eur = 13774
let kzt = 28

let rubUSD = 89.25
let rubEUR = 95.82

let selectedCurrency = 'usd'
let selectedToCurrency = 'uzs'

async function valyutaKursi(){
    try {
const response = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/USD/2024-07-15/")
    return response.json()
    }catch (error){
        console.log(error)
    }
}
async function getUsd(){
    const data = await valyutaKursi()
    console.log(data[0]['Rate'])
    usd = data [0]['Rate']
}
getUsd()

console.log(typeof usd)


let Currency = document.getElementById('Currency')
Currency.addEventListener("change", (event) => {
    selectedCurrency = event.target.value;
    calculate()
});
let ToCurrency = document.getElementById('ToCurrency')
ToCurrency.addEventListener("change", (event) => {
    selectedToCurrency = event.target.value;

    function ToCurrencycalculate() {

    }

    ToCurrencycalculate()
});


function calculate() {
    let summa = document.getElementById('summa').value
    let result = document.getElementById('result')
    let info = document.getElementById('info')

    let sum = 0

    switch (selectedCurrency) {
        case "usd":
            sum = parseInt(summa) * usd
            info.innerText = "1 USD = " + formatCurrency(usd) + "UZS"
            break;
        case "rub":
            sum = parseInt(summa) * rub
            info.innerText = "1 RUB = " + formatCurrency(rub) + "UZS"
            break;
        case "kzt":
            sum = parseInt(summa) * kzt
            info.innerText = "1 KZT = " + formatCurrency(kzt) + "UZS"
            break;
        case "eur":

            if (selectedToCurrency === 'uzs') {
                sum = parseInt(summa) * rubEUR
                info.innerText = "1 EUR = " + formatToCurrency(eur) + "UZS"
            }

            if (selectedToCurrency === 'rub') {
                sum = parseInt(summa) * rubEUR
                info.innerText = "1 EUR = " + formatCurrency(eur) + "rub"
            }
            break;


    }

    result.innerText = formatCurrency(sum)

}

function toCurrencyCalculate(){
    let summa = document.getElementById('summa').value
    let result = document.getElementById('result')
    let info = document.getElementById('info')

    let sum = 0

    switch (selectedCurrency){
        case "rub":
            sum = parseFloat(summa) * rubUSD
            info.innerText = "1 USD = " + formatCurrency(sum) + "RUB"
            break;

            if (selectedToCurrency === 'usd'){
                sum = parseFloat(summa) * usd
                info.innerText = "1 USD = " + formatCurrency(sum) + "UZS"
            }
            if (selectedToCurrency === 'eur'){
                sum = parseFloat(summa) * eur
                info.innerText = "1 EUR = " + formatCurrency(sum) + "UZS"
            }


        break;


    }

result.innerText = formatCurrency(sum)

}

function formatCurrency(value){
    return new Intl.NumberFormat('uz-uz',
        {style: 'currency', currency:'UZS',minimumFractionDigits: 2}).format(value)

}


function formatCurrencyOld(price) {

    return price



//console.log("price",price)
  //  return (price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&')
}






