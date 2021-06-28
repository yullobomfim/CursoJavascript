
let num = [5,8,4]
num[3]=6 //adiciona o elemeto 6 na posicao 3
num.push(7) //adiciona elemento 7 ao final do vetor
num.length //comprimento do vetor
num.sort() // ordena os elementos do vetor

for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro elemento do vetor é o ${num[0]}`)
console.log(num)

let pos=num.indexOf(9)
if(pos==-1){
    console.log('O valor nao foi encontrado')
}else{
    console.log(`O valor foi encontrado na posição ${pos}`)
}