//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
/ Array para armazenar os amigos
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    // Validação: verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    