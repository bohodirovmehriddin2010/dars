function tarjimon(){
    let matn = document.getElementById('matn')
    let natija = document.getElementById('natija')

    switch (matn.value){
        case 'hello':
        case 'Hello':
            natija.innerText = 'salom'
            break;
        case 'book':
        case 'Book':
            natija.innerText = 'kitob'
            break;
        case 'house':
        case 'House':
            natija.innerText = 'uy'
            break;

        default:
            natija.innerText = ''
    }
}