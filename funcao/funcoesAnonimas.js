const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(2, 7)

imprimirResultado(7, 2, function(x, y){
    return x-y
})

imprimirResultado(3, 5, (x, y) => x * y)