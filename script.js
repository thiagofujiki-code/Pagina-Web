
// Seleciona todos os botões da página
const botoes = document.querySelectorAll('button');

botoes.forEach(function(botao) {
    let curtiu = false;

    botao.addEventListener('click', function() {
        console.log("fui clicado");
        let texto = botao.querySelector('span');

        if (curtiu === false) {
            // Se não curtiu, aumenta o número e marca como curtido
            texto.textContent = parseInt(texto.textContent) + 1;
            curtiu = true;
        } else {
            // Se já curtiu, diminui o número e desmarca
            texto.textContent = parseInt(texto.textContent) - 1;
            curtiu = false;
        }
    });
});

