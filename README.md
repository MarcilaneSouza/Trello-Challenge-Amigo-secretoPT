# Trello-Challenge-Amigo-secreto-PT
Challenge amigo secreto

Como o JavaScript foi implementado?

1️⃣ Criando a Lista de Amigos
O primeiro passo foi criar um array para armazenar os nomes inseridos pelos usuários. 
Sempre que um novo nome for adicionado, ele será salvo nesse array:
let amigos = []; // Lista vazia para armazenar os nomes

2️⃣ Adicionando Amigos
Quando o usuário insere um nome e clica no botão "Adicionar", a função adicionarAmigo() é chamada:
function adicionarAmigo() {
    let input = document.getElementById("amigo"); 
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") { 
        alert("Por favor, insira um nome."); 
        return; 
    }

    if (amigos.includes(nome)) { 
        alert("Esse nome já foi adicionado."); 
        return; 
    }

    amigos.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Atualiza a exibição da lista
    input.value = ""; // Limpa o campo de entrada
}

✅ Validações implementadas:

Se o campo estiver vazio, exibe um alerta.
Se o nome já estiver na lista, exibe um alerta.
Se for válido, adiciona o nome ao array e atualiza a lista.

3️⃣ Exibindo a Lista de Amigos
Cada vez que um nome é adicionado, a função atualizarLista() recria a lista na tela:
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de recriá-la

    amigos.forEach(function(amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

✅ Essa função remove a lista anterior e exibe os amigos atualizados.

4️⃣ Sorteando o Amigo Secreto
Quando o usuário clica no botão "Sortear Amigo", a função sortearAmigo() é acionada:
function sortearAmigo() {
    if (amigos.length < 2) { 
        alert("Adicione pelo menos 2 amigos para realizar o sorteio."); 
        return; 
    }

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; 

    let sorteio = [...amigos]; // Cópia do array original
    let embaralhado = [];

    while (sorteio.length > 0) {
        let indice = Math.floor(Math.random() * sorteio.length);
        embaralhado.push(sorteio.splice(indice, 1)[0]);
    }

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

✅ O que essa função faz?

Valida se há pelo menos 2 amigos na lista.
Embaralha os nomes garantindo que ninguém tire a si mesmo.
Exibe o resultado na tela formatado como "Participante → Amigo Secreto".
Se alguém tirar a si mesmo, o sorteio é refeito automaticamente.


Tecnologias Utilizadas:
HTML5 → Estrutura da página
CSS3 → Estilização responsiva
JavaScript → Lógica do sorteio
