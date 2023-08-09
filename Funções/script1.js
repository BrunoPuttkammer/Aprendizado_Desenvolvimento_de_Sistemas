function soma (n1, n2) { // Aqui declaramos a função, e passamos o seu parâmetro.

    resultado = n1 + n2 // Tudo que estiver dentro da função, é chamado de ação.

    return resultado // "Return" nos devolve um valor, que nesse caso é o resultado da soma.
}

// Se escrevermos "console.log(soma (2, 4))", teremos o retorno com o valor de "6".

function parImp (n) { //Aqui declaramos a função, e passamos o seu parâmetro.

    if (n % 2 == 0) {  // Tudo que estiver dentro da função, é chamado de ação.
        return "par"
    } else {
        return "ímpar" // "Return" nos devolve um valor.
    }
}

// Se escrevermos "console.log(parImp (7))", teremos o retorno com o valor de "ímpar".

console.log(parImp (soma (3, 3))) // Aqui chamamos a função parImp, e passamos como seu parâmetro, uma outra função.