const botoes = document.querySelectorAll('button');

botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        let texto = botao.querySelector('span');
        if (texto) {
            let numeroAtual = parseInt(texto.textContent) || 0;
            texto.textContent = numeroAtual + 1;
        }
    });
});
