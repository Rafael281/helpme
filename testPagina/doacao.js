function processarDoacao() {
    var nome = document.getElementById('nome').value;
    var valor = document.getElementById('valor').value;

    if (nome && valor) {
        var mensagem = `Obrigado, ${nome}! Sua doação de R$${valor} foi recebida com sucesso.`;
        document.getElementById('mensagem').innerText = mensagem;
        limparFormulario();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function limparFormulario() {
    document.getElementById('formDoacao').reset();
    setTimeout(function() {
        document.getElementById('mensagem').innerText = '';
    }, 6000);
}
