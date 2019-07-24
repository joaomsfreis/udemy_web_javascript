//processa um tamplete dentro de uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outras strings'
}

const aluno = 'João'
const situacao = 'Aprovado'

console.log(tag `${aluno} está ${situacao}`)