const imprimeResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovável!')
    } else {
        console.log('Reprovado!')
    }
}

imprimeResultado(10)
imprimeResultado(4)
imprimeResultado('Epa!') //Cuidado!!! JS é fracamente tipada
