//ESSE É UM OBJETO
let celular = function(){
    //atributo
    this.cor = "blue";
    //método
    this.ligar =function(){
        console.log("ligando!");
    }

}

//instanciando um novo objeto
let objeto = new celular;

console.log(objeto);