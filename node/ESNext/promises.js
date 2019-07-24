function falarDepoisDe(segundos, frase){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, 1000*segundos)
    })
}

falarDepoisDe(2, 'Que ótimo!!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))