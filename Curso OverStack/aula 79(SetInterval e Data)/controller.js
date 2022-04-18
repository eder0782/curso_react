class controller{
    constructor(){
        this._elementoDOM = document.querySelector("#texto");
        this.inicializar();
        
        
    }
    inicializar(){
        setInterval(() => {
            this._elementoDOM.innerHTML=this.dataAtual.toLocaleTimeString("pt-BR");
            
        }, 1000);
    }
   get getElementoDom(){
       return this._elementoDOM;
   }
   set setElementoDom(value){
       this._elementoDOM.innerHTML=value;
   }

   get dataAtual(){
        return   new Date();
   }
}