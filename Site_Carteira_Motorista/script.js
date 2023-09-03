const idade = document.getElementById("idade")
const nome = document.getElementById("nome")
const botao = document.querySelector("button")
const paragrafo = document.querySelector("p")

botao.onclick = () => {
    if (idade.value >= 18) {
        paragrafo.textContent = "Parabéns, sua carteira de motorista está pronta!"
    } else {
        paragrafo.textContent = "Nada de carro para você agora..."
    }
}
