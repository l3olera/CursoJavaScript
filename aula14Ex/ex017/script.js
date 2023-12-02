function tabuada(){
    let tab = document.querySelector("select#seltab");
    let num = document.querySelector('input#txtn');
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!');
    } else {
        let n = parseInt(num.value);
        
        for (var c=1; c <=10; c++){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            tab.appendChild(item);
        }
    }
}