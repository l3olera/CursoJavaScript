let n = document.querySelector('input#txtnum');
let res = document.querySelector('div#res');
let selnum = document.querySelector('select#selnum');
var lnum = [];


function adicionar(){
    let num = parseInt(n.value);

    if (n.value.length == 0 || num > 100 || num < 1){
        window.alert('[ERRO] Insira um número válido para adicionar!');
    } else {
        res.innerHTML = '';
        achar = lnum.indexOf(num);
        if (achar == -1){
            lnum.push(num);
            item = document.createElement('option');
            item.text = `O valor ${num} foi adicionado`;
            selnum.appendChild(item);
        } else {
            window.alert('[ERRO] Você já adicionou esse número, por favor insira outro!');
        }

    }

    n.value = '';
    n.focus();

}

function finalizar(){
    let tamanho = lnum.length;
    if (tamanho == 0){
        window.alert('[ERRO] Insira ao menos um número para finalizar!');
    } else {
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, foi cadastrado ${tamanho} números.</p>`;
        let maior = lnum[0];
        let menor = lnum[0];
        let soma = 0;

        for(let c in lnum){
            soma+=lnum[c];

            if (lnum[c] > maior) {
                maior = lnum[c];
            }
            
            if (lnum[c] < menor) {
                menor = lnum[c];
            }
        }
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${soma/tamanho}</p>`;


    }
}