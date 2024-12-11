let queueRed = true
let queueOrange = false
let queueGreen = false
let isOrangeTored = false

let red = document.getElementById('red')
let orange = document.getElementById('orange')
let green = document.getElementById('green')

let personRed = document.getElementById('person-red')
let personRedImg = document.getElementById('person-red-img')
let personGreen = document.getElementById('person-green')
let personGreenImg = document.getElementById('person-red-img')

function trafficLight(){


    if (queueRed) {
        red.classList.remove('red')
        red.classList.add('red-off')

        orange.classList.remove('orange-off')
        orange.classList.add('orange')

        queueRed = false
        queueOrange = true

    } else if (queueOrange) {
        if (isOrangeTored) {
            orange.classList.remove('orange')
            orange.classList.add('orange-off')

            red.classList.remove('red-off')
            red.classList.add('red')

            queueOrange = false
            queueRed = true

            personWalking(false)

        } else {
            orange.classList.remove('orange')
            orange.classList.add('orange-off')

            green.classList.remove('green-off')
            green.classList.add('green')

            queueOrange = false
            queueGreen = true

            personWalking(true)

        }

        isOrangeTored = !isOrangeTored


    } else if (queueGreen) {
        green.classList.remove('green')
        green.classList.add('green-off')

        orange.classList.remove('orange-off')
        orange.classList.add('orange')

        queueGreen = false
        queueOrange = true

    }
}


function personWalking(isGrant){
    if (isGrant){
        personGreen.classList.remove('bg-light')
        personGreen.classList.add('bg-dark')
        personGreenImg.classList.remove('opacity-100')
        personGreenImg.classList.add('opacity-25')

        personRed.classList.add('bg-light')
        personRed.classList.remove('bg-dark')
        personRedImg.classList.add('opacity-100')

        personRedImg.classList.remove('opacity-25')


    }else {

        personRed.classList.remove('bg-light')
        personRed.classList.add('bg-dark')
        personRedImg.classList.remove('opacity-100')
        personRedImg.classList.add('opacity-25')

        personGreen.classList.add('bg-light')
        personGreen.classList.remove('bg-dark')
        personGreenImg.classList.add('opacity-100')
        personGreenImg.classList.remove('opacity-25')

    }

}

setInterval(trafficLight,3000)






























