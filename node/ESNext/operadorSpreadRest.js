// operador rest(juntar)/spread(espalhar)

//usando spread com objetos
const funcionarios = {nome: 'Maria', salario: 1234}
const clone = {ativo: true, ...funcionarios}

console.log(clone)

//usando spread com arrays
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'Marcos']

console.log(grupoFinal)