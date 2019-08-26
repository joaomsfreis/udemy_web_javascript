function teste(num){
    const nums = num.split(",")

    let soma = 0.0
    const antes = nums[0].split('')
    let j = antes.length - 1
    //console.log(j)
    const dpois = nums[1].split('')

    
   for(let i=0; i< antes.length; i++ ){
        soma = soma + parseFloat(antes[i])*Math.pow(2,j)
        j--
    }
    
    for(let i=0; i< dpois.length; i++ ){
        soma = soma + parseFloat(dpois[i])*Math.pow(2,(-i-1))
    }
    console.log(soma)
}

teste("10,01")