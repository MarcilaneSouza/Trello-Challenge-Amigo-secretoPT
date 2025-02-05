//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    // Validação: verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    // Adiciona o nome ao array se não estiver duplicado
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nome); // Adiciona ao array
    atualizarLista(); // Atualiza a exibição da lista
    input.value = ""; // Limpa o campo de entrada
}
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de recriá-la

    // Adiciona cada amigo à lista <ul>
    amigos.forEach(function(amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa o resultado anterior

    let sorteio = [...amigos]; // Cria uma cópia do array original
    let embaralhado = [];

    while (sorteio.length > 0) {
        let indice = Math.floor(Math.random() * sorteio.length);
        embaralhado.push(sorteio.splice(indice, 1)[0]);
    }

    // Exibir pares do sorteio
    for (let i = 0; i < amigos.length; i++) {
        let amigo1 = amigos[i];
        let amigo2 = embaralhado[i];

        if (amigo1 === amigo2) { 
            sortearAmigo(); // Refaz o sorteio se alguém tirar a si mesmo
            return;
        }

        let item = document.createElement("li");
        item.textContent = `${amigo1} → ${amigo2}`;
        resultadoLista.appendChild(item);
    }
}
