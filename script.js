function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
        msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'img/m.png'
        document.body.style.background = '#bee77f'
    } else if(hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'img/t.png'
        document.body.style.background = '#79773c'
    } else {
        //BOA NOITE!
        img.src = 'img/n.png'
        document.body.style.background = '#2c3820'
    }
}