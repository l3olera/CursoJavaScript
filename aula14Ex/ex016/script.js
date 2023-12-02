function contar(){
    let res = document.querySelector('div#res');
    let inicio = document.querySelector('input#txtinicio').value;
    let fim = document.querySelector('input#txtfim').value;
    let passo = document.querySelector('input#txtpasso').value;

    let i = parseInt(inicio);
    let f = parseInt(fim);
    let p = parseInt(passo);

    if (inicio == '' || fim == '' || passo == ''){
        res.innerHTML = 'Impossível contar';
    } else if (i < f){
        if (p == 0){
            window.alert('Passo inválido!, Considerando passo 1');
            repeticao(i,f,1, false);
        } else {
            if (p < 0){
                window.alert('Não é possível fazer com passo de valor negativo, por isso transformaremos ele em positivo');
                p*=-1
            }
            repeticao(i,f,p, false);
        }
    } else {
        if (p == 0) {
            window.alert('Não é possível contar com passo 0, por isso será feito com 1');
            repeticao(i,f,1, true);
        } else {
            if (p < 0){
                window.alert('Não é possível fazer com passo de valor negativo, por isso transformaremos ele em positivo');
                p*=-1;
            }
            repeticao (i,f,p, true)
        }
    }
}

function repeticao(i, f, p, maior){
    res.innerHTML = '<p>Contando: ';
    if (maior === false) {
        for (i; i <= f; i+=p){
            res.innerHTML += `${i} &#128073 `;
        }
    } else {
        for(i; i >= f; i-=p){
            res.innerHTML += `${i} &#128073 `;
        }
    }
    res.innerHTML += `&#127937</p>`;
}