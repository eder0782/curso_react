class CalculatorController{

    constructor(){
        //AO COLOCAR O UNDERLEINE ANTES DE UM ATRIBUTO
        //SIGINIFICAR QUE O MESMO É UM ATRIBUTO PRIVADO
        //CONTUDO O MESMO AINDA PODE SER ACESSAO E ALTERADO
        //UMA VEZ QUE O JAVASCRIPT NÃO TEM A FUNÇÃO "PRIVATE"
        //POR CONVENSÃO, NÃO SE DEVE ACESSAR NEM ALTERAR OS ATRIBUTOS PRIVADOS
        this._data = "0";
    }

    get getData(){
        return this._data;
    }

    set setData(valor){
        this._data = valor;
    }
}