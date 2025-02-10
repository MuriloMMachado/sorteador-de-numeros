function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numInicial = parseInt(document.getElementById('de').value);
    let numFinal = parseInt(document.getElementById('ate').value);
    
    if (numInicial >= numFinal) {
        alert("O campo \"Do número\" deve ser inferior ao \"Até o número\"");
        return;
    }
    function sortear() {
        let quantidade = parseInt(document.getElementById('quantidade').value);
        let numInicial = parseInt(document.getElementById('de').value);
        let numFinal = parseInt(document.getElementById('ate').value);
        
        if (numInicial >= numFinal) {
            alert("O campo \"Do número\" deve ser inferior ao \"Até o número\"");
            return;
        }
    
        if (quantidade > (numFinal - numInicial + 1)) {
            alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
            return;
        }
    }
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(numInicial, numFinal);
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(numInicial, numFinal);
        }
        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    function alterarStatusBotao() {
        let botao = document.getElementById('btn-reiniciar');
        if (botao.classList.contains("container__botao-desabilitado")) {
            botao.classList.remove("container__botao-desabilitado");
            botao.classList.add("container__botao");
        } else {
            botao.classList.remove("container__botao");
            botao.classList.add("container__botao-desabilitado");
        }
    }
    function reiniciar() {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
        alterarStatusBotao();
    }
}