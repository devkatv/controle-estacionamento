// JavaScript para exibição da contagem de vagas disponíveis e reservadas

// Identifica as vagas disponíveis na página
const vagasDisponiveis = document.querySelectorAll(".vaga-disponivel");

// Identifica as linhas da tabela de vagas reservadas
const vagasReservadas = document.querySelectorAll("tbody tr");

// Conta a quantidade de vagas disponíveis
const totalDisponiveis = vagasDisponiveis.length;

// Conta a quantidade de vagas reservadas
const totalReservadas = vagasReservadas.length;

// Exibe os resultados na página
document.getElementById("total-disponiveis").textContent = totalDisponiveis;
document.getElementById("total-reservadas").textContent = totalReservadas;