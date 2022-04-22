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
        });       

    }

    addLine(user){
        let tr = document.createElement('tr');
        

        //ARMAZENANDO OS USUÁRIOS EM UM DATA SETE PARA PODER EDITAR E CONSULTAR DEPOIS
        tr.dataset.user = JSON.stringify(user);
        // console.log(Object.values(tr.dataset.user));
        tr.innerHTML = `
        <td class='table-icon'>${user.getId()}</td>
        <td class='table-icon'><img src='${user.getImage()}' alt='Ícone'></td>
        <td class='table-name'>${user.getName()}</td>
        <td class='table-email'>${user.getEmail()}</td>
        <td class='table-phone'>${user.getPhone()}</td>
        <td class='table-date'>${user.getDate()}</td>`;
        
        if(user.getAdmin()==true)
            tr.innerHTML+= `<td class='table-admin'>Sim</td>`;
        else
            tr.innerHTML+= `<td class='table-admin'>Não</td>`;
        
        tr.innerHTML+=`
         <td class='table-actions'>
            <span class="material-icons-sharp edit-btn">edit</span>
            <span class="material-icons-sharp delete-btn">delete</span>
        </td>`
        document.querySelector(".users").appendChild(tr);

        //ADICIONANDO A FUNÇÃO DO BOTÃO EDIT
        document.querySelectorAll(".edit-btn")[document.querySelectorAll(".edit-btn").length-1].addEventListener("click",
        ()=>{
            document.querySelector(".form-edit").style.display ="flex";
            let objUser = JSON.parse(tr.dataset.user);
            // let objUser = tr.dataset.user;
            // let formEl = document.querySelector("form.edit");
            // let elements = formEl.elements;
            let nUser = new User(objUser._id,objUser._image,objUser._name,objUser._email,objUser._phone,
                objUser._password,objUser._admin);
                // console.log(nUser);
                // id,image,name,email,phone,password,admin

            // console.log(nUser);
            let formEl = document.querySelector('form.edit');
            let elements = formEl.elements;
            elements.id.value = nUser.getId();
            elements.name.value = nUser.getName();
            elements.email.value = nUser.getEmail();
            elements.phone.value = nUser.getPhone();
            elements.admin.checked = nUser.getAdmin();
            
        })
    }

    formCloseClear(div,form){
        div.style.display="none";
        form.reset();
    }

    attUser(key,value){
        this._users[key]=value;
    }

    register(){
        //AO UTILIZAR A O OBJETO ELEMENTOS DE UM FORME, É POSSPIVEL REFERENCIAR
        //TODOS OS ELEMENTOS DO FORME PELO NOME QUE ESTÁ ESCRITO NA CLÁUSULA "NAME"
        let formReg = document.querySelector(".register").elements;
        let user;
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
        
        //VERIFICA SE A PROPRIEDADE THIS.USER ESTÁ VAZIA
        //PARA ISSO USAMOS A PROPRIEDADE JSON.STRINGIFY QUE CONVERTE O OBJETO EM UMA STRING
        // console.log(this._users);
        if(JSON.stringify(this._users)=='{}'){  
            user = new User(0,'',register.name,
                register.email,register.phone,register.password,
                register.admin);            
            console.log("vazio");  
        }
        else{
            // alert("cheio");
            let lastUserObj = Object.values(this._users)[Object.values(this._users).length -1];
            // let lastUser = new User(lastUserObj._id,lastUserObj._name,lastUserObj._photo,lastUserObj._email,lastUserObj._phone,lastUserObj._admin,lastUserObj._password)
            user = new User(lastUserObj._id+1,'',register.name,
            register.email,register.phone,register.password,
            register.admin); 
        }
        if(register.icon ==''){
            // this.addImage(register)
            user.setPhoto('img/icon.jpg');
            this.addLine(user);
            //ADICIONAR USUÁRIO A PROPRIEDADE
            this.attUser(user.getId(),user);
            //console.log("vazio");
            
        }
        else{
            //QUANDO UMA FUNÇÃO RETORNA UM PROMISE UTULIZA-SE A 
            //FUNÇÃO THEN PARA TRATAR O RESULTADO DELA
            this.addImage(formReg.icon.files[0]).then((result)=>{
                // console.log(result);
                user.setPhoto(result);
                this.addLine(user);
                //ADICIONAR USUÁRIO A PROPRIEDADE
                this.attUser(user.getId(),user);
            },(e)=>{
                console.error(e);
            } )
        }


        //RESETANDO O FORMULÁRIO FECHANDO O FORMULÁRIO
        this.formCloseClear(document.querySelector(".form-add"),document.querySelector(".register"));
        // document.querySelector(".register").reset();
        // //FECHANDO O FORMULÁRIO
        // document.querySelector(".form-add").style.display = "none";
        
        // ;;;
        
    }

    
}