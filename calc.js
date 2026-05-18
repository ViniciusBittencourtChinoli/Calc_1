var op
var num1
var num2
var readlineSync = require('readline-sync');

op = readlineSync.question("Operacao matematica (+) (-) (*) (/)? : \n");
num1 = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
num2 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));

function calculadora(num1, num2, op) {
    if (op === '+' ) {
        return num1 + num2;
    }
    else if (op === '-') {
        return num1 - num2;
    }
    else if (op === '/') {
        return num1 / num2;
    }
    else if(op === '*') {
        return num1 * num2;
    }
    else {
        return 'Operacao invalida';
    }
}

console.log('O resultado é', calculadora(num1, num2, op));