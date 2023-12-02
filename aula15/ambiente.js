let num = [5,8,4];

num.push(7);
num.sort(); //Coloca em ordem crescente o vetor

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(8); //Essa função procura um valor no vetor e retorna a chave onde ele se encontra. Se não achar, ele retorna -1
if (pos == -1){
    console.log('O valor não foi encontrado!');
} else{
    console.log(`O valor 8 está na posição ${pos}`);
}
