function hello(){
    console.log("Hello world!");
}

function variaveis(){
    //declarando variaveis
    var abacate = 2;
    var melancia = 3;


    var totalFrutasSacola = abacate + melancia;

    console.log("TotalFrutasSacola: " + totalFrutasSacola);

    abacate = 5;
    totalFrutasSacola = abacate + melancia
    console.log("TotalFrutasSacola: " + totalFrutasSacola);
    return "Soma inicial e alteração da variavel";
}

function tiposVariaveis(){
    //strings
    var modelo = "Gol";
    var marca = 'VW';

    //numbers
    var ano = 2010;
    var valor = 20500.15

    //booleans
    var ipvaPago = false;
    var seguroPago = true;

    console.log(modelo);
    console.log(marca);
    console.log(ano);
    console.log(valor);
    console.log(ipvaPago);
    console.log(seguroPago);
}
function operadores(){

    var soma = 4 + 2;
    console.log("4+2 = " + soma);
    var subtracao = 5-3;
    console.log("5-3 = " + subtracao);
    var multiplicacao = 5*4;
    console.log("5*4 = " + multiplicacao);
    var divisao = 20 / 4;
    console.log("20/4 = " + divisao);

    var resto = 20 % 3;
    console.log("20 % 3 = " + resto);

    //3 *3 *3 *3
    var potenciacao = 3 ** 4;
    console.log("3 ** 4 = " + potenciacao);
    //precedencia
    var a = 10;
    var b = 80;
    var resultado1 =     a + b / 8 + 2;
    var resultado2 =     (a + b) / (8 + 2);

    console.log(a + " + " + b + " / 8 + 2 = " + resultado1); 
    console.log("(" + a + " + " + b + ") / (8 + 2) = " + resultado2); 

    //incremento
    var incremento = 11;
    incremento = incremento + 1;
    incremento++;
    console.log(incremento);

    //decremento
    var decremento = 10;
    decremento = decremento - 1;
    decremento--;
    console.log(decremento);
}
function calcularMedia() {
    let a = parseInt(window.prompt('Digite a nota A'));
    let b = parseInt(window.prompt('Digite a nota B'));
    let c = parseInt(window.prompt('Digite a nota C'));
    let d = parseInt(window.prompt('Digite a nota D'));
    if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && Number.isInteger(d)) {
        console.log("A media das notas " + a + ", " + b + ", " + c + ", " + d + " é " + calcularMediaNotas(a,b,c,d));
    }
}
function calcularMediaNotas(a,b,c,d) {
    var media = (a+b+c+d)/4;
    return media;
}
function estruturasDeDecisao(){
    var a = 40;
    var b = 30;

    if(a < b){ 
        console.log("a é menor que b"); 
    }
    else if (a > b){
        console.log("a é maior que b");
    }else{
        console.log("a é igual a b");
    }

    var c = 40;
    var d = 50;
    
    if(c >= d){ 
        console.log("c é maior ou igual a d"); 
    }
    if (c <= d){
        console.log("c é menor ou igual a d");
    }

    var f = 10;
    var g = "10";

    if(f == g){
        console.log("f é igual a g [f=" + f + " (tipo: " + typeof f + 
                    ") g=" + g + "(tipo: " + typeof g + ")]");
    }
    if(f === g){
        console.log("f é igual a g [f=" + f + " (tipo: " + typeof f + 
        ") g=" + g + "(tipo: " + typeof g + ")]");
    }else{
        console.log("f não é igual a g [f=" + f + " (tipo: " + typeof f + 
        ") g=" + g + "(tipo: " + typeof g + ")]");
    }
    
    if(f != g){
        console.log("f é diferente de g [f=" + f + " (tipo: " + typeof f + 
                    ") g=" + g + "(tipo: " + typeof g + ")]");
    }
    if(f !== g){
        console.log("f é diferente de g [f=" + f + " (tipo: " + typeof f + 
        ") g=" + g + "(tipo: " + typeof g + ")]");
    }else{
        console.log("f não é diferente de g [f=" + f + " (tipo: " + typeof f + 
        ") g=" + g + "(tipo: " + typeof g + ")]");
    }

}

//SOMA,SUBTRACAO,MULTIPLICACAO,DIVISAO,RESTO,PORCENTAGEM
function calculo(operador, num1,num2){
    var resultado;
    if(Number.isInteger(num1) && Number.isInteger(num2)){
        if(operador === 'SOMA'){
            resultado = num1+num2;
        }else if(operador === 'SUBTRACAO'){
            resultado = num1-num2;
        }else if(operador === 'MULTIPLICACAO'){
            resultado = num1*num2;
        }else if(operador === 'DIVISAO'){
            resultado = num1/num2;
        }else if(operador === 'RESTO'){
            resultado = num1%num2;
        }else if(operador === 'PORCENTAGEM'){
            resultado = num1*num2 / 100;
        }else {
            console.log("Operador inválido");
        }
    }else{
        console.log("Um dos valores é inválido");
    }

    return resultado;
}
function usaCalculo(){
    let operador = window.prompt('Digite a operação (SOMA,SUBTRACAO,MULTIPLICACAO,DIVISAO,RESTO,PORCENTAGEM)');
    let num1 = parseInt(window.prompt('Digite o primeiro valor'));
    let num2 = parseInt(window.prompt('Digite o segundo valor'));
    
    console.log("Operacao: " + operador + "\nValores: " + num1 + " e " + num2 + 
                " = " + calculo(operador, num1, num2));
}

function imc(peso,altura){
    var imc = (peso/(altura ** 2)).toFixed(2);
    if(imc < 18.5){
        console.log("Abaixo do peso. imc: " + imc) ;
    }else if(imc >= 18.5 && imc < 25){
        console.log("Peso normal. imc: " + imc) ;
    }else if(imc >= 25 && imc < 30){
        console.log("Sobrepeso. imc: " + imc) ;
    }else if(imc >= 30 && imc < 35){
        console.log("Obesidade Grau I. imc: " + imc) ;
    }else if(imc >= 35 && imc < 40){
        console.log("Obesidade Grau II. imc: " + imc) ;
    }else{
        console.log("Obesidade Grau III. imc: " + imc) ;
    }
    return imc;
}

function usarImc(){
    var peso = parseFloat(window.prompt('Digite o peso'));
    var altura = parseFloat(window.prompt('Digite a altura').replace(",","."));
    imc(peso, altura);
    console.log("===============");
}
function operadoresLogicos(){
    var hojeFezCalor = false;
    var ontemFezCalor = false;
    if(hojeFezCalor && ontemFezCalor){
        console.log("Fez calor ontem e hoje");
    }
    if(hojeFezCalor || ontemFezCalor){
        console.log("Fez calor ontem ou hoje");
    }
    if(!hojeFezCalor){
        console.log("Fez calor");
    }
}