const anonima = process.argv.indexOf('-a') !== -1
//console.log(anonima)

if(anonima){
    process.stdout.write('Fala Anônimo!\r\n')
    process.exit()
}else {
    process.stdout.write('Escreva o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n','')

        process.stdout.write(`Fala ${nome}!!\r\n`)
        process.exit()
    })
}