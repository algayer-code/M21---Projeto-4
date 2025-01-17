document.querySelector('.enredo__botao').addEventListener('click', function() {
    const textoOculto = document.querySelectorAll('.enredo__texto__oculto');
    const textoBotao = this;

    let isHidden = textoOculto[0].style.display === 'none' || textoOculto[0].style.display === '';

    textoOculto.forEach(function(paragrafo) {
        if (isHidden) {
            paragrafo.style.display = 'block';
        } else {
            paragrafo.style.display = 'none';
        }
    });

    if (isHidden) {
        textoBotao.textContent = 'Leia menos';
    } else {
        textoBotao.textContent = 'Leia mais';
    }
});

