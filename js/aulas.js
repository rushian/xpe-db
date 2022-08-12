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
    var media = (a+b+c+d)/4
    return media;
}