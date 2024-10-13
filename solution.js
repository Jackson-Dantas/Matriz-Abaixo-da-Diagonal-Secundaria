//importando modulo node para ler a entrada do usuário de acordo com o padrão estabelecido pelo beecrowd
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); //retorna um array com todos os inputs 

//inicializando variáveis globais
const tamanho = 12; 
const elemAbaixo = 66.0; 
let matriz = [];
let soma = 0; 

//lendo a opção desejada de cálculo S ou M

let option = lines.shift(); //remove o primeiro elemento do array, e retorna o elemento removido

//create the 2D array

for(let row = 0; row < tamanho; row++){
    matriz[row] = []

    for(let column = 0; column < tamanho; column++){

        matriz[row][column] = parseFloat(lines.shift())

    }
}

//função para somar elementos: 
const sumElements = (matriz) => {
    
    for(let row = 0; row < tamanho; row++){
    
        for(let column = 0; column < tamanho; column++){
    
            soma += (row + column > tamanho -1 ) ? matriz[row][column] : 0.0; 
    
        }
    }

    return soma;
}

//função para calcular a media (average):

const avg = () => sumElements(matriz)/elemAbaixo;

//resultado: 

switch(option){

    case 'S': 
        console.log(parseFloat(sumElements(matriz).toFixed(1))) //.toFixed(n) => resultado para uma casa n casa decimal, retorna uma string, por isso .parseFloat()
        break;
    case 'M':
        console.log(parseFloat(avg().toFixed(1)))
}




