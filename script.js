


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário para evitar recarregar a página

  
  const nome = document.getElementById("nome");
  const mensagem = document.getElementById("mensagem");
  const phone = document.getElementById("phone");
  const telefone = "+351915143745"; // Substitua pelo número de telefone desejado

  const texto = `Olá, meu nome é ${nome.value}, meu telefone é ${phone.value} e minha mensagem é: ${mensagem.value}`;
  const msgFormatada = encodeURIComponent(texto);
  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  this.reset(); // Limpa os campos do formulário

  window.open(url, "_blank");

});



