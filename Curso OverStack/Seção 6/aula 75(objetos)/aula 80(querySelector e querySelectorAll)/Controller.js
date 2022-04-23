class Controller{
    constructor(){
        this.intializeButton();
        
    }
    intializeButton(){
        let buttons = document.querySelectorAll(".button > .btn, .button2 > .btn2");
        buttons.forEach((botao,indice)=>{
            botao.addEventListener("click",()=>{
                alert("Clicou!");
            } )
        })
        
        
        return buttons;

    }
}