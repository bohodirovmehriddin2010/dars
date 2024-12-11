let productPrice = 2000000
let foiz = 20 ;

function calculate(month){
    changeBtn(month)


    let prasent = document.getElementById('prasent')
    let result = document.getElementById('result')

    if (month === 3)
        foiz = 20
    if (month === 6)
        foiz = 22
    if (month === 12)
        foiz = 25

    prasent.innerText = foiz

    let  sum = ((productPrice / 100) * foiz + productPrice ) / month
    result.innerText = formatCurrency(sum) + " cym"

}

function formatCurrency(price){
    return (price) .toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&')
}

function changeBtn(month){
    let btn3 = document.getElementById('btn3')
    let btn6 = document.getElementById('btn6')
    let btn12 = document.getElementById('btn12')

    if (month === 3){
    btn3.classList.add('btn-primary')
    btn3.classList.remove('btn-outline-primary')

    btn6.classList.remove('btn-primary')
    btn6.classList.add('btn-outline-primary')

    btn12.classList.remove('btn-primary')
    btn12.classList.add('btn-outline-primary')

    }

    if (month === 6){
        btn6.classList.add('btn-primary')
        btn6.classList.remove('btn-outline-primary')

        btn3.classList.remove('btn-primary')
        btn3.classList.add('btn-outline-primary')

        btn12.classList.remove('btn-primary')
        btn12.classList.add('btn-outline-primary')

    }
    if (month === 12){
        btn12.classList.add('btn-primary')
        btn12.classList.remove('btn-outline-primary')

        btn6.classList.remove('btn-primary')
        btn6.classList.add('btn-outline-primary')

        btn3.classList.remove('btn-primary')
        btn3.classList.add('btn-outline-primary')

    }
}