class UserController{
    constructor(){
        this.addEvenButtons();
        //ESSA VARIÁVEL IRÁ ABRIGAR UMA LISTA DE USUÁRIOS
        this._users={};

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
        document.querySelector(".check").addEventListener("click",()=>{
            this.register();
        })
           

    }

    addImage(image){
        //PARA CARREGAR UMA ARQUIVO, É NECESSÁRIO USAR UMA FUNÇÃO ASSÍNCRONA
        //UMA VEZ QUE O PROCESSO PODE SER DEMORADO, PARA ISSO UTILIZAMOS A FUNÇÃO PROMISSE
        return new Promise((resolv,regect)=>{
            let file = new FileReader();
            file.addEventListener("load",()=>{
                resolv(file.result);
            })
            file.addEventListener("error",(e)=>{
                regect(e);
            })
            file.readAsDataURL(image);
        })
        

    }

    register(){
        //AO UTILIZAR A O OBJETO ELEMENTOS DE UM FORME, É POSSPIVEL REFERENCIAR
        //TODOS OS ELEMENTOS DO FORME PELO NOME QUE ESTÁ ESCRITO NA CLÁUSULA "NAME"
        let formReg = document.querySelector(".register").elements;
        
        //VERIFICA SE A PROPRIEDADE THIS.USER ESTÁ VAZIA
        //PARA ISSO USAMOS A PROPRIEDADE JSON.STRINGIFY QUE CONVERTE O OBJETO EM UMA STRING
        if(JSON.stringify(this._users=="{}")){
            
            //PARA TRATAR O CAMPO FOTO E O CAMPO ADMIN VAMOS REALISAR UM LAÇO FOREACH
            //ALEM DISSO VAMOS CRIAR UM OBJETO QUE IRÁ ARMAZENAR OS VALUES DO FORM
            let register = {};
            
            //PARA USAR O LAÇO FOREACH EM UM OBJETO É PRECISO TRANSFORMALO EM UM ARRAY
            //DESTA FOMA UTILIZAMOS O A FUNÇÃO [...] PARA FAZER A CONVERSÃO
            //PODERIAMOS USAR TAMBEM UM LAÇO FOR
            [...formReg].forEach(element => {
                switch (element.type) {
                    case 'checkbox':
                        register.admin = element.checked;
                        break;
                
                    default:
                        register[element.name]=element.value;
                        break;
                }
            });
            
            let user = new User(0,'',register.name,
                register.email,register.phone,register.password,
                register.admin);
            
                console.log(user);
            
            if(register.icon ==''){
                // this.addImage(register)
                user.setPhoto('img/icon.jpg');
                console.log("cheio");
                
            }
            else{
                console.log("cheio");
            }

        }
        else{

        }

        //RESETANDO O FORMULÁRIO
        document.querySelector(".register").reset();
        //console.log(formRegister);
        // ;;;
    }

    
}