class ControllerCalculator{
    constructor(){
        this._data = document.getElementById("data");
        this._hora = document.getElementById("hora");
        this._display = document.querySelector(".expressao");
        this._listaElementos =["0"];
        this.adicionarElementos();
        this.initialize();
        this._resultado=false;


    }

    initialize(){   
        setInterval(()=>{
            this.atualizaData();
        },1000)

    }

    limpar(){
        /*while(this._listaElementos.length){
            this._listaElementos.pop()
        }*/
        this._listaElementos=["0"];
        this.addDisplay();

    }

    ultimoElementoLista(){
        //console.log(this._listaElementos[this._listaElementos.length-1]);
        return(this._listaElementos[this._listaElementos.length-1])
    }

    apagar(){
        
        
        //A FUNÇÃO SLICE ESCRITA DESTA MANEIRA, GERA UMA SUBSTRING OCULTANDO O ULTIMO VALOR
        let valueDeleted = this.ultimoElementoLista().slice(0,-1);
        //VERFICA SE A STRING RESULTANTE SERÁ UM VALOR VAZIO
        if(valueDeleted==""){
            //VERIFICA SE A LISTA TEM APENAS UM ELEMENTO
            if(this._listaElementos.length<=1){
                //CASO TENHA APENAS UM ELEMENTO EXECUTA A FUNÇÃO LIMPAR
                this.limpar()
            }
            //CASO TENHA MAIS DE UM ELEMENTO, DELETA O ÚTIMO
            else{
                this._listaElementos.pop();
            }

        }
        //CASO A STRING RESULTANTE TENHA VALOR DIFERENTE DE VAZIO            
        else{
            //ATRIBUI A STRING AO ULTIMO ELEMENTO DA LISTA
            this._listaElementos[this._listaElementos.length-1]=valueDeleted;
        }            
        
        //console.log(this._listaElementos);
        this.addDisplay();                       
    }

    calculate(array){
        while(array.indexOf("×")>-1 || array.indexOf("÷")>-1){  
            array.forEach((value,cont) => {
             if(array[cont]=="×"){
                 let result= (parseFloat(array[cont-1])*parseFloat(array[cont+1])).toString();
                 array.splice(cont-1,3,result);                       
                 //console.log(array);
                 //return;
                }
             if(array[cont]=="÷"){
                 let result= (parseFloat(array[cont-1])/parseFloat(array[cont+1])).toString();
                 array.splice(cont-1,3,result);                        
                 //console.log(array);
                 //return;
                }
              //cont++;   
             });         
        }
       while(array.indexOf("+")>-1 || array.indexOf("-")>-1){  
         array.forEach((value,cont) => {
          if(array[cont]=="+"){
              let result= (parseFloat(array[cont-1])+parseFloat(array[cont+1])).toString();
              array.splice(cont-1,3,result);                       
              //console.log(array);
              //return;
            }
          if(array[cont]=="-"){
              let result= (parseFloat(array[cont-1])-parseFloat(array[cont+1])).toString();
              array.splice(cont-1,3,result);                        
             // console.log(array);
              //return;
            }
           //cont++;   
          });
      
        }

        this._listaElementos= array;
        //console.log(this._listaElementos);
        this._resultado=true;
        this.addDisplay();

    }
    inverter(){
        //VERIFICA SE O ULTIMO ELEMENTO É UM OPERADOR, CASO SEJA DELETA O MESMO
        //let lastVal = this.ultimoElementoLista()
        if(this.eOperador(this.ultimoElementoLista())){

            //if(this._listaElementos.length)

            this._listaElementos.pop();  
                 

        }
        if(this.ultimoElementoLista()!="0"){
            this._listaElementos[this._listaElementos.length-1]= (1/this.ultimoElementoLista()).toString();
        }
        
        this.addDisplay();
    }

   
    eOperador(val){
        //a função indexOf verifica e indice em que o valor se encontra na lista
        //caso não esteja presente, retorna -1
        if(['+','-','×','÷'].indexOf(val)>-1)
            //SE FOR UM OPERADOR
            return true;
        else
            //SE NÃO FOR UM OPERADOR
            return false;      
    }

    addDisplay(){
        this._display.innerHTML = this._listaElementos.join('');
        //ROLANDO A TELA ATÉ O ULTIMO ELEMENTO DIGITADO NO DISPLAY
        this._display.scrollBy(100,0);
        console.log(this._listaElementos);
    }
    addLista(valor){
        //SE FOR UM OPERADOR
        if(this.eOperador(valor)){
            //SE O ÚLTIMO FOR UM OPERADOR
            if(this.eOperador(this.ultimoElementoLista())){
                //MODIFICA O ELEMENTO
                this._listaElementos[this._listaElementos.length-1]=valor;
            }
            else
                //SE NÃO ADICIONA UM NOVO ELEMENTO A LISTA
                this._listaElementos.push(valor);
        }

        //SE FOR UM NÚMERO
        else{
            //SE O ULTIMO ELEMENTO FOR UM OPERADOR
            if(this.eOperador(this.ultimoElementoLista())){
                //ADICIONA UM NOVO ELEMENTO A LISTA
                this._listaElementos.push(valor.toString());
            }
            //SE NÃO FOR UM OPERADOR CONCATENA 
            else{
                //SE O ULTIMO ELEMENTO DA LISTA FOR ZERO
                //E A LISTA TIVER APENAS UM ELEMENTO
                if(this.ultimoElementoLista()=="0" && this._listaElementos.length==1){
                    this._listaElementos[this._listaElementos.length-1]=valor.toString();                      
                }
                else{
                    //VERIFICA SE O VALOR DIGITADO É UM PONTO, E SE JA STRING ATUAL JÁ TEM UM PONTO
                    if(this.ultimoElementoLista().indexOf('.')!=-1 && valor=='.'){
                        return;
                    }
                    this._listaElementos[this._listaElementos.length-1] =
                    this._listaElementos[this._listaElementos.length-1] +valor.toString();
                }
            }
        }
        //console.log(this._listaElementos)
        this.addDisplay();
    }
    adicionarElementos(){
        
        let elementos = document.querySelectorAll(".botoes td");

        elementos.forEach(elemento => {
            elemento.addEventListener("click",()=>{
                let valor = elemento.innerHTML;
                switch (valor) {
                    case "AC":
                        //console.log("você digitou AC");
                        this.limpar();
                        break;
                    case "backspace":
                        this.apagar();
                        break;
                    case "=":
                        this.calculate(this._listaElementos);
                        break;
                    case "1/x":
                        this.inverter();
                        break;
                    case "+":
                    case "-":
                    case "×":
                    case "÷":
                        if(this._resultado==true){
                            this._resultado=false;
                        }
                        this.addLista(valor);
                        break;
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                    case "0":
                    case ".":
                        if(this._resultado==true){
                            this.limpar();
                            this._resultado=false;
                        }
                        this.addLista(valor);
                        break;
                
                    default:
                        break;
                }
            })
        });

    }

    atualizaData(){

        let data = new Date();
        this._data.innerHTML = data.toLocaleDateString("pt-BR");
        this._hora.innerHTML = data.toLocaleTimeString("pt-BR");

    }
}