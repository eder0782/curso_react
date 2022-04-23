//CRIANDO UMA CLASSE

class celular{
    //TODA CLASSE PRECISA TER UM CONSTRUTOR
    //SÃO AS FUNÇÕES E ATRIBUTOS QUE SÃO GERADOS
    //QUANDO A CLASSE É INSTANCIADA
    constructor(){
        //AS FUNÇÕES E ATRIBUTOS CHAMADAS DENTRO DO MÉTODO CONSTRUTOR
        //DEVEM TER A PALAVRA RESERVADA "THIS" ANTES DELA
        this.cor = "azul";
    }
    //AS FUNÇÕES DENTRO DOS OBJETOS NÃO PRECISAM DA PALAVRA RESERVADA FUNCTION
    ligar() {
        
    }ligar(){
        console.log("ligando!");
        return "ok";

    }
    mudaCor(novaCor){
        this.cor = novaCor;
        return this.cor;
    }

    

}

//PARA CRIAR UMA NOVO OBJETO, UTILIZA-SE A PALAVRA RESERVADA "NEW"

let objeto = new celular;
