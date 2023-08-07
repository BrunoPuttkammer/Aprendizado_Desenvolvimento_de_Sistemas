let i = 1;

while (i <= 5) {
    console.log(`While - Andar = ${i}` )
    i++ // O operador (++) serve para incrementar "1" á váriavel, ou seja, "i" que valia 1,passa a valer 2.
}

i = 1 // Resetando contagem

do {
    console.log(`Do while - Andar = ${i}` )
    i++
} while (i <= 5)

i = 1 // Resetando contagem

for (i; i <= 5; i++) {
    console.log(`For - Andar = ${i}` )
}

// Usando o NodeJS podemos verificar que todos os Laços de Repetição deram o mesmo resultado, porém seus métodos foram diferentes
// While = realiza um teste lógico primeiro, se for verdadeiro, realiza o código
// Do while = realiza o código primeiro, depois o teste lógico, se verdadeiro, executa o cógio novamente
// For = realiza uma declaração de váriavel, depois o teste lógico, se verdadeiro, realiza o código, e por fim, o incremento