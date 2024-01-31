// Progucarar um elemento no html com id igual a button1
const button = document.getElementById("button1")

// Verificar se o elemente foi encontrado
// Se encontrado, printar a mensagem encontrou e adicionar uma função para ser executada caso o evento de click ocorra no elemento
if (button) {
    // printar a mensagem encontrou
    console.log("encontrou");

    const funcao = (event) => {
        // Printar na tela os dados do evento
        console.log(event);

        // Alterar a largura do botão
        button.style.width = "300px"

        // alertar o usuario que o botão foi clicado
        alert("clicou")
    }

    // adicionar uma função para ser executada caso o evento de click ocorra no elemento
    button.addEventListener("click", funcao)
}
// Se o elemento nao existir no html, alertar o usuario que o elemento nao existe
else {
    alert("nao existe")
}