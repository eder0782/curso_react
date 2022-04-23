//PARA REFERENCIAR UMA CLASSE QUE ESTÁ PRESENTE EM OUTRO ARQUIVO,
//O MESMO DEVE SER REFERENCIADO NA TAG "SCRIPT" DO ARQUIVO HTML
let calculator = new CalculatorController();

calculator.setData("21/12/2022");
console.log(calculator.getData);
