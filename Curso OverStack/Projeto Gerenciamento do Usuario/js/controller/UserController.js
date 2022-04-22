class UserController{
    constructor(){
        this.addEvenButtons();
        //ESSA VARIÁVEL IRÁ ABRIGAR UMA LISTA DE USUÁRIOS
        this._users={};
        this.inicialize();

    }
    inicialize(){
        if(JSON.stringify(this._users)=='{}'){
            let user1 = new User(0,'img/icon.jpg',"Eder Santo","eder@gmail.com","(92)99623-6044",'12345',
            true);
            let user2 = new User(1,'img/icon.jpg',"Davi Santo","davi@gmail.com","(92)99623-5844",'12345',
            true);
            this.addLine(user1);
            this.addLine(user2);
            this.attUser(user1.getId(),user1);
            this.attUser(user2.getId(),user2);
        }
    }
    addEvenButtons(){
        //EVENTO DO BOTÃO DE ADICIONAR NOVO USUÁRIO
        document.querySelector(".add").addEventListener("click",()=>{
            document.querySelector(".form-add").style.display="flex";
        });

        //EVENTO DO BOTÃO DE FECHAR TELAS MODAIS DE ADD 
        document.querySelectorAll(".close")[0].addEventListener("click",()=>{
            //FECHANDO A TELA DE ADD
           
            this.formCloseClear(document.querySelector(".form-add"),document.querySelector(".register"));    

        });

        document.querySelectorAll(".close")[1].addEventListener("click",()=>{
            //FECHANDO A TELA DE EDITE
           // document.querySelector(".form-edit").style.display="none";
            this.formCloseClear(document.querySelector(".form-edit"),document.querySelector(".edit"));    


        });
        //BOTÃO DE CONFIRMAÇÃO DA TELA DE REGISTRO
        document.querySelectorAll(".check")[0].addEventListener("click",()=>{
            this.register();
        })
        //BOTÃO DE CONFIRMAÇÃO DA TELA DE EDIT
        document.querySelectorAll(".check")[1].addEventListener("click",()=>{
            this.editRegister();
            this.formCloseClear(document.querySelector(".form-edit"),document.querySelector(".edit")); 
        })
           

    }

    editRegister(){
        let formEl = document.querySelector('.edit');
        let elements = formEl.elements;
        let trSelected;
        document.querySelectorAll('.users tr').forEach((v,i)=>{
            //PULA A TR 0 POIS ela é o título
            let dataset  = v.dataset.user;
            // console.log(v.dataset.user);
            if(i>0){
                if(JSON.parse(dataset)._id== elements.id.value){
                    // console.log("sim");
                    trSelected=  v;                    
                }
            }       
        }) 
        let userObject = trSelected.dataset.user;
        
        let user = new User(elements.id.value,'',elements.name.value,elements.email.value,elements.phone.value,
            userObject._password,elements.admin.checked);

        if(elements.icon.value ==''){
            // this.addImage(register)
            user.setPhoto('img/icon.jpg');
            this.attRows(trSelected, user);
            //ADICIONAR USUÁRIO A PROPRIEDADE
            this.attUser(user.getId(),user);
            //console.log("vazio");
            
        }
        else{
            //QUANDO UMA FUNÇÃO RETORNA UM PROMISE UTULIZA-SE A 
            //FUNÇÃO THEN PARA TRATAR O RESULTADO DELA
            this.addImage(elements.icon.files[0]).then((result)=>{
                // console.log(result);
                user.setPhoto(result);
                this.attRows(trSelected, user);;
                //ADICIONAR USUÁRIO A PROPRIEDADE
                this.attUser(user.getId(),user);
            },(e)=>{
                console.error(e);
            } )
        }
    }

    attRows(tr,user){
        console.log(tr);
        tr.dataset.user = JSON.stringify(user);
        tr.querySelector('.table-icon img').src = user.getImage();
        tr.querySelector('.table-name').innerHTML = user.getName();
        tr.querySelector('.table-email').innerHTML = user.getEmail();
        tr.querySelector('.table-phone').innerHTML = user.getPhone();
        if(user.getAdmin()==true){
            tr.querySelector('.table-admin').innerHTML = 'Sim'
        }else{
            tr.querySelector('.table-admin').innerHTML = 'Não'
        }
        

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
            
            // console.log(JSON.stringify(tr.dataset.user));
            let objUser = JSON.parse(tr.dataset.user);

            // let objUser = tr.dataset.user;
            // let formEl = document.querySelector("form.edit");
            // let elements = formEl.elements;
            let nUser = new User(objUser._id,objUser._image,objUser._name,objUser._email,objUser._phone,
                objUser._password,objUser._admin);
                
                // id,image,name,email,phone,password,admin

            
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
        
        if(JSON.stringify(this._users)=='{}'){  
            user = new User(0,'',register.name,
                register.email,register.phone,register.password,
                register.admin);            
           
        }
        else{
            // alert("cheio");
            let lastUserObj = Object.values(this._users)[Object.values(this._users).length -1];
            // let lastUser = new User(lastUserObj._id,lastUserObj._name,lastUserObj._photo,lastUserObj._email,lastUserObj._phone,lastUserObj._admin,lastUserObj._password)
            user = new User(parseInt(lastUserObj._id)+1,'',register.name,
            register.email,register.phone,register.password,
            register.admin); 
        }
        if(register.icon ==''){
            // this.addImage(register)
            user.setPhoto('img/icon.jpg');
            this.addLine(user);
            //ADICIONAR USUÁRIO A PROPRIEDADE
            this.attUser(user.getId(),user);
           
            
        }
        else{
            //QUANDO UMA FUNÇÃO RETORNA UM PROMISE UTULIZA-SE A 
            //FUNÇÃO THEN PARA TRATAR O RESULTADO DELA
            this.addImage(formReg.icon.files[0]).then((result)=>{
             
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