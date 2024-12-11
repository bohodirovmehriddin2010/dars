let text = document.getElementById('text')

let newText = 'type me to find out how many words per minute you can type'

let index = 0

function generateText() {
    text.innerHTML = ''
    document.getElementById(newText[0]).classList.add('active')
    for (let i = 0; i < newText.length; i++)
        text.innerHTML += "<span>" + newText[i] + "</span>"
}

function activekey(key) {

    if (key === newText[index]) {

        if (newText[index] === '')
            document.getElementById('space').classList.remove('active')
        else
            document.getElementById(newText[index]).classList.remove('active')

        text.innerHTML = ""
        for (let i = 0; i < newText.length; i++) {
            if (i <= index)
                text.innerHTML += "<span class='opacity-25'>" + newText[i] + "</span>"
            else
                text.innerHTML += "<span>" + newText[i] + "</span>"

        }
        index = index + 1
        if (newText[index] === '')
            document.getElementById('space').classList.add('active')
        else
            document.getElementById(newText[index]).classList.add('active')


    } else {

    }

}

window.addEventListener('keydown', function (event) {
    console.log(event.key)
    if (event.key === 'Enter')
        generateText()
    else
        activekey(event.key)
});










