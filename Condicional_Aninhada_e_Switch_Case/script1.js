let idade = 88

if (idade < 16) {
    console.log("Você não pode votar!")
} else if (idade < 18 || idade > 70 ) {
    console.log("Seu voto é opcional!")
} else {
    console.log("Seu voto é obrigatório!")
}