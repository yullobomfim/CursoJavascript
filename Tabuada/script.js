function tabuada() {
    let num = document.getElementById('ini')
    let tab = document.getElementById('tab')
    let passo = document.getElementById('passo')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c} `
            tab.appendChild(item)
            c++
        }
    }


}