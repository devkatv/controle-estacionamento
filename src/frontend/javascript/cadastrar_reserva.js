// JavaScript para exibição da mensagem de confirmação e dados da reserva cadastrada

const formulario = document.getElementById("form-reserva");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Definição das constantes para armazenar os valores dos campos do formulário
    const placa = document.getElementById("placa-veiculo").value;
    const nome = document.getElementById("nome-cliente").value;
    const apartamento = document.getElementById("numero-apartamento").value;
    const bloco = document.getElementById("bloco-apartamento").value;
    const modelo = document.getElementById("modelo-veiculo").value;
    const cor = document.getElementById("cor-veiculo").value;
    const vaga = document.getElementById("numero-vaga").value;

    // Exibição dos dados da reserva no console.log
    // Poderia ser em bloco, mas optei por exibir cada dado em uma linha separada
    console.log("Dados da reserva:");
    console.log("Placa:", placa);
    console.log("Proprietário:", nome);
    console.log("Apartamento:", apartamento);
    console.log("Bloco:", bloco);
    console.log("Modelo:", modelo);
    console.log("Cor:", cor);
    console.log("Vaga:", vaga);

    // Exibição da mensagem de confirmação e também dos dados da reserva cadastrada, 
    // para que o usuário possa conferir os dados inseridos na reserva e recebidos pelo sistema.
    alert(
        "Reserva cadastrada com sucesso!\n\n" +
        "Dados da reserva:\n\n" +
        "Placa: " + placa + "\n" +
        "Proprietário: " + nome + "\n" +
        "Apartamento: " + apartamento + "\n" +
        "Bloco: " + bloco + "\n" +
        "Modelo: " + modelo + "\n" +
        "Cor: " + cor + "\n" +
        "Vaga: " + vaga
    );

});