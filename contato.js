// contato.js
// Validação simples do formulário de contato
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contato-form");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // impede envio real
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    alert("Obrigado, " + nome + "! Sua mensagem foi registrada (simulação).");
    form.reset();
  });
});
