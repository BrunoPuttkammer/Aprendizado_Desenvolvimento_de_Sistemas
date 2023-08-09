function fatorial (n) { // Aqui declaramos a função, e passamos o seu parâmetro.
    let fat = 1
    for (let i = n; i > 1; i--) {
        fat *= i
    }
    return fat
}

console.log(`Resultado da primeira função: ${fatorial(5)}`) // Chamando função "fatorial"

function fatorialRec (n) { // Aqui declaramos a função, e passamos o seu parâmetro.
    if (n == 1) {
        return 1
    } else {
        return n * fatorialRec(n-1)
    }
}

console.log(`\nResultado da segunda função: ${fatorialRec(5)}`) // Chamando função "fatorialRec"

/* Podemos notar que ambas as funções, podem nos dar o mesmo resultado, a diferença é que no segundo caso, nós temos uma função com recursividade, ou seja, uma função que chama ela própria dentro de si mesma*/

