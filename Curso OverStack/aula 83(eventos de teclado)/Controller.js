class Controller{
    constructor(){
        this.initialize();
    }

    initialize(){
        document.addEventListener("keyup",(e)=>{
            this.acao(e.key);
            console.log(e.key);
        })
    }

    acao(tecla){
        switch (tecla) {
            case "Enter":
                this.enviarForm();
                break;
            case "Escape":
                this.limpaForm();
                break;
            default:
                break;
        }
    }

    enviarForm(){

        alert("Informações Enviadas");
    }
    limpaForm(){
        alert("Limpando Formulário!");
    }
}