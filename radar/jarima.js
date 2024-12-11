function hisoblash (){
    let Tezlik = parseInt(document.getElementById('tezlik').value)
    let natija = document.getElementById('natija')

    const shaharIchidagiTezlik = 70
const shaharIchidagiTezlikdanOshsa = 5
const Jarimasummasi = 350000

if ((shaharIchidagiTezlik + shaharIchidagiTezlikdanOshsa) < Tezlik){
    let JarimaTezligi = (Tezlik - shaharIchidagiTezlik) / shaharIchidagiTezlikdanOshsa
    natija.innerHTML = "Jarima summasi:"
        + '<span class="text-danger">' + JarimaTezligi * Jarimasummasi +' UZS</span>'

}else

    natija.innerHTML = "JARIMA YO'Q"

}