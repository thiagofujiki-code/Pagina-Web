const botoes = document.querySelectorAll('button');

botoes.forEach(function(botao) {
    let jaCurtiu = false;

    botao.addEventListener('click', function() {
        let texto = botao.querySelector('span');

        if (texto) {
            let numeroAtual = parseInt(texto.textContent) || 0;

            if (jaCurtiu === false) {
                texto.textContent = numeroAtual + 1;//se ainda nao tiver curtido e apertar adiciona 1 e jaCurtiu fica verdadeiro
                jaCurtiu = true;
            } else {
                texto.textContent = numeroAtual - 1;
                jaCurtiu = false;
            }
        }
    });
});

