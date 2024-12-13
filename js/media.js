function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  let mensagem = "";

  // Validando se os valores inseridos são números
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    mensagem = "Por favor, insira valores válidos em todas as notas.";
  } else {
    // Calculando a média
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Determinando a mensagem com base na média
    if (media === 0) {
      mensagem = "Infelizmente você zerou a prova :( ";
    } else if (media > 0 && media <= 3) {
      mensagem = `Caramba, deu ruim, você obteve média ${media.toFixed(1)}! Estude mais e tente novamente!`;
    } else if (media > 3 && media <= 5.9) {
      mensagem = `Você obteve média ${media.toFixed(1)}! Falta pouco para a média.`;
    } else if (media >= 6 && media <= 7) {
      mensagem = `Você está na média com ${media.toFixed(1)}.`;
    } else if (media > 7 && media <= 9.9) {
      mensagem = `Notão! Sua média é ${media.toFixed(1)}!`;
    } else if (media === 10) {
      mensagem = "Hoje é seu aniversário? Pq você tá de parabéns! 10 de média.";
    } else {
      mensagem = "Erro inesperado. Tente novamente.";
    }
  }

  // Exibindo a mensagem no elemento HTML
  document.getElementById("situacaoAluno").innerHTML = mensagem;
}
