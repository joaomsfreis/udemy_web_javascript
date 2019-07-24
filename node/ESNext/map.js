const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react'))

const chavesVariaveis = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariaveis.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariaveis.has(123))
chavesVariaveis.delete(123)
console.log(chavesVariaveis.has(123))
console.log(chavesVariaveis.size)