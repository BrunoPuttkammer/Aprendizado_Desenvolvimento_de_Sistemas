let convidados = ["bruno", "matheus", "jorge", "carlos", "gabriel"] // Declaração de um vetor (array).

convidados.push("maria") // Método para incluir um valor dentro do vetor.

convidados.sort() // Método para organizar strings em ordem alfabética, ou números de forma crescente (menor para o maior).

// Abaixo temos um laço de repetição que percorre um vetor inteiro, e imprimi seus valores de acordo com seus respectivos indexes.

for (let i = 0; i < convidados.length; i++) { // O atributo "convidados.length", nos dá o tamanho total do vetor.
    console.log(`Na posição "${i}" temos o nome: ${convidados[i]}`)
}

console.log("\nEm cima temos a primeira maneira, e á baixo, a segunda.\n")

// Temos outra forma de percorrer a lista, confira á baixo:

for (let i in convidados) {
    console.log(`Na posição "${i}" temos o nome: ${convidados[i]}`)
}

// Ambas as formas estão corretas, porém a segunda maneira é mais compacta.
// Conseguimos também pesquisar dentro do no nosso vetor, se um determinado valor está presente.
// Por exemplo, podemos pesquisar se o nome "Lucinda" está na lista, confira:

let presente = convidados.indexOf("Lucinda") // O método "indexOf", nos dá o index de determidado elemento, como Lucinda não é um dos nomes da lista, o valor retornado será "-1"

if (presente == -1){
    console.log("\nEste nome não está na lista")
} else {
    console.log("\nEste nome está na lista")
}



