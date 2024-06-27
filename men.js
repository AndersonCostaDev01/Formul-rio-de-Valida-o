// Seleciona o formulário pelo ID
const form = document.getElementById('form-validacao');

// Adiciona um evento ao formulário que será acionado quando ele for submetido
form.addEventListener('submit', function(e) {
    // Previna o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();
    
    // Obtém os valores dos campos A e B
    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;
    
    // Verifica se o valor de B é maior que o valor de A
    if (Number(campoB) > Number(campoA)) {
        // Se o formulário for válido, exibe a mensagem de sucesso e oculta a de erro
        document.querySelector('.mensagem-sucesso').style.display = 'block';
        document.querySelector('.mensagem-erro').style.display = 'none';
    } else {
        // Se o formulário for inválido, exibe a mensagem de erro e oculta a de sucesso
        document.querySelector('.mensagem-sucesso').style.display = 'none';
        document.querySelector('.mensagem-erro').style.display = 'block';
    }
});