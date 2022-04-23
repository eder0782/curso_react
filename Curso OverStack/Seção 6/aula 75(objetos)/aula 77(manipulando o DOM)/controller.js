class controller{
    constructor(){
        this._elementoDOM = document.querySelector("#texto");
        
    }

   get getElementoDom(){
       return this._elementoDOM;
   }
   set setElementoDom(value){
       this._elementoDOM.innerHTML=value;
   }
}