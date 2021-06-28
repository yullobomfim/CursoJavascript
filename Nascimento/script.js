function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div.res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERROR: Verifique os dados e tente novamente')
    } else {
        var fsex = document.querySelectorAll('input[type="radio"]');
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            img.setAttribute('src', 'images.jpg')
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            img.setAttribute('src', 'fem.jpg')

        }
        res.style.textAlign = 'right'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}