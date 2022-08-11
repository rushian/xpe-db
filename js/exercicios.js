function verificarDivisivel3ou5(numero){
    let tres, cinco;
    tres = numero % 3;
    cinco = numero % 5;
    if(tres === 0 || cinco === 0){
        //console.log("O número é divisível por 3 ou 5\nResto da divisão por 3: " + tres + " \nResto da divisível por 5: " + cinco);
        return true;
    }
    else{
        //console.log("O número não é divisível por 3 ou 5\nResto da divisão por 3: " + tres + " \nResto da divisível por 5: " + cinco);
        return false;
    }
}   
function somaMultiplos3ou5 () {
    let tres, cinco, contaMultiplos = 0;
    var soma = 0;
    var lista = [], sublista = [];
    //3 4 5 6 7 .... 997 998 999
    for(var i = 3; i < 1000; i++) {
        if(verificarDivisivel3ou5(i)) {
            soma += i;
            contaMultiplos++;
            lista.push(i);
        }
    }
    lista.forEach(element => {
        if(element > 299 && element < 400) {
            sublista.push(element);
        }    
    });
    console.log("Há " + contaMultiplos + " multiplos de 3 ou 5 entre 3 e 999"+
        "\nA soma desses valores é " + soma + "\nA lista de valores é composta por: " + lista +
        "\n\nOs " + sublista.length + " itens da lista entre 300 e 400 são: " + sublista);
}