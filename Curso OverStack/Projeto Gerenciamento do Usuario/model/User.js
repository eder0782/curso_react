class User{
    constructor(id,image,name,email,phone,password,admin){
        this._id = id;
        this._image = image;
        this._name = name;
        this.__email = email;
        this._phone = phone;
        this._password = password;
        this._admin = admin;
        let date = new Date();
        this._date = date.toLocaleDateString("pt-BR")+" "+date.toLocaleTimeString("pt-BR").slice(0,5);       

    }

    getId(){
        return this._id;
    }
    getImage(){
        return this._image;
    }
    getName(){
        return this._name;
    }
    getEmail(){
        return this.__email;
    }
    getPhone(){
        return this._phone;
    }
    getPass(password){
        if(password === "Senha do Moderdor"){
            return this._password;
        }
        else
        return "senha incorreta";
    }
    getAdmin(){
        return this._admin;
    }
    getDate(){
        return this._date;
    }

    setPhoto(image){
        this._image = image;
    }

}