//não aceita repetição e não é indexada
const times = new Set()
times.add('Atletico')
times.add('Flamengo')
times.add('Vasco')
times.add('São Paulo').add('Palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('atletico'))
console.log(times.has('Atletico'))