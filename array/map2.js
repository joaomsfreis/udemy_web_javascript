const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 12.90}',
    '{ "nome": "Kit de lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

//retornar um array com apenas os precos
const jsonParse = e => JSON.parse(e)
const pegaPreco = e => e.preco


preco = carrinho.map(jsonParse).map(pegaPreco)
console.log(preco)