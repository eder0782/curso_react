class ControllerCalculator{
    constructor(){
        this.data = document.getElementById("data");
        this.hora = document.getElementById("hora");
        //this.data.innerHTML="18/04/2022";
        //this.hora.innerHTML="17:49";
        this.initialize();


    }

    initialize(){   
        setInterval(()=>{
            this.atualizaData();
        },1000)

    }
    atualizaData(){

        let data = new Date();
        this.data.innerHTML = data.toLocaleDateString("pt-BR");
        this.hora.innerHTML = data.toLocaleTimeString("pt-BR");

    }
}