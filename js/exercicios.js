function pegaNumero(){  
    let valor = parseInt(window.prompt('Digite um numero'));
    if(Number.isInteger(valor)){
        //console.log("Valor digitado: " + valor + " Tipo: " + typeof valor);

       if(verificarDivisivel3ou5(valor)){
        console.log("O número " + valor +" é divisível por 3 ou 5");
       }else{
        console.log("O número " + valor + " não é divisível por 3 ou 5");
       }
    }else{
        console.log("O valor digitado é invalido");
    }
}

function verificarDivisivel3ou5(numero){
    let tres, cinco;
    tres = numero % 3;
    cinco = numero % 5;
    if(tres === 0 || cinco === 0){
        return true;
    }
    else{
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

function bhaskara(){
    
    let a = parseInt(window.prompt('Digite o valor de A'));
    let b = parseInt(window.prompt('Digite o valor de B'));
    let c = parseInt(window.prompt('Digite o valor de C'));
    if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
            
        console.log("A = " + a + "   B = " + b + "   C = " + c);

        let delta = (b ** 2) - (4 * (a * c));
        console.log("Δ = " + b + "² - 4 * " + a + " * " + c);

        if (delta < 0){
            //A=2  B=2  C=3
            console.log("Delta é negativo. Equação não possui raízes reais.");
        }else{
            //A=2  B=2  C=-4
            //A=-3 B=2  C=3
            let x = "x = (" + (b * -1) + " ± √" + delta + ") / (2 * " +a + ")";
            console.log(x);
    
            let xLinha =  ((b * -1) + Math.sqrt(delta)) / (2 * a) ;
            let x2Linhas =  ((b * -1) - Math.sqrt(delta)) / (2 * a) ;
            if(delta == 0) {
                //A=1  B=-2  C=1
                console.log("Delta = 0, x' e x\" são iguais: " + xLinha)
            }else{
                console.log("x\' = " + xLinha + " (" + xLinha.toFixed(2)  + ")");
                console.log("x\" = " + x2Linhas + " (" +  x2Linhas.toFixed(2) + ")");
            }
        }
    }else{  
        console.log("Um dos valores digitados nao é válido");
    }
console.log("=============================\n");
}