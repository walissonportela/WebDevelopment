// Par Nome/Valor
const saudacao = 'Opa' // Contexto léxico 1

function exec(){
    const saudacao = 'Opa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 98,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)