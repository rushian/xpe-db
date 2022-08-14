function arrays(){
    var carros = ["Gol","Palio","Uno"];

    console.log(carros);
    var primeiroCarro = carros[0];
    var segundoCarro = carros[1];
    var terceiroCarro = carros[2];

    console.log("primeira posicao: " + primeiroCarro);
    console.log("segunda posicao: " + segundoCarro);
    console.log("terceira posicao: " + terceiroCarro);

    carros[2] = "Argo";
    
    console.log("tamanho da array: " + carros.length);
    console.log("ultimo elemento do array: " + carros[carros.length-1]);
    
    carros[3] = "Sandero";
    console.log("ultimo elemento do array: " + carros[carros.length-1]);

    carros[carros.length] = "Civic"
    //adicionar elemento na lista
    carros.push("Polo");
    console.log(carros);
    //remover ultimo elemento
    console.log(carros.pop());
    console.log(carros);
    //adicionar itens no inicio da lista
    carros.unshift("Jetta");
    console.log(carros);
    //ordenar itens da lista
    carros.sort();
    console.log(carros);
    //remover o primeiro elemento
    console.log(carros.shift());
    console.log(carros);
}
function usarWhile() {
    var nomes = ["Joao","Maria","Jose","Ana","Jorge","Pedro","Moises"];

    var i = 0;
    while (i < nomes.length) {
        console.log(nomes[i]);
        i++;
    }
    console.log("======= Leitura da lista com While ========");
}

function usarFor(){
    var nomes = ["Joao","Maria","Jose","Ana","Jorge","Pedro","Moises"];

    nomes.sort();
    for(var i = 0; i< nomes.length; i++) {
        console.log(nomes[i]); 
    }
    console.log("== Leitura de lista com For, após ordenar lista == ");
}
function ordemInversa(palavra) {
    /*criar uma funcao que revebe uma palavra como parametro e retorna essa palavra invertida
    1 - receber  palavra como parametro
    2 - criar uma variavel temporaria para armazenar o resultado
    3 - iterar a palavra de tras pra frente, armazenando letra por letra na variavel temporaria
    4 - retornar a variavel temporaria
    */ 
    var palavraInvertida = "";
    for(var i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida = palavraInvertida + palavra[i];    
    }
    /*
    var i = palavra.length - 1;
    while(i>=0){
        palavraInvertida = palavraInvertida + palavra[i];
        i--;
    }
    */
    return palavraInvertida;
}

function usarOrdemInversa(){
    var word = window.prompt('Digite a palavra');
    console.log(ordemInversa(word));
}
function buscaNumero(){
    /*  1 - receber um numero como parametro
        2 - executar um for na lista, para cada elemento verificar se é igual ao numero buscado
        3 - quando encontrar interromper a execução e retornar true
        4 - se chegar ate o fim sem encontrar, retornar false
    */
   
    var numero = parseInt(window.prompt('Digite o numero'));
    console.log(verificaNumero(numero));
    
    console.log("======= Busca concluida ========");
    
}
var lista = [19,54,18,11,47,98,36,44,87]   
function verificaNumero(numero){
    var existe = false;
    for(var i = 0; i < lista.length; i++){
        //o log abaixo poderia estar dentro do if, para exibir somente quando encontra.
        console.log('indice: ' + i + ' valor: ' + lista[i]);
        if(lista[i] === numero){
            existe = true;
            //ao comentar a linha abaixo, o for percorre todos itens da lista
            break;
        }
    }
    return existe;
}
