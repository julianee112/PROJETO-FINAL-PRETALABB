function somar() {
  const numero1 = parseFloat(document.getElementById("numero1Soma").value);
  const numero2 = parseFloat(document.getElementById("numero2Soma").value);
  // evite mexer no código acima!

  const resultado = numero1 + numero2;

  // Exibindo o resultado na página
  document.getElementById("resultadoSoma").innerHTML = resultado;
}

function subtrair() {
  const numero1 = parseFloat(document.getElementById("numero1Sub").value);
  const numero2 = parseFloat(document.getElementById("numero2Sub").value);
  // evite mexer no código acima!

  const resultado = numero1 - numero2;

  // Exibindo o resultado na página
  document.getElementById("resultadoSub").innerHTML = resultado;
}

function multiplicar() {
  const numero1 = parseFloat(document.getElementById("numero1Mult").value);
  const numero2 = parseFloat(document.getElementById("numero2Mult").value);
  // evite mexer no código acima!

  const resultado = numero1 * numero2;

  // Exibindo o resultado na página
  document.getElementById("resultadoMult").innerHTML = resultado;
}

function dividir() {
  const numero1 = parseFloat(document.getElementById("numero1Div").value);
  const numero2 = parseFloat(document.getElementById("numero2Div").value);
  // evite mexer no código acima!

  if (numero2 === 0) {
    alert("Divisão por zero não é permitida!");
    return;
  }

  const resultado = numero1 / numero2;

  // Exibindo o resultado na página
  document.getElementById("resultadoDiv").innerHTML = resultado;
}
