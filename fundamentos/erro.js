function tratarErroELançar(erro){
    throw 10
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELançar(e)
    }finally{
        console.log('final')
    }
}

const obj = {name: 'Joao'}
imprimirNome(obj)