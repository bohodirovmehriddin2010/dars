function fetchData6(){
    let data = document.getElementById('data').value

    let img = document.getElementById('qrcode-i')
    img.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + data + "&amp;size=300x300"
    img.classList.remove('d-none')
}