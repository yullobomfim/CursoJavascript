let valores = [0,2,1,4,5,8,6,7]

valores.sort() //ordenar os elementos
valores.indexOf(5) //retorna a chave( a posicao que o elemento esta gravado)
/*
for(let pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


