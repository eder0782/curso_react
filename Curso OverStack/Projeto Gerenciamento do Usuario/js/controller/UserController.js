class UserController{
    constructor(){
        this.addEvenButtons();

    }

    addEvenButtons(){
        //EVENTO DO BOTÃO DE ADICIONAR NOVO USUÁRIO
        document.querySelector(".add").addEventListener("click",()=>{
            document.querySelector(".form-add").style.display="flex";
        });

        //EVENTO DO BOTÃO DE FECHAR TELAS MODAIS DE ADD 
        document.querySelectorAll(".close")[0].addEventListener("click",()=>{
            //FECHANDO A TELA DE ADD
            document.querySelector(".form-add").style.display="none";

        });

        document.querySelectorAll(".close")[1].addEventListener("click",()=>{
            //FECHANDO A TELA DE EDITE
            document.querySelector(".form-edit").style.display="none";

        });
           

    }

    
}