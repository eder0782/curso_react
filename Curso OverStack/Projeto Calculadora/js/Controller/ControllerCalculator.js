class ControllerCalculator{
    constructor(){
        this._data = document.getElementById("data");
        this._hora = document.getElementById("hora");
        this._display = document.querySelector(".expressao");
        this._listaElementos =["0"];
        this.adicionarElementos();
        this.initialize();


    }

    initialize(){   
        setInterval(()=>{
            this.atualizaData();
        },1000)

    }

    limpar(){
        while(this._listaElementos.length){
            this._listaElementos.pop()
        }
        this._listaElementos.push("0");
        this.addDisplay();

    }

    apagar(){
        
    }
    calcular(){

    }
    inverter(){

    }

    ultimoElementoLista(){
        //console.log(this._listaElementos[this._listaElementos.length-1]);
        return(this._listaElementos[this._listaElementos.length-1])
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
                        this.calcular();
                        break;
                    case "1/x":
                        this.inverter();
                        break;
                    case "+":
                    case "-":
                    case "×":
                    case "÷":
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