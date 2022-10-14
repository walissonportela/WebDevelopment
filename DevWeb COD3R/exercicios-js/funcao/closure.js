// Closure é o escopo criado quando uma função é declarada
// Esse escopo perimte a função acessar e manipular variáveis externas a função

// Contexto lexico em ação:

const x = ' Global' 

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())