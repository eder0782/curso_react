class Controller{
    constructor(){
        this.initialize();

    }
    //O MÉTODO addEventListener, MONITORA APENAS UM EVENTO POR VEZ
    //CRIAMOS UM MÉTODO GENÉRICO QUE IRÁ MONITORAR VÁRIOS EVENTOS AO MESMO TEMPO
    EscuteVariosEventos(evento,elemento, funcao){
        //A FUNÇÃO SPLIT CRIA UM ARRAY QUEBRANDO UMA STRING EM VÁRIOS PEDAÇOS
        //DE ACORDO COM O LIMITADOR INFORMADO
        let eventos = evento.split(',');
        eventos.forEach((e)=>{
            elemento.addEventListener(e,funcao);
        })
    }

    initialize(){
        let button = document.querySelectorAll(".button > .btn, .button2 > .btn2");
        button.forEach((btn)=>{
            this.EscuteVariosEventos("click,mouseover",btn,()=>{
                console.log("Interagiu!");
            })
        })
    }
}