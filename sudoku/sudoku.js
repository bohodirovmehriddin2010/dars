let oldOID = "null";

function clicked(id) {
    if (oldOID !== "null") {
        document.getElementById(oldOID).style.backgroundColor = "";
    }

    document.getElementById(id).style.backgroundColor = "aqua";
    oldOID = id;
}

function writeNumber(number) {
    document.getElementById(oldOID).innerText = number;

    checkGameOver()
}
function checkGameOver(){
    if (
        document.getElementById('box1').textContent.trim() !== "" &&
        document.getElementById('box2').textContent.trim() !== "" &&
        document.getElementById('box3').textContent.trim() !== "" &&
        document.getElementById('box4').textContent.trim() !== "" &&
        document.getElementById('box5').textContent.trim() !== "" &&
        document.getElementById('box6').textContent.trim() !== "" &&
        document.getElementById('box7').textContent.trim() !== "" &&
        document.getElementById('box8').textContent.trim() !== "" &&
        document.getElementById('box9').textContent.trim() !== "" &&
        document.getElementById('box10').textContent.trim() !== "" &&
        document.getElementById('box11').textContent.trim() !== "" &&
        document.getElementById('box12').textContent.trim() !== "" &&
        document.getElementById('box13').textContent.trim() !== "" &&
        document.getElementById('box14').textContent.trim() !== "" &&
        document.getElementById('box15').textContent.trim() !== "" &&
        document.getElementById('box16').textContent.trim() !== ""
    ){

        document.getElementById('numbers').classList.add('d-none')
        document.getElementById('checkWon').classList.remove('d-none')
        document.getElementById('won').classList.add('d-none')
        document.getElementById('fail').classList.add('d-none')


    }
}


function checkWon() {
    document.getElementById("checkWon").classList.add('d-none')
    let check1 = checkEquals('box1', 'box2', 'box5', 'box6')
    let check2 = checkEquals('box3', 'box4', 'box7', 'box8')
    let check3 = checkEquals('box9', 'box10', 'box13', 'box14')
    let check4 = checkEquals('box11', 'box12', 'box15', 'box16')
    let check5 = checkEquals('box1', 'box2', 'box3', 'box4')
    let check6 = checkEquals('box5', 'box6', 'box7', 'box8')
    let check7 = checkEquals('box9', 'box10', 'box11', 'box12')
    let check8 = checkEquals('box13', 'box14', 'box15', 'box16')
    let check9 = checkEquals('box1', 'box5', 'box9', 'box13')
    let check10 = checkEquals('box2', 'box6', 'box10', 'box14')
    let check11 = checkEquals('box3', 'box7', 'box11', 'box15')
    let check12 = checkEquals('box4', 'box8', 'box12', 'box16')


    if (check1 && check2 && check3 && check4 && check5 &&
        check6 && check7 && check8 && check9 && check10 &&
        check11 && check12
    ) {
        document.getElementById("won").classList.remove('d-none')

    } else {
        document.getElementById("fail").classList.remove('d-none')
    }
}


function checkEquals(col1,col2,col3,col4){
    if (
        document.getElementById(col1).textContent.trim() !==
        document.getElementById(col2).textContent.trim() &&
        document.getElementById(col1).textContent.trim() !==
        document.getElementById(col3).textContent.trim() &&
        document.getElementById(col1).textContent.trim() !==
        document.getElementById(col4).textContent.trim() &&
        document.getElementById(col2).textContent.trim() !==
        document.getElementById(col3).textContent.trim() &&
        document.getElementById(col2).textContent.trim() !==
        document.getElementById(col4).textContent.trim() &&
        document.getElementById(col3).textContent.trim() !==
        document.getElementById(col4).textContent.trim()

    ){
        return true
    }

    return false
}







