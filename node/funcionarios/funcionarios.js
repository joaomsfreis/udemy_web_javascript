const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


axios.get(url).then(response => {
    const funcionarios = response.data
    
    funcChin = funcChinesas(funcionarios)
    
    
    console.log(menorSalario(funcChin))
})

const funcChinesas = (func) =>{
    let funcionarias = []
    for(let i = 0; i<func.length;i++){
        if(func[i].pais === 'China' && func[i].genero === 'F'){
            funcionarias.push(func[i])
        }
    }  
    return funcionarias
}

const menorSalario = (func) => {
    let menor = func[0]

    for(let i=0; i<func.length; i++){
        if(func[i].salario < menor.salario) menor = func[i]
    }
    return menor
}