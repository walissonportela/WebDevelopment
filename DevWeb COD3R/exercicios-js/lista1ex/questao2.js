// Questão 2

let lado1 = 12
let lado2 = 11
let lado3 = 6

function triangulo(l1, l2, l3){
    if(l1 == l2 && l2 == l3){
        console.log("O triângulo é equilátero.")
    }

    if(l1 == l2 != l3 || l2 == l3 != l1 || l1 == l3 != l2){
        console.log("O triângulo é isósceles.")
    }

    if(l1 != l2 != l3){
        console.log("O triângulo é equilátero.")
    }
}

triangulo(lado1, lado2, lado3)