const player_X = 'X';
const player_O = 'O';
let queue = true;
let clicked = 0
let boxes = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

function boxClicked(which) {
    if (queue)
        document.getElementById(which).innerHTML = player_X;
    else
        document.getElementById(which).innerHTML = player_O

    document.getElementById(which).classList.add('disabled-div');

    queue = !queue
    clicked++

    boxes[which.charAt(3) - 1] = document.getElementById(which).textContent

    checkDraw()
    checkWinned()


}

function checkDraw() {
    if (clicked === 9) {
        document.getElementById('draw').innerHTML = 'DRAW !'

        document.getElementById('restart').innerHTML = 'Restart game'
        document.getElementById('restart').classList.remove('disabled-div')


        document.getElementById('newGame').innerHTML = 'New Game'
        document.getElementById('newGame').classList.remove('disabled-div')


    }


}

function checkWinned() {
    if (boxes[0] === boxes[1] && boxes[0] === boxes[2])
        calculate(boxes[0])


    if (boxes[3] === boxes[4] && boxes[3] === boxes[5])
        calculate(boxes[3])


    if (boxes[6] === boxes[7] && boxes[6] === boxes[8])
        calculate(boxes[6])


    if (boxes[2] === boxes[4] && boxes[2] === boxes[6])
        calculate(boxes[2])


    if (boxes[0] === boxes[4] && boxes[0] === boxes[8])
        calculate(boxes[0])


    if (boxes[0] === boxes[3] && boxes[0] === boxes[6])
        calculate(boxes[0])


    if (boxes[1] === boxes[4] && boxes[1] === boxes[7])
        calculate(boxes[1])


    if (boxes[2] === boxes[5] && boxes[2] === boxes[8])
        calculate(boxes[2])

}

function calculate(winned) {
    let result = localStorage.getItem('player_' + winned)

    if (result !== null)
        localStorage.setItem('player_' + winned, parseInt(result) + 1)
    else
        localStorage.setItem('player_' + winned,  1)

    disableBoxes()
    viewResult()

}

function viewResult() {

    document.getElementById('player_X').innerHTML = localStorage.getItem('player_X');
    document.getElementById('player_O').innerHTML = localStorage.getItem('player_O');
}

viewResult()


function disableBoxes() {
    for (let i = 1; i < 9; i++) {
        document.getElementById('box' + i).classList.add('disabled-div')
    }
    document.getElementById('restart').innerHTML = 'restart game'
    document.getElementById('restart').classList.remove('disabled-div')
    document.getElementById('newGame').innerHTML = 'newGame'
    document.getElementById('newGame').classList.remove('disabled-div')


    document.getElementById('draw').innerHTML = ''

}

function newGame() {
    localStorage.removeItem('player_X')
    localStorage.removeItem('player_O')
    location.reload()
}










