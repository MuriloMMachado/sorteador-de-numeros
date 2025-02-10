function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numInicial = parseInt(document.getElementById('de').value);
    let numFinal = parseInt(document.getElementById('ate').value);
    
    if (numInicial >= numFinal) {
        alert("O campo \"Do número\" deve ser inferior ao \"Até o número\"");
        return;
    }
}