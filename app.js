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
}