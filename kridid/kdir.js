function calculate() {
    let totalPrice = document.getElementById(('total-price'))
    let monthPrice = document.getElementById(('month-price'))
    let price = parseInt(document.getElementById('price').value)
    let duration = parseInt(document.getElementById('duration').value)
    let present = parseInt(document.getElementById('present').value)
    let data = document.getElementById('data')


    let fullPrice = (price / 100 + present) + price
    let fullMonthPrice = fullPrice / duration
    let ceilFullMonthPrice = Math.ceil(fullMonthPrice)

    totalPrice.innerText = formatCurrency(fullPrice)
    monthPrice.innerText = formatCurrency(ceilFullMonthPrice)

    let beforePayment = fullPrice
    let afterPayment = fullPrice

    for (let i = 1; i <= duration; i++) {
        afterPayment = Math.ceil(beforePayment) - ceilFullMonthPrice

        if (duration === i) {


            document.getElementById('kashback-price').innerText = Math.abs(afterPayment)
            afterPayment = 0
        }

        data.innerHTML +=
            '<tr>'
            + '<td>' + i + 'oy' + '</td>'
            + '<td>' + formatCurrency(beforePayment) + "so'm" + '</td>'
            + '<td>' + formatCurrency(ceilFullMonthPrice) + "so'm" + '</td>'
            + '<td>' + formatCurrency(afterPayment) + "so'm" + '</td>'
            +
            '</tr>'


        beforePayment = afterPayment

    }

}

function formatCurrency(price) {

    return (price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&')

}









