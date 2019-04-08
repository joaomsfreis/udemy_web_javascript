const notas = [6, 7, 8, 9, 10]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'João',
    sobrenome: 'Soares',
    idade: 23,
    peso: 80
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}