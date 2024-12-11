let user_variant = ''
let comp_variant = ''

function startGame(why) {
    document.getElementById('user').src = 'rock.png'
    document.getElementById('comp').src = 'rock.png'
    document.getElementById('matn').innerText = "Kuting..."

    user_variant = why

    startStopShake(true)
    setTimeout(stopGame, 3000)
}

function setUserHand() {
    let user = document.getElementById('user')

    if (user_variant === 'tosh')
        user.src = 'rock.png'
    if (user_variant === 'qaychi')
        user.src = 'scissors.png'
    if (user_variant === 'qogoz')
        user.src = 'paper.png'
}

function setCompHand() {
    let comp = document.getElementById('comp')

    let rand = Math.floor(Math.random() * 3); // 0, 1, 2

    if (rand === 0){
        comp.src = 'rock.png'
        comp_variant = 'tosh'
    }
    if (rand === 1){
        comp.src = 'scissors.png'
        comp_variant = 'qaychi'
    }
    if (rand === 2){
        comp.src = 'paper.png'
        comp_variant = 'qogoz'
    }
}

function stopGame() {
    startStopShake(false)
    setUserHand()
    setCompHand()
    checkWin()
}

function startStopShake(is_start) {
    let user = document.getElementById('user')
    let comp = document.getElementById('comp')

    if (is_start){
        user.classList.add('shake-user')
        comp.classList.add('shake-comp')
    }else {
        user.classList.remove('shake-user')
        comp.classList.remove('shake-comp')
    }
}

function checkWin() {
    if (user_variant === comp_variant)
        document.getElementById('matn').innerText = "Durang!!"

    if (user_variant === 'qogoz' && comp_variant === 'tosh')
        document.getElementById('matn').innerText = "Foydalanuvchi yutdi!!!"

    if (user_variant === 'qaychi' && comp_variant === 'qogoz')
        document.getElementById('matn').innerText = "Foydalanuvchi yutdi!!!"

    if (user_variant === 'tosh' && comp_variant === 'qaychi')
        document.getElementById('matn').innerText = "Foydalanuvchi yutdi!!!"

    if (user_variant === 'tosh' && comp_variant === 'qogoz')
        document.getElementById('matn').innerText = "Kompyuter yutdi!!!"

    if (user_variant === 'qaychi' && comp_variant === 'tosh')
        document.getElementById('matn').innerText = "Kompyuter yutdi!!!"

    if (user_variant === 'qogoz' && comp_variant === 'qaychi')
        document.getElementById('matn').innerText = "Kompyuter yutdi!!!"
}












